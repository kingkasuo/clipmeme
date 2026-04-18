<template>
  <section id="features" class="relative py-24 lg:py-32">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div class="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
        <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
          <Star class="w-4 h-4" />
          <span>{{ $t('features.badge') }}</span>
        </div>
        <h2 class="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
          <span class="text-foreground">{{ $t('features.title') }}</span>
          <br />
          <span class="gradient-text">{{ $t('features.titleGradient') }}</span>
        </h2>
      </div>

      <!-- Features Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        <div
          v-for="(feature, index) in features"
          :key="index"
          class="group relative p-6 lg:p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5"
        >
          <!-- Icon -->
          <div class="w-14 h-14 rounded-xl bg-gradient-to-br flex items-center justify-center mb-6 group-hover:scale-110 transition-transform" :class="feature.gradient">
            <component :is="feature.icon" class="w-7 h-7 text-white" />
          </div>

          <!-- Content -->
          <h3 class="font-display text-xl font-semibold mb-3 text-foreground">
            {{ feature.title }}
          </h3>
          <p class="text-muted-foreground leading-relaxed">
            {{ feature.description }}
          </p>

          <!-- Hover Glow -->
          <div class="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
            <div class="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-2xl" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import {
  Star,
  Wand2,
  Globe,
  LayoutGrid,
  Video,
  Code,
  Palette
} from 'lucide-vue-next'

const { t } = useI18n()

const features = computed(() => [
  {
    icon: Wand2,
    title: t('features.aiGeneration.title'),
    description: t('features.aiGeneration.description'),
    gradient: 'from-instagram-purple to-instagram-pink',
  },
  {
    icon: Globe,
    title: t('features.multilingual.title'),
    description: t('features.multilingual.description'),
    gradient: 'from-instagram-pink to-instagram-orange',
  },
  {
    icon: LayoutGrid,
    title: t('features.templates.title'),
    description: t('features.templates.description'),
    gradient: 'from-instagram-orange to-instagram-yellow',
  },
  {
    icon: Video,
    title: t('features.video.title'),
    description: t('features.video.description'),
    gradient: 'from-instagram-yellow to-green-400',
  },
  {
    icon: Code,
    title: t('features.api.title'),
    description: t('features.api.description'),
    gradient: 'from-green-400 to-cyan-400',
  },
  {
    icon: Palette,
    title: t('features.custom.title'),
    description: t('features.custom.description'),
    gradient: 'from-cyan-400 to-instagram-purple',
  },
])
</script>
