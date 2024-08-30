<script setup>
import GuestLayout from '@/Layouts/GuestLayout.vue';
import { Head, useForm } from '@inertiajs/vue3';

const props = defineProps({
    email: {
        type: String,
        required: true,
    },
    token: {
        type: String,
        required: true,
    },
});

const form = useForm({
    token: props.token,
    email: props.email,
    password: '',
    password_confirmation: '',
});

const submit = () => {
    form.post(route('password.store'), {
        onFinish: () => form.reset('password', 'password_confirmation'),
    });
};
</script>

<template>
    <GuestLayout>
        <Head title="Reset Password" />

        <form @submit.prevent="submit">
            <div>
                <label for="email">Email</label>

                <input
                    id="email"
                    type="email"
                    class="mt-1 block w-full"
                    v-model="form.email"
                    required
                    autofocus
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
                <!-- Primary Button -->
                <button :class="{ 'opacity-25': form.processing }" :disabled="form.processing">
                    Reset Password
                </button>
            </div>
        </form>
    </GuestLayout>
</template>
