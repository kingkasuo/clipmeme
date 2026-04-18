<template>
  <div class="pt-20">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div class="max-w-2xl mx-auto text-center mb-12">
        <h1 class="font-display text-4xl font-bold mb-4">
          <span class="gradient-text">Contact Sales</span>
        </h1>
        <p class="text-lg text-muted-foreground">
          Get in touch with our team for enterprise solutions and custom pricing.
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <div class="bg-card border border-border rounded-2xl p-6 lg:p-8">
          <h2 class="font-display text-xl font-semibold mb-6">Send us a message</h2>
          <form class="space-y-4" @submit.prevent>
            <div>
              <label class="block text-sm font-medium mb-2">Name</label>
              <input
                type="text"
                class="w-full px-4 py-3 rounded-xl bg-background border border-input focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                placeholder="Your name"
              />
            </div>
            <div>
              <label class="block text-sm font-medium mb-2">Email</label>
              <input
                type="email"
                class="w-full px-4 py-3 rounded-xl bg-background border border-input focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                placeholder="you@company.com"
              />
            </div>
            <div>
              <label class="block text-sm font-medium mb-2">Message</label>
              <textarea
                rows="4"
                class="w-full px-4 py-3 rounded-xl bg-background border border-input focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none"
                placeholder="How can we help?"
              />
            </div>
            <button
              type="submit"
              class="w-full py-3 rounded-xl text-white font-semibold btn-instagram"
            >
              Send Message
            </button>
          </form>
        </div>

        <div class="space-y-6">
          <div class="bg-card border border-border rounded-2xl p-6">
            <div class="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
              <Mail class="w-6 h-6 text-primary" />
            </div>
            <h3 class="font-semibold mb-2">Email</h3>
            <p class="text-muted-foreground">service@clipmeme.online</p>
          </div>

          <div class="bg-card border border-border rounded-2xl p-6">
            <div class="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
              <MessageCircle class="w-6 h-6 text-primary" />
            </div>
            <h3 class="font-semibold mb-2">Live Chat</h3>
            <p class="text-muted-foreground">Available 9am-6pm EST</p>
          </div>

          <div class="bg-card border border-border rounded-2xl p-6">
            <div class="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
              <Calendar class="w-6 h-6 text-primary" />
            </div>
            <h3 class="font-semibold mb-2">Schedule a Demo</h3>
            <p class="text-muted-foreground">Book a time with our team</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Mail, MessageCircle, Calendar } from 'lucide-vue-next'

definePageMeta({
  layout: 'default'
})
</script>
