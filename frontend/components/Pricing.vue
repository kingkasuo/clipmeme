<template>
  <section id="pricing" class="relative py-24 lg:py-32">
    <!-- Background -->
    <div class="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />

    <div class="container relative mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div class="text-center max-w-3xl mx-auto mb-16">
        <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
          <CreditCard class="w-4 h-4" />
          <span>{{ t('pricing.badge') }}</span>
        </div>
        <h2 class="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
          <span class="text-foreground">{{ t('pricing.title') }}</span>
          <br v-if="t('pricing.titleGradient')" />
          <span class="gradient-text">{{ t('pricing.titleGradient') }}</span>
        </h2>
        <p class="text-muted-foreground text-lg">
          {{ t('pricing.subtitle') }}
        </p>
      </div>

      <!-- Pricing Cards -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
        <!-- Free Plan -->
        <div class="p-6 lg:p-8 rounded-2xl bg-card border border-border hover:border-border/80 transition-all">
          <div class="mb-6">
            <h3 class="font-display text-lg font-semibold text-foreground mb-2">{{ t('pricing.free.name') }}</h3>
            <div class="flex items-baseline gap-1">
              <span class="font-display text-4xl font-bold text-foreground">{{ t('pricing.free.price') }}</span>
              <span class="text-muted-foreground">/ {{ t('pricing.free.period') }}</span>
            </div>
            <p class="text-muted-foreground text-sm mt-2">{{ t('pricing.free.description') }}</p>
          </div>

          <ul class="space-y-3 mb-8">
            <li class="flex items-center gap-3 text-sm">
              <Check class="w-5 h-5 text-green-500 flex-shrink-0" />
              <span class="text-muted-foreground">{{ t('pricing.free.features[0]') }}</span>
            </li>
            <li class="flex items-center gap-3 text-sm">
              <Check class="w-5 h-5 text-green-500 flex-shrink-0" />
              <span class="text-muted-foreground">{{ t('pricing.free.features[1]') }}</span>
            </li>
            <li class="flex items-center gap-3 text-sm">
              <Check class="w-5 h-5 text-green-500 flex-shrink-0" />
              <span class="text-muted-foreground">{{ t('pricing.free.features[2]') }}</span>
            </li>
            <li class="flex items-center gap-3 text-sm">
              <Check class="w-5 h-5 text-green-500 flex-shrink-0" />
              <span class="text-muted-foreground">{{ t('pricing.free.features[3]') }}</span>
            </li>
          </ul>

          <NuxtLink
            :to="localePath('/signup')"
            class="flex items-center justify-center gap-2 w-full px-6 py-3 rounded-xl font-semibold bg-muted hover:bg-muted/80 text-foreground transition-colors"
          >
            {{ t('pricing.free.cta') }}
          </NuxtLink>
        </div>

        <!-- Pro Plan -->
        <div class="relative p-6 lg:p-8 rounded-2xl bg-card border-2 border-primary shadow-xl shadow-primary/10">
          <!-- Popular Badge -->
          <div class="absolute -top-4 left-1/2 -translate-x-1/2">
            <div class="px-4 py-1 rounded-full bg-instagram-gradient text-white text-sm font-medium">
              {{ t('pricing.pro.popular') }}
            </div>
          </div>

          <div class="mb-6 pt-2">
            <h3 class="font-display text-lg font-semibold text-foreground mb-2">{{ t('pricing.pro.name') }}</h3>
            <div class="flex items-baseline gap-1">
              <span class="font-display text-4xl font-bold gradient-text">{{ t('pricing.pro.price') }}</span>
              <span class="text-muted-foreground">/ {{ t('pricing.pro.period') }}</span>
            </div>
            <p class="text-muted-foreground text-sm mt-2">{{ t('pricing.pro.description') }}</p>
          </div>

          <ul class="space-y-3 mb-8">
            <li class="flex items-center gap-3 text-sm">
              <Check class="w-5 h-5 text-green-500 flex-shrink-0" />
              <span class="text-muted-foreground">{{ t('pricing.pro.features[0]') }}</span>
            </li>
            <li class="flex items-center gap-3 text-sm">
              <Check class="w-5 h-5 text-green-500 flex-shrink-0" />
              <span class="text-muted-foreground">{{ t('pricing.pro.features[1]') }}</span>
            </li>
            <li class="flex items-center gap-3 text-sm">
              <Check class="w-5 h-5 text-green-500 flex-shrink-0" />
              <span class="text-muted-foreground">{{ t('pricing.pro.features[2]') }}</span>
            </li>
            <li class="flex items-center gap-3 text-sm">
              <Check class="w-5 h-5 text-green-500 flex-shrink-0" />
              <span class="text-muted-foreground">{{ t('pricing.pro.features[3]') }}</span>
            </li>
            <li class="flex items-center gap-3 text-sm">
              <Check class="w-5 h-5 text-green-500 flex-shrink-0" />
              <span class="text-muted-foreground">{{ t('pricing.pro.features[4]') }}</span>
            </li>
          </ul>

          <NuxtLink
            :to="localePath('/signup')"
            class="flex items-center justify-center gap-2 w-full px-6 py-3 rounded-xl font-semibold text-white btn-instagram"
          >
            {{ t('pricing.pro.cta') }}
            <ArrowRight class="w-4 h-4" />
          </NuxtLink>
        </div>

        <!-- Team Plan -->
        <div class="p-6 lg:p-8 rounded-2xl bg-card border border-border hover:border-border/80 transition-all">
          <div class="mb-6">
            <h3 class="font-display text-lg font-semibold text-foreground mb-2">{{ t('pricing.team.name') }}</h3>
            <div class="flex items-baseline gap-1">
              <span class="font-display text-4xl font-bold text-foreground">{{ t('pricing.team.price') }}</span>
              <span class="text-muted-foreground">/ {{ t('pricing.team.period') }}</span>
            </div>
            <p class="text-muted-foreground text-sm mt-2">{{ t('pricing.team.description') }}</p>
          </div>

          <ul class="space-y-3 mb-8">
            <li class="flex items-center gap-3 text-sm">
              <Check class="w-5 h-5 text-green-500 flex-shrink-0" />
              <span class="text-muted-foreground">{{ t('pricing.team.features[0]') }}</span>
            </li>
            <li class="flex items-center gap-3 text-sm">
              <Check class="w-5 h-5 text-green-500 flex-shrink-0" />
              <span class="text-muted-foreground">{{ t('pricing.team.features[1]') }}</span>
            </li>
            <li class="flex items-center gap-3 text-sm">
              <Check class="w-5 h-5 text-green-500 flex-shrink-0" />
              <span class="text-muted-foreground">{{ t('pricing.team.features[2]') }}</span>
            </li>
            <li class="flex items-center gap-3 text-sm">
              <Check class="w-5 h-5 text-green-500 flex-shrink-0" />
              <span class="text-muted-foreground">{{ t('pricing.team.features[3]') }}</span>
            </li>
            <li class="flex items-center gap-3 text-sm">
              <Check class="w-5 h-5 text-green-500 flex-shrink-0" />
              <span class="text-muted-foreground">{{ t('pricing.team.features[4]') }}</span>
            </li>
          </ul>

          <NuxtLink
            :to="localePath('/contact')"
            class="flex items-center justify-center gap-2 w-full px-6 py-3 rounded-xl font-semibold bg-muted hover:bg-muted/80 text-foreground transition-colors"
          >
            {{ t('pricing.team.cta') }}
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useI18n, useLocalePath } from '#imports'
import { CreditCard, Check, ArrowRight } from 'lucide-vue-next'

const { t } = useI18n()
const localePath = useLocalePath()
</script>
