import { Mail, Instagram, Linkedin } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 px-6 bg-card">
      <div className="max-w-4xl mx-auto text-center">
        <ScrollReveal>
          <span className="text-sm font-body font-semibold tracking-[0.3em] uppercase text-primary">
            Let's Connect
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mt-4 mb-6">
            Join the <span className="italic text-gradient-gold">Movement</span>
          </h2>
          <p className="text-muted-foreground font-body max-w-xl mx-auto mb-12">
            Whether you're seeking legal guidance, want to collaborate on advocacy work, 
            or simply share a passion for justice — I'd love to hear from you.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="flex flex-col items-center mb-16">
            <p className="text-lg font-body text-muted-foreground mb-6">Connect with me</p>
            <div className="flex gap-4">
              {[
                { icon: Mail, label: "Email", href: "mailto:jerryaira08@gmail.com" },
                { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/ogenemene-jerry-a0221a2b7/" },
                { icon: Instagram, label: "Instagram", href: "https://www.instagram.com/o_g_e_n_s/" },
              ].map((item, i) => (
                <a
                  key={i}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 hover:shadow-gold transition-all duration-300 group"
                  aria-label={item.label}
                >
                  <item.icon className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                </a>
              ))}
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <div className="pt-12 border-t border-border">
            <p className="text-muted-foreground font-body text-sm">
              🌷 Built with love on International Women's Day 2026 🌷
            </p>
            <p className="text-muted-foreground/60 font-body text-xs mt-2">
              "Well-behaved women seldom make history." — Laurel Thatcher Ulrich
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ContactSection;
