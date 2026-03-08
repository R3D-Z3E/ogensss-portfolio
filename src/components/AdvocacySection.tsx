import { Shield, Users, Gavel, Megaphone } from "lucide-react";

const areas = [
  {
    icon: Shield,
    title: "Gender-Based Violence Prevention",
    description: "Advocating for stronger legal protections and support systems for survivors of domestic and gender-based violence.",
    stat: "1 in 3",
    statLabel: "women worldwide experience violence",
  },
  {
    icon: Users,
    title: "Workplace Equality",
    description: "Fighting for equal pay, fair treatment, and the elimination of discrimination in professional environments.",
    stat: "77¢",
    statLabel: "for every dollar a man earns",
  },
  {
    icon: Gavel,
    title: "Reproductive Rights",
    description: "Defending bodily autonomy and access to healthcare as fundamental human rights that must be protected by law.",
    stat: "40%",
    statLabel: "of women lack full reproductive rights",
  },
  {
    icon: Megaphone,
    title: "Political Representation",
    description: "Pushing for policies that ensure women have an equal voice in governance and decision-making at every level.",
    stat: "26%",
    statLabel: "of parliament seats held by women",
  },
];

const AdvocacySection = () => {
  return (
    <section id="advocacy" className="py-24 px-6 bg-card">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-sm font-body font-semibold tracking-[0.3em] uppercase text-primary">
            Areas of Focus
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mt-4 mb-6">
            The Battles I <span className="italic text-gradient-gold">Choose to Fight</span>
          </h2>
          <p className="text-muted-foreground font-body max-w-2xl mx-auto">
            Every statistic represents a life. Every case is an opportunity to shift the scales toward justice.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {areas.map((area, i) => (
            <div
              key={i}
              className="group relative p-8 rounded-2xl bg-background border border-border hover:border-primary/40 hover:shadow-gold transition-all duration-500"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <area.icon className="w-7 h-7 text-primary" />
                </div>
                <div className="text-right">
                  <span className="text-3xl font-display font-bold text-gradient-gold">{area.stat}</span>
                  <p className="text-xs text-muted-foreground font-body mt-1 max-w-[140px]">{area.statLabel}</p>
                </div>
              </div>
              <h3 className="text-xl font-display font-semibold mb-3">{area.title}</h3>
              <p className="text-muted-foreground font-body leading-relaxed">{area.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdvocacySection;
