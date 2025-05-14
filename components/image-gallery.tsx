import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react"

export function ImageGallery() {
  return (
    <section id="gallery" className="w-full py-12 md:py-24 bg-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-slate-100 px-3 py-1 text-sm">Gallery</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Moving Services in Action</h2>
            <p className="max-w-[900px] text-slate-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Take a look at our professional moving team and equipment at work.
            </p>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Featured Image - Larger */}
          <Card className="col-span-1 md:col-span-2 lg:col-span-2 overflow-hidden">
            <CardContent className="p-0">
              <div className="relative aspect-[16/9] w-full">
                <Image
                  src="/images/loading-truck.png"
                  alt="K-Line Movers loading a truck with boxes and furniture"
                  fill
                  className="object-cover transition-transform hover:scale-105 duration-500"
                />
              </div>
              <div className="p-4">
                <h3 className="font-medium">Professional Loading Services</h3>
                <p className="text-sm text-slate-500">Our team carefully loads your belongings for safe transport</p>
              </div>
            </CardContent>
          </Card>

          {/* Image 1 */}
          <Card className="overflow-hidden">
            <CardContent className="p-0">
              <div className="relative aspect-square w-full">
                <Image
                  src="/images/furniture-wrapped.png"
                  alt="Furniture carefully wrapped for protection during moving"
                  fill
                  className="object-cover transition-transform hover:scale-105 duration-500"
                />
              </div>
              <div className="p-4">
                <h3 className="font-medium">Professional Furniture Protection</h3>
                <p className="text-sm text-slate-500">We carefully wrap all furniture to prevent damage</p>
              </div>
            </CardContent>
          </Card>

          {/* Image 2 */}
          <Card className="overflow-hidden">
            <CardContent className="p-0">
              <div className="relative aspect-square w-full">
                <Image
                  src="/images/wrapped-furniture.png"
                  alt="Large furniture items wrapped and ready for transport"
                  fill
                  className="object-cover transition-transform hover:scale-105 duration-500"
                />
              </div>
              <div className="p-4">
                <h3 className="font-medium">Secure Wrapping Techniques</h3>
                <p className="text-sm text-slate-500">Special care for large and bulky items</p>
              </div>
            </CardContent>
          </Card>

          {/* Image 3 */}
          <Card className="overflow-hidden">
            <CardContent className="p-0">
              <div className="relative aspect-square w-full">
                <Image
                  src="/images/packed-truck.png"
                  alt="Inside view of a fully packed moving truck"
                  fill
                  className="object-cover transition-transform hover:scale-105 duration-500"
                />
              </div>
              <div className="p-4">
                <h3 className="font-medium">Efficient Space Utilization</h3>
                <p className="text-sm text-slate-500">Maximizing truck space while ensuring item safety</p>
              </div>
            </CardContent>
          </Card>

          {/* Image 4 */}
          <Card className="overflow-hidden">
            <CardContent className="p-0">
              <div className="relative aspect-square w-full">
                <Image
                  src="/images/moving-truck-2.png"
                  alt="Professional moving truck"
                  fill
                  className="object-cover transition-transform hover:scale-105 duration-500"
                />
              </div>
              <div className="p-4">
                <h3 className="font-medium">Our Moving Fleet</h3>
                <p className="text-sm text-slate-500">Well-maintained trucks for reliable service</p>
              </div>
            </CardContent>
          </Card>

          {/* Image 5 */}
          <Card className="overflow-hidden">
            <CardContent className="p-0">
              <div className="relative aspect-square w-full">
                <Image
                  src="/images/commercial-moving.png"
                  alt="Commercial moving services at an apartment complex"
                  fill
                  className="object-cover transition-transform hover:scale-105 duration-500"
                />
              </div>
              <div className="p-4">
                <h3 className="font-medium">Commercial Moving</h3>
                <p className="text-sm text-slate-500">Specialized services for businesses and apartments</p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="flex justify-center mt-8">
          <Button variant="outline" className="mx-2">
            <ChevronLeftIcon className="h-4 w-4 mr-2" />
            Previous
          </Button>
          <Button variant="outline" className="mx-2">
            Next
            <ChevronRightIcon className="h-4 w-4 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  )
}
