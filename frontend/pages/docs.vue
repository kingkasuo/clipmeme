<template>
  <div class="pt-20">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div class="max-w-3xl mx-auto text-center mb-12">
        <h1 class="font-display text-4xl font-bold mb-4">
          <span class="gradient-text">Documentation</span>
        </h1>
        <p class="text-lg text-muted-foreground">
          Everything you need to know about using MemeGen.
        </p>
      </div>

      <div class="max-w-2xl mx-auto space-y-4">
        <div class="bg-card border border-border rounded-2xl p-6">
          <h3 class="font-display text-lg font-semibold mb-2">Getting Started</h3>
          <p class="text-sm text-muted-foreground">Learn the basics of meme creation...</p>
        </div>

        <div class="bg-card border border-border rounded-2xl p-6">
          <h3 class="font-display text-lg font-semibold mb-2">API Reference</h3>
          <p class="text-sm text-muted-foreground">Complete API documentation...</p>
        </div>

        <div class="bg-card border border-border rounded-2xl p-6">
          <h3 class="font-display text-lg font-semibold mb-2">Best Practices</h3>
          <p class="text-sm text-muted-foreground">Tips for creating viral memes...</p>
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
