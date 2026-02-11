import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import { Users, Clock, DollarSign, BarChart3, Award, Shield, ArrowRight } from "lucide-react";

const modules = [
  { icon: Users, title: "Employee Management", desc: "Centralized employee profiles, document management, organizational hierarchy, and self-service portals for your entire workforce.", href: "/modules/employee-management", color: "bg-blue-500/10 text-blue-600" },
  { icon: Clock, title: "Attendance & Leave", desc: "Smart attendance tracking with geolocation, shift planning, leave balance management, and approval workflows.", href: "/modules/attendance-leave", color: "bg-amber-700/10 text-amber-700" },
  { icon: DollarSign, title: "Payroll & Finance", desc: "Automated salary processing, tax calculations, payslip generation, and compliance with local regulations.", href: "/modules/payroll", color: "bg-amber-500/10 text-amber-600" },
  { icon: BarChart3, title: "Performance Management", desc: "Goal setting, KPI tracking, 360° feedback, appraisal cycles, and continuous performance monitoring.", href: "/modules", color: "bg-purple-500/10 text-purple-600" },
  { icon: Award, title: "Recruitment", desc: "Job postings, applicant tracking, interview scheduling, offer management, and seamless onboarding.", href: "/modules", color: "bg-rose-500/10 text-rose-600" },
  { icon: Shield, title: "Compliance & Security", desc: "Role-based access, audit trails, data encryption, and built-in regulatory compliance frameworks.", href: "/modules", color: "bg-cyan-500/10 text-cyan-600" },
];

const Modules = () => {
  return (
    <Layout>
      <section className="gradient-hero py-20 md:py-28">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-3xl">
            <span className="inline-block mb-4 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider rounded-full bg-primary/20 text-primary border border-primary/30">
              Core Modules
            </span>
            <h1 className="text-4xl md:text-5xl font-bold font-display text-primary-foreground leading-tight">
              Powerful <span className="text-gradient">HR Modules</span>
            </h1>
            <p className="mt-6 text-lg text-primary-foreground/70 max-w-2xl leading-relaxed">
              Six core modules designed to handle every aspect of your HR operations, from hiring to retirement.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {modules.map((m, i) => (
              <motion.div key={m.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.1 }}>
                <Card className="h-full border-border/50 hover:border-primary/30 hover:shadow-xl transition-all duration-300 group">
                  <CardContent className="p-8">
                    <div className={`mb-5 flex h-14 w-14 items-center justify-center rounded-2xl ${m.color} group-hover:scale-110 transition-transform`}>
                      <m.icon className="h-7 w-7" />
                    </div>
                    <h3 className="font-display font-semibold text-xl text-foreground mb-3">{m.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-5">{m.desc}</p>
                    <Button variant="ghost" size="sm" className="text-primary hover:text-primary p-0 h-auto" asChild>
                      <Link to={m.href} className="flex items-center gap-1">
                        Learn More <ArrowRight className="h-3 w-3" />
                      </Link>
                    </Button>
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

export default Modules;
