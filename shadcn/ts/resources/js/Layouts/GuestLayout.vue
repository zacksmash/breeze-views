<script setup lang="ts">
import ApplicationLogo from '@/Components/ApplicationLogo.vue';
import { Link } from '@inertiajs/vue3';
</script>

<template>
    <div class="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 px-4 sm:px-6">
        <div>
            <Link href="/">
                <ApplicationLogo class="size-20 text-slate-900 dark:text-slate-200 fill-current" />
            </Link>
        </div>

        <div class="w-full sm:max-w-md mt-6 overflow-hidden">
            <slot />
        </div>
    </div>
</template>
