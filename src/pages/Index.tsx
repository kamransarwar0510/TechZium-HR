import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import {
  Users, Clock, DollarSign, Shield, Zap, Settings,
  Code, Heart, Puzzle, BarChart3, Globe, Award,
  ArrowRight, Star, ChevronRight
} from "lucide-react";

const benefits = [
  { icon: Code, title: "Open Source", desc: "Fully transparent, community-driven codebase you can audit and extend." },
  { icon: DollarSign, title: "Affordable", desc: "Enterprise features at a fraction of the cost of legacy HRMS solutions." },
  { icon: Settings, title: "Customizable", desc: "Tailor every workflow, form, and report to your organization's needs." },
  { icon: Puzzle, title: "Easy Integrations", desc: "Connect with your existing tools via REST APIs and webhooks." },
  { icon: Zap, title: "Frappe Powered", desc: "Built on the robust Frappe Framework for reliability and speed." },
  { icon: Globe, title: "All-in-One Suite", desc: "Recruitment to retirement — everything in a single platform." },
];

const features = [
  { icon: Users, title: "Employee Management", desc: "Centralized employee profiles, documents, and org charts.", href: "/modules/employee-management" },
  { icon: Clock, title: "Attendance & Leave", desc: "Smart tracking with geolocation, shift planning, and leave workflows.", href: "/modules/attendance-leave" },
  { icon: DollarSign, title: "Payroll & Finance", desc: "Automated salary processing, tax calculations, and payslips.", href: "/modules/payroll" },
  { icon: BarChart3, title: "Performance", desc: "Goal tracking, appraisals, and 360° feedback cycles.", href: "/modules" },
  { icon: Award, title: "Recruitment", desc: "Job postings, applicant tracking, and onboarding workflows.", href: "/modules" },
  { icon: Shield, title: "Compliance", desc: "Built-in regulatory compliance and audit-ready reporting.", href: "/modules" },
];

const testimonials = [
  { name: "Sarah Chen", role: "HR Director, Acme Corp", text: "Techzium HR transformed our HR operations. We reduced processing time by 60% in the first quarter.", rating: 5 },
  { name: "Raj Patel", role: "CTO, StartupFlow", text: "The open-source nature and customization options are unmatched. It fits perfectly into our tech stack.", rating: 5 },
  { name: "Maria Garcia", role: "People Ops, GreenLeaf", text: "Finally an HRMS that doesn't break the bank but still delivers enterprise-grade features.", rating: 5 },
];

const faqs = [
  { q: "Is Techzium HR really open source?", a: "Yes, Techzium HR is 100% open source under the MIT license. You can view, modify, and distribute the code freely." },
  { q: "How long does implementation take?", a: "Most organizations are up and running within 2-4 weeks, depending on the complexity of their HR workflows and data migration needs." },
  { q: "Can I integrate it with my existing tools?", a: "Absolutely. Techzium HR supports REST APIs, webhooks, and has pre-built integrations with popular tools like ERPNext, Slack, and accounting software." },
  { q: "What kind of support do you offer?", a: "We offer community support, documentation, and premium support plans with dedicated account managers and SLAs." },
  { q: "Is my data secure?", a: "Security is a top priority. We use encryption at rest and in transit, role-based access controls, and provide full audit logs." },
];

const trustedBy = ["TechCorp", "InnovateCo", "GlobalHR", "FutureLabs", "ScaleUp"];

const Index = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-96 h-96 bg-primary rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-20 w-72 h-72 bg-accent rounded-full blur-3xl" />
        </div>
        <div className="container relative py-24 md:py-36 lg:py-44">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >
            <span className="inline-block mb-4 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider rounded-full bg-primary/20 text-primary border border-primary/30">
              Modern HRMS Platform
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display text-primary-foreground leading-tight">
              Modern HRMS for{" "}
              <span className="text-gradient">Agile Teams</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-primary-foreground/70 max-w-2xl leading-relaxed">
              Streamline your entire HR lifecycle — from recruitment to retirement — with a powerful, open-source platform built for modern organizations.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button size="lg" className="gradient-teal border-0 text-base px-8" asChild>
                <Link to="/contact">Get Started Free <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
              <Button size="lg" variant="outline" className="text-base px-8 border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10" asChild>
                <Link to="/overview">Learn More</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trusted By */}
      <section className="py-12 border-b border-border bg-muted/50">
        <div className="container">
          <p className="text-center text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-6">
            Trusted by forward-thinking companies
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            {trustedBy.map((name) => (
              <span key={name} className="text-lg font-display font-semibold text-muted-foreground/50">
                {name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Why Techzium */}
      <section className="py-20 md:py-28">
        <div className="container">
          <SectionHeading
            badge="Why Techzium HR"
            title="Everything You Need to Manage Your People"
            description="A comprehensive, affordable, and customizable HR solution built on open-source technology."
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((b, i) => (
              <motion.div
                key={b.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <Card className="h-full border-border/50 hover:border-primary/30 hover:shadow-lg transition-all duration-300 group">
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

      {/* Features Grid */}
      <section className="py-20 md:py-28 bg-muted/30">
        <div className="container">
          <SectionHeading
            badge="Core Modules"
            title="Powerful Modules for Every HR Need"
            description="From hiring to payroll, every module is designed to simplify your HR workflows."
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <Link to={f.href}>
                  <Card className="h-full border-border/50 hover:border-primary/30 hover:shadow-lg transition-all duration-300 group cursor-pointer">
                    <CardContent className="p-6">
                      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        <f.icon className="h-6 w-6" />
                      </div>
                      <h3 className="font-display font-semibold text-lg text-foreground mb-2 group-hover:text-primary transition-colors flex items-center gap-2">
                        {f.title} <ChevronRight className="h-4 w-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 md:py-28">
        <div className="container">
          <SectionHeading
            badge="Testimonials"
            title="Loved by HR Teams Worldwide"
            description="See what our customers say about Techzium HR."
          />
          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.15 }}
              >
                <Card className="h-full border-border/50">
                  <CardContent className="p-6">
                    <div className="flex gap-1 mb-4">
                      {Array.from({ length: t.rating }).map((_, j) => (
                        <Star key={j} className="h-4 w-4 fill-accent text-accent" />
                      ))}
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">"{t.text}"</p>
                    <div>
                      <p className="font-semibold text-sm text-foreground">{t.name}</p>
                      <p className="text-xs text-muted-foreground">{t.role}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-28 bg-muted/30">
        <div className="container max-w-3xl">
          <SectionHeading
            badge="FAQ"
            title="Frequently Asked Questions"
            description="Got questions? We've got answers."
          />
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="border-border/50">
                <AccordionTrigger className="text-left font-display font-medium hover:no-underline hover:text-primary">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="gradient-hero py-20 md:py-28">
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold font-display text-primary-foreground mb-4">
              Ready to Ease Your HR Ops?
            </h2>
            <p className="text-lg text-primary-foreground/70 mb-8 max-w-xl mx-auto">
              Join thousands of organizations using Techzium HR to streamline their people operations.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="gradient-teal border-0 text-base px-8" asChild>
                <Link to="/contact">Start Free Trial <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
              <Button size="lg" variant="outline" className="text-base px-8 border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10" asChild>
                <Link to="/contact">Contact Sales</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
