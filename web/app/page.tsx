"use client";

import { Sparkles, ArrowRight, Play, Zap, Heart, Twitter, Github, MessageCircle } from "lucide-react";
import Link from "next/link";

const memeImages = [
  { url: "https://i.imgflip.com/30b1gx.jpg", title: "Drake Hotline Bling" },
  { url: "https://i.imgflip.com/1bij.jpg", title: "One Does Not Simply" },
  { url: "https://i.imgflip.com/4t0m5.jpg", title: "Change My Mind" },
  { url: "https://i.imgflip.com/26am.jpg", title: "Y U No" },
];

const features = [
  {
    icon: "🎨",
    title: "AI Text to Meme",
    description: "Type any text and watch AI generate 8 unique meme variations instantly. No design skills needed.",
  },
  {
    icon: "🌍",
    title: "110+ Languages",
    description: "Create memes in your native language. Our AI understands context across 110+ languages.",
  },
  {
    icon: "🖼️",
    title: "Unlimited Templates",
    description: "Access thousands of trending templates or upload your own. Always fresh, always relevant.",
  },
  {
    icon: "🎬",
    title: "Video Memes",
    description: "Create animated GIF and video memes with perfect timing and captions.",
  },
  {
    icon: "⚡",
    title: "API Access",
    description: "Integrate meme generation into your apps, bots, and workflows with our powerful API.",
  },
  {
    icon: "🏷️",
    title: "Custom Branding",
    description: "Add your logo and watermark. Perfect for social media managers and brands.",
  },
];

const steps = [
  {
    number: "01",
    title: "Enter Your Text",
    description: "Type any text, phrase, or idea you want to turn into a meme.",
  },
  {
    number: "02",
    title: "AI Magic",
    description: "Our AI analyzes your text and generates 8 perfectly matched meme variations.",
  },
  {
    number: "03",
    title: "Share & Go Viral",
    description: "Download or share directly to social media. Watch the likes roll in.",
  },
];

export default function Home() {
  return (
    <div className="relative min-h-screen bg-background overflow-hidden">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-10 h-10 rounded-xl bg-instagram-gradient flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:scale-105 transition-all">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <span className="font-display text-xl font-bold gradient-text">ClipMeme</span>
            </Link>
            <Link
              href="/signup"
              className="hidden sm:flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white btn-instagram"
            >
              Get Started
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20">
        <div className="absolute inset-0 bg-background">
          <div className="absolute top-1/4 -left-32 w-96 h-96 bg-instagram-purple/20 rounded-full blur-3xl animate-pulse-glow" />
          <div
            className="absolute top-1/3 -right-32 w-96 h-96 bg-instagram-pink/20 rounded-full blur-3xl animate-pulse-glow"
            style={{ animationDelay: "1s" }}
          />
          <div
            className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-instagram-orange/10 rounded-full blur-3xl animate-pulse-glow"
            style={{ animationDelay: "2s" }}
          />
          <div className="absolute inset-0 grid-pattern opacity-50" />
        </div>

        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
              <span className="block text-foreground">Turn Text Into</span>
              <span className="block gradient-text mt-2">Viral Memes</span>
            </h1>

            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
              Generate hilarious memes from any text in seconds. Support for 110+ languages, unlimited templates, and
              AI-powered creativity.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
              <Link
                href="/signup"
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-base font-semibold text-white btn-instagram shadow-xl shadow-instagram-pink/20"
              >
                Start Creating Free
                <ArrowRight className="w-5 h-5" />
              </Link>
              <button className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-base font-semibold bg-card border border-border hover:bg-accent transition-colors">
                <Play className="w-5 h-5" />
                Watch Demo
              </button>
            </div>
          </div>

          {/* Demo Preview */}
          <div className="mt-20 relative max-w-4xl mx-auto">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-instagram-purple/10 border border-border/50">
              <div className="bg-card border-b border-border px-4 py-3 flex items-center gap-2">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                </div>
                <div className="flex-1 mx-4">
                  <div className="bg-muted rounded-md px-3 py-1.5 text-xs text-muted-foreground text-center">
                    clipmeme.online/create
                  </div>
                </div>
              </div>

              <div className="bg-background p-6 sm:p-8">
                <div className="grid grid-cols-2 gap-4">
                  {memeImages.map((meme, i) => (
                    <div
                      key={i}
                      className="group relative aspect-square rounded-xl overflow-hidden border border-border/50 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/20 transition-all duration-300 cursor-pointer hover:-translate-y-1"
                    >
                      <img
                        src={meme.url}
                        alt={meme.title}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="absolute bottom-3 left-3 right-3">
                          <p className="text-white text-xs font-medium truncate">{meme.title}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="absolute -top-4 -right-4 w-20 h-20 bg-instagram-gradient rounded-2xl shadow-lg animate-float flex items-center justify-center">
              <Zap className="w-8 h-8 text-white" />
            </div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-card rounded-xl shadow-lg border border-border animate-float flex items-center justify-center" style={{ animationDelay: "1s" }}>
              <Heart className="w-6 h-6 text-instagram-pink" />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 lg:py-32 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              Features
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Everything You Need to <span className="gradient-text">Go Viral</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {features.map((feature, i) => (
              <div
                key={i}
                className="group p-6 lg:p-8 rounded-2xl bg-card border border-border hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="font-display text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-24 lg:py-32 relative bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              How It Works
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Create Memes in <span className="gradient-text">3 Easy Steps</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 max-w-5xl mx-auto">
            {steps.map((step, i) => (
              <div key={i} className="relative text-center">
                <div className="text-6xl font-display font-bold text-muted/50 mb-4">{step.number}</div>
                <h3 className="font-display text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
                {i < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/4 left-full w-full h-px bg-gradient-to-r from-border to-transparent" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative max-w-4xl mx-auto text-center p-8 lg:p-16 rounded-3xl bg-instagram-gradient overflow-hidden">
            <div className="absolute inset-0 bg-black/10" />
            <div className="relative z-10">
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
                Ready to Create Your First Meme?
              </h2>
              <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
                Join millions of creators and start generating viral memes with AI today.
              </p>
              <Link
                href="/signup"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-base font-semibold bg-white text-instagram-pink hover:bg-white/90 transition-colors shadow-xl"
              >
                Get Started Free
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-card/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-instagram-gradient flex items-center justify-center shadow-lg">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <span className="font-display text-xl font-bold gradient-text">ClipMeme</span>
            </div>
            <p className="text-sm text-muted-foreground">Making the internet funnier, one meme at a time.</p>
            <div className="flex items-center gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-xl bg-muted flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-xl bg-muted flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-xl bg-muted flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-border text-center">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} ClipMeme. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
