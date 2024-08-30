<script setup>
import { ref } from 'vue';
import ApplicationLogo from '@/Components/ApplicationLogo.vue';
import { Link } from '@inertiajs/vue3';
</script>

<template>
    <div>
        <div class="min-h-screen">
            <nav class="border-b">
                <!-- Primary Navigation Menu -->
                <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-4 py-4">
                    <Link :href="route('dashboard')">
                        <ApplicationLogo
                            class="block h-9 w-auto fill-current text-gray-800"
                        />
                    </Link>
                    <Link :href="route('dashboard')"> Dashboard </Link>
                    <Link :href="route('profile.edit')"> Profile </Link>
                    <Link :href="route('logout')" method="post" as="button" class="ml-auto">
                        Log Out
                    </Link>
                </div>
            </nav>

            <!-- Page Content -->
            <main>
                <div class="py-12">
                    <div class="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6">
                        <slot />
                    </div>
                </div>
            </main>
        </div>
    </div>
</template>
