import Link from "next/link"
import Image from "next/image"
import { FacebookIcon, InstagramIcon, TwitterIcon, YoutubeIcon } from "lucide-react"

export function Footer() {
  return (
    <footer className="w-full border-t bg-white py-6 md:py-12">
      <div className="container px-4 md:px-6">
        <div className="grid gap-8 lg:grid-cols-4">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <Image src="/logo.png" alt="K-Line Movers Logo" width={50} height={50} />
              <span className="text-lg font-bold">K-Line Movers</span>
            </Link>
            <p className="text-sm text-slate-500">
              Professional moving services in the Bay Area. We make your move stress-free and efficient.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="text-slate-500 hover:text-slate-900">
                <FacebookIcon className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-slate-500 hover:text-slate-900">
                <InstagramIcon className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-slate-500 hover:text-slate-900">
                <TwitterIcon className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-slate-500 hover:text-slate-900">
                <YoutubeIcon className="h-5 w-5" />
                <span className="sr-only">YouTube</span>
              </Link>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-base font-medium">Services</h3>
            <ul className="grid gap-2">
              <li>
                <Link href="#services" className="text-sm text-slate-500 hover:text-slate-900">
                  Residential Moving
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-sm text-slate-500 hover:text-slate-900">
                  Commercial Moving
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-sm text-slate-500 hover:text-slate-900">
                  Packing Services
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-sm text-slate-500 hover:text-slate-900">
                  Storage Solutions
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-base font-medium">Company</h3>
            <ul className="grid gap-2">
              <li>
                <Link href="#about" className="text-sm text-slate-500 hover:text-slate-900">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#testimonials" className="text-sm text-slate-500 hover:text-slate-900">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link href="#faq" className="text-sm text-slate-500 hover:text-slate-900">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-slate-500 hover:text-slate-900">
                  Careers
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-base font-medium">Contact</h3>
            <ul className="grid gap-2">
              <li>
                <a href="tel:+14086031957" className="text-sm text-slate-500 hover:text-slate-900">
                  +1 408 603 1957
                </a>
              </li>
              <li>
                <a href="mailto:info@klinemovers.com" className="text-sm text-slate-500 hover:text-slate-900">
                  info@klinemovers.com
                </a>
              </li>
              <li>
                <span className="text-sm text-slate-500">Bay Area, California</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 text-center text-sm text-slate-500">
          <p>© {new Date().getFullYear()} K-Line Movers. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
