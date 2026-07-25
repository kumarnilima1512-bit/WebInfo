<script setup lang="ts">
import { ref } from "vue";
import UserInput from "~/components/UserInput.vue";
import ReportCard from "~/components/ReportCard.vue";

useHead({
  title: "Digital Heroes | Website Scanner",
  meta: [
    {
      name: "description",
      content:
        "Instantly analyze any website — HTTP status, response time, SEO meta info, missing alt tags, word count and more.",
    },
  ],
});

const scanChecks = [
  "HTTP Status",
  "SSL Certificate",
  "Meta Tags",
  "Alt Attributes",
  "Response Time",
];

const url = ref("");
const loading = ref(false);
const error = ref("");

const result = ref<any>(null);

async function handleAnalyze(payload: { valid: boolean; url: string }) {
  if (!payload.valid) {
    error.value = "Please enter a valid website URL.";
    result.value = null;
    return;
  }

  loading.value = true;
  error.value = "";
  result.value = null;

  try {
    const response = await $fetch("/api/audit", {
      method: "POST",
      body: {
        url: payload.url,
      },
    });

    result.value = response;

    console.log("Website Report:", response);
  } catch (err: any) {
    console.error(err);

    error.value =
      err?.data?.statusMessage || "Unable to analyze the website.";
  } finally {
    loading.value = false;
  }
}
</script>

<template>
  <div class="relative min-h-screen overflow-hidden bg-slate-950">

    <!-- ===== Tech Grid Background ===== -->
    <div class="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:48px_48px] opacity-40"></div>

    <!-- ===== Radial Glow Overlay ===== -->
    <div class="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(99,102,241,0.25),transparent_60%)]"></div>

    <!-- ===== Ambient Scanning Line (full page) ===== -->
    <div class="scan-line"></div>

    <!-- ===== Animated Network Nodes (SVG) ===== -->
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

    <!-- ===== Floating Tech Symbols ===== -->
    <div class="pointer-events-none absolute inset-0 overflow-hidden">
      <span class="tech-symbol symbol-1">&lt;/&gt;</span>
      <span class="tech-symbol symbol-2">{ }</span>
      <span class="tech-symbol symbol-3">⬡</span>
      <span class="tech-symbol symbol-4">⚡</span>
      <span class="tech-symbol symbol-5">01</span>
      <span class="tech-symbol symbol-6">λ</span>
    </div>

    <!-- ===== Navbar ===== -->
    <header class="relative z-10 flex items-center justify-between px-6 py-5 sm:px-10">
      <div class="flex items-center gap-3">
        <div class="flex h-18 w-18 items-center justify-center overflow-hidden rounded-xl">
          <img
              src="/images/logo.png"
              alt="WebInfo Logo"
              class="h-16 w-16 object-contain"
            />
          </div>
        <span class="text-lg font-bold tracking-tight text-white sm:text-xl">
          Web <span class="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">Info</span>
        </span>
      </div>

      <nav class="hidden items-center gap-8 text-sm font-medium text-slate-300 sm:flex">
        <a href="#" class="transition hover:text-white">Home</a>
        <a href="#" class="transition hover:text-white">About</a>
        <a href="#" class="transition hover:text-white">Contact</a>
      </nav>
    </header>

    <!-- ===== Hero Section ===== -->
    <main class="relative z-10 mx-auto flex max-w-7xl flex-col items-center gap-14 px-6 pt-14 pb-24 sm:pt-20 lg:flex-row lg:items-center lg:justify-between lg:gap-10">

      <!-- ===== Left: Text Content ===== -->
      <div class="flex flex-col items-center text-center lg:items-start lg:text-left">
        <span class="mb-5 inline-flex items-center gap-2 rounded-full border border-indigo-400/30 bg-indigo-500/10 px-4 py-1.5 text-xs font-medium text-indigo-300 sm:text-sm">
          <span class="h-2 w-2 animate-pulse rounded-full bg-emerald-400"></span>
          Free Online Website Scanner
        </span>

        <h1 class="max-w-xl text-4xl font-extrabold leading-tight text-white sm:text-5xl md:text-6xl">
          Website
          <span class="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Health Checker
          </span>
        </h1>

        <p class="mt-6 max-w-md text-base text-slate-400 sm:text-lg">
          Enter any website URL to instantly get its HTTP status, response time,
          SEO meta info, missing alt tags, and approximate word count.
        </p>

        <!-- Placeholder for URL Input (will be made functional in the next step) -->
        <div class="mt-10 w-full max-w-xl">
            <UserInput
                v-model="url"
                :loading="loading"
                @submit="handleAnalyze"
            />

            <p
                v-if="error"
                class="mt-4 rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-300"
                >
            {{ error }}
            </p>
            
        </div>          
    </div>

      <!-- ===== Right: Live Radar Scan Card ===== -->
      <div class="w-full max-w-sm shrink-0">
        <div class="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 shadow-2xl shadow-indigo-950/50 backdrop-blur-md">

          <!-- Card Header -->
          <div class="mb-5 flex items-center justify-between">
            <span class="text-sm font-semibold text-slate-300">Live Scan Preview</span>
            <span class="flex items-center gap-1.5 text-xs font-medium text-emerald-400">
              <span class="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400"></span>
              Scanning
            </span>
          </div>

          <!-- ===== Radar Box ===== -->
          <div class="mb-6 flex h-40 items-center justify-center rounded-xl border border-indigo-400/20 bg-slate-900/60">
            <div class="radar">
              <!-- concentric rings -->
              <div class="radar-ring ring-1"></div>
              <div class="radar-ring ring-2"></div>
              <div class="radar-ring ring-3"></div>

              <!-- crosshair lines -->
              <div class="radar-cross radar-cross-h"></div>
              <div class="radar-cross radar-cross-v"></div>

              <!-- rotating sweep beam -->
              <div class="radar-sweep"></div>

              <!-- detection blips -->
              <span class="radar-blip blip-1"></span>
              <span class="radar-blip blip-2"></span>
              <span class="radar-blip blip-3"></span>

              <!-- center pulse dot -->
              <span class="radar-center"></span>
            </div>
          </div>

          <!-- Checklist -->
          <ul class="space-y-2.5">
            <li
              v-for="(item, index) in scanChecks"
              :key="item"
              class="check-item flex items-center gap-2.5 text-sm text-slate-400"
              :style="{ animationDelay: `${index * 0.9}s` }"
            >
              <span class="check-icon flex h-4 w-4 shrink-0 items-center justify-center rounded-full border border-slate-600">
                <svg class="h-2.5 w-2.5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </span>
              {{ item }}
            </li>
          </ul>
        </div>
      </div>
    </main>
        <!-- Website Report Placeholder -->
    <ReportCard :result="result" />


<!-- Footer -->
<footer class="relative z-10 mt-10 border-t border-white/10 bg-slate-950/50 backdrop-blur-md">
  <div
    class="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-6 text-center text-sm text-slate-400 md:flex-row"
  >
    <p>
      Built for
      <span class="font-semibold text-white">
        Digital Heroes Training Task
      </span>
    </p>

    <a
      href="https://digitalheroesco.com"
      target="_blank"
      rel="noopener noreferrer"
      class="font-medium text-indigo-400 transition hover:text-indigo-300"
    >
      digitalheroesco.com →
    </a>
  </div>
</footer>

</div>
</template>

<style scoped>
/* ===== Ambient Full-Page Scan Line ===== */
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

/* ===== Network Nodes & Lines ===== */
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

/* ===== Floating Tech Symbols ===== */
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

/* ===== Radar Scan Animation ===== */
.radar {
  position: relative;
  width: 128px;
  height: 128px;
  border-radius: 9999px;
  background: radial-gradient(circle, rgba(16, 185, 129, 0.06), transparent 70%);
}

.radar-ring {
  position: absolute;
  top: 50%;
  left: 50%;
  border: 1px solid rgba(52, 211, 153, 0.25);
  border-radius: 9999px;
  transform: translate(-50%, -50%);
}

.ring-1 { width: 100%; height: 100%; }
.ring-2 { width: 66%; height: 66%; }
.ring-3 { width: 33%; height: 33%; }

.radar-cross {
  position: absolute;
  background: rgba(52, 211, 153, 0.2);
}

.radar-cross-h {
  top: 50%;
  left: 0;
  width: 100%;
  height: 1px;
  transform: translateY(-50%);
}

.radar-cross-v {
  left: 50%;
  top: 0;
  width: 1px;
  height: 100%;
  transform: translateX(-50%);
}

.radar-sweep {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 9999px;
  background: conic-gradient(
    from 0deg,
    rgba(52, 211, 153, 0.55) 0deg,
    rgba(52, 211, 153, 0.15) 25deg,
    transparent 60deg,
    transparent 360deg
  );
  animation: radarRotate 3s linear infinite;
  mix-blend-mode: screen;
}

@keyframes radarRotate {
  to { transform: rotate(360deg); }
}

.radar-center {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 6px;
  height: 6px;
  border-radius: 9999px;
  background: #34d399;
  box-shadow: 0 0 8px 2px rgba(52, 211, 153, 0.8);
  transform: translate(-50%, -50%);
  animation: pulseNode 2s ease-in-out infinite;
  z-index: 2;
}

.radar-blip {
  position: absolute;
  width: 5px;
  height: 5px;
  border-radius: 9999px;
  background: #f87171;
  box-shadow: 0 0 8px 2px rgba(248, 113, 113, 0.7);
  opacity: 0;
  animation: blipDetect 3s ease-in-out infinite;
}

.blip-1 { top: 25%; left: 65%; animation-delay: 0.4s; }
.blip-2 { top: 70%; left: 30%; animation-delay: 1.6s; }
.blip-3 { top: 40%; left: 20%; animation-delay: 2.4s; }

@keyframes blipDetect {
  0%, 100% { opacity: 0; transform: scale(0.5); }
  10%, 30% { opacity: 1; transform: scale(1); }
  40% { opacity: 0; transform: scale(0.5); }
}

/* ===== Checklist Items — sequential "checking" animation ===== */
.check-item {
  opacity: 0.45;
  animation: checkPulse 4.5s ease-in-out infinite;
}

.check-icon {
  animation: iconBorderPulse 4.5s ease-in-out infinite;
}

.check-item .check-icon svg {
  opacity: 0;
  animation: iconTickFade 4.5s ease-in-out infinite;
}

@keyframes checkPulse {
  0%, 15% { opacity: 0.45; color: #94a3b8; }
  20%, 90% { opacity: 1; color: #cbd5e1; }
  100% { opacity: 0.45; color: #94a3b8; }
}

@keyframes iconBorderPulse {
  0%, 15% { border-color: #475569; }
  20%, 90% { border-color: #34d399; background: rgba(52, 211, 153, 0.1); }
  100% { border-color: #475569; }
}

@keyframes iconTickFade {
  0%, 15% { opacity: 0; }
  20%, 90% { opacity: 1; }
  100% { opacity: 0; }
}
</style>