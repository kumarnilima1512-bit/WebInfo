<script setup lang="ts">
useHead({
  title: "About | WebInfo",
  meta: [
    {
      name: "description",
      content:
        "Learn more about WebInfo — a free Website Health Checker tool built to help you analyze and improve your website instantly.",
    },
  ],
  link: [
    {
      rel: "icon",
      type: "image/png",
      href: "/images/logo.png",
    },
  ],
});

const features = [
  {
    title: "Instant Analysis",
    description: "Get a complete website health report in seconds — no signup, no waiting.",
    icon: "⚡",
  },
  {
    title: "SEO Insights",
    description: "Check meta title, meta description, heading structure, and content depth.",
    icon: "🔍",
  },
  {
    title: "Accessibility Check",
    description: "Find images missing alt attributes to improve accessibility and SEO ranking.",
    icon: "♿",
  },
  {
    title: "Performance Metrics",
    description: "Measure real response time and HTTP status to catch issues early.",
    icon: "📊",
  },
];

const stats = [
  { value: "7+", label: "Metrics Analyzed" },
  { value: "100%", label: "Free to Use" },
  { value: "<5s", label: "Average Scan Time" },
];
</script>

<template>
  <div class="relative min-h-screen overflow-hidden bg-slate-950">
    <div class="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:48px_48px] opacity-40"></div>

    <div class="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(99,102,241,0.25),transparent_60%)]"></div>

    <div class="scan-line"></div>

    <svg class="pointer-events-none absolute inset-0 h-full w-full opacity-70" xmlns="http://www.w3.org/2000/svg">
      <line x1="10%" y1="20%" x2="30%" y2="40%" class="net-line" />
      <line x1="30%" y1="40%" x2="55%" y2="15%" class="net-line net-line-delay-1" />
      <line x1="55%" y1="15%" x2="80%" y2="35%" class="net-line net-line-delay-2" />
      <line x1="20%" y1="70%" x2="45%" y2="55%" class="net-line net-line-delay-1" />
      <line x1="45%" y1="55%" x2="75%" y2="75%" class="net-line net-line-delay-2" />
      <line x1="75%" y1="75%" x2="90%" y2="50%" class="net-line" />
      <circle cx="10%" cy="20%" r="3" class="net-node" />
      <circle cx="30%" cy="40%" r="4" class="net-node net-node-delay-1" />
      <circle cx="55%" cy="15%" r="3" class="net-node net-node-delay-2" />
      <circle cx="80%" cy="35%" r="4" class="net-node" />
      <circle cx="20%" cy="70%" r="3" class="net-node net-node-delay-1" />
      <circle cx="45%" cy="55%" r="4" class="net-node net-node-delay-2" />
      <circle cx="75%" cy="75%" r="3" class="net-node" />
      <circle cx="90%" cy="50%" r="4" class="net-node net-node-delay-1" />
    </svg>

    <div class="pointer-events-none absolute inset-0 overflow-hidden">
      <span class="tech-symbol symbol-1">&lt;/&gt;</span>
      <span class="tech-symbol symbol-2">{ }</span>
      <span class="tech-symbol symbol-3">⬡</span>
      <span class="tech-symbol symbol-4">⚡</span>
      <span class="tech-symbol symbol-5">01</span>
      <span class="tech-symbol symbol-6">λ</span>
    </div>

    <header class="relative z-10 flex items-center justify-between px-6 py-5 sm:px-10">
      <NuxtLink to="/" class="flex items-center gap-3">
        <div class="flex h-18 w-18 items-center justify-center overflow-hidden rounded-xl">
          <img src="/images/logo.png" alt="WebInfo Logo" class="h-16 w-16 object-contain" />
        </div>
        <span class="text-lg font-bold tracking-tight text-white sm:text-xl">
          Web <span class="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">Info</span>
        </span>
      </NuxtLink>

      <nav class="hidden items-center gap-8 text-sm font-medium text-slate-300 sm:flex">
        <NuxtLink to="/" class="transition hover:text-white">Home</NuxtLink>
        <NuxtLink to="/about" class="text-white transition hover:text-white">About</NuxtLink>
        <NuxtLink to="/contact" class="transition hover:text-white">Contact</NuxtLink>
      </nav>
    </header>

    <main class="relative z-10 mx-auto max-w-5xl px-6 pt-14 pb-24 sm:pt-20">
      <div class="text-center">
        <span class="mb-5 inline-flex items-center gap-2 rounded-full border border-indigo-400/30 bg-indigo-500/10 px-4 py-1.5 text-xs font-medium text-indigo-300 sm:text-sm">
          <span class="h-2 w-2 animate-pulse rounded-full bg-emerald-400"></span>
          About WebInfo
        </span>

        <h1 class="mx-auto max-w-2xl text-4xl font-extrabold leading-tight text-white sm:text-5xl">
          Built to Help You
          <span class="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Build Better Websites
          </span>
        </h1>

        <p class="mx-auto mt-6 max-w-2xl text-base text-slate-400 sm:text-lg">
          WebInfo is a free Website Health Checker built to help developers,
          marketers, and business owners quickly diagnose common website issues —
          without expensive tools or technical expertise.
        </p>
      </div>

      <div class="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-3">
        <div v-for="stat in stats" :key="stat.label" class="rounded-2xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur-md">
          <p class="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-3xl font-extrabold text-transparent">
            {{ stat.value }}
          </p>
          <p class="mt-2 text-sm text-slate-400">{{ stat.label }}</p>
        </div>
      </div>

      <div class="mt-20">
        <h2 class="text-center text-2xl font-bold text-white sm:text-3xl">
          What Our Tool Checks
        </h2>
        <p class="mx-auto mt-3 max-w-xl text-center text-sm text-slate-400 sm:text-base">
          One scan gives you a complete picture of your website's technical and SEO health.
        </p>

        <div class="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div v-for="feature in features" :key="feature.title" class="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md transition hover:border-indigo-400/40 hover:bg-white/10">
            <div class="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-tr from-indigo-500/20 to-purple-500/20 text-2xl">
              {{ feature.icon }}
            </div>
            <h3 class="mt-4 text-lg font-semibold text-white">{{ feature.title }}</h3>
            <p class="mt-2 text-sm text-slate-400">{{ feature.description }}</p>
          </div>
        </div>
      </div>

      <div class="mt-20 rounded-2xl border border-indigo-400/20 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 p-10 text-center backdrop-blur-md">
        <h3 class="text-xl font-bold text-white sm:text-2xl">Ready to check your website?</h3>
        <p class="mt-2 text-sm text-slate-400 sm:text-base">
          Run a free scan and get instant insights in under 5 seconds.
        </p>
        <NuxtLink to="/" class="mt-6 inline-block rounded-xl bg-gradient-to-r from-indigo-500 to-purple-500 px-6 py-3 font-semibold text-white transition hover:opacity-90">
          Start Scanning →
        </NuxtLink>
      </div>
    </main>

    <footer class="relative z-10 mt-10 border-t border-white/10 bg-slate-950/50 backdrop-blur-md">
      <div class="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-6 text-center text-sm text-slate-400 md:flex-row">
        <p>
          Built for
          <span class="font-semibold text-white">Digital Heroes Training Task</span>
        </p>
        <a href="https://digitalheroesco.com" target="_blank" rel="noopener noreferrer" class="font-medium text-indigo-400 transition hover:text-indigo-300">
          digitalheroesco.com →
        </a>
      </div>
    </footer>
  </div>
</template>

<style scoped>
.scan-line {
  position: absolute;
  left: 0;
  width: 100%;
  height: 2px;
  background: linear-gradient(90deg, transparent, rgba(99, 102, 241, 0.6), transparent);
  animation: scan 6s linear infinite;
  box-shadow: 0 0 12px 2px rgba(99, 102, 241, 0.4);
  z-index: 1;
}

@keyframes scan {
  0% { top: 0%; opacity: 0; }
  10% { opacity: 1; }
  90% { opacity: 1; }
  100% { top: 100%; opacity: 0; }
}

.net-node {
  fill: #818cf8;
  animation: pulseNode 3s ease-in-out infinite;
}

.net-node-delay-1 { animation-delay: 1s; fill: #c084fc; }
.net-node-delay-2 { animation-delay: 2s; fill: #22d3ee; }

@keyframes pulseNode {
  0%, 100% { opacity: 0.5; r: 3; }
  50% { opacity: 1; r: 5; }
}

.net-line {
  stroke: #6366f1;
  stroke-width: 1;
  stroke-dasharray: 6 6;
  opacity: 0.3;
  animation: dashMove 4s linear infinite;
}

.net-line-delay-1 { animation-delay: 1.3s; }
.net-line-delay-2 { animation-delay: 2.6s; }

@keyframes dashMove {
  to { stroke-dashoffset: -24; }
}

.tech-symbol {
  position: absolute;
  font-family: 'Courier New', monospace;
  font-weight: 700;
  color: rgba(129, 140, 248, 0.25);
  animation: floatSymbol 10s ease-in-out infinite;
  user-select: none;
}

.symbol-1 { top: 15%; left: 8%; font-size: 2rem; animation-duration: 11s; }
.symbol-2 { top: 60%; left: 12%; font-size: 1.75rem; animation-duration: 9s; animation-delay: 1s; color: rgba(192, 132, 252, 0.25); }
.symbol-3 { top: 25%; right: 10%; font-size: 2.25rem; animation-duration: 13s; animation-delay: 2s; color: rgba(34, 211, 238, 0.25); }
.symbol-4 { top: 70%; right: 15%; font-size: 1.5rem; animation-duration: 8s; animation-delay: 0.5s; }
.symbol-5 { bottom: 10%; left: 30%; font-size: 1.5rem; animation-duration: 12s; animation-delay: 1.5s; color: rgba(192, 132, 252, 0.2); }
.symbol-6 { top: 42%; right: 35%; font-size: 1.75rem; animation-duration: 10s; animation-delay: 2.5s; color: rgba(34, 211, 238, 0.2); }

@keyframes floatSymbol {
  0%, 100% { transform: translateY(0) rotate(0deg); }
  50% { transform: translateY(-30px) rotate(8deg); }
}
</style>