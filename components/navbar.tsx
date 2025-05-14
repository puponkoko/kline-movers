"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { MenuIcon, PhoneIcon } from "lucide-react"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="container flex h-16 items-center px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.png" alt="K-Line Movers Logo" width={40} height={40} />
          <span className="text-lg font-bold">K-Line Movers</span>
        </Link>
        <nav className="ml-auto hidden gap-6 md:flex">
          <Link href="/" className="text-sm font-medium hover:underline">
            Home
          </Link>
          <Link href="#services" className="text-sm font-medium hover:underline">
            Services
          </Link>
          <Link href="#about" className="text-sm font-medium hover:underline">
            About
          </Link>
          <Link href="#testimonials" className="text-sm font-medium hover:underline">
            Testimonials
          </Link>
          <Link href="#faq" className="text-sm font-medium hover:underline">
            FAQ
          </Link>
          <Link href="#contact" className="text-sm font-medium hover:underline">
            Contact
          </Link>
        </nav>
        <div className="ml-auto md:ml-4 flex items-center gap-4">
          <Button variant="outline" size="sm" className="hidden md:flex">
            <PhoneIcon className="mr-2 h-4 w-4" />
            <a href="tel:+14086031957">+1 408 603 1957</a>
          </Button>
          <Button size="sm" className="hidden md:flex">
            Get a Quote
          </Button>
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden">
                <MenuIcon className="h-6 w-6" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="grid gap-6 py-6">
                <Link href="/" className="text-lg font-medium hover:underline" onClick={() => setIsOpen(false)}>
                  Home
                </Link>
                <Link href="#services" className="text-lg font-medium hover:underline" onClick={() => setIsOpen(false)}>
                  Services
                </Link>
                <Link href="#about" className="text-lg font-medium hover:underline" onClick={() => setIsOpen(false)}>
                  About
                </Link>
                <Link
                  href="#testimonials"
                  className="text-lg font-medium hover:underline"
                  onClick={() => setIsOpen(false)}
                >
                  Testimonials
                </Link>
                <Link href="#faq" className="text-lg font-medium hover:underline" onClick={() => setIsOpen(false)}>
                  FAQ
                </Link>
                <Link href="#contact" className="text-lg font-medium hover:underline" onClick={() => setIsOpen(false)}>
                  Contact
                </Link>
                <Button className="w-full">
                  <PhoneIcon className="mr-2 h-4 w-4" />
                  <a href="tel:+14086031957">+1 408 603 1957</a>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
