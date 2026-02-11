import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-secondary text-secondary-foreground">
      <div className="container py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <img
                src="/logo-header.png"
                alt="TechZium HR Logo"
                className="h-8 w-8 object-contain"
              />
              <span className="text-lg font-bold font-display text-secondary-foreground">
                Techzium <span className="text-primary">HR</span>
              </span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Modern HRMS for agile teams. Streamline your HR operations with our comprehensive, open-source solution.
            </p>
          </div>

          <div>
            <h4 className="font-display font-semibold mb-4 text-secondary-foreground">Product</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/overview" className="text-muted-foreground hover:text-primary transition-colors">Overview</Link></li>
              <li><Link to="/modules" className="text-muted-foreground hover:text-primary transition-colors">Core Modules</Link></li>
              <li><Link to="/why-techzium" className="text-muted-foreground hover:text-primary transition-colors">Why Techzium</Link></li>
              <li><Link to="/integrations" className="text-muted-foreground hover:text-primary transition-colors">Integrations</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold mb-4 text-secondary-foreground">Modules</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/modules/employee-management" className="text-muted-foreground hover:text-primary transition-colors">Employee Management</Link></li>
              <li><Link to="/modules/attendance-leave" className="text-muted-foreground hover:text-primary transition-colors">Attendance & Leave</Link></li>
              <li><Link to="/modules/payroll" className="text-muted-foreground hover:text-primary transition-colors">Payroll & Finance</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold mb-4 text-secondary-foreground">Connect</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">Contact Us</Link></li>
              <li><a href="mailto:info@techzium.com" className="text-muted-foreground hover:text-primary transition-colors">info@techzium.com</a></li>
              <li><a href="https://techzium.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">techzium.com</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border/20 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © 2026 Techzium. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <span className="hover:text-primary cursor-pointer transition-colors">Privacy Policy</span>
            <span className="hover:text-primary cursor-pointer transition-colors">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
