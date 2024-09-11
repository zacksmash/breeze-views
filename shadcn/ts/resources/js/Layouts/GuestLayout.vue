<script setup lang="ts">
import ApplicationLogo from '@/Components/ApplicationLogo.vue'
import { Link } from '@inertiajs/vue3'
</script>

<template>
  <div class="flex min-h-screen flex-col items-center bg-white px-4 pt-6 dark:bg-gray-950 sm:justify-center sm:px-6 sm:pt-0">
    <div>
      <Link href="/">
        <ApplicationLogo class="size-20 fill-current text-slate-900 dark:text-slate-200" />
      </Link>
    </div>

    <div class="mt-6 w-full overflow-hidden sm:max-w-md">
      <slot />
    </div>
  </div>
</template>
