<script setup lang="ts">
const props = defineProps<{
  result: {
    status: number;
    responseTime: number;
    title: string;
    metaDescription: string;
    h1Count: number;
    missingAltImages: number;
    wordCount: number;
  } | null;
}>();

function calculateScore() {
  if (!props.result) return 0;

  let score = 0;

  // HTTP
  if (props.result.status >= 200 && props.result.status < 300)
    score += 20;

  // Speed
  if (props.result.responseTime < 500)
    score += 20;
  else if (props.result.responseTime < 1500)
    score += 15;
  else
    score += 5;

  // SEO
  if (props.result.title)
    score += 15;

  if (
    props.result.metaDescription &&
    props.result.metaDescription !== "No meta description found."
  )
    score += 15;


  if (props.result.h1Count === 1)
    score += 10;

  // Content
  if (props.result.wordCount > 300)
    score += 10;


  // Images
  if (props.result.missingAltImages === 0)
    score += 10;


  return score;
}


function scoreText(score:number){
  if(score >= 80)
    return "Excellent";

  if(score >=60)
    return "Good";

  return "Needs Improvement";
}

function scoreColor(score:number){

  if(score >=80)
    return "text-emerald-400";

  if(score>=60)
    return "text-yellow-400";


  return "text-red-400";
}


function statusBadge(status:number){

  if(status>=200 && status<300)
    return "bg-emerald-500/20 text-emerald-400";

  return "bg-red-500/20 text-red-400";
}

</script>


<template>

<section class="mx-auto max-w-7xl px-6 pb-20">

<div
class="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl shadow-2xl"
>


<!-- HEADER -->

<div class="mb-10 flex flex-col items-center justify-between gap-8 md:flex-row">


<div>
<h2 class="text-3xl font-bold text-white">
Website Health Report
</h2>

<p class="mt-2 text-slate-400">
SEO, Performance and Technical Analysis
</p>

</div>



<!-- SCORE -->

<div class="text-center">

<div
class="flex h-32 w-32 items-center justify-center rounded-full border-8 border-indigo-500/30"
>

<div>

<p
class="text-4xl font-bold"
:class="scoreColor(calculateScore())"
>
{{calculateScore()}}
</p>

<p class="text-xs text-slate-400">
/100
</p>

</div>

</div>


<p class="mt-3 font-semibold text-white">
{{scoreText(calculateScore())}}
</p>

</div>



</div>



<!-- EMPTY -->

<div
v-if="!result"
class="rounded-2xl border border-dashed border-white/20 p-14 text-center"
>

<p class="text-lg text-slate-400">
Enter a website URL to generate audit report
</p>

</div>



<div
v-else
class="space-y-8"
>


<!-- QUICK OVERVIEW -->

<div>

<h3 class="mb-4 text-xl font-semibold text-white">
Quick Overview
</h3>


<div class="grid gap-5 md:grid-cols-3">


<div class="audit-card">

<p>HTTP Status</p>

<span
class="badge"
:class="statusBadge(result.status)"
>
{{result.status}} OK
</span>

</div>



<div class="audit-card">

<p>Response Time</p>

<h4>
{{result.responseTime}} ms
</h4>

</div>



<div class="audit-card">

<p>Word Count</p>

<h4>
{{result.wordCount}}
</h4>

</div>



</div>

</div>





<!-- SEO -->

<div>

<h3 class="mb-4 text-xl font-semibold text-white">
SEO Analysis
</h3>

<div class="grid gap-5 md:grid-cols-2">


<div class="audit-card">

<p>Page Title</p>

<h4>
{{result.title || "Missing"}}
</h4>

</div>

<div class="audit-card">

<p>Meta Description</p>

<h4
:class="result.metaDescription ? 'text-white':'text-red-400'"
>

{{result.metaDescription || "Missing"}}

</h4>

</div>


<div class="audit-card">

<p>H1 Heading</p>

<h4>
{{result.h1Count}} Found
</h4>

</div>


<div class="audit-card">

<p>Missing Image Alt</p>

<h4
:class="result.missingAltImages?'text-orange-400':'text-emerald-400'"
>

{{result.missingAltImages}}

</h4>

</div>


</div>


</div>


<!-- ISSUES -->

<div>

<h3 class="mb-4 text-xl font-semibold text-white">
Recommendations
</h3>


<div
v-if="!result.metaDescription || result.missingAltImages"
class="rounded-xl border border-yellow-400/20 bg-yellow-400/10 p-5 text-yellow-300"
>


<ul class="space-y-2">

<li v-if="!result.metaDescription">
⚠ Add a meta description for better SEO visibility
</li>


<li v-if="result.missingAltImages">
⚠ Add alt text to missing images
</li>


</ul>


</div>


<div
v-else
class="rounded-xl bg-emerald-500/10 p-5 text-emerald-300"
>
✓ No major SEO issues detected
</div>


</div>



</div>


</div>

</section>


</template>


<style scoped>

.audit-card{

@apply rounded-2xl border border-white/10 bg-slate-900/60 p-6 transition hover:border-indigo-400/40;

}


.audit-card p{

@apply text-sm text-slate-400;

}


.audit-card h4{

@apply mt-3 text-lg font-semibold text-white break-words;

}


.badge{

@apply mt-3 inline-block rounded-full px-4 py-2 text-sm font-semibold;

}

</style>