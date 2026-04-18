<template>
  <footer class="border-t border-border bg-card/50">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-4xl mx-auto">
        <!-- Brand -->
        <div>
          <NuxtLink to="/" class="flex items-center gap-2 mb-4">
            <div class="w-10 h-10 rounded-xl bg-instagram-gradient flex items-center justify-center shadow-lg">
              <Sparkles class="w-5 h-5 text-white" />
            </div>
            <span class="font-display text-xl font-bold gradient-text">ClipMeme</span>
          </NuxtLink>
          <p class="text-muted-foreground text-sm max-w-xs mb-6">
            {{ $t('footer.tagline') }}
          </p>
          <div class="flex items-center gap-4">
            <a v-for="social in socials" :key="social.name" :href="social.href" target="_blank" rel="noopener"
               class="w-10 h-10 rounded-xl bg-muted flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors">
              <component :is="social.icon" class="w-5 h-5" />
            </a>
          </div>
        </div>

        <!-- Product Links -->
        <div>
          <h4 class="font-semibold text-foreground mb-4">{{ $t('footer.product') }}</h4>
          <ul class="space-y-3">
            <li v-for="link in productLinks" :key="link.label">
              <NuxtLink :to="localePath(link.href)" class="text-sm text-muted-foreground hover:text-foreground transition-colors">
                {{ link.label }}
              </NuxtLink>
            </li>
          </ul>
        </div>
      </div>

      <!-- Bottom -->
      <div class="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
        <p class="text-sm text-muted-foreground">
          © {{ new Date().getFullYear() }} ClipMeme. {{ $t('footer.rights') }}
        </p>
        <div class="flex items-center gap-6">
          <NuxtLink :to="localePath('/privacy')" class="text-sm text-muted-foreground hover:text-foreground transition-colors">
            {{ $t('footer.legal') }}
          </NuxtLink>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { useLocalePath } from '#imports'
import { Sparkles, Twitter, Github, MessageCircle } from 'lucide-vue-next'

const localePath = useLocalePath()

const socials = [
  { name: 'Twitter', icon: Twitter, href: '#' },
  { name: 'GitHub', icon: Github, href: '#' },
  { name: 'Discord', icon: MessageCircle, href: '#' },
]

const productLinks = [
  { label: 'AI Generator', href: '/features' },
  { label: 'Templates', href: '/templates' },
  { label: 'Pricing', href: '/pricing' },
]
</script>
