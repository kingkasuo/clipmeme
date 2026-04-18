<template>
  <div class="pt-20">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <!-- Header -->
      <div class="max-w-3xl mx-auto text-center mb-16">
        <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
          <BookOpen class="w-4 h-4" />
          <span>AI Meme Academy</span>
        </div>
        <h1 class="font-display text-4xl lg:text-5xl font-bold mb-6">
          <span class="gradient-text">{{ $t('nav.blog') }}</span>
        </h1>
        <p class="text-lg text-muted-foreground">
          Tips, tutorials, and insights about meme culture and content creation.
        </p>
      </div>

      <!-- Featured Post -->
      <div class="max-w-5xl mx-auto mb-16">
        <article class="group relative rounded-2xl overflow-hidden border border-border hover:border-primary/50 transition-all cursor-pointer">
          <div class="grid md:grid-cols-2 gap-0">
            <div class="aspect-[4/3] md:aspect-auto overflow-hidden">
              <img src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80" alt="AI Meme Creation" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
            </div>
            <div class="p-8 lg:p-12 flex flex-col justify-center">
              <div class="flex items-center gap-3 mb-4">
                <span class="px-3 py-1 rounded-full bg-instagram-gradient text-white text-xs font-medium">Featured</span>
                <span class="text-sm text-muted-foreground">Jan 15, 2024</span>
              </div>
              <h2 class="font-display text-2xl lg:text-3xl font-bold mb-4 group-hover:text-primary transition-colors">
                The Ultimate Guide to AI-Powered Meme Creation in 2024
              </h2>
              <p class="text-muted-foreground mb-6">
                Discover how artificial intelligence is revolutionizing meme culture. Learn the techniques top creators use to generate viral content that resonates with millions across social platforms.
              </p>
              <div class="flex items-center gap-3">
                <div class="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <span class="text-sm font-semibold text-primary">JC</span>
                </div>
                <div>
                  <p class="text-sm font-medium">James Chen</p>
                  <p class="text-xs text-muted-foreground">Head of Content</p>
                </div>
              </div>
            </div>
          </div>
        </article>
      </div>

      <!-- Blog Grid -->
      <div class="max-w-6xl mx-auto">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Blog Post 1 -->
          <article class="group rounded-2xl bg-card border border-border overflow-hidden hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 transition-all cursor-pointer">
            <div class="aspect-[16/9] overflow-hidden">
              <img src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600&q=80" alt="Social Media Strategy" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
            </div>
            <div class="p-6">
              <div class="flex items-center gap-2 mb-3">
                <span class="text-xs text-primary font-medium">Strategy</span>
                <span class="text-muted-foreground">·</span>
                <span class="text-xs text-muted-foreground">Jan 12, 2024</span>
              </div>
              <h3 class="font-display text-lg font-semibold mb-2 group-hover:text-primary transition-colors line-clamp-2">
                10 Meme Formats That Dominated Social Media in 2023
              </h3>
              <p class="text-sm text-muted-foreground line-clamp-3">
                From Drake's Hotline Bling to the Distracted Boyfriend, we analyze the meme templates that drove the most engagement and how you can leverage them for your brand.
              </p>
              <div class="mt-4 flex items-center gap-2 text-sm text-primary font-medium">
                Read more
                <ArrowRight class="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </div>
            </div>
          </article>

          <!-- Blog Post 2 -->
          <article class="group rounded-2xl bg-card border border-border overflow-hidden hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 transition-all cursor-pointer">
            <div class="aspect-[16/9] overflow-hidden">
              <img src="https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=600&q=80" alt="Marketing with Memes" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
            </div>
            <div class="p-6">
              <div class="flex items-center gap-2 mb-3">
                <span class="text-xs text-primary font-medium">Marketing</span>
                <span class="text-muted-foreground">·</span>
                <span class="text-xs text-muted-foreground">Jan 8, 2024</span>
              </div>
              <h3 class="font-display text-lg font-semibold mb-2 group-hover:text-primary transition-colors line-clamp-2">
                Why Meme Marketing Is the Future of Brand Engagement
              </h3>
              <p class="text-sm text-muted-foreground line-clamp-3">
                Brands like Wendy's and Netflix have mastered the art of meme marketing. Learn the psychology behind viral content and how to apply it to your strategy.
              </p>
              <div class="mt-4 flex items-center gap-2 text-sm text-primary font-medium">
                Read more
                <ArrowRight class="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </div>
            </div>
          </article>

          <!-- Blog Post 3 -->
          <article class="group rounded-2xl bg-card border border-border overflow-hidden hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 transition-all cursor-pointer">
            <div class="aspect-[16/9] overflow-hidden">
              <img src="https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=600&q=80" alt="TikTok Growth" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
            </div>
            <div class="p-6">
              <div class="flex items-center gap-2 mb-3">
                <span class="text-xs text-primary font-medium">Growth</span>
                <span class="text-muted-foreground">·</span>
                <span class="text-xs text-muted-foreground">Jan 5, 2024</span>
              </div>
              <h3 class="font-display text-lg font-semibold mb-2 group-hover:text-primary transition-colors line-clamp-2">
                How to Grow Your TikTok to 100K Followers Using AI Memes
              </h3>
              <p class="text-sm text-muted-foreground line-clamp-3">
                A step-by-step case study of how creators are using AI-generated memes to skyrocket their TikTok growth. Includes posting schedules and hashtag strategies.
              </p>
              <div class="mt-4 flex items-center gap-2 text-sm text-primary font-medium">
                Read more
                <ArrowRight class="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </div>
            </div>
          </article>

          <!-- Blog Post 4 -->
          <article class="group rounded-2xl bg-card border border-border overflow-hidden hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 transition-all cursor-pointer">
            <div class="aspect-[16/9] overflow-hidden">
              <img src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&q=80" alt="AI Tools" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
            </div>
            <div class="p-6">
              <div class="flex items-center gap-2 mb-3">
                <span class="text-xs text-primary font-medium">Tutorial</span>
                <span class="text-muted-foreground">·</span>
                <span class="text-xs text-muted-foreground">Jan 2, 2024</span>
              </div>
              <h3 class="font-display text-lg font-semibold mb-2 group-hover:text-primary transition-colors line-clamp-2">
                Creating Multilingual Memes: Reaching Global Audiences
              </h3>
              <p class="text-sm text-muted-foreground line-clamp-3">
                Break language barriers with AI-powered translation. Learn how to create culturally relevant memes that resonate with audiences in 110+ languages.
              </p>
              <div class="mt-4 flex items-center gap-2 text-sm text-primary font-medium">
                Read more
                <ArrowRight class="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </div>
            </div>
          </article>

          <!-- Blog Post 5 -->
          <article class="group rounded-2xl bg-card border border-border overflow-hidden hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 transition-all cursor-pointer">
            <div class="aspect-[16/9] overflow-hidden">
              <img src="https://images.unsplash.com/photo-1522542550221-31fd8575f1b2?w=600&q=80" alt="Meme Psychology" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
            </div>
            <div class="p-6">
              <div class="flex items-center gap-2 mb-3">
                <span class="text-xs text-primary font-medium">Research</span>
                <span class="text-muted-foreground">·</span>
                <span class="text-xs text-muted-foreground">Dec 28, 2023</span>
              </div>
              <h3 class="font-display text-lg font-semibold mb-2 group-hover:text-primary transition-colors line-clamp-2">
                The Psychology of Virality: Why Some Memes Spread Faster
              </h3>
              <p class="text-sm text-muted-foreground line-clamp-3">
                Stanford researchers analyzed 100K viral memes. Discover the key psychological triggers that make content shareable and how to engineer them.
              </p>
              <div class="mt-4 flex items-center gap-2 text-sm text-primary font-medium">
                Read more
                <ArrowRight class="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </div>
            </div>
          </article>

          <!-- Blog Post 6 -->
          <article class="group rounded-2xl bg-card border border-border overflow-hidden hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 transition-all cursor-pointer">
            <div class="aspect-[16/9] overflow-hidden">
              <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&q=80" alt="Content Calendar" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
            </div>
            <div class="p-6">
              <div class="flex items-center gap-2 mb-3">
                <span class="text-xs text-primary font-medium">Guide</span>
                <span class="text-muted-foreground">·</span>
                <span class="text-xs text-muted-foreground">Dec 22, 2023</span>
              </div>
              <h3 class="font-display text-lg font-semibold mb-2 group-hover:text-primary transition-colors line-clamp-2">
                Building a Content Calendar That Never Runs Out of Ideas
              </h3>
              <p class="text-sm text-muted-foreground line-clamp-3">
                Stop scrambling for content. Learn how to create a 30-day meme content calendar using AI tools and trending topic monitoring.
              </p>
              <div class="mt-4 flex items-center gap-2 text-sm text-primary font-medium">
                Read more
                <ArrowRight class="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </div>
            </div>
          </article>
        </div>
      </div>

      <!-- Newsletter Section -->
      <div class="max-w-4xl mx-auto mt-20">
        <div class="relative rounded-2xl bg-gradient-to-br from-primary/10 via-primary/5 to-background border border-primary/20 p-8 lg:p-12 overflow-hidden">
          <!-- Decorative Elements -->
          <div class="absolute top-0 right-0 w-64 h-64 bg-instagram-purple/10 rounded-full blur-3xl" />
          <div class="absolute bottom-0 left-0 w-64 h-64 bg-instagram-pink/10 rounded-full blur-3xl" />

          <div class="relative z-10 text-center">
            <Mail class="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 class="font-display text-2xl font-bold mb-3">Stay in the Meme Loop</h3>
            <p class="text-muted-foreground mb-6 max-w-md mx-auto">
              Get weekly insights on trending formats, AI tools, and growth strategies delivered to your inbox.
            </p>
            <form class="flex flex-col sm:flex-row gap-3 max-w-md mx-auto" @submit.prevent>
              <input
                type="email"
                placeholder="Enter your email"
                class="flex-1 px-4 py-3 rounded-xl bg-background border border-input focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
              />
              <button type="submit" class="px-6 py-3 rounded-xl font-semibold text-white btn-instagram whitespace-nowrap">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { BookOpen, ArrowRight, Mail } from 'lucide-vue-next'

definePageMeta({
  layout: 'default'
})
</script>
