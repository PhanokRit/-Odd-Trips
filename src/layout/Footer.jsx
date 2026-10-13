import { FaFacebook } from "react-icons/fa";
// ដាក់ពេលក្រោយ
const SocialLink = [
  {
    icon: FaFacebook,
    href: "#",
    label: "Facebook",
  },
];

const FooterLink = [
  {
    href: "#home",
    label: "Home",
  },
  {
    href: "#about",
    label: "About",
  },
  {
    href: "#place",
    label: "Places",
  },
  {
    href: "#contact",
    label: "Contacts",
  },
  {
    href: "#new",
    label: "News",
  },
];
export const Footer = () => {
  const curentYear = new Date().getFullYear();
  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo & Copyright */}
          <div className="text-center md:text-left">
            <a href="#" className="text-xl font-bold tracking-tight">
              ODDA <span className="text-highlight-scondary">Trips.</span>
            </a>
            <p className="text-sm text-mute-foreground mt-2">
              @ {curentYear} Oddarmeachey Province Trips.
            </p>
          </div>
          {/* Link */}
          <nav className="flex flex-wrap justify-center gap-6">
            {FooterLink.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-mute-foreground hover:text-mute-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
          {/* Link social */}
          {/*           
          <div className="flex items-center gap-4">
            {SocialLink.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="p-2 rounded-full glass hover:bg-highlight-scondary transition-all"
              >
                <SocialLink.icon className="w-5 h-5" />
              </a>
            ))}
          </div> */}
        </div>
      </div>
    </footer>
  );
};
