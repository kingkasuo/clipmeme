<template>
  <div class="pt-20">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div class="max-w-3xl mx-auto text-center">
        <h1 class="font-display text-4xl lg:text-5xl font-bold mb-6">
          <span class="gradient-text">{{ $t('nav.features') }}</span>
        </h1>
        <p class="text-lg text-muted-foreground">
          Discover all the powerful features that make MemeGen the ultimate meme creation platform.
        </p>
      </div>
    </div>
    <Features />
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'default'
})
</script>
