<script setup>
import ApplicationLogo from '@/Components/ApplicationLogo.vue';
import { Link } from '@inertiajs/vue3';
</script>

<template>
    <div>
        <main class="px-6 w-full max-w-lg mx-auto mt-6">
            <div class="flex justify-center">
                <Link href="/">
                    <ApplicationLogo class="size-20" />
                </Link>
            </div>

            <div>
                <slot />
            </div>
        </main>
    </div>
</template>
