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

        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
          {[
            { icon: Mail, label: "Email", value: "jerryaira08@gmail.com", href: "mailto:jerryaira08@gmail.com" },
            { icon: Linkedin, label: "LinkedIn", value: "Connect with me", href: "https://www.linkedin.com/in/ogenemene-jerry-a0221a2b7/" },
            { icon: Instagram, label: "Instagram", value: "@o_g_e_n_s", href: "https://www.instagram.com/o_g_e_n_s/" },
          ].map((item, i) => (
            <ScrollReveal key={i} delay={i * 0.12}>
              <a
                href={item.href}
                className="flex items-center gap-4 px-6 py-4 rounded-xl bg-background border border-border hover:border-primary/40 hover:shadow-gold transition-all duration-500 group"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <div className="text-left">
                  <p className="text-xs text-muted-foreground font-body">{item.label}</p>
                  <p className="font-body font-medium text-foreground">{item.value}</p>
                </div>
              </a>
            </ScrollReveal>
          ))}
        </div>

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
