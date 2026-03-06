import { mkdir, readFile, writeFile } from "node:fs/promises"
import path from "node:path"
import process from "node:process"
import OpenAI from "openai"

const DEFAULTS = {
  model: "gpt-image-1.5",
  size: "1536x1024",
  quality: "high",
  background: "auto",
  format: "webp",
}

async function loadLocalEnv() {
  for (const fileName of [".env.local", ".env"]) {
    const filePath = path.join(process.cwd(), fileName)

    try {
      const contents = await readFile(filePath, "utf8")

      for (const line of contents.split(/\r?\n/)) {
        const trimmed = line.trim()
        if (!trimmed || trimmed.startsWith("#")) {
          continue
        }

        const separatorIndex = trimmed.indexOf("=")
        if (separatorIndex === -1) {
          continue
        }

        const key = trimmed.slice(0, separatorIndex).trim()
        if (!key || process.env[key]) {
          continue
        }

        let value = trimmed.slice(separatorIndex + 1).trim()
        if (
          (value.startsWith("\"") && value.endsWith("\"")) ||
          (value.startsWith("'") && value.endsWith("'"))
        ) {
          value = value.slice(1, -1)
        }

        process.env[key] = value
      }
    } catch {
      // Ignore missing local env files and fall back to the process env.
    }
  }
}

function parseArgs(argv) {
  const options = {}

  for (let index = 0; index < argv.length; index += 1) {
    const token = argv[index]
    if (!token.startsWith("--")) {
      continue
    }

    const key = token.slice(2)
    if (key === "help") {
      options.help = true
      continue
    }

    const value = argv[index + 1]
    if (!value || value.startsWith("--")) {
      throw new Error(`Missing value for --${key}`)
    }

    options[key] = value
    index += 1
  }

  return options
}

function printHelp() {
  console.log(`
Generate a site image with OpenAI and save it into this project.

Usage:
  bun run image:generate -- --prompt "Warm meditation studio at sunrise" --out public/images/generated/hero.webp

Options:
  --prompt       Required. Image prompt for the model.
  --out          Required. Output file path, relative to the repo root or absolute.
  --size         Optional. Default: ${DEFAULTS.size}
  --quality      Optional. Default: ${DEFAULTS.quality}
  --background   Optional. Default: ${DEFAULTS.background}
  --format       Optional. png | webp | jpeg. Default: ${DEFAULTS.format}
  --model        Optional. Default: OPENAI_IMAGE_MODEL or ${DEFAULTS.model}
  --help         Show this message.
`)
}

async function main() {
  const options = parseArgs(process.argv.slice(2))

  if (options.help) {
    printHelp()
    return
  }

  await loadLocalEnv()

  const prompt = options.prompt?.trim()
  const outArg = options.out?.trim()

  if (!prompt || !outArg) {
    printHelp()
    throw new Error("Both --prompt and --out are required.")
  }

  const apiKey = process.env.OPENAI_API_KEY
  if (!apiKey) {
    throw new Error(
      "OPENAI_API_KEY is not set. Add it to .env.local or export it in your shell before running this command."
    )
  }

  const outputPath = path.isAbsolute(outArg)
    ? outArg
    : path.join(process.cwd(), outArg)

  await mkdir(path.dirname(outputPath), { recursive: true })

  const client = new OpenAI({ apiKey })
  const response = await client.images.generate({
    model: options.model || process.env.OPENAI_IMAGE_MODEL || DEFAULTS.model,
    prompt,
    size: options.size || DEFAULTS.size,
    quality: options.quality || DEFAULTS.quality,
    background: options.background || DEFAULTS.background,
    output_format: options.format || DEFAULTS.format,
  })

  const image = response.data?.[0]
  if (!image?.b64_json) {
    throw new Error("The image API did not return image data.")
  }

  await writeFile(outputPath, Buffer.from(image.b64_json, "base64"))

  if (image.revised_prompt) {
    console.log(`Revised prompt: ${image.revised_prompt}`)
  }

  console.log(`Saved image to ${outputPath}`)
}

main().catch((error) => {
  console.error(error instanceof Error ? error.message : String(error))
  process.exit(1)
})
