import { Button } from "@/components/ui/button";

const StyleGuide = () => {
  const colors = [
    { name: "Primary", variable: "--primary", class: "bg-primary", value: "12 88% 65%", description: "Rose gold coral - main brand color" },
    { name: "Primary Glow", variable: "--primary-glow", class: "bg-primary-glow", value: "18 95% 72%", description: "Lighter coral for gradients" },
    { name: "Secondary", variable: "--secondary", class: "bg-secondary", value: "220 45% 25%", description: "Deep navy - supporting color" },
    { name: "Accent", variable: "--accent", class: "bg-accent", value: "35 85% 70%", description: "Warm gold accent" },
    { name: "Background", variable: "--background", class: "bg-background", value: "30 40% 98%", description: "Warm cream background" },
    { name: "Foreground", variable: "--foreground", class: "bg-foreground", value: "222 47% 11%", description: "Dark navy text" },
    { name: "Muted", variable: "--muted", class: "bg-muted", value: "30 30% 92%", description: "Subtle background" },
    { name: "Muted Foreground", variable: "--muted-foreground", class: "bg-muted-foreground", value: "220 15% 45%", description: "Secondary text" },
    { name: "Card", variable: "--card", class: "bg-card", value: "0 0% 100%", description: "Card surfaces" },
    { name: "Border", variable: "--border", class: "bg-border", value: "30 20% 88%", description: "Warm border color" },
    { name: "Destructive", variable: "--destructive", class: "bg-destructive", value: "0 84% 60%", description: "Error/danger state" },
  ];

  const gradients = [
    { name: "Primary Gradient", class: "bg-gradient-primary", description: "135° coral to light coral" },
    { name: "Hero Gradient", class: "bg-gradient-hero", description: "180° cream to slightly darker cream" },
    { name: "Overlay Gradient", class: "bg-gradient-overlay", description: "180° dark overlay for images" },
  ];

  const shadows = [
    { name: "Elegant", class: "shadow-elegant", description: "Primary color glow shadow" },
    { name: "Soft", class: "shadow-soft", description: "Subtle navy shadow" },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-secondary text-secondary-foreground py-16">
        <div className="container mx-auto px-4">
          <h1 className="font-playfair text-4xl md:text-5xl font-bold mb-4">Style Guide</h1>
          <p className="text-secondary-foreground/80 text-lg max-w-2xl">
            Complete design system documentation for the Universal Modeling Contest website. 
            All colors, typography, and components follow this cohesive visual language.
          </p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-16 space-y-24">
        {/* Color Palette */}
        <section>
          <h2 className="font-playfair text-3xl font-bold text-foreground mb-2">Color Palette</h2>
          <p className="text-muted-foreground mb-8">All colors use HSL values for consistency and easy theming.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {colors.map((color) => (
              <div key={color.name} className="bg-card rounded-lg border border-border overflow-hidden">
                <div className={`${color.class} h-24`} />
                <div className="p-4">
                  <h3 className="font-semibold text-foreground">{color.name}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{color.description}</p>
                  <div className="mt-3 space-y-1 text-xs font-mono">
                    <p className="text-muted-foreground">Variable: <span className="text-foreground">{color.variable}</span></p>
                    <p className="text-muted-foreground">HSL: <span className="text-foreground">{color.value}</span></p>
                    <p className="text-muted-foreground">Class: <span className="text-primary">{color.class}</span></p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Gradients */}
        <section>
          <h2 className="font-playfair text-3xl font-bold text-foreground mb-2">Gradients</h2>
          <p className="text-muted-foreground mb-8">Custom gradient tokens for backgrounds and overlays.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {gradients.map((gradient) => (
              <div key={gradient.name} className="bg-card rounded-lg border border-border overflow-hidden">
                <div className={`${gradient.class} h-32`} />
                <div className="p-4">
                  <h3 className="font-semibold text-foreground">{gradient.name}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{gradient.description}</p>
                  <p className="mt-2 text-xs font-mono text-primary">{gradient.class}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Shadows */}
        <section>
          <h2 className="font-playfair text-3xl font-bold text-foreground mb-2">Shadows</h2>
          <p className="text-muted-foreground mb-8">Elegant shadow styles for depth and emphasis.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {shadows.map((shadow) => (
              <div key={shadow.name} className={`bg-card rounded-lg p-8 ${shadow.class}`}>
                <h3 className="font-semibold text-foreground">{shadow.name}</h3>
                <p className="text-sm text-muted-foreground mt-1">{shadow.description}</p>
                <p className="mt-2 text-xs font-mono text-primary">{shadow.class}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Typography */}
        <section>
          <h2 className="font-playfair text-3xl font-bold text-foreground mb-2">Typography</h2>
          <p className="text-muted-foreground mb-8">Font families and text styles used throughout the site.</p>
          
          <div className="space-y-8">
            {/* Display Font */}
            <div className="bg-card rounded-lg border border-border p-8">
              <div className="flex items-baseline justify-between mb-4">
                <h3 className="font-semibold text-foreground">Display Font</h3>
                <span className="text-xs font-mono text-primary">font-playfair</span>
              </div>
              <p className="font-playfair text-5xl text-foreground mb-4">Playfair Display</p>
              <p className="text-muted-foreground text-sm">
                Used for headings, hero text, and emphasis. Elegant serif with high contrast strokes.
              </p>
              <div className="mt-6 space-y-2">
                <p className="font-playfair text-4xl text-foreground">The Quick Brown Fox</p>
                <p className="font-playfair text-3xl text-foreground">The Quick Brown Fox</p>
                <p className="font-playfair text-2xl text-foreground">The Quick Brown Fox</p>
                <p className="font-playfair text-xl text-foreground">The Quick Brown Fox</p>
              </div>
            </div>

            {/* Body Font */}
            <div className="bg-card rounded-lg border border-border p-8">
              <div className="flex items-baseline justify-between mb-4">
                <h3 className="font-semibold text-foreground">Body Font</h3>
                <span className="text-xs font-mono text-primary">font-sans (System)</span>
              </div>
              <p className="text-2xl text-foreground mb-4">System Sans-Serif Stack</p>
              <p className="text-muted-foreground text-sm mb-6">
                Clean, readable sans-serif for body text, navigation, and UI elements.
              </p>
              <div className="space-y-2">
                <p className="text-lg text-foreground">Body Large - 18px</p>
                <p className="text-base text-foreground">Body Regular - 16px</p>
                <p className="text-sm text-foreground">Body Small - 14px</p>
                <p className="text-xs text-foreground">Caption - 12px</p>
              </div>
            </div>
          </div>
        </section>

        {/* Spacing & Radius */}
        <section>
          <h2 className="font-playfair text-3xl font-bold text-foreground mb-2">Spacing & Border Radius</h2>
          <p className="text-muted-foreground mb-8">Consistent spacing scale and rounded corners.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Border Radius */}
            <div className="bg-card rounded-lg border border-border p-8">
              <h3 className="font-semibold text-foreground mb-6">Border Radius</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-primary rounded-sm" />
                  <div>
                    <p className="font-medium text-foreground">Small</p>
                    <p className="text-xs font-mono text-muted-foreground">rounded-sm (0.5rem)</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-primary rounded-md" />
                  <div>
                    <p className="font-medium text-foreground">Medium</p>
                    <p className="text-xs font-mono text-muted-foreground">rounded-md (0.625rem)</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-primary rounded-lg" />
                  <div>
                    <p className="font-medium text-foreground">Large</p>
                    <p className="text-xs font-mono text-muted-foreground">rounded-lg (0.75rem)</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-primary rounded-full" />
                  <div>
                    <p className="font-medium text-foreground">Full</p>
                    <p className="text-xs font-mono text-muted-foreground">rounded-full (9999px)</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Container */}
            <div className="bg-card rounded-lg border border-border p-8">
              <h3 className="font-semibold text-foreground mb-6">Container & Layout</h3>
              <div className="space-y-4 text-sm">
                <div className="flex justify-between py-2 border-b border-border">
                  <span className="text-muted-foreground">Max Width</span>
                  <span className="font-mono text-foreground">1400px</span>
                </div>
                <div className="flex justify-between py-2 border-b border-border">
                  <span className="text-muted-foreground">Container Padding</span>
                  <span className="font-mono text-foreground">2rem (32px)</span>
                </div>
                <div className="flex justify-between py-2 border-b border-border">
                  <span className="text-muted-foreground">Section Padding</span>
                  <span className="font-mono text-foreground">py-20 (80px)</span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="text-muted-foreground">Base Radius</span>
                  <span className="font-mono text-foreground">0.75rem (12px)</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Buttons */}
        <section>
          <h2 className="font-playfair text-3xl font-bold text-foreground mb-2">Buttons</h2>
          <p className="text-muted-foreground mb-8">Button variants for different contexts and actions.</p>
          
          <div className="bg-card rounded-lg border border-border p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Default */}
              <div className="space-y-3">
                <h4 className="font-medium text-foreground">Default (Primary)</h4>
                <Button>Apply Now</Button>
                <p className="text-xs font-mono text-muted-foreground">variant="default"</p>
              </div>

              {/* Secondary */}
              <div className="space-y-3">
                <h4 className="font-medium text-foreground">Secondary</h4>
                <Button variant="secondary">Learn More</Button>
                <p className="text-xs font-mono text-muted-foreground">variant="secondary"</p>
              </div>

              {/* Hero */}
              <div className="space-y-3">
                <h4 className="font-medium text-foreground">Hero</h4>
                <Button variant="hero">Enter Contest</Button>
                <p className="text-xs font-mono text-muted-foreground">variant="hero"</p>
              </div>

              {/* Outline */}
              <div className="space-y-3">
                <h4 className="font-medium text-foreground">Outline</h4>
                <Button variant="outline">View Details</Button>
                <p className="text-xs font-mono text-muted-foreground">variant="outline"</p>
              </div>

              {/* Ghost */}
              <div className="space-y-3">
                <h4 className="font-medium text-foreground">Ghost</h4>
                <Button variant="ghost">Cancel</Button>
                <p className="text-xs font-mono text-muted-foreground">variant="ghost"</p>
              </div>

              {/* Destructive */}
              <div className="space-y-3">
                <h4 className="font-medium text-foreground">Destructive</h4>
                <Button variant="destructive">Delete</Button>
                <p className="text-xs font-mono text-muted-foreground">variant="destructive"</p>
              </div>
            </div>

            {/* Sizes */}
            <div className="mt-12 pt-8 border-t border-border">
              <h4 className="font-medium text-foreground mb-6">Button Sizes</h4>
              <div className="flex flex-wrap items-center gap-4">
                <Button size="sm">Small</Button>
                <Button size="default">Default</Button>
                <Button size="lg">Large</Button>
                <Button size="icon">★</Button>
              </div>
            </div>
          </div>
        </section>

        {/* Design Principles */}
        <section>
          <h2 className="font-playfair text-3xl font-bold text-foreground mb-2">Design Principles</h2>
          <p className="text-muted-foreground mb-8">Core principles guiding the visual language.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-card rounded-lg border border-border p-6">
              <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mb-4">
                <span className="text-primary-foreground text-xl">✦</span>
              </div>
              <h3 className="font-playfair text-xl font-semibold text-foreground mb-2">Elegance</h3>
              <p className="text-muted-foreground text-sm">
                Sophisticated color palette with warm coral and deep navy creates a luxurious, high-fashion aesthetic.
              </p>
            </div>

            <div className="bg-card rounded-lg border border-border p-6">
              <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center mb-4">
                <span className="text-secondary-foreground text-xl">◈</span>
              </div>
              <h3 className="font-playfair text-xl font-semibold text-foreground mb-2">Warmth</h3>
              <p className="text-muted-foreground text-sm">
                Cream backgrounds and golden accents provide an inviting, approachable feel while maintaining sophistication.
              </p>
            </div>

            <div className="bg-card rounded-lg border border-border p-6">
              <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mb-4">
                <span className="text-accent-foreground text-xl">◉</span>
              </div>
              <h3 className="font-playfair text-xl font-semibold text-foreground mb-2">Clarity</h3>
              <p className="text-muted-foreground text-sm">
                Clear typography hierarchy and generous spacing ensure content is easy to scan and digest.
              </p>
            </div>
          </div>
        </section>

        {/* Back to Home */}
        <div className="text-center pt-8">
          <Button variant="outline" asChild>
            <a href="/">← Back to Home</a>
          </Button>
        </div>
      </main>
    </div>
  );
};

export default StyleGuide;
