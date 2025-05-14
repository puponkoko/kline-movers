import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Image from "next/image"

export function FAQ() {
  return (
    <section id="faq" className="w-full py-12 md:py-24 lg:py-32 bg-slate-50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-slate-100 px-3 py-1 text-sm">FAQ</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Frequently Asked Questions</h2>
            <p className="max-w-[900px] text-slate-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Find answers to common questions about our moving services.
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 py-12">
          <div className="lg:col-span-2 order-2 lg:order-1">
            <div className="grid grid-cols-2 gap-4">
              <div className="relative aspect-square rounded-lg overflow-hidden">
                <Image
                  src="/images/glass-loading.png"
                  alt="Carefully packed glass items for moving"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-square rounded-lg overflow-hidden">
                <Image
                  src="/images/truck-interior.png"
                  alt="Inside of a packed moving truck"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-square rounded-lg overflow-hidden col-span-2">
                <Image
                  src="/images/moving-truck.png"
                  alt="K-Line Movers truck at a residential moving job"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          <div className="lg:col-span-3 order-1 lg:order-2">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>How far in advance should I book my move?</AccordionTrigger>
                <AccordionContent>
                  We recommend booking your move at least 4-6 weeks in advance, especially during peak moving season
                  (May-September). For last-minute moves, please contact us directly at +1 408 603 1957, and we'll do
                  our best to accommodate your schedule.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Are you licensed and insured?</AccordionTrigger>
                <AccordionContent>
                  Yes, K-Line Movers is fully licensed and insured. We carry comprehensive liability insurance and
                  workers' compensation to protect your belongings and our team during the moving process.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>How do you calculate the cost of a move?</AccordionTrigger>
                <AccordionContent>
                  Our pricing is based on several factors including distance, volume of items, special handling
                  requirements, and additional services requested. We provide free, no-obligation estimates after
                  assessing your specific moving needs.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>Do you provide packing materials?</AccordionTrigger>
                <AccordionContent>
                  Yes, we offer a complete range of high-quality packing materials including boxes, bubble wrap, packing
                  paper, tape, and specialty containers for fragile items. These can be purchased separately or included
                  as part of our full-service packing option.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger>What items won't you move?</AccordionTrigger>
                <AccordionContent>
                  For safety and legal reasons, we cannot transport hazardous materials (flammables, explosives,
                  corrosives), perishable items, plants, certain electronics containing lithium batteries, and personal
                  or sentimental items of extraordinary value. Please consult with our team for a complete list.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-6">
                <AccordionTrigger>Do you offer storage solutions?</AccordionTrigger>
                <AccordionContent>
                  Yes, we offer both short-term and long-term storage solutions in our secure, climate-controlled
                  facilities. Your items will be carefully inventoried and stored, with flexible access options
                  available.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  )
}
