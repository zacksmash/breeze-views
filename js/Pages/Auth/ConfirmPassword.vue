<script setup>
import GuestLayout from '@/Layouts/GuestLayout.vue';
import { Head, useForm } from '@inertiajs/vue3';

const form = useForm({
    password: '',
});

const submit = () => {
    form.post(route('password.confirm'), {
        onFinish: () => form.reset(),
    });
};
</script>

<template>
    <GuestLayout>
        <Head title="Confirm Password" />

        <p>
            This is a secure area of the application. Please confirm your password before continuing.
        </p>

        <form @submit.prevent="submit">
            <div>
                <label for="password">Password</label>

                <input
                    id="password"
                    type="password"
                    class="mt-1 block w-full"
                    v-model="form.password"
                    required
                    autocomplete="current-password"
                    autofocus
                />

                <span v-show="form.errors.password" :message="form.errors.password" />
            </div>

            <div class="flex justify-end mt-4">
                <!-- Primary Button -->
                <button class="ms-4" :class="{ 'opacity-25': form.processing }" :disabled="form.processing">
                    Confirm
                </button>
            </div>
        </form>
    </GuestLayout>
</template>
