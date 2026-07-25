<script setup lang="ts">
useHead({
  title: "Contact | WebInfo",
  meta: [
    {
      name: "description",
      content:
        "Get in touch with WebInfo — reach out via email, WhatsApp, or LinkedIn.",
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

const emailContact = {
  label: "Email",
  hint: "Click to send an email",
  href: "mailto:nilimakumar1512@gmail.com",
};

const whatsappContact = {
  label: "WhatsApp",
  hint: "Click to start a chat",
  href: "https://wa.me/918240946460",
};

const linkedinContact = {
  label: "LinkedIn",
  hint: "Click to view profile",
  href: "https://www.linkedin.com/in/nilimakumar?utm_source=share_via&utm_content=profile&utm_medium=member_android",
};
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

    <!-- ===== Navbar ===== -->
    <AppHeader />

    <main class="relative z-10 mx-auto max-w-4xl px-6 pt-14 pb-24 sm:pt-20">
      <div class="text-center">
        <span class="mb-5 inline-flex items-center gap-2 rounded-full border border-indigo-400/30 bg-indigo-500/10 px-4 py-1.5 text-xs font-medium text-indigo-300 sm:text-sm">
          <span class="h-2 w-2 animate-pulse rounded-full bg-emerald-400"></span>
          Get In Touch
        </span>

        <h1 class="mx-auto max-w-xl text-4xl font-extrabold leading-tight text-white sm:text-5xl">
          Let's
          <span class="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Connect
          </span>
        </h1>

        <p class="mx-auto mt-6 max-w-xl text-base text-slate-400 sm:text-lg">
          Have a question, feedback, or collaboration idea? Reach out through
          any of the channels below.
        </p>
      </div>

      <!-- ===== Contact Cards ===== -->
      <div class="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-3">

        <!-- Email Card -->
        <a
          :href="emailContact.href"
          class="contact-card group flex flex-col items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur-md transition hover:-translate-y-1"
        >
          <span class="icon-glow icon-indigo flex h-16 w-16 items-center justify-center rounded-full border-2">
            <svg class="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0-.966.784-1.75 1.75-1.75h16c.966 0 1.75.784 1.75 1.75v10.5a1.75 1.75 0 01-1.75 1.75H4a1.75 1.75 0 01-1.75-1.75V6.75z" />
              <path stroke-linecap="round" stroke-linejoin="round" d="M3.5 6.5l8.5 6 8.5-6" />
            </svg>
          </span>
          <div>
            <p class="text-sm font-semibold uppercase tracking-wide text-slate-400">{{ emailContact.label }}</p>
            <p class="mt-1 text-xs text-slate-500 group-hover:text-indigo-300">
              {{ emailContact.hint }}
            </p>
          </div>
        </a>

        <!-- WhatsApp Card -->
        <a
          :href="whatsappContact.href"
          target="_blank"
          rel="noopener noreferrer"
          class="contact-card group flex flex-col items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur-md transition hover:-translate-y-1"
        >
          <span class="icon-glow icon-emerald flex h-16 w-16 items-center justify-center rounded-full border-2">
            <svg class="h-7 w-7" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.46 1.32 4.96L2.05 22l5.25-1.38a9.86 9.86 0 004.74 1.21h.01c5.46 0 9.9-4.45 9.9-9.92 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0012.04 2zm0 18.13a8.2 8.2 0 01-4.19-1.15l-.3-.18-3.11.82.83-3.03-.2-.31a8.22 8.22 0 01-1.26-4.37c0-4.54 3.7-8.24 8.25-8.24 2.2 0 4.27.86 5.83 2.42a8.19 8.19 0 012.41 5.83c0 4.55-3.7 8.24-8.26 8.21zm4.52-6.16c-.25-.12-1.47-.72-1.7-.81-.23-.08-.4-.12-.56.13-.17.25-.65.81-.79.97-.15.17-.29.19-.54.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.24-1.47-1.39-1.72-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.44.13-.14.17-.25.25-.41.08-.17.04-.31-.02-.44-.06-.12-.56-1.35-.77-1.85-.2-.48-.4-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.87.85-.87 2.08 0 1.22.89 2.4 1.02 2.57.12.17 1.75 2.67 4.24 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.08.14-1.18-.06-.11-.23-.17-.48-.29z" />
            </svg>
          </span>
          <div>
            <p class="text-sm font-semibold uppercase tracking-wide text-slate-400">{{ whatsappContact.label }}</p>
            <p class="mt-1 text-xs text-slate-500 group-hover:text-emerald-300">
              {{ whatsappContact.hint }}
            </p>
          </div>
        </a>

        <!-- LinkedIn Card -->
        <a
          :href="linkedinContact.href"
          target="_blank"
          rel="noopener noreferrer"
          class="contact-card group flex flex-col items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur-md transition hover:-translate-y-1"
        >
          <span class="icon-glow icon-cyan flex h-16 w-16 items-center justify-center rounded-full border-2">
            <svg class="h-7 w-7" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.95v5.66H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 110-4.12 2.06 2.06 0 010 4.12zM7.12 20.45H3.56V9h3.56v11.45z" />
            </svg>
          </span>
          <div>
            <p class="text-sm font-semibold uppercase tracking-wide text-slate-400">{{ linkedinContact.label }}</p>
            <p class="mt-1 text-xs text-slate-500 group-hover:text-cyan-300">
              {{ linkedinContact.hint }}
            </p>
          </div>
        </a>
      </div>

      <!-- ===== Bottom Note ===== -->
      <div class="mt-24 rounded-2xl border border-indigo-400/20 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 p-8 text-center backdrop-blur-md">
        <p class="text-sm text-slate-400 sm:text-base">
          Usually responds within 24 hours. Looking forward to connecting with you.
        </p>
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

.contact-card {
  position: relative;
}

.contact-card:hover {
  border-color: rgba(129, 140, 248, 0.4);
  box-shadow: 0 0 30px -8px rgba(99, 102, 241, 0.5);
}

.icon-glow {
  transition: all 0.3s ease;
}

.icon-indigo {
  color: #818cf8;
  border-color: rgba(129, 140, 248, 0.4);
  background: rgba(129, 140, 248, 0.08);
  filter: drop-shadow(0 0 6px rgba(129, 140, 248, 0.6));
}

.contact-card:hover .icon-indigo {
  border-color: #818cf8;
  box-shadow: 0 0 20px 2px rgba(129, 140, 248, 0.6);
}

.icon-emerald {
  color: #34d399;
  border-color: rgba(52, 211, 153, 0.4);
  background: rgba(52, 211, 153, 0.08);
  filter: drop-shadow(0 0 6px rgba(52, 211, 153, 0.6));
}

.contact-card:hover .icon-emerald {
  border-color: #34d399;
  box-shadow: 0 0 20px 2px rgba(52, 211, 153, 0.6);
}

.icon-cyan {
  color: #22d3ee;
  border-color: rgba(34, 211, 238, 0.4);
  background: rgba(34, 211, 238, 0.08);
  filter: drop-shadow(0 0 6px rgba(34, 211, 238, 0.6));
}

.contact-card:hover .icon-cyan {
  border-color: #22d3ee;
  box-shadow: 0 0 20px 2px rgba(34, 211, 238, 0.6);
}
</style>