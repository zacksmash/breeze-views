<script setup lang="ts">
import GuestLayout from '@/Layouts/GuestLayout.vue';
import { Head, Link, useForm } from '@inertiajs/vue3';

const form = useForm({
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
});

const submit = () => {
    form.post(route('register'), {
        onFinish: () => {
            form.reset('password', 'password_confirmation');
        },
    });
};
</script>

<template>
    <GuestLayout>
        <Head title="Register" />

        <form @submit.prevent="submit">
            <div>
                <label for="name">Name</label>

                <input
                    id="name"
                    type="text"
                    class="mt-1 block w-full"
                    v-model="form.name"
                    required
                    autofocus
                    autocomplete="name"
                />

                <div class="mt-2" v-show="form.errors.name">
                    <p class="text-sm text-red-600">
                        {{ form.errors.name }}
                    </p>
                </div>
            </div>

            <div class="mt-4">
                <label for="email">Email</label>

                <input
                    id="email"
                    type="email"
                    class="mt-1 block w-full"
                    v-model="form.email"
                    required
                    autocomplete="username"
                />

                <div class="mt-2" v-show="form.errors.email">
                    <p class="text-sm text-red-600">
                        {{ form.errors.email }}
                    </p>
                </div>
            </div>

            <div class="mt-4">
                <label for="password">Password</label>

                <input
                    id="password"
                    type="password"
                    class="mt-1 block w-full"
                    v-model="form.password"
                    required
                    autocomplete="new-password"
                />

                <div class="mt-2" v-show="form.errors.password">
                    <p class="text-sm text-red-600">
                        {{ form.errors.password }}
                    </p>
                </div>
            </div>

            <div class="mt-4">
                <label for="password_confirmation">Confirm Password</label>

                <input
                    id="password_confirmation"
                    type="password"
                    class="mt-1 block w-full"
                    v-model="form.password_confirmation"
                    required
                    autocomplete="new-password"
                />

                <div class="mt-2" v-show="form.errors.password_confirmation">
                    <p class="text-sm text-red-600">
                        {{ form.errors.password_confirmation }}
                    </p>
                </div>
            </div>

            <div class="flex items-center justify-end mt-4">
                <Link
                    :href="route('login')"
                    class="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                    Already registered?
                </Link>

                <!-- Primary Button -->
                <button class="ms-4" :class="{ 'opacity-25': form.processing }" :disabled="form.processing">
                    Register
                </button>
            </div>
        </form>
    </GuestLayout>
</template>
