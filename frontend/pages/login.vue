<template>
  <div class="pt-20">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div class="max-w-md mx-auto">
        <div class="text-center mb-8">
          <h1 class="font-display text-3xl font-bold mb-2">
            <span class="gradient-text">{{ $t('nav.login') }}</span>
          </h1>
          <p class="text-muted-foreground">Welcome back! Sign in to continue.</p>
        </div>

        <div class="bg-card border border-border rounded-2xl p-6 lg:p-8">
          <form class="space-y-4" @submit.prevent>
            <div>
              <label class="block text-sm font-medium mb-2">Email</label>
              <input
                type="email"
                class="w-full px-4 py-3 rounded-xl bg-background border border-input focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label class="block text-sm font-medium mb-2">Password</label>
              <input
                type="password"
                class="w-full px-4 py-3 rounded-xl bg-background border border-input focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                placeholder="••••••••"
              />
            </div>
            <button
              type="submit"
              class="w-full py-3 rounded-xl text-white font-semibold btn-instagram"
            >
              Sign In
            </button>
          </form>

          <div class="mt-6 text-center text-sm text-muted-foreground">
            Don't have an account?
            <NuxtLink :to="localePath('/signup')" class="text-primary hover:underline">
              Get started
            </NuxtLink>
          </div>
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
