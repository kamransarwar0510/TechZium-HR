import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import { Code, DollarSign, Settings, Puzzle, Zap, Globe, ArrowRight, Check, X } from "lucide-react";

const benefits = [
  { icon: Code, title: "Open Source", desc: "Full codebase transparency. Audit, customize, and contribute to the community." },
  { icon: DollarSign, title: "Cost Effective", desc: "No per-user licensing fees. Enterprise features at startup-friendly prices." },
  { icon: Settings, title: "Highly Customizable", desc: "Custom workflows, fields, reports, and dashboards tailored to your org." },
  { icon: Puzzle, title: "Seamless Integrations", desc: "REST APIs, webhooks, and pre-built connectors for your entire tech stack." },
  { icon: Zap, title: "Lightning Fast", desc: "Built on Frappe Framework for blazing performance and reliability." },
  { icon: Globe, title: "Complete Suite", desc: "From recruitment to retirement — every HR function in one platform." },
];

const comparison = [
  { feature: "Open Source", techzium: true, traditional: false },
  { feature: "No Per-User Fees", techzium: true, traditional: false },
  { feature: "Custom Workflows", techzium: true, traditional: false },
  { feature: "REST API Access", techzium: true, traditional: true },
  { feature: "Self-Hosted Option", techzium: true, traditional: false },
  { feature: "Mobile Friendly", techzium: true, traditional: true },
  { feature: "Automated Payroll", techzium: true, traditional: true },
  { feature: "Real-time Analytics", techzium: true, traditional: false },
];

const WhyTechzium = () => {
  return (
    <Layout>
      <section className="gradient-hero py-20 md:py-28">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-3xl">
            <span className="inline-block mb-4 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider rounded-full bg-primary/20 text-primary border border-primary/30">
              Why Techzium
            </span>
            <h1 className="text-4xl md:text-5xl font-bold font-display text-primary-foreground leading-tight">
              Why Choose <span className="text-gradient">Techzium HR</span>?
            </h1>
            <p className="mt-6 text-lg text-primary-foreground/70 max-w-2xl leading-relaxed">
              See how Techzium HR stacks up against traditional HRMS solutions and why modern organizations are making the switch.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-20 md:py-28">
        <div className="container">
          <SectionHeading badge="Benefits" title="6 Reasons to Choose Techzium" description="What sets us apart from the rest." />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((b, i) => (
              <motion.div key={b.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.1 }}>
                <Card className="h-full border-border/50 hover:border-primary/30 hover:shadow-lg transition-all group">
                  <CardContent className="p-6">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl gradient-teal text-primary-foreground group-hover:scale-110 transition-transform">
                      <b.icon className="h-6 w-6" />
                    </div>
                    <h3 className="font-display font-semibold text-lg text-foreground mb-2">{b.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{b.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="py-20 md:py-28 bg-muted/30">
        <div className="container">
          <SectionHeading badge="Comparison" title="Techzium vs. Traditional HRMS" description="A side-by-side comparison." />
          <Card className="max-w-2xl mx-auto border-border/50 overflow-hidden">
            <CardContent className="p-0">
              <div className="grid grid-cols-3 bg-muted/50 p-4 text-sm font-semibold border-b border-border">
                <span className="text-foreground">Feature</span>
                <span className="text-center text-primary font-display">Techzium HR</span>
                <span className="text-center text-muted-foreground">Traditional</span>
              </div>
              {comparison.map((c, i) => (
                <div key={c.feature} className={`grid grid-cols-3 p-4 text-sm items-center ${i < comparison.length - 1 ? "border-b border-border/50" : ""}`}>
                  <span className="text-foreground font-medium">{c.feature}</span>
                  <span className="text-center">
                    {c.techzium ? <Check className="h-5 w-5 text-emerald-500 mx-auto" /> : <X className="h-5 w-5 text-muted-foreground mx-auto" />}
                  </span>
                  <span className="text-center">
                    {c.traditional ? <Check className="h-5 w-5 text-emerald-500 mx-auto" /> : <X className="h-5 w-5 text-muted-foreground mx-auto" />}
                  </span>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA */}
      <section className="gradient-hero py-20 md:py-28">
        <div className="container text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <h2 className="text-3xl md:text-4xl font-bold font-display text-primary-foreground mb-4">
              Ready to Make the Switch?
            </h2>
            <p className="text-lg text-primary-foreground/70 mb-8 max-w-xl mx-auto">
              Join the growing list of organizations using Techzium HR.
            </p>
            <Button size="lg" className="gradient-teal border-0 text-base px-8" asChild>
              <Link to="/contact">Get Started <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default WhyTechzium;
