import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import { DollarSign, FileText, Shield, TrendingUp, Calculator, CheckCircle } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from "recharts";

const payrollData = [
  { month: "Jul", cost: 285000 },
  { month: "Aug", cost: 290000 },
  { month: "Sep", cost: 288000 },
  { month: "Oct", cost: 295000 },
  { month: "Nov", cost: 310000 },
  { month: "Dec", cost: 305000 },
];

const payslipFields = [
  { label: "Basic Salary", amount: "$5,000.00" },
  { label: "Housing Allowance", amount: "$1,200.00" },
  { label: "Transport Allowance", amount: "$500.00" },
  { label: "Medical Insurance", amount: "$350.00" },
  { label: "Tax Deduction", amount: "-$850.00" },
  { label: "Pension (Employee)", amount: "-$400.00" },
  { label: "Net Pay", amount: "$5,800.00", bold: true },
];

const features = [
  { icon: Calculator, title: "Automated Calculations", desc: "Salaries, taxes, deductions, and benefits calculated automatically with zero errors." },
  { icon: FileText, title: "Payslip Generation", desc: "Professional payslips generated and distributed digitally to every employee." },
  { icon: Shield, title: "Tax Compliance", desc: "Stay compliant with local tax regulations and statutory deductions." },
  { icon: TrendingUp, title: "Cost Analytics", desc: "Track payroll costs over time with detailed analytics and trend reports." },
];

const Payroll = () => {
  return (
    <Layout>
      <section className="gradient-hero py-20 md:py-28">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-3xl">
            <span className="inline-block mb-4 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider rounded-full bg-primary/20 text-primary border border-primary/30">
              Payroll & Finance
            </span>
            <h1 className="text-4xl md:text-5xl font-bold font-display text-primary-foreground leading-tight">
              Effortless <span className="text-gradient">Payroll</span> Processing
            </h1>
            <p className="mt-6 text-lg text-primary-foreground/70 max-w-2xl leading-relaxed">
              Automate salary calculations, generate payslips, and ensure compliance — all with a few clicks.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 md:py-28">
        <div className="container">
          <SectionHeading badge="Features" title="Payroll Made Simple" description="Powerful payroll tools that save time and eliminate errors." />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((f, i) => (
              <motion.div key={f.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.1 }}>
                <Card className="h-full border-border/50 hover:border-primary/30 transition-all group text-center">
                  <CardContent className="p-6">
                    <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl gradient-teal text-primary-foreground group-hover:scale-110 transition-transform">
                      <f.icon className="h-6 w-6" />
                    </div>
                    <h3 className="font-display font-semibold text-foreground mb-2">{f.title}</h3>
                    <p className="text-sm text-muted-foreground">{f.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Payroll Dashboard Mockup */}
      <section className="py-20 md:py-28 bg-muted/30">
        <div className="container">
          <SectionHeading badge="Dashboard" title="Monthly Payroll Cost Trend" description="Monitor your payroll expenses with real-time analytics." />
          <Card className="max-w-3xl mx-auto border-border/50">
            <CardContent className="p-6">
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={payrollData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" fontSize={12} />
                  <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} tickFormatter={(v) => `$${(v / 1000).toFixed(0)}k`} />
                  <Tooltip formatter={(value: number) => [`$${value.toLocaleString()}`, "Payroll Cost"]} contentStyle={{ backgroundColor: "hsl(var(--card))", border: "1px solid hsl(var(--border))", borderRadius: "8px" }} />
                  <Bar dataKey="cost" fill="hsl(199, 89%, 40%)" radius={[6, 6, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Payslip Template */}
      <section className="py-20 md:py-28">
        <div className="container">
          <SectionHeading badge="Payslip" title="Sample Payslip" description="Clean, professional payslips generated automatically for every employee." />
          <Card className="max-w-lg mx-auto border-border/50">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-border">
                <div>
                  <h3 className="font-display font-bold text-foreground">Techzium HR</h3>
                  <p className="text-xs text-muted-foreground">Payslip for January 2026</p>
                </div>
                <div className="flex h-10 w-10 items-center justify-center rounded-lg gradient-teal">
                  <span className="text-sm font-bold text-primary-foreground font-display">T</span>
                </div>
              </div>
              <div className="mb-4 pb-4 border-b border-border">
                <p className="text-sm"><span className="text-muted-foreground">Employee:</span> <span className="font-medium text-foreground">Alice Johnson</span></p>
                <p className="text-sm"><span className="text-muted-foreground">ID:</span> <span className="font-mono text-foreground">EMP-001</span></p>
              </div>
              <div className="space-y-3">
                {payslipFields.map((f) => (
                  <div key={f.label} className={`flex justify-between text-sm ${f.bold ? "pt-3 border-t border-border font-bold text-foreground" : "text-muted-foreground"}`}>
                    <span>{f.label}</span>
                    <span className={f.bold ? "text-primary" : f.amount.startsWith("-") ? "text-destructive" : "text-foreground"}>{f.amount}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </Layout>
  );
};

export default Payroll;
