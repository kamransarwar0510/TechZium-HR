import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import { MapPin, Wifi, Clock, Calendar, CheckCircle, XCircle, AlertCircle, Users } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const attendanceFeatures = [
  { icon: Wifi, title: "Remote Check-in", desc: "Employees can check in from anywhere with verification." },
  { icon: MapPin, title: "Geolocation Tracking", desc: "Optional GPS-based attendance verification for field teams." },
  { icon: Clock, title: "Shift Planning", desc: "Create and manage multiple shifts with rotation schedules." },
  { icon: Calendar, title: "Calendar View", desc: "Visual calendar showing attendance patterns and trends." },
];

const leaveBalances = [
  { type: "Annual Leave", total: 20, used: 8, color: "bg-blue-500" },
  { type: "Sick Leave", total: 12, used: 3, color: "bg-amber-500" },
  { type: "Personal Leave", total: 5, used: 2, color: "bg-emerald-500" },
  { type: "Work from Home", total: 24, used: 10, color: "bg-purple-500" },
];

const weekDays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
const calendarWeeks = [
  ["P", "P", "P", "P", "P", "-", "-"],
  ["P", "P", "L", "L", "P", "-", "-"],
  ["P", "P", "P", "P", "P", "-", "-"],
  ["P", "A", "P", "P", "P", "-", "-"],
];

const stats = [
  { label: "Present Today", value: "142", icon: CheckCircle, color: "text-emerald-500" },
  { label: "On Leave", value: "12", icon: XCircle, color: "text-amber-500" },
  { label: "Absent", value: "3", icon: AlertCircle, color: "text-destructive" },
  { label: "Total Employees", value: "157", icon: Users, color: "text-primary" },
];

const AttendanceLeave = () => {
  return (
    <Layout>
      <section className="gradient-hero py-20 md:py-28">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-3xl">
            <span className="inline-block mb-4 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider rounded-full bg-primary/20 text-primary border border-primary/30">
              Attendance & Leave
            </span>
            <h1 className="text-4xl md:text-5xl font-bold font-display text-primary-foreground leading-tight">
              Smart <span className="text-gradient">Attendance</span> Tracking
            </h1>
            <p className="mt-6 text-lg text-primary-foreground/70 max-w-2xl leading-relaxed">
              Track attendance with geolocation, manage shifts, and streamline leave requests — all in one powerful module.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 border-b border-border">
        <div className="container">
          <div className="grid gap-4 grid-cols-2 lg:grid-cols-4">
            {stats.map((s) => (
              <Card key={s.label} className="border-border/50">
                <CardContent className="p-5 flex items-center gap-4">
                  <s.icon className={`h-8 w-8 ${s.color}`} />
                  <div>
                    <p className="text-2xl font-bold font-display text-foreground">{s.value}</p>
                    <p className="text-xs text-muted-foreground">{s.label}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Smart Features */}
      <section className="py-20 md:py-28">
        <div className="container">
          <SectionHeading badge="Features" title="Smart Attendance Features" description="Modern attendance tracking designed for today's hybrid workforce." />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {attendanceFeatures.map((f, i) => (
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

      {/* Calendar Mockup */}
      <section className="py-20 md:py-28 bg-muted/30">
        <div className="container">
          <SectionHeading badge="Calendar" title="Attendance Calendar View" description="Visualize attendance patterns at a glance." />
          <Card className="max-w-2xl mx-auto border-border/50">
            <CardContent className="p-6">
              <div className="grid grid-cols-7 gap-2 mb-2">
                {weekDays.map((d) => (
                  <div key={d} className="text-center text-xs font-semibold text-muted-foreground py-2">{d}</div>
                ))}
              </div>
              {calendarWeeks.map((week, wi) => (
                <div key={wi} className="grid grid-cols-7 gap-2 mb-2">
                  {week.map((status, di) => (
                    <div
                      key={di}
                      className={`h-10 rounded-md flex items-center justify-center text-xs font-semibold ${
                        status === "P" ? "bg-emerald-100 text-emerald-700" :
                        status === "A" ? "bg-red-100 text-red-700" :
                        status === "L" ? "bg-amber-100 text-amber-700" :
                        "bg-muted text-muted-foreground"
                      }`}
                    >
                      {status}
                    </div>
                  ))}
                </div>
              ))}
              <div className="flex gap-4 mt-4 text-xs text-muted-foreground">
                <span className="flex items-center gap-1"><span className="w-3 h-3 rounded bg-emerald-100" /> Present</span>
                <span className="flex items-center gap-1"><span className="w-3 h-3 rounded bg-amber-100" /> Leave</span>
                <span className="flex items-center gap-1"><span className="w-3 h-3 rounded bg-red-100" /> Absent</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Leave Balances */}
      <section className="py-20 md:py-28">
        <div className="container">
          <SectionHeading badge="Leave Management" title="Leave Balance & Tracking" description="Employees can view balances and request leaves with automated workflows." />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 max-w-4xl mx-auto">
            {leaveBalances.map((lb, i) => (
              <motion.div key={lb.type} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.1 }}>
                <Card className="border-border/50">
                  <CardContent className="p-5">
                    <p className="text-sm font-medium text-foreground mb-3">{lb.type}</p>
                    <div className="flex items-end justify-between mb-2">
                      <span className="text-2xl font-bold font-display text-foreground">{lb.total - lb.used}</span>
                      <span className="text-xs text-muted-foreground">/ {lb.total} days</span>
                    </div>
                    <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                      <div className={`h-full ${lb.color} rounded-full transition-all`} style={{ width: `${(lb.used / lb.total) * 100}%` }} />
                    </div>
                    <p className="text-xs text-muted-foreground mt-2">{lb.used} used</p>
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

export default AttendanceLeave;
