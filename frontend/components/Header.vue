<template>
  <header
    class="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border transition-all duration-300"
  >
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16 lg:h-20">
        <!-- Logo -->
        <NuxtLink to="/" class="flex items-center gap-2 group">
          <div class="w-10 h-10 rounded-xl bg-instagram-gradient flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:scale-105 transition-all">
            <Sparkles class="w-5 h-5 text-white" />
          </div>
          <span class="font-display text-xl font-bold gradient-text">
            ClipMeme
          </span>
        </NuxtLink>

        <!-- Desktop Navigation -->
        <nav class="hidden md:flex items-center gap-1">
          <NuxtLink
            v-for="item in navItems"
            :key="item.path"
            :to="localePath(item.path)"
            class="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground rounded-lg hover:bg-accent transition-colors"
          >
            {{ $t(item.labelKey) }}
          </NuxtLink>
        </nav>

        <!-- Right Side -->
        <div class="flex items-center gap-2">
          <LanguageSwitcher />

          <!-- Theme Toggle -->
          <button
            @click="toggleTheme"
            class="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
          >
            <Sun v-if="isDark" class="w-5 h-5" />
            <Moon v-else class="w-5 h-5" />
          </button>

          <!-- CTA Button -->
          <NuxtLink
            :to="localePath('/signup')"
            class="hidden sm:flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white btn-instagram"
          >
            {{ $t('nav.getStarted') }}
            <ArrowRight class="w-4 h-4" />
          </NuxtLink>

          <!-- Mobile Menu Button -->
          <button
            @click="mobileMenuOpen = !mobileMenuOpen"
            class="md:hidden p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
          >
            <Menu v-if="!mobileMenuOpen" class="w-6 h-6" />
            <X v-else class="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile Menu -->
    <Transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0 -translate-y-4"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-4"
    >
      <div
        v-if="mobileMenuOpen"
        class="md:hidden bg-background/95 backdrop-blur-xl border-b border-border"
      >
        <nav class="container mx-auto px-4 py-4 flex flex-col gap-2">
          <NuxtLink
            v-for="item in navItems"
            :key="item.path"
            :to="localePath(item.path)"
            class="px-4 py-3 text-base font-medium text-muted-foreground hover:text-foreground rounded-xl hover:bg-accent transition-colors"
            @click="mobileMenuOpen = false"
          >
            {{ $t(item.labelKey) }}
          </NuxtLink>
          <NuxtLink
            :to="localePath('/signup')"
            class="mt-2 flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-base font-semibold text-white btn-instagram"
            @click="mobileMenuOpen = false"
          >
            {{ $t('nav.getStarted') }}
            <ArrowRight class="w-4 h-4" />
          </NuxtLink>
        </nav>
      </div>
    </Transition>
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useI18n, useLocalePath } from '#imports'
import {
  Sparkles,
  Sun,
  Moon,
  ArrowRight,
  Menu,
  X
} from 'lucide-vue-next'

const localePath = useLocalePath()
const mobileMenuOpen = ref(false)
const isDark = ref(false)

const navItems = [
  { path: '/features', labelKey: 'nav.features' },
  { path: '/blog', labelKey: 'nav.blog' },
  { path: '/pricing', labelKey: 'nav.pricing' },
]

const toggleTheme = () => {
  isDark.value = !isDark.value
  if (isDark.value) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
}

onMounted(() => {
  // Check initial theme
  isDark.value = document.documentElement.classList.contains('dark')
})
</script>
