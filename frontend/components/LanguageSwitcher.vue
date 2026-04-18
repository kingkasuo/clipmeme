<template>
  <div class="relative">
    <button
      @click="isOpen = !isOpen"
      class="flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
    >
      <Globe class="w-4 h-4" />
      <span>{{ currentLocaleLabel }}</span>
      <ChevronDown class="w-4 h-4" :class="{ 'rotate-180': isOpen }" />
    </button>

    <Transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0 scale-95"
      enter-to-class="opacity-100 scale-100"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100 scale-100"
      leave-to-class="opacity-0 scale-95"
    >
      <div
        v-if="isOpen"
        class="absolute right-0 mt-2 w-48 py-2 bg-popover rounded-xl shadow-xl border border-border z-50"
      >
        <NuxtLink
          v-for="loc in availableLocales"
          :key="loc.code"
          :to="switchLocalePath(loc.code)"
          class="w-full px-4 py-2 text-left text-sm hover:bg-accent transition-colors flex items-center gap-3"
          :class="{ 'text-primary font-medium': loc.code === locale }"
          @click="isOpen = false"
        >
          <span class="w-5 h-5 rounded-full bg-gradient-to-br from-instagram-purple to-instagram-pink flex items-center justify-center text-[10px] text-white font-bold">
            {{ loc.code.slice(0, 2).toUpperCase() }}
          </span>
          {{ loc.name }}
        </NuxtLink>
      </div>
    </Transition>

    <!-- Click outside to close -->
    <div v-if="isOpen" class="fixed inset-0 z-40" @click="isOpen = false"></div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useI18n, useSwitchLocalePath } from '#imports'
import { Globe, ChevronDown } from 'lucide-vue-next'

const { locale, locales } = useI18n()
const switchLocalePath = useSwitchLocalePath()
const isOpen = ref(false)

const currentLocaleLabel = computed(() => {
  const current = availableLocales.value.find(l => l.code === locale.value)
  return current?.name || 'English'
})

const availableLocales = computed(() => {
  return locales.value.map(l => ({
    code: l.code,
    name: l.name
  }))
})
</script>
