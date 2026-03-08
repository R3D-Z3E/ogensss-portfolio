const ManifestoSection = () => {
  return (
    <section id="manifesto" className="py-24 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <span className="text-sm font-body font-semibold tracking-[0.3em] uppercase text-primary">
          My Manifesto
        </span>

        <div className="mt-12 space-y-8">
          <blockquote className="text-3xl md:text-4xl lg:text-5xl font-display font-bold leading-tight italic">
            "I do not wish women to have power over men;
            <span className="text-gradient-gold"> but over themselves.</span>"
          </blockquote>
          <p className="text-muted-foreground font-body text-lg">— Mary Shelley</p>
        </div>

        <div className="mt-16 w-full h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

        <div className="mt-16 grid md:grid-cols-3 gap-8 text-left">
          {[
            {
              number: "01",
              title: "Educate",
              text: "Knowledge of the law is the first step toward liberation. I study so that others may understand their rights.",
            },
            {
              number: "02",
              title: "Advocate",
              text: "Every brief I write, every argument I make, amplifies the voices of women who have been silenced.",
            },
            {
              number: "03",
              title: "Transform",
              text: "The law isn't just about defending — it's about reshaping systems so justice becomes the default, not the exception.",
            },
          ].map((item, i) => (
            <div key={i} className="space-y-4">
              <span className="text-5xl font-display font-bold text-primary/20">{item.number}</span>
              <h3 className="text-2xl font-display font-semibold">{item.title}</h3>
              <p className="text-muted-foreground font-body leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ManifestoSection;
