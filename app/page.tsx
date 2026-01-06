import { Button } from "@/components/ui/button"
import {
  ArrowUpRight,
  Cpu,
  Microscope,
  GraduationCap,
  Building2,
  ChevronRight,
  CheckCircle2,
} from "lucide-react"
import Link from "next/link"

export default function LandingPage() {
  return (
    <div className="min-h-screen selection:bg-accent/30 selection:text-accent">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-primary via-secondary to-accent rounded-full flex items-center justify-center shadow-lg shadow-primary/30">
              <div className="w-4 h-4 bg-background rounded-sm rotate-45" />
            </div>
            <span className="text-xl font-bold tracking-tight bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              MERQONE
            </span>
          </div>

          <div className="hidden md:flex items-center gap-10 text-sm font-medium text-muted-foreground">
            <Link href="/solutions/ai-machine-learning" className="hover:text-primary transition-colors">
              Solutions
            </Link>
            <Link href="#intelligence" className="hover:text-primary transition-colors">
              AI Intelligence
            </Link>
            <Link href="/about" className="hover:text-primary transition-colors">
              About
            </Link>
          </div>

          <Button
            variant="outline"
            className="rounded-full px-6 hover:bg-primary hover:text-primary-foreground transition-all bg-transparent border-primary/50 text-primary hover:shadow-lg hover:shadow-primary/20"
            asChild
          >
            <Link href="/consultation">
              Request Consultation <ArrowUpRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-48 pb-32 container mx-auto px-6 text-center">
        <div className="inline-block px-4 py-1 rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 text-primary text-xs font-semibold tracking-wider uppercase mb-6 border border-primary/30 shadow-lg shadow-primary/10">
          Digital Transformation Platform
        </div>

        <h1 className="text-6xl md:text-8xl font-serif tracking-tight text-balance leading-[1.1] mb-8">
          Build <span className="text-primary">Digital Excellence</span> with <span className="italic">AI-Driven</span>{" "}
          Solutions
        </h1>

        <p className="max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground leading-relaxed mb-12">
          Merqone engineers sophisticated software solutions infused with state-of-the-art AI, creating intelligent
          foundations that redefine your enterprise capabilities.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            size="lg"
            className="rounded-full px-8 h-14 text-base bg-primary text-primary-foreground shadow-xl shadow-primary/40 hover:shadow-2xl hover:shadow-primary/50 transition-all hover:scale-105"
            asChild
          >
            <Link href="/consultation">Start Your Transformation</Link>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="rounded-full px-8 h-14 text-base group border-primary/50 text-primary hover:bg-primary/5 bg-transparent hover:shadow-lg hover:shadow-primary/15"
            asChild
          >
            <Link href="/about">
              View Our Vision <ChevronRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="py-12 border-y border-border/50 bg-gradient-to-r from-primary/5 via-secondary/15 to-primary/5">
        <div className="container mx-auto px-6">
          <p className="text-center text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground/60 mb-8">
            Trusted by Global Innovators
          </p>
          <div className="flex flex-wrap justify-center gap-12 md:gap-24 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-700">
            {["SYNERGY", "VORTEX", "AETHER", "QUANTUM", "ZENITH"].map((brand) => (
              <span key={brand} className="text-2xl font-black tracking-tighter text-primary/70">
                {brand}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* AI Proficiency Section */}
      <section
        id="intelligence"
        className="py-32 bg-gradient-to-br from-primary via-primary to-primary/95 text-primary-foreground overflow-hidden relative"
      >
        <div className="absolute top-0 right-0 w-1/3 h-full bg-accent/20 blur-[120px] rounded-full translate-x-1/2" />
        <div className="absolute bottom-0 left-1/4 w-1/4 h-1/2 bg-secondary/15 blur-[100px] rounded-full" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <div className="inline-block px-4 py-1 rounded-full bg-white/10 text-xs font-semibold tracking-wider uppercase mb-6 border border-white/20">
                Our DNA
              </div>
              <h2 className="text-4xl md:text-5xl font-serif leading-tight mb-8">
                Uncompromising <span className="italic">AI Proficiency</span> for the Enterprise
              </h2>
              <p className="text-lg text-primary-foreground/85 mb-10 leading-relaxed">
                We don't just "add AI" to products. We architect intelligent foundations. From custom LLM fine-tuning to
                predictive computer vision, our expertise spans the entire frontier of machine learning.
              </p>

              <ul className="space-y-6">
                {[
                  {
                    title: "Generative AI Systems",
                    desc: "Custom-built large language models and multi-modal generators tailored to your proprietary data.",
                  },
                  {
                    title: "Predictive Intelligence",
                    desc: "Complex forecasting engines that turn vast datasets into actionable business foresight.",
                  },
                  {
                    title: "Neural Architecture",
                    desc: "Highly optimized deep learning models designed for speed, scale, and precision.",
                  },
                ].map((item, idx) => (
                  <li key={idx} className="flex gap-4 group">
                    <div className="mt-1 w-6 h-6 rounded-full border border-white/20 flex items-center justify-center shrink-0 group-hover:bg-accent group-hover:border-accent transition-colors">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">{item.title}</h4>
                      <p className="text-primary-foreground/70 text-sm">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-white/10 to-white/5 rounded-3xl border border-white/15 p-8 flex items-center justify-center shadow-2xl shadow-primary/20">
                <div className="relative w-full h-full">
                  {/* Visual representation of neural network */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Cpu className="w-32 h-32 text-accent animate-pulse" />
                  </div>
                  <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-white rounded-full animate-ping" />
                  <div
                    className="absolute bottom-1/4 right-1/4 w-3 h-3 bg-accent rounded-full animate-ping"
                    style={{ animationDelay: "1s" }}
                  />
                  <svg className="w-full h-full opacity-25" viewBox="0 0 100 100">
                    <circle
                      cx="50"
                      cy="50"
                      r="45"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="0.5"
                      strokeDasharray="2 4"
                    />
                    <circle
                      cx="50"
                      cy="50"
                      r="30"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="0.5"
                      strokeDasharray="4 8"
                    />
                  </svg>
                </div>
              </div>
              <div className="absolute -bottom-10 -left-10 bg-white/15 backdrop-blur-sm p-6 rounded-2xl shadow-2xl border border-white/30 max-w-[200px] hidden md:block">
                <div className="text-3xl font-serif text-accent mb-1">99.8%</div>
                <div className="text-xs font-bold text-primary-foreground/80 uppercase tracking-widest">
                  Inference Accuracy
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* Sectors Section */}
      <section
        id="sectors"
        className="py-32 container mx-auto px-8 md:px-16 bg-gradient-to-br from-primary/8 via-secondary/10 to-accent/8 rounded-[3rem]"
      >
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-serif mb-6">Vertical Expertise</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            We deploy deep domain knowledge across specialized sectors to build software that understands your
            industry's unique language.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: GraduationCap,
              name: "EdTech",
              desc: "Adaptive learning platforms and AI-driven pedagogical tools for the modern classroom.",
            },
            {
              icon: Microscope,
              name: "Healthcare",
              desc: "HIPAA-compliant diagnostic aids and research data management systems powered by ML.",
            },
            {
              icon: Building2,
              name: "Real Estate",
              desc: "Intelligent property valuation models and automated facility management ecosystems.",
            },
            {
              icon: Cpu,
              name: "Manufacturing",
              desc: "Industrial IoT integrations and predictive maintenance for smart factory environments.",
            },
            {
              icon: ArrowUpRight,
              name: "Logistics",
              desc: "Complex route optimization and supply chain transparency through decentralized ledger tech.",
            },
            {
              icon: CheckCircle2,
              name: "Government",
              desc: "Secure civic infrastructure and digital transformation for large-scale public services.",
            },
          ].map((sector, idx) => (
            <div
              key={idx}
              className="group p-8 rounded-3xl border border-border/50 bg-gradient-to-br from-background to-background/80 hover:shadow-2xl hover:shadow-primary/20 hover:border-primary/50 transition-all duration-500 cursor-default"
            >
              <div className="w-12 h-12 rounded-2xl bg-primary/15 flex items-center justify-center text-primary mb-6 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-primary/30 transition-all">
                <sector.icon className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-serif mb-4">{sector.name}</h3>
              <p className="text-muted-foreground leading-relaxed text-sm mb-6">{sector.desc}</p>
              <Link
                href="/consultation"
                className="text-xs font-bold uppercase tracking-widest text-primary hover:text-accent hover:gap-2 flex items-center gap-2 transition-all"
              >
                Inquire Sector <ArrowUpRight className="w-3 h-3" />
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Trust & Capability (Classy) */}
      <section className="py-32 bg-gradient-to-br from-primary/8 via-secondary/5 to-accent/8 relative overflow-hidden">
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl shadow-primary/30">
            <img
              src="/pexels-fauxels-3184465.jpg"
              alt="Our Workspace"
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent mix-blend-multiply" />
          </div>

          <div>
            <h2 className="text-4xl md:text-5xl font-serif mb-8 leading-tight">
              A Partnership Built on <span className="text-primary italic">Certainty</span>
            </h2>
            <div className="space-y-12">
              <div className="flex gap-6">
                <div className="text-4xl font-serif text-primary opacity-70 shrink-0">01</div>
                <div>
                  <h4 className="text-xl font-bold mb-3">Architectural Rigor</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    We don't prototype; we architect. Every line of code is written with scalability, security, and
                    long-term maintainability as core requirements.
                  </p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="text-4xl font-serif text-primary opacity-70 shrink-0">02</div>
                <div>
                  <h4 className="text-xl font-bold mb-3">Elite Talent Only</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Our engineering team consists exclusively of senior-level developers and AI researchers with a track
                    record of delivering at scale.
                  </p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="text-4xl font-serif text-primary opacity-70 shrink-0">03</div>
                <div>
                  <h4 className="text-xl font-bold mb-3">Transparent Velocity</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Real-time collaboration and iterative delivery cycles ensure you are never in the dark about your
                    project's progress.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 container mx-auto px-6">
        <div className="bg-gradient-to-br from-primary via-primary/98 to-secondary rounded-[3rem] p-12 md:p-24 text-center text-primary-foreground relative overflow-hidden shadow-2xl shadow-primary/40">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,var(--accent)_0%,transparent_70%)] opacity-15" />
          <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-[radial-gradient(circle_at_bottom_right,var(--secondary)_0%,transparent_60%)] opacity-20" />
          <h2 className="text-4xl md:text-6xl font-serif mb-8 relative z-10">
            Ready to <span className="italic">Define</span> the Future?
          </h2>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-primary-foreground/90 leading-relaxed mb-12 relative z-10">
            Join the ranks of forward-thinking organizations leveraging Merqone's technical excellence and digital
            strategy to dominate their sectors.
          </p>
          <Button
            size="lg"
            className="rounded-full px-12 h-16 text-lg bg-accent text-accent-foreground hover:bg-accent/90 shadow-xl shadow-accent/40 hover:shadow-2xl hover:shadow-accent/50 relative z-10 transition-all hover:scale-105"
            asChild
          >
            <Link href="/consultation">Book an Executive Briefing</Link>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 border-t border-border bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-20">
            <div className="col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-6 h-6 bg-gradient-to-br from-primary via-secondary to-accent rounded-full shadow-lg shadow-primary/30" />
                <span className="text-xl font-bold tracking-tight bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                  MERQONE
                </span>
              </div>
              <p className="text-muted-foreground max-w-sm">
                Elite software engineering, AI consultancy, and custom solutions for global leaders. Built on trust,
                delivered with precision.
              </p>
            </div>
            <div>
              <h5 className="font-bold mb-6 uppercase tracking-widest text-xs text-primary">Expertise</h5>
              <ul className="space-y-4 text-sm text-muted-foreground">
                <li>
                  <Link href="/solutions/ai-machine-learning" className="hover:text-primary transition-colors">
                    AI & Machine Learning
                  </Link>
                </li>
                <li>
                  <Link href="/solutions/custom-software" className="hover:text-primary transition-colors">
                    Custom Software
                  </Link>
                </li>
                <li>
                  <Link href="/solutions/cloud-architecture" className="hover:text-primary transition-colors">
                    Cloud Architecture
                  </Link>
                </li>
                <li>
                  <Link href="/solutions/data-engineering" className="hover:text-primary transition-colors">
                    Data Engineering
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h5 className="font-bold mb-6 uppercase tracking-widest text-xs text-primary">Connect</h5>
              <ul className="space-y-4 text-sm text-muted-foreground">
                <li className="hover:text-primary cursor-pointer transition-colors">LinkedIn</li>
                <li className="hover:text-primary cursor-pointer transition-colors">Twitter</li>
                <li>
                  <Link href="/about" className="hover:text-primary transition-colors">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="/consultation" className="hover:text-primary transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-border text-xs text-muted-foreground uppercase tracking-widest">
            <span>© 2025 Merqone Solutions. All rights reserved.</span>
            <div className="flex gap-8 mt-4 md:mt-0">
              <span className="hover:text-primary cursor-pointer transition-colors">Privacy Policy</span>
              <span className="hover:text-primary cursor-pointer transition-colors">Terms of Service</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
