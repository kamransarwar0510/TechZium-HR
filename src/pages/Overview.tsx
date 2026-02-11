import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import {
  Code, DollarSign, Settings, Puzzle, Zap, Globe,
  Users, TrendingUp, Clock, Shield
} from "lucide-react";

const benefits = [
  { icon: Code, title: "Open Source", desc: "Full transparency with a community-driven codebase. Audit, modify, and extend as you see fit." },
  { icon: DollarSign, title: "Affordable Pricing", desc: "Enterprise-grade HR at a fraction of the cost. No hidden fees or per-user pricing traps." },
  { icon: Settings, title: "Deeply Customizable", desc: "Custom fields, workflows, print formats, and dashboards — tailored to your exact needs." },
  { icon: Puzzle, title: "Easy Integrations", desc: "REST APIs, webhooks, and pre-built connectors for seamless connectivity with your tech stack." },
  { icon: Zap, title: "Frappe Framework", desc: "Built on the proven Frappe Framework for speed, reliability, and developer-friendliness." },
  { icon: Globe, title: "All-in-One Suite", desc: "Recruitment, onboarding, attendance, payroll, performance — all under one roof." },
];

const stats = [
  { value: "50,000+", label: "Employees Managed", icon: Users },
  { value: "99.9%", label: "Uptime SLA", icon: TrendingUp },
  { value: "60%", label: "Time Saved on HR Tasks", icon: Clock },
  { value: "100%", label: "Data Encryption", icon: Shield },
];

const capabilities = [
  "Employee Lifecycle Management",
  "Automated Payroll Processing",
  "Smart Attendance Tracking",
  "Leave Management System",
  "Performance Appraisals",
  "Recruitment & Onboarding",
  "Custom Reports & Analytics",
  "Role-Based Access Control",
];

const Overview = () => {
  return (
    <Layout>
      <section className="gradient-hero py-20 md:py-28">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-3xl">
            <span className="inline-block mb-4 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider rounded-full bg-primary/20 text-primary border border-primary/30">
              Overview
            </span>
            <h1 className="text-4xl md:text-5xl font-bold font-display text-primary-foreground leading-tight">
              Why <span className="text-gradient">Techzium HR</span>?
            </h1>
            <p className="mt-6 text-lg text-primary-foreground/70 max-w-2xl leading-relaxed">
              A comprehensive look at what makes Techzium HR the best choice for modern organizations looking to streamline their HR operations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 md:py-28">
        <div className="container">
          <SectionHeading badge="Benefits" title="Built for Modern HR Teams" description="Six core principles that make Techzium HR stand out from the competition." />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((b, i) => (
              <motion.div key={b.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.1 }}>
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

      {/* Stats */}
      <section className="py-20 md:py-28 bg-muted/30">
        <div className="container">
          <SectionHeading badge="By the Numbers" title="Trusted at Scale" description="The numbers speak for themselves." />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((s, i) => (
              <motion.div key={s.label} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.1 }}>
                <Card className="text-center border-border/50">
                  <CardContent className="p-6">
                    <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <s.icon className="h-6 w-6" />
                    </div>
                    <p className="text-3xl font-bold font-display text-foreground">{s.value}</p>
                    <p className="text-sm text-muted-foreground mt-1">{s.label}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-20 md:py-28">
        <div className="container">
          <SectionHeading badge="Capabilities" title="System Overview" description="Everything your HR team needs in one platform." />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {capabilities.map((cap, i) => (
              <motion.div key={cap} initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.3, delay: i * 0.05 }}>
                <div className="flex items-center gap-3 p-4 rounded-lg bg-muted/50 border border-border/50 hover:border-primary/30 transition-colors">
                  <div className="h-2 w-2 rounded-full gradient-teal shrink-0" />
                  <span className="text-sm font-medium text-foreground">{cap}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Overview;
