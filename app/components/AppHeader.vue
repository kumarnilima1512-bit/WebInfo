<script setup lang="ts">
import { ref } from "vue";

const isMenuOpen = ref(false);

function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value;
}

function closeMenu() {
  isMenuOpen.value = false;
}
</script>

<template>
  <header class="relative z-20 px-6 py-5 sm:px-10">
    <div class="flex items-center justify-between">
      <NuxtLink to="/" class="flex items-center gap-3" @click="closeMenu">
        <div class="flex h-18 w-18 items-center justify-center overflow-hidden rounded-xl">
          <img src="/images/logo.png" alt="WebInfo Logo" class="h-16 w-16 object-contain" />
        </div>
        <span class="text-lg font-bold tracking-tight text-white sm:text-xl">
          Web <span class="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">Info</span>
        </span>
      </NuxtLink>

      <!-- ===== Desktop Nav ===== -->
      <nav class="hidden items-center gap-8 text-sm font-medium text-slate-300 sm:flex">
        <NuxtLink to="/" class="transition hover:text-white" active-class="text-white">Home</NuxtLink>
        <NuxtLink to="/about" class="transition hover:text-white" active-class="text-white">About</NuxtLink>
        <NuxtLink to="/contact" class="transition hover:text-white" active-class="text-white">Contact</NuxtLink>
      </nav>

      <!-- ===== Mobile Hamburger Button ===== -->
      <button
        type="button"
        class="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-slate-200 transition hover:border-indigo-400/40 sm:hidden"
        :aria-expanded="isMenuOpen"
        aria-label="Toggle navigation menu"
        @click="toggleMenu"
      >
        <svg v-if="!isMenuOpen" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
        <svg v-else class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>

    <!-- ===== Mobile Dropdown Menu ===== -->
    <Transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0 -translate-y-2"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-2"
    >
      <nav
        v-if="isMenuOpen"
        class="mt-4 flex flex-col gap-1 rounded-2xl border border-white/10 bg-slate-900/90 p-3 text-sm font-medium text-slate-300 backdrop-blur-md sm:hidden"
      >
        <NuxtLink
          to="/"
          class="rounded-xl px-4 py-3 transition hover:bg-white/5 hover:text-white"
          active-class="text-white bg-white/5"
          @click="closeMenu"
        >
          Home
        </NuxtLink>
        <NuxtLink
          to="/about"
          class="rounded-xl px-4 py-3 transition hover:bg-white/5 hover:text-white"
          active-class="text-white bg-white/5"
          @click="closeMenu"
        >
          About
        </NuxtLink>
        <NuxtLink
          to="/contact"
          class="rounded-xl px-4 py-3 transition hover:bg-white/5 hover:text-white"
          active-class="text-white bg-white/5"
          @click="closeMenu"
        >
          Contact
        </NuxtLink>
      </nav>
    </Transition>
  </header>
</template>