import heroTulips from "@/assets/hero-tulips.jpg";
import justiceIcon from "@/assets/justice-tulip-icon.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img
          src={heroTulips}
          alt="Golden tulips symbolizing growth and justice"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <div className="opacity-0 animate-scale-in mb-8">
          <img
            src={justiceIcon}
            alt="Scales of justice with tulips"
            className="w-24 h-24 mx-auto"
          />
        </div>

        <p className="text-lg md:text-xl font-body text-muted-foreground opacity-0 animate-fade-up tracking-widest uppercase">
          Hey there, welcome to my world ✨
        </p>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold tracking-tight mb-6 opacity-0 animate-fade-up" style={{ animationDelay: "0.2s" }}>
          Hiiii, I'm{" "}
          <span className="text-gradient-gold italic relative">
            Airaaaa
            <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 8C40 2 80 2 100 6C120 10 160 4 198 8" stroke="hsl(var(--primary))" strokeWidth="3" strokeLinecap="round" className="animate-pulse" />
            </svg>
          </span>
          <span className="block text-2xl md:text-3xl lg:text-4xl mt-4 font-normal text-muted-foreground">
            & I fight for what is <span className="text-primary font-bold italic">right</span> 🌷
          </span>
        </h1>

        <p className="text-lg md:text-xl font-body text-muted-foreground max-w-2xl mx-auto mb-10 opacity-0 animate-fade-up" style={{ animationDelay: "0.4s" }}>
          Student Lawyer · Feminist Advocate · Champion of Women's Rights
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center opacity-0 animate-fade-up" style={{ animationDelay: "0.5s" }}>
          <a
            href="#about"
            className="px-8 py-4 bg-primary text-primary-foreground font-body font-semibold rounded-lg shadow-gold hover:opacity-90 transition-all duration-300"
          >
            Discover My Mission
          </a>
          <a
            href="#contact"
            className="px-8 py-4 border-2 border-primary text-foreground font-body font-semibold rounded-lg hover:bg-primary/10 transition-all duration-300"
          >
            Get In Touch
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in" style={{ animationDelay: "1s" }}>
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/40 flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-primary rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
