import { ArrowLeft, Cpu, Cloud, Database, Code2, CheckCircle2 } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { notFound } from "next/navigation"

const solutions = {
  "ai-machine-learning": {
    title: "AI & Machine Learning",
    description: "Architecting the future of intelligence with custom-built neural systems and generative foundations.",
    icon: Cpu,
    details: [
      "Custom LLM Fine-tuning & Deployment",
      "Predictive Analytics Engines",
      "Computer Vision Systems",
      "Reinforcement Learning for Process Optimization",
    ],
    content:
      "Our AI systems are built for the enterprise—where accuracy, security, and scalability are non-negotiable. We move beyond simple API integrations to build proprietary models that give your organization a distinct competitive edge.",
  },
  "custom-software": {
    title: "Custom Software",
    description:
      "High-performance applications engineered for critical business ambitions and seamless user experiences.",
    icon: Code2,
    details: [
      "Enterprise Resource Planning (ERP)",
      "Bespoke SaaS Platforms",
      "Mission-Critical Internal Tools",
      "High-Load Web & Mobile Architectures",
    ],
    content:
      "We build software that scales as fast as your vision. Using modern stacks and architectural patterns, we deliver solutions that are robust enough for global deployment while remaining flexible enough for future pivots.",
  },
  "cloud-architecture": {
    title: "Cloud Architecture",
    description: "Robust, scalable, and secure cloud infrastructure designed for high-availability global operations.",
    icon: Cloud,
    details: [
      "Multi-Cloud & Hybrid Strategies",
      "Serverless & Microservices Design",
      "Automated CI/CD Pipelines",
      "Security Audits & Compliance Mapping",
    ],
    content:
      "Cloud is the bedrock of digital transformation. We design infrastructure that is self-healing, cost-optimized, and resilient to the most demanding workloads, ensuring your services are always available to your users.",
  },
  "data-engineering": {
    title: "Data Engineering",
    description:
      "Transforming raw data into strategic assets through sophisticated pipelines and warehousing solutions.",
    icon: Database,
    details: [
      "Real-time ETL Pipelines",
      "Data Lake & Warehouse Architecture",
      "Governance & Privacy Frameworks",
      "Business Intelligence Integrations",
    ],
    content:
      "Data is only as valuable as it is accessible. We engineer the pipelines that clean, structure, and transport your data, turning fragmented information into a unified source of truth for your business intelligence.",
  },
}

export default async function SolutionPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const solution = solutions[slug as keyof typeof solutions]

  if (!solution) notFound()

  return (
    <div className="min-h-screen bg-background pt-32 pb-20">
      <div className="container mx-auto px-6">
        <Link
          href="/"
          className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-primary transition-colors mb-12 group"
        >
          <ArrowLeft className="mr-2 w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </Link>

        <div className="grid lg:grid-cols-2 gap-20 items-center mb-24">
          <div>
            <div className="w-16 h-16 rounded-2xl bg-primary/5 flex items-center justify-center text-primary mb-8">
              <solution.icon className="w-8 h-8" />
            </div>
            <h1 className="text-5xl md:text-7xl font-serif mb-8 leading-tight">{solution.title}</h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-10">{solution.description}</p>
            <Button size="lg" className="rounded-full px-8 h-14" asChild>
              <Link href="/consultation">Discuss Your Requirements</Link>
            </Button>
          </div>

          <div className="bg-primary/10 rounded-[3rem] p-10 md:p-16 border border-border/50">
            <h3 className="text-2xl font-serif mb-8">Capabilities</h3>
            <ul className="space-y-6">
              {solution.details.map((detail, idx) => (
                <li key={idx} className="flex items-center gap-4 text-lg">
                  <CheckCircle2 className="text-accent w-5 h-5 shrink-0" />
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="max-w-3xl">
          <h2 className="text-3xl font-serif mb-6">Our Approach</h2>
          <p className="text-lg text-muted-foreground leading-relaxed whitespace-pre-line">{solution.content}</p>
        </div>
      </div>
    </div>
  )
}
