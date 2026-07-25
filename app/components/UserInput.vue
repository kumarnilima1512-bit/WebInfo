<script setup>
const props = defineProps({
  modelValue: {
    type: String,
    default: "",
  },
  loading: {
    type: Boolean,
    default: false,
  },
  placeholder: {
    type: String,
    default: "https://example.com",
  },
})

const emit = defineEmits([
  "update:modelValue",
  "submit",
])

function onInput(event) {
  emit("update:modelValue", event.target.value)
}

function isValidUrl(url) {
  try {
    const parsed = new URL(url)

    return parsed.protocol === "http:" || parsed.protocol === "https:"
  } catch {
    return false
  }
}

function onSubmit() {
  if (props.loading) return

  const url = props.modelValue.trim()

  if (!url) return

  if (!isValidUrl(url)) {
    emit("submit", {
      valid: false,
      url,
    })

    return
  }

  emit("submit", {
    valid: true,
    url,
  })
}
</script>

<template>
  <form
    class="w-full"
    @submit.prevent="onSubmit"
  >
    <div
      class="flex flex-col gap-3 rounded-2xl border border-white/10 bg-white/5 p-3 shadow-2xl shadow-indigo-950/50 backdrop-blur-md sm:flex-row"
    >

      <!-- URL Input -->
      <div class="relative flex-1">

        <svg
          class="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M13.828 10.172a4 4 0 010 5.656l-2 2a4 4 0 01-5.656-5.656l1-1m6.828-6.828a4 4 0 015.656 5.656l-1 1m-4.828-2.828l-4 4"
          />
        </svg>

        <input
          :value="modelValue"
          type="url"
          inputmode="url"
          autocomplete="url"
          :placeholder="placeholder"
          :disabled="loading"
          aria-label="Website URL"
          @input="onInput"
          class="w-full rounded-xl border border-transparent bg-white py-3 pl-12 pr-4 text-slate-900 outline-none transition focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/20 disabled:cursor-not-allowed disabled:opacity-60"
        />
      </div>

      <!-- Button -->
      <button
        type="submit"
        :disabled="loading || !modelValue.trim()"
        aria-label="Analyze Website"
        class="flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-500 px-7 py-3 font-semibold text-white transition hover:scale-[1.02] hover:opacity-95 disabled:cursor-not-allowed disabled:opacity-60"
      >

        <!-- Spinner -->
        <svg
          v-if="loading"
          class="h-5 w-5 animate-spin"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            class="opacity-20"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            stroke-width="4"
          />

          <path
            class="opacity-90"
            fill="currentColor"
            d="M4 12a8 8 0 018-8v4A4 4 0 008 12H4z"
          />
        </svg>

        <span>
          {{ loading ? "Scanning..." : "Analyze Website" }}
        </span>

      </button>

    </div>
  </form>
</template>