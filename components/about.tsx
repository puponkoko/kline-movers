import Image from "next/image"

export function About() {
  return (
    <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-slate-50">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-slate-100 px-3 py-1 text-sm">About Us</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">K-Line Movers</h2>
              <p className="max-w-[600px] text-slate-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                With years of experience in the moving industry, K-Line Movers has established itself as a trusted name
                in the Bay Area.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold">Our Mission</h3>
              <p className="text-slate-500">
                To provide exceptional moving services that exceed customer expectations through reliability,
                professionalism, and attention to detail.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold">Why Choose Us</h3>
              <ul className="grid gap-2">
                <li className="flex items-start gap-2">
                  <div className="rounded-full bg-slate-900 p-1">
                    <div className="h-1.5 w-1.5 rounded-full bg-white" />
                  </div>
                  <span>Licensed and insured professionals</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="rounded-full bg-slate-900 p-1">
                    <div className="h-1.5 w-1.5 rounded-full bg-white" />
                  </div>
                  <span>Transparent pricing with no hidden fees</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="rounded-full bg-slate-900 p-1">
                    <div className="h-1.5 w-1.5 rounded-full bg-white" />
                  </div>
                  <span>Customized moving plans for your specific needs</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="rounded-full bg-slate-900 p-1">
                    <div className="h-1.5 w-1.5 rounded-full bg-white" />
                  </div>
                  <span>Modern equipment and well-maintained trucks</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative h-[400px] w-full overflow-hidden rounded-xl">
              <Image
                src="/images/moving-truck.png"
                alt="K-Line Movers Truck at a residential moving job"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
