<script setup>
import { ref } from 'vue';
import ApplicationLogo from '@/Components/ApplicationLogo.vue';
import { Link } from '@inertiajs/vue3';
</script>

<template>
    <div>
        <nav class="flex items-center gap-4">
            <!-- Primary Navigation Menu -->
            <Link :href="route('dashboard')">
                <ApplicationLogo class="size-9" />
            </Link>

            <Link :href="route('dashboard')" :active="route().current('dashboard')">
                Dashboard
            </Link>

            <Link :href="route('profile.edit')"> Profile </Link>
            <Link :href="route('logout')" method="post" as="button">
                Log Out
            </Link>
        </nav>

        <!-- Page Content -->
        <main>
            <slot />
        </main>
    </div>
</template>
