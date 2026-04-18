<template>
  <section class="relative py-24 lg:py-32">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div class="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
        <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
          <Zap class="w-4 h-4" />
          <span>{{ $t('howItWorks.badge') }}</span>
        </div>
        <h2 class="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
          <span class="text-foreground">{{ $t('howItWorks.title') }}</span>
          <br />
          <span class="gradient-text">{{ $t('howItWorks.titleGradient') }}</span>
        </h2>
      </div>

      <!-- Steps -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 max-w-5xl mx-auto">
        <div
          v-for="(step, index) in steps"
          :key="index"
          class="relative"
        >
          <!-- Connection Line -->
          <div
            v-if="index < steps.length - 1"
            class="hidden md:block absolute top-12 left-1/2 w-full h-0.5 bg-gradient-to-r from-primary/50 to-transparent"
          />

          <!-- Card -->
          <div class="relative text-center">
            <!-- Number Badge -->
            <div class="inline-flex items-center justify-center w-24 h-24 rounded-2xl bg-gradient-to-br mb-6" :class="step.gradient">
              <span class="font-display text-3xl font-bold text-white">{{ step.number }}</span>
            </div>

            <h3 class="font-display text-xl font-semibold mb-3 text-foreground">
              {{ step.title }}
            </h3>
            <p class="text-muted-foreground">
              {{ step.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Zap } from 'lucide-vue-next'

const { t } = useI18n()

const steps = computed(() => [
  {
    number: t('howItWorks.step1.number'),
    title: t('howItWorks.step1.title'),
    description: t('howItWorks.step1.description'),
    gradient: 'from-instagram-purple to-instagram-pink',
  },
  {
    number: t('howItWorks.step2.number'),
    title: t('howItWorks.step2.title'),
    description: t('howItWorks.step2.description'),
    gradient: 'from-instagram-pink to-instagram-orange',
  },
  {
    number: t('howItWorks.step3.number'),
    title: t('howItWorks.step3.title'),
    description: t('howItWorks.step3.description'),
    gradient: 'from-instagram-orange to-instagram-yellow',
  },
])
</script>
