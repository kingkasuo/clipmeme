<template>
  <section class="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
    <!-- Background Effects -->
    <div class="absolute inset-0 bg-background">
      <!-- Gradient Orbs -->
      <div class="absolute top-1/4 -left-32 w-96 h-96 bg-instagram-purple/20 rounded-full blur-3xl animate-pulse-glow" />
      <div class="absolute top-1/3 -right-32 w-96 h-96 bg-instagram-pink/20 rounded-full blur-3xl animate-pulse-glow" style="animation-delay: 1s" />
      <div class="absolute bottom-1/4 left-1/3 w-96 h-96 bg-instagram-orange/10 rounded-full blur-3xl animate-pulse-glow" style="animation-delay: 2s" />

      <!-- Grid Pattern -->
      <div class="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%239C92AC%22%20fill-opacity%3D%220.05%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-50" />
    </div>

    <div class="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
      <div class="max-w-5xl mx-auto text-center">
        <!-- Badge -->
        <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-8 float-slow">
          <Sparkles class="w-4 h-4" />
          <span>{{ $t('hero.badge') }}</span>
        </div>

        <!-- Title -->
        <h1 class="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
          <span class="block text-foreground">{{ $t('hero.title') }}</span>
          <span class="block gradient-text mt-2">{{ $t('hero.titleGradient') }}</span>
        </h1>

        <!-- Description -->
        <p class="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
          {{ $t('hero.description') }}
        </p>

        <!-- CTA Buttons -->
        <div class="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <NuxtLink
            :to="localePath('/signup')"
            class="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-base font-semibold text-white btn-instagram shadow-xl shadow-instagram-pink/20"
          >
            {{ $t('hero.ctaPrimary') }}
            <ArrowRight class="w-5 h-5" />
          </NuxtLink>
          <button
            class="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-base font-semibold bg-card border border-border hover:bg-accent transition-colors"
          >
            <Play class="w-5 h-5" />
            {{ $t('hero.ctaSecondary') }}
          </button>
        </div>

      </div>

      <!-- Demo Preview -->
      <div class="mt-20 relative max-w-4xl mx-auto">
        <div class="relative rounded-2xl overflow-hidden shadow-2xl shadow-instagram-purple/10 border border-border/50">
          <!-- Browser Chrome -->
          <div class="bg-card border-b border-border px-4 py-3 flex items-center gap-2">
            <div class="flex gap-1.5">
              <div class="w-3 h-3 rounded-full bg-red-400" />
              <div class="w-3 h-3 rounded-full bg-yellow-400" />
              <div class="w-3 h-3 rounded-full bg-green-400" />
            </div>
            <div class="flex-1 mx-4">
              <div class="bg-muted rounded-md px-3 py-1.5 text-xs text-muted-foreground text-center">
                clipmeme.online/create
              </div>
            </div>
          </div>

          <!-- Preview Content - Meme Grid -->
          <div class="bg-background p-6 sm:p-8">
            <div class="grid grid-cols-2 gap-4">
              <div v-for="(meme, i) in memeImages" :key="i"
                class="group relative aspect-square rounded-xl overflow-hidden border border-border/50 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/20 transition-all duration-300 cursor-pointer hover:-translate-y-1">
                <img :src="meme.url" :alt="meme.title"
                  class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" />
                <!-- Hover Overlay -->
                <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div class="absolute bottom-3 left-3 right-3">
                    <p class="text-white text-xs font-medium truncate">{{ meme.title }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Floating Elements -->
        <div class="absolute -top-4 -right-4 w-20 h-20 bg-instagram-gradient rounded-2xl shadow-lg float-medium flex items-center justify-center">
          <Zap class="w-8 h-8 text-white" />
        </div>
        <div class="absolute -bottom-4 -left-4 w-16 h-16 bg-card rounded-xl shadow-lg border border-border float-slow flex items-center justify-center">
          <Heart class="w-6 h-6 text-instagram-pink" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useLocalePath } from '#imports'
import {
  Sparkles,
  ArrowRight,
  Play,
  Zap,
  Heart
} from 'lucide-vue-next'

const localePath = useLocalePath()
const { t } = useI18n()

// Popular meme images
const memeImages = [
  {
    url: 'https://i.imgflip.com/30b1gx.jpg',
    title: 'Drake Hotline Bling'
  },
  {
    url: 'https://i.imgflip.com/1bij.jpg',
    title: 'One Does Not Simply'
  },
  {
    url: 'https://i.imgflip.com/4t0m5.jpg',
    title: 'Change My Mind'
  },
  {
    url: 'https://i.imgflip.com/26am.jpg',
    title: 'Y U No'
  }
]
</script>
