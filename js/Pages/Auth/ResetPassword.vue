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
                    :autofocus="!form.email"
                    autocomplete="username"
                />

                <span v-show="form.errors.email" v-text="form.errors.email" />
            </div>

            <div class="mt-4">
                <label for="password">Password</label>

                <input
                    id="password"
                    type="password"
                    class="mt-1 block w-full"
                    v-model="form.password"
                    required
                    :autofocus="form.email"
                    autocomplete="new-password"
                />

                <span v-show="form.errors.password" v-text="form.errors.password" />
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

                <span v-show="form.errors.password_confirmation" v-text="form.errors.password_confirmation" />
            </div>

            <div class="flex items-center justify-end mt-4">
                <button :class="{ 'opacity-25': form.processing }" :disabled="form.processing">
                    Reset Password
                </button>
            </div>
        </form>
    </GuestLayout>
</template>
