<template>
  <div class="pt-20">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div class="max-w-3xl mx-auto text-center mb-12">
        <h1 class="font-display text-4xl font-bold mb-4">
          <span class="gradient-text">API</span>
        </h1>
        <p class="text-lg text-muted-foreground">
          Integrate meme generation into your applications.
        </p>
      </div>

      <div class="max-w-3xl mx-auto bg-card border border-border rounded-2xl p-6">
        <h2 class="font-semibold mb-4">API Endpoint</h2>
        <code class="block bg-muted p-4 rounded-lg text-sm mb-6">
          POST https://api.memegen.ai/v1/generate
        </code>

        <h3 class="font-semibold mb-2">Example Request</h3>
        <pre class="bg-muted p-4 rounded-lg text-sm overflow-x-auto">{
  "text": "Your meme text here",
  "template": "drake",
  "language": "en"
}</pre>
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'default'
})
</script>
