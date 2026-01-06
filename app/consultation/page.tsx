import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowLeft, Send } from "lucide-react"
import Link from "next/link"

export default function ConsultationPage() {
  return (
    <div className="min-h-screen bg-background pt-32 pb-20">
      <div className="container mx-auto px-6 max-w-4xl">
        <Link
          href="/"
          className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-primary transition-colors mb-12 group"
        >
          <ArrowLeft className="mr-2 w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </Link>

        <div className="grid lg:grid-cols-5 gap-16">
          <div className="lg:col-span-2">
            <h1 className="text-4xl md:text-5xl font-serif mb-6 leading-tight">
              Request a <span className="italic">Consultation</span>
            </h1>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Scale your vision with Merqone. Our senior engineers and AI researchers are ready to architect your next
              breakthrough.
            </p>

            <div className="space-y-8 mt-12">
              <div>
                <h4 className="text-xs font-bold uppercase tracking-widest text-primary mb-2">Direct Line</h4>
                <p className="text-lg font-serif">strategy@merqone.com</p>
              </div>
              <div>
                <h4 className="text-xs font-bold uppercase tracking-widest text-primary mb-2">Global HQ</h4>
                <p className="text-muted-foreground text-sm">
                  101 Innovation Way
                  <br />
                  Tech District, CA 94105
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3 bg-secondary/20 rounded-[2.5rem] p-8 md:p-10 border border-border/50">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="first-name">First Name</Label>
                  <Input id="first-name" placeholder="John" className="bg-background/50 border-border/50 h-12" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="last-name">Last Name</Label>
                  <Input id="last-name" placeholder="Doe" className="bg-background/50 border-border/50 h-12" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Work Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="john@company.com"
                  className="bg-background/50 border-border/50 h-12"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="sector">Industry Sector</Label>
                <Select>
                  <SelectTrigger className="w-full bg-background/50 border-border/50 h-12">
                    <SelectValue placeholder="Select industry" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="edtech">EdTech</SelectItem>
                    <SelectItem value="healthcare">Healthcare</SelectItem>
                    <SelectItem value="real-estate">Real Estate</SelectItem>
                    <SelectItem value="manufacturing">Manufacturing</SelectItem>
                    <SelectItem value="logistics">Logistics</SelectItem>
                    <SelectItem value="government">Government</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Project Brief</Label>
                <Textarea
                  id="message"
                  placeholder="Tell us about your technical requirements and objectives..."
                  className="bg-background/50 border-border/50 min-h-[120px] pt-3"
                />
              </div>

              <div className="flex items-start space-x-3 pt-2">
                <Checkbox id="nda" className="mt-1" />
                <Label htmlFor="nda" className="text-xs text-muted-foreground leading-normal">
                  I require a Non-Disclosure Agreement (NDA) before sharing detailed project documentation.
                </Label>
              </div>

              <Button className="w-full h-14 rounded-full bg-primary text-primary-foreground text-base font-medium group">
                Send Request
                <Send className="ml-2 w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
