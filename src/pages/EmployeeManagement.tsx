import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import { Users, UserCheck, Shield, Settings, Database, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const employees = [
  { id: "EMP-001", name: "Alice Johnson", dept: "Engineering", role: "Senior Developer", status: "Active" },
  { id: "EMP-002", name: "Bob Smith", dept: "Marketing", role: "Marketing Lead", status: "Active" },
  { id: "EMP-003", name: "Carol Williams", dept: "HR", role: "HR Manager", status: "Active" },
  { id: "EMP-004", name: "David Brown", dept: "Finance", role: "Financial Analyst", status: "On Leave" },
  { id: "EMP-005", name: "Eve Davis", dept: "Engineering", role: "QA Engineer", status: "Active" },
  { id: "EMP-006", name: "Frank Miller", dept: "Sales", role: "Sales Executive", status: "Active" },
];

const highlights = [
  { icon: UserCheck, title: "Self-Service Portal", desc: "Employees can update their info, request documents, and manage their profiles independently." },
  { icon: Shield, title: "Role-Based Compliance", desc: "Granular permissions ensure sensitive data is only visible to authorized personnel." },
  { icon: Settings, title: "Customizable Fields", desc: "Add custom fields and sections to employee profiles to capture organization-specific data." },
  { icon: Database, title: "Centralized Records", desc: "Store all employee documents, certifications, and records in one secure location." },
];

const EmployeeManagement = () => {
  const [search, setSearch] = useState("");
  const filtered = employees.filter((e) =>
    e.name.toLowerCase().includes(search.toLowerCase()) || e.dept.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Layout>
      <section className="gradient-hero py-20 md:py-28">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-3xl">
            <span className="inline-block mb-4 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider rounded-full bg-primary/20 text-primary border border-primary/30">
              Employee Management
            </span>
            <h1 className="text-4xl md:text-5xl font-bold font-display text-primary-foreground leading-tight">
              Manage Your <span className="text-gradient">People</span> Effortlessly
            </h1>
            <p className="mt-6 text-lg text-primary-foreground/70 max-w-2xl leading-relaxed">
              Centralized employee profiles, documents, and organizational hierarchy. Everything you need to manage your workforce in one place.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Employee Directory Mockup */}
      <section className="py-20 md:py-28">
        <div className="container">
          <SectionHeading badge="Directory" title="Employee Directory" description="Search and filter your entire workforce at a glance." />
          <Card className="border-border/50">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="relative flex-1 max-w-sm">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input placeholder="Search employees..." className="pl-9" value={search} onChange={(e) => setSearch(e.target.value)} />
                </div>
                <Badge variant="secondary" className="hidden sm:inline-flex">{filtered.length} employees</Badge>
              </div>
              <div className="rounded-lg border border-border/50 overflow-hidden">
                <Table>
                  <TableHeader>
                    <TableRow className="bg-muted/50">
                      <TableHead>ID</TableHead>
                      <TableHead>Name</TableHead>
                      <TableHead className="hidden sm:table-cell">Department</TableHead>
                      <TableHead className="hidden md:table-cell">Role</TableHead>
                      <TableHead>Status</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filtered.map((emp) => (
                      <TableRow key={emp.id}>
                        <TableCell className="font-mono text-xs text-muted-foreground">{emp.id}</TableCell>
                        <TableCell className="font-medium">{emp.name}</TableCell>
                        <TableCell className="hidden sm:table-cell text-muted-foreground">{emp.dept}</TableCell>
                        <TableCell className="hidden md:table-cell text-muted-foreground">{emp.role}</TableCell>
                        <TableCell>
                          <Badge variant={emp.status === "Active" ? "default" : "secondary"} className={emp.status === "Active" ? "gradient-teal border-0 text-primary-foreground" : ""}>
                            {emp.status}
                          </Badge>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Feature Highlights */}
      <section className="py-20 md:py-28 bg-muted/30">
        <div className="container">
          <SectionHeading badge="Features" title="Powerful Employee Features" description="Tools that empower your HR team and employees alike." />
          <div className="grid gap-6 sm:grid-cols-2">
            {highlights.map((h, i) => (
              <motion.div key={h.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.1 }}>
                <Card className="h-full border-border/50 hover:border-primary/30 transition-colors">
                  <CardContent className="p-6 flex gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl gradient-teal text-primary-foreground">
                      <h.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-display font-semibold text-foreground mb-1">{h.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{h.desc}</p>
                    </div>
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

export default EmployeeManagement;
