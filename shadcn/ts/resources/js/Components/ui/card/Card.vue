<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '@/Lib/utils'

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <div
    :class="
      cn(
        'rounded-lg border border-slate-200 bg-white text-slate-950 shadow-sm dark:border-slate-800 dark:bg-slate-950 dark:text-slate-50',
        props.class,
      )
    "
  >
    <slot />
  </div>
</template>
