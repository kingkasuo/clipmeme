<template>
  <div class="pt-20">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div class="max-w-3xl mx-auto text-center mb-12">
        <h1 class="font-display text-4xl font-bold mb-4">
          <span class="gradient-text">Careers</span>
        </h1>
        <p class="text-lg text-muted-foreground">
          Join our team and help shape the future of meme creation.
        </p>
      </div>

      <div class="max-w-2xl mx-auto space-y-4">
        <div class="bg-card border border-border rounded-2xl p-6">
          <h3 class="font-display text-lg font-semibold mb-2">Full Stack Developer</h3>
          <p class="text-sm text-muted-foreground mb-4">Remote • Full-time</p>
          <button class="px-4 py-2 rounded-lg bg-primary text-white text-sm font-medium">Apply Now</button>
        </div>

        <div class="bg-card border border-border rounded-2xl p-6">
          <h3 class="font-display text-lg font-semibold mb-2">Product Designer</h3>
          <p class="text-sm text-muted-foreground mb-4">Remote • Full-time</p>
          <button class="px-4 py-2 rounded-lg bg-primary text-white text-sm font-medium">Apply Now</button>
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
