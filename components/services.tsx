import { CheckIcon, PackageIcon, TruckIcon, WarehouseIcon } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"

export function Services() {
  return (
    <section id="services" className="w-full py-12 md:py-24 lg:py-32 bg-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-slate-100 px-3 py-1 text-sm">Our Services</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Moving Solutions Tailored to Your Needs</h2>
            <p className="max-w-[900px] text-slate-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              We offer comprehensive moving services to make your relocation as smooth as possible.
            </p>
          </div>
        </div>

        <div className="relative w-full my-8 rounded-xl overflow-hidden">
          <div className="aspect-video relative">
            <Image
              src="/images/loading-truck.png"
              alt="K-Line Movers loading a truck with boxes and furniture"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
            <div className="p-6 text-white">
              <h3 className="text-2xl font-bold mb-2">Professional Equipment & Expert Team</h3>
              <p className="max-w-2xl">
                Our fleet of well-maintained moving trucks and experienced team ensure your belongings are transported
                safely and efficiently.
              </p>
            </div>
          </div>
        </div>

        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:gap-12">
          <Card>
            <CardHeader className="flex flex-row items-center gap-4 pb-2">
              <TruckIcon className="h-8 w-8 text-slate-800" />
              <CardTitle className="text-xl">Residential Moving</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">
                Our professional team handles your household belongings with care, ensuring a smooth transition to your
                new home.
              </CardDescription>
              <ul className="mt-4 grid gap-2">
                <li className="flex items-center gap-2">
                  <CheckIcon className="h-4 w-4 text-green-500" />
                  <span className="text-sm">Local and long-distance moves</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon className="h-4 w-4 text-green-500" />
                  <span className="text-sm">Furniture disassembly and reassembly</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon className="h-4 w-4 text-green-500" />
                  <span className="text-sm">Careful handling of fragile items</span>
                </li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center gap-4 pb-2">
              <WarehouseIcon className="h-8 w-8 text-slate-800" />
              <CardTitle className="text-xl">Commercial Moving</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">
                Minimize downtime with our efficient office and business relocation services.
              </CardDescription>
              <ul className="mt-4 grid gap-2">
                <li className="flex items-center gap-2">
                  <CheckIcon className="h-4 w-4 text-green-500" />
                  <span className="text-sm">Office equipment and furniture moving</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon className="h-4 w-4 text-green-500" />
                  <span className="text-sm">Computer and electronics handling</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon className="h-4 w-4 text-green-500" />
                  <span className="text-sm">Weekend and after-hours service</span>
                </li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center gap-4 pb-2">
              <PackageIcon className="h-8 w-8 text-slate-800" />
              <CardTitle className="text-xl">Packing Services</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">
                Let our experts handle the packing with professional materials and techniques.
              </CardDescription>
              <ul className="mt-4 grid gap-2">
                <li className="flex items-center gap-2">
                  <CheckIcon className="h-4 w-4 text-green-500" />
                  <span className="text-sm">Full and partial packing options</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon className="h-4 w-4 text-green-500" />
                  <span className="text-sm">Custom crating for valuable items</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon className="h-4 w-4 text-green-500" />
                  <span className="text-sm">Unpacking and debris removal</span>
                </li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center gap-4 pb-2">
              <WarehouseIcon className="h-8 w-8 text-slate-800" />
              <CardTitle className="text-xl">Storage Solutions</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">
                Secure, climate-controlled storage facilities for short or long-term needs.
              </CardDescription>
              <ul className="mt-4 grid gap-2">
                <li className="flex items-center gap-2">
                  <CheckIcon className="h-4 w-4 text-green-500" />
                  <span className="text-sm">24/7 monitored facilities</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon className="h-4 w-4 text-green-500" />
                  <span className="text-sm">Flexible storage periods</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon className="h-4 w-4 text-green-500" />
                  <span className="text-sm">Easy access to your belongings</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
