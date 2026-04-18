<template>
  <div class="noise-overlay">
    <main>
      <Hero />
      <Features />
      <HowItWorks />
      <Pricing />
    </main>
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'default'
})

useHead({
  title: 'MemeGen AI - Turn Text Into Viral Memes',
  meta: [
    { name: 'description', content: 'Generate viral memes from text using AI. Support for 110+ languages and unlimited templates.' }
  ]
})
</script>
