"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MapPinIcon, PhoneIcon, TruckIcon, CheckCircle2Icon, AlertCircleIcon } from "lucide-react"
import { DatePicker } from "@/components/date-picker"
import { cn } from "@/lib/utils"
import { toast } from "@/hooks/use-toast"

interface FormData {
  name: string
  email: string
  phone: string
  moveDate: Date | null
  moveFrom: string
  moveTo: string
  serviceType: string
  message: string
}

export function HeroSection() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    moveDate: null,
    moveFrom: "",
    moveTo: "",
    serviceType: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const handleDateChange = (date: Date | undefined) => {
    setFormData({ ...formData, moveDate: date || null })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")

    try {
      const response = await fetch("https://formspree.io/f/mrbqkvqa", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          moveDate: formData.moveDate?.toISOString(),
          moveFrom: formData.moveFrom,
          moveTo: formData.moveTo,
          serviceType: formData.serviceType,
          message: formData.message,
          _subject: `New Moving Inquiry from ${formData.name}`,
        }),
      })

      if (response.ok) {
        setSubmitStatus("success")
        toast({
          title: "Quote Request Submitted",
          description: "Thank you! We'll contact you shortly about your move.",
          variant: "default",
        })
        setFormData({
          name: "",
          email: "",
          phone: "",
          moveDate: null,
          moveFrom: "",
          moveTo: "",
          serviceType: "",
          message: "",
        })
      } else {
        setSubmitStatus("error")
        toast({
          title: "Submission Error",
          description: "There was a problem submitting your request. Please try again.",
          variant: "destructive",
        })
      }
    } catch (error) {
      setSubmitStatus("error")
      toast({
        title: "Connection Error",
        description: "Unable to connect to our server. Please check your internet connection.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="relative w-full bg-gradient-to-b from-slate-50 to-slate-100 py-12 md:py-24 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0 opacity-10">
        <Image src="/images/moving-truck.png" alt="Moving truck background" fill className="object-cover" priority />
      </div>
      <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-purple-200 opacity-30 blur-3xl"></div>
      <div className="absolute -left-24 -bottom-24 h-64 w-64 rounded-full bg-blue-200 opacity-30 blur-3xl"></div>

      <div className="container relative z-10 px-4 md:px-6">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Left side content */}
          <div className="flex flex-col justify-center space-y-6">
            <div className="space-y-4">
              <div className="inline-flex items-center rounded-full border border-purple-200 bg-purple-50 px-3 py-1 text-sm font-medium text-purple-600">
                <span className="mr-1 h-2 w-2 rounded-full bg-purple-600"></span>
                Professional Moving Services
              </div>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                <span className="text-purple-600">K-Line</span> Movers
              </h1>
              <p className="max-w-[600px] text-slate-700 md:text-xl">
                Your trusted partner for stress-free moving in the Bay Area. Professional, reliable, and efficient
                service for your next move.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="flex items-start gap-3 rounded-lg border bg-white p-3 shadow-sm">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-purple-100">
                  <TruckIcon className="h-5 w-5 text-purple-600" />
                </div>
                <div>
                  <h3 className="font-medium">Local & Long Distance</h3>
                  <p className="text-sm text-slate-500">Anywhere in the Bay Area and beyond</p>
                </div>
              </div>
              <div className="flex items-start gap-3 rounded-lg border bg-white p-3 shadow-sm">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-purple-100">
                  <CheckCircle2Icon className="h-5 w-5 text-purple-600" />
                </div>
                <div>
                  <h3 className="font-medium">Licensed & Insured</h3>
                  <p className="text-sm text-slate-500">Your belongings are protected</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
                Our Services
              </Button>
              <Button variant="outline" size="lg" className="border-purple-200 hover:bg-purple-50">
                <PhoneIcon className="mr-2 h-4 w-4 text-purple-600" />
                <a href="tel:+14086031957" className="text-purple-600">
                  +1 408 603 1957
                </a>
              </Button>
            </div>

            <div className="flex items-center gap-2 text-sm text-slate-500">
              <MapPinIcon className="h-4 w-4 text-purple-600" />
              <span>Serving the entire Bay Area, California</span>
            </div>
          </div>

          {/* Right side form */}
          <div className="flex flex-col gap-2">
            <Card className="border-purple-100 shadow-lg">
              <CardContent className="p-6">
                <div className="mb-6 text-center">
                  <h2 className="text-xl font-bold">Get Your Free Moving Quote</h2>
                  <p className="text-sm text-slate-500">Fill out the form below and we'll contact you shortly</p>
                </div>

                <form onSubmit={handleSubmit} className="grid gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="name" className="text-sm font-medium">
                      Full Name
                    </Label>
                    <Input
                      id="name"
                      placeholder="Enter your name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="border-slate-200 focus-visible:ring-purple-500"
                    />
                  </div>

                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div className="grid gap-2">
                      <Label htmlFor="email" className="text-sm font-medium">
                        Email
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="Enter your email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="border-slate-200 focus-visible:ring-purple-500"
                      />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="phone" className="text-sm font-medium">
                        Phone
                      </Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="Enter your phone number"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="border-slate-200 focus-visible:ring-purple-500"
                      />
                    </div>
                  </div>

                  <div className="grid gap-2">
                    <Label htmlFor="moveDate" className="text-sm font-medium">
                      Moving Date
                    </Label>
                    <DatePicker onChange={handleDateChange} />
                  </div>

                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div className="grid gap-2">
                      <Label htmlFor="moveFrom" className="text-sm font-medium">
                        Moving From
                      </Label>
                      <Input
                        id="moveFrom"
                        placeholder="Current address"
                        required
                        value={formData.moveFrom}
                        onChange={(e) => setFormData({ ...formData, moveFrom: e.target.value })}
                        className="border-slate-200 focus-visible:ring-purple-500"
                      />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="moveTo" className="text-sm font-medium">
                        Moving To
                      </Label>
                      <Input
                        id="moveTo"
                        placeholder="Destination address"
                        required
                        value={formData.moveTo}
                        onChange={(e) => setFormData({ ...formData, moveTo: e.target.value })}
                        className="border-slate-200 focus-visible:ring-purple-500"
                      />
                    </div>
                  </div>

                  <div className="grid gap-2">
                    <Label htmlFor="serviceType" className="text-sm font-medium">
                      Service Type
                    </Label>
                    <Select
                      onValueChange={(value) => setFormData({ ...formData, serviceType: value })}
                      value={formData.serviceType}
                    >
                      <SelectTrigger id="serviceType" className="border-slate-200 focus-visible:ring-purple-500">
                        <SelectValue placeholder="Select service type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="residential">Residential Moving</SelectItem>
                        <SelectItem value="commercial">Commercial Moving</SelectItem>
                        <SelectItem value="packing">Packing Services</SelectItem>
                        <SelectItem value="storage">Storage Solutions</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="grid gap-2">
                    <Label htmlFor="message" className="text-sm font-medium">
                      Additional Information
                    </Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us more about your move (inventory, special items, etc.)"
                      className="min-h-[100px] border-slate-200 focus-visible:ring-purple-500"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    />
                  </div>

                  <Button
                    type="submit"
                    className={cn(
                      "mt-2 w-full bg-purple-600 hover:bg-purple-700",
                      isSubmitting && "opacity-70 cursor-not-allowed",
                    )}
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <svg
                          className="mr-2 h-4 w-4 animate-spin"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Submitting...
                      </>
                    ) : (
                      "Get Free Quote"
                    )}
                  </Button>

                  {submitStatus === "success" && (
                    <div className="mt-4 flex items-center gap-2 rounded-md bg-green-50 p-4 text-sm text-green-700">
                      <CheckCircle2Icon className="h-5 w-5" />
                      <span>Thank you for your inquiry! We'll contact you shortly.</span>
                    </div>
                  )}

                  {submitStatus === "error" && (
                    <div className="mt-4 flex items-center gap-2 rounded-md bg-red-50 p-4 text-sm text-red-700">
                      <AlertCircleIcon className="h-5 w-5" />
                      <span>There was an error submitting your form. Please try again.</span>
                    </div>
                  )}
                </form>
              </CardContent>
            </Card>

            <div className="mt-2 flex items-center justify-center gap-2 text-xs text-slate-500">
              <LockIcon className="h-3 w-3" />
              <span>Your information is secure and will never be shared</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function LockIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  )
}
