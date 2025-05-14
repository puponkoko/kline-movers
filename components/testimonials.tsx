import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { StarIcon } from "lucide-react"

export function Testimonials() {
  return (
    <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32 bg-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-slate-100 px-3 py-1 text-sm">Testimonials</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">What Our Customers Say</h2>
            <p className="max-w-[900px] text-slate-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Don't just take our word for it. Here's what our satisfied customers have to say about their moving
              experience with K-Line Movers.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-3 lg:gap-12">
          <Card className="border-0 shadow-sm">
            <CardContent className="p-6">
              <div className="flex space-x-1 mb-4">
                <StarIcon className="h-5 w-5 fill-current text-yellow-500" />
                <StarIcon className="h-5 w-5 fill-current text-yellow-500" />
                <StarIcon className="h-5 w-5 fill-current text-yellow-500" />
                <StarIcon className="h-5 w-5 fill-current text-yellow-500" />
                <StarIcon className="h-5 w-5 fill-current text-yellow-500" />
              </div>
              <div className="mb-4 flex justify-center">
                <div className="relative h-16 w-16 overflow-hidden rounded-full bg-slate-100">
                  <div className="absolute inset-0 flex items-center justify-center text-slate-400 text-xl font-medium">
                    SJ
                  </div>
                </div>
              </div>
              <p className="text-slate-500">
                "K-Line Movers made our cross-town move so easy! The team was professional, efficient, and handled our
                belongings with care. Highly recommend their services!"
              </p>
            </CardContent>
            <CardFooter className="px-6 py-4 border-t">
              <div>
                <p className="font-medium">Sarah Johnson</p>
                <p className="text-sm text-slate-500">San Francisco, CA</p>
              </div>
            </CardFooter>
          </Card>
          <Card className="border-0 shadow-sm">
            <CardContent className="p-6">
              <div className="flex space-x-1 mb-4">
                <StarIcon className="h-5 w-5 fill-current text-yellow-500" />
                <StarIcon className="h-5 w-5 fill-current text-yellow-500" />
                <StarIcon className="h-5 w-5 fill-current text-yellow-500" />
                <StarIcon className="h-5 w-5 fill-current text-yellow-500" />
                <StarIcon className="h-5 w-5 fill-current text-yellow-500" />
              </div>
              <div className="mb-4 flex justify-center">
                <div className="relative h-16 w-16 overflow-hidden rounded-full bg-slate-100">
                  <div className="absolute inset-0 flex items-center justify-center text-slate-400 text-xl font-medium">
                    MC
                  </div>
                </div>
              </div>
              <p className="text-slate-500">
                "We used K-Line for our office relocation, and they were outstanding. They worked after hours to
                minimize our downtime and had us up and running in our new location quickly."
              </p>
            </CardContent>
            <CardFooter className="px-6 py-4 border-t">
              <div>
                <p className="font-medium">Michael Chen</p>
                <p className="text-sm text-slate-500">Palo Alto, CA</p>
              </div>
            </CardFooter>
          </Card>
          <Card className="border-0 shadow-sm">
            <CardContent className="p-6">
              <div className="flex space-x-1 mb-4">
                <StarIcon className="h-5 w-5 fill-current text-yellow-500" />
                <StarIcon className="h-5 w-5 fill-current text-yellow-500" />
                <StarIcon className="h-5 w-5 fill-current text-yellow-500" />
                <StarIcon className="h-5 w-5 fill-current text-yellow-500" />
                <StarIcon className="h-5 w-5 fill-current text-yellow-500" />
              </div>
              <div className="mb-4 flex justify-center">
                <div className="relative h-16 w-16 overflow-hidden rounded-full bg-slate-100">
                  <div className="absolute inset-0 flex items-center justify-center text-slate-400 text-xl font-medium">
                    JR
                  </div>
                </div>
              </div>
              <p className="text-slate-500">
                "The packing service from K-Line Movers was a lifesaver! They packed everything so carefully and
                efficiently. Nothing was damaged in our move, and they even helped unpack at our new home."
              </p>
            </CardContent>
            <CardFooter className="px-6 py-4 border-t">
              <div>
                <p className="font-medium">Jessica Rodriguez</p>
                <p className="text-sm text-slate-500">San Jose, CA</p>
              </div>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  )
}
