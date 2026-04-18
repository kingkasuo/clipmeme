<template>
  <div class="pt-20">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div class="max-w-3xl mx-auto text-center mb-12">
        <h1 class="font-display text-4xl font-bold mb-4">
          <span class="gradient-text">Tutorials</span>
        </h1>
        <p class="text-lg text-muted-foreground">
          Learn how to create amazing memes with our step-by-step guides.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        <div v-for="i in 4" :key="i" class="bg-card border border-border rounded-2xl p-6 hover:border-primary/50 transition-all">
          <div class="aspect-video bg-gradient-to-br from-muted to-muted/50 rounded-xl mb-4" />
          <h3 class="font-display text-lg font-semibold mb-2">Tutorial {{ i }}</h3>
          <p class="text-sm text-muted-foreground">Learn the basics of meme creation...</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'default'
})
</script>
