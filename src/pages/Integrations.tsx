import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import { Plug, BarChart3, Shield, Globe, Webhook, FileJson, Lock, Eye, History, KeyRound } from "lucide-react";

const integrations = [
  { icon: Globe, title: "ERPNext", desc: "Deep native integration with ERPNext for unified business operations." },
  { icon: FileJson, title: "REST APIs", desc: "Full REST API access for custom integrations with any platform." },
  { icon: Webhook, title: "Webhooks", desc: "Real-time event notifications to trigger external workflows." },
  { icon: Plug, title: "Third-Party Apps", desc: "Pre-built connectors for Slack, Google Workspace, and more." },
];

const reportingFeatures = [
  { title: "Custom Dashboards", desc: "Build dashboards with the metrics that matter to your organization." },
  { title: "Scheduled Reports", desc: "Automate report delivery to stakeholders on a daily, weekly, or monthly basis." },
  { title: "Data Export", desc: "Export any report or dataset in CSV, Excel, or PDF formats." },
  { title: "Real-time Analytics", desc: "Live data views with automatic refresh and drill-down capabilities." },
];

const securityFeatures = [
  { icon: Lock, title: "Data Encryption", desc: "AES-256 encryption at rest and TLS 1.3 in transit." },
  { icon: KeyRound, title: "Role-Based Access", desc: "Granular permissions at field, document, and module level." },
  { icon: History, title: "Audit Logs", desc: "Complete activity history for every action and data change." },
  { icon: Eye, title: "Data Privacy", desc: "GDPR-ready with data anonymization and right-to-delete support." },
];

const Integrations = () => {
  return (
    <Layout>
      <section className="gradient-hero py-20 md:py-28">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-3xl">
            <span className="inline-block mb-4 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider rounded-full bg-primary/20 text-primary border border-primary/30">
              Integrations & Security
            </span>
            <h1 className="text-4xl md:text-5xl font-bold font-display text-primary-foreground leading-tight">
              Connect, Report, <span className="text-gradient">Secure</span>
            </h1>
            <p className="mt-6 text-lg text-primary-foreground/70 max-w-2xl leading-relaxed">
              Seamless integrations, advanced reporting, and enterprise-grade security to protect your most valuable asset — your people data.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Integrations */}
      <section className="py-20 md:py-28">
        <div className="container">
          <SectionHeading badge="Integrations" title="Seamless Connectivity" description="Connect Techzium HR with your existing tech stack." />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {integrations.map((item, i) => (
              <motion.div key={item.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.1 }}>
                <Card className="h-full border-border/50 hover:border-primary/30 transition-all group text-center">
                  <CardContent className="p-6">
                    <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl gradient-teal text-primary-foreground group-hover:scale-110 transition-transform">
                      <item.icon className="h-6 w-6" />
                    </div>
                    <h3 className="font-display font-semibold text-foreground mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Reporting */}
      <section className="py-20 md:py-28 bg-muted/30">
        <div className="container">
          <SectionHeading badge="Reporting" title="Advanced Analytics & Reporting" description="Actionable insights to drive better HR decisions." />
          <div className="grid gap-6 sm:grid-cols-2 max-w-3xl mx-auto">
            {reportingFeatures.map((rf, i) => (
              <motion.div key={rf.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.1 }}>
                <Card className="h-full border-border/50 hover:border-primary/30 transition-colors">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="h-2 w-2 rounded-full gradient-teal" />
                      <h3 className="font-display font-semibold text-foreground">{rf.title}</h3>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">{rf.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Security */}
      <section className="py-20 md:py-28">
        <div className="container">
          <SectionHeading badge="Security" title="Enterprise-Grade Security" description="Your data is protected with industry-leading security standards." />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {securityFeatures.map((sf, i) => (
              <motion.div key={sf.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.1 }}>
                <Card className="h-full border-border/50 hover:border-primary/30 transition-all group text-center">
                  <CardContent className="p-6">
                    <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-secondary text-secondary-foreground group-hover:scale-110 transition-transform">
                      <sf.icon className="h-6 w-6" />
                    </div>
                    <h3 className="font-display font-semibold text-foreground mb-2">{sf.title}</h3>
                    <p className="text-sm text-muted-foreground">{sf.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Integrations;
