import { Button } from "@/components/ui/button"
import { PhoneIcon, MailIcon, MapPinIcon } from "lucide-react"
import Image from "next/image"

export function ContactCTA() {
  return (
    <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-slate-900 text-white">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Ready to Get Moving?</h2>
              <p className="max-w-[600px] text-slate-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Contact us today for a free, no-obligation quote. Our team is ready to help make your move stress-free.
              </p>
            </div>
            <div className="flex flex-col space-y-4">
              <div className="flex items-center gap-2">
                <PhoneIcon className="h-5 w-5 text-slate-300" />
                <a href="tel:+14086031957" className="text-slate-300 hover:text-white">
                  +1 408 603 1957
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MailIcon className="h-5 w-5 text-slate-300" />
                <a href="mailto:info@klinemovers.com" className="text-slate-300 hover:text-white">
                  info@klinemovers.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MapPinIcon className="h-5 w-5 text-slate-300" />
                <span className="text-slate-300">Bay Area, California</span>
              </div>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button className="inline-flex h-10 items-center justify-center rounded-md bg-white px-8 text-sm font-medium text-slate-900 shadow transition-colors hover:bg-slate-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-slate-950 disabled:pointer-events-none disabled:opacity-50">
                Get a Free Quote
              </Button>
              <Button
                variant="outline"
                className="inline-flex h-10 items-center justify-center rounded-md border border-slate-600 bg-transparent px-8 text-sm font-medium text-white shadow-sm transition-colors hover:bg-slate-800 hover:text-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-slate-950 disabled:pointer-events-none disabled:opacity-50"
              >
                <PhoneIcon className="mr-2 h-4 w-4" />
                <a href="tel:+14086031957">Call Us Now</a>
              </Button>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="grid grid-cols-2 gap-4 w-full">
              <div className="relative aspect-square rounded-lg overflow-hidden">
                <Image
                  src="/images/furniture-wrapped.png"
                  alt="Furniture carefully wrapped for protection"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-square rounded-lg overflow-hidden">
                <Image
                  src="/images/wrapped-furniture.png"
                  alt="Large furniture items wrapped for moving"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="col-span-2 relative aspect-video rounded-lg overflow-hidden">
                <Image
                  src="/images/commercial-moving.png"
                  alt="Commercial moving services"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                  <div className="p-4 text-white">
                    <p className="font-medium">Professional Moving Services</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
