<template>
  <div class="pt-20">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div class="max-w-3xl mx-auto text-center mb-12">
        <h1 class="font-display text-4xl font-bold mb-4">
          <span class="gradient-text">{{ $t('templates.title') }}</span>
        </h1>
        <p class="text-lg text-muted-foreground">
          {{ $t('templates.subtitle') }}
        </p>
      </div>

      <!-- Category Filter -->
      <div class="flex flex-wrap items-center justify-center gap-3 mb-12">
        <button
          v-for="cat in categories"
          :key="cat"
          class="px-5 py-2 rounded-full text-sm font-medium transition-all"
          :class="activeCategory === cat ? 'btn-instagram text-white' : 'bg-card border border-border hover:border-primary/50'"
          @click="activeCategory = cat"
        >
          {{ cat }}
        </button>
      </div>

      <!-- Templates Grid -->
      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
        <div
          v-for="(template, i) in filteredTemplates"
          :key="i"
          class="group relative aspect-square bg-card border border-border rounded-xl overflow-hidden hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 transition-all cursor-pointer hover:-translate-y-1"
        >
          <img
            :src="template.url"
            :alt="template.title"
            class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
          <!-- Hover Overlay -->
          <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
            <div class="absolute bottom-3 left-3 right-3">
              <p class="text-white text-sm font-semibold truncate">{{ template.title }}</p>
              <p class="text-white/70 text-xs mt-1">{{ template.category }}</p>
            </div>
            <div class="absolute top-3 right-3">
              <div class="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                <Sparkles class="w-4 h-4 text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Load More -->
      <div class="text-center mt-12">
        <button class="px-8 py-3 rounded-xl font-semibold bg-card border border-border hover:border-primary/50 hover:bg-accent transition-all">
          {{ $t('templates.loadMore') }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Sparkles } from 'lucide-vue-next'

const { t } = useI18n()

const categories = ['All', 'Trending', 'Classic', 'TV/Movies', 'Anime', 'Gaming']
const activeCategory = ref('All')

const templates = [
  { url: 'https://i.imgflip.com/30b1gx.jpg', title: 'Drake Hotline Bling', category: 'Trending' },
  { url: 'https://i.imgflip.com/1bij.jpg', title: 'One Does Not Simply', category: 'Classic' },
  { url: 'https://i.imgflip.com/4t0m5.jpg', title: 'Change My Mind', category: 'Trending' },
  { url: 'https://i.imgflip.com/26am.jpg', title: 'Y U No', category: 'Classic' },
  { url: 'https://i.imgflip.com/1otk96.jpg', title: 'Woman Yelling at Cat', category: 'Trending' },
  { url: 'https://i.imgflip.com/3si4.jpg', title: 'Distracted Boyfriend', category: 'Trending' },
  { url: 'https://i.imgflip.com/1ur9b0.jpg', title: 'Bernie Sanders', category: 'Trending' },
  { url: 'https://i.imgflip.com/24y43o.jpg', title: 'Mocking SpongeBob', category: 'TV/Movies' },
  { url: 'https://i.imgflip.com/2ybua0.png', title: 'Panik Kalm Panik', category: 'Gaming' },
  { url: 'https://i.imgflip.com/3vzej.jpg', title: 'Doge', category: 'Classic' },
  { url: 'https://i.imgflip.com/1bxoy7.jpg', title: 'Disaster Girl', category: 'Classic' },
  { url: 'https://i.imgflip.com/1bgw.jpg', title: 'X All The Y', category: 'Classic' },
]

const filteredTemplates = computed(() => {
  if (activeCategory.value === 'All') return templates
  return templates.filter(t => t.category === activeCategory.value)
})

definePageMeta({
  layout: 'default'
})
</script>
