<template>
  <div class="pt-20">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div class="max-w-3xl mx-auto text-center mb-12">
        <h1 class="font-display text-4xl font-bold mb-4">
          <span class="gradient-text">Support</span>
        </h1>
        <p class="text-lg text-muted-foreground">
          Need help? We're here for you.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        <div class="bg-card border border-border rounded-2xl p-6 text-center">
          <div class="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
            <MessageCircle class="w-6 h-6 text-primary" />
          </div>
          <h3 class="font-semibold mb-2">Live Chat</h3>
          <p class="text-sm text-muted-foreground">Available 24/7</p>
        </div>

        <div class="bg-card border border-border rounded-2xl p-6 text-center">
          <div class="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
            <Mail class="w-6 h-6 text-primary" />
          </div>
          <h3 class="font-semibold mb-2">Email</h3>
          <p class="text-sm text-muted-foreground">support@memegen.ai</p>
        </div>

        <div class="bg-card border border-border rounded-2xl p-6 text-center">
          <div class="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
            <HelpCircle class="w-6 h-6 text-primary" />
          </div>
          <h3 class="font-semibold mb-2">FAQ</h3>
          <p class="text-sm text-muted-foreground">Common questions</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { MessageCircle, Mail, HelpCircle } from 'lucide-vue-next'

definePageMeta({
  layout: 'default'
})
</script>
