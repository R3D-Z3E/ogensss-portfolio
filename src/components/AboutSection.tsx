import { Scale, Heart, BookOpen } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import airaPhoto from "@/assets/aira-photo.png";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-sm font-body font-semibold tracking-[0.3em] uppercase text-primary">
              About Me
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-bold mt-4 mb-8">
              A Voice for the <span className="italic text-gradient-gold">Voiceless</span>
            </h2>
            <div className="w-16 h-0.5 bg-primary mx-auto mb-10" />
            <img
              src={airaPhoto}
              alt="Aira — student lawyer and feminist advocate"
              className="w-64 h-64 md:w-72 md:h-72 rounded-2xl object-cover shadow-[0_8px_40px_-8px_hsl(var(--primary)/0.4)] border-4 border-primary/30 mx-auto ring-4 ring-primary/10"
            />
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-16 items-center mt-16 mb-16">
          <ScrollReveal direction="left">
            <div className="space-y-6">
              <p className="text-lg leading-relaxed text-muted-foreground font-body">
                I believe that <strong className="text-foreground">justice isn't a privilege, it's a right.</strong> As a 
                student of law, every case I study, every argument I craft, is driven by an unwavering 
                commitment to equality and fairness.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground font-body">
                My passion for <strong className="text-foreground">women's rights and feminist advocacy</strong> isn't 
                just academic, it's personal. I've seen how the law can be a tool for liberation, 
                and I'm determined to wield it for those who need it most.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground font-body">
                Like the tulip that pushes through the cold earth every spring, I believe in the 
                power of <strong className="text-foreground">resilience, growth, and beauty born from struggle.</strong>
              </p>
            </div>
          </ScrollReveal>

          <div className="space-y-6">
            {[
              {
                icon: Scale,
                title: "Justice & Equality",
                desc: "Committed to ensuring every woman has equal access to justice and legal protection under the law.",
              },
              {
                icon: Heart,
                title: "Compassion & Strength",
                desc: "Combining empathy with fierce determination — because caring deeply and fighting hard aren't contradictions.",
              },
              {
                icon: BookOpen,
                title: "Knowledge & Empowerment",
                desc: "Education is liberation. Every law I learn becomes a weapon against injustice.",
              },
            ].map((item, i) => (
              <ScrollReveal key={i} delay={i * 0.15} direction="right">
                <div className="flex gap-5 p-6 rounded-xl bg-card border border-border hover:shadow-gold transition-all duration-500 group">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-lg mb-1">{item.title}</h3>
                    <p className="text-muted-foreground font-body text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
