export interface NavItem {
  title: string
  href: string
  description?: string
  external?: boolean
  children?: NavItem[]
}

export interface FooterSection {
  title: string
  links: NavItem[]
}

export interface SiteConfig {
  name: string
  description: string
  phone: string
  email: string
  address: string
  calendlyUrl: string
  social: {
    facebook: string
    twitter: string
    instagram: string
    youtube: string
  }
}

export interface Service {
  name: string
  slug: string
  price: string
  duration: string
  description: string
  longDescription?: string
  calendlyUrl: string
  icon: string
  imageSrc?: string
  imageAlt?: string
}

export interface Testimonial {
  quote: string
  author: string
  initials: string
}

export interface Book {
  title: string
  subtitle: string
  description: string
  amazonUrl: string
  previewUrl: string
  imageSrc?: string
  imageAlt?: string
}

export interface BlogPost {
  title: string
  slug: string
  date: string
  author: string
  excerpt: string
  content: string
  category?: string
}

export interface ArizonaPage {
  title: string
  slug: string
  heading: string
  description: string
  benefits: { title: string; description: string }[]
}

export interface GalleryPhoto {
  src: string
  alt: string
}
