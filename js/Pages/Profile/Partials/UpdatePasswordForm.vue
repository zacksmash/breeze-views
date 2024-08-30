<script setup>
import { useForm } from '@inertiajs/vue3';
import { ref } from 'vue';

const passwordInput = ref(null);
const currentPasswordInput = ref(null);

const form = useForm({
    current_password: '',
    password: '',
    password_confirmation: '',
});

const updatePassword = () => {
    form.put(route('password.update'), {
        preserveScroll: true,
        onSuccess: () => form.reset(),
        onError: () => {
            if (form.errors.password) {
                form.reset('password', 'password_confirmation');
                passwordInput.value.focus();
            }
            if (form.errors.current_password) {
                form.reset('current_password');
                currentPasswordInput.value.focus();
            }
        },
    });
};
</script>

<template>
    <section>
        <header>
            <h2 class="text-lg">Update Password</h2>

            <p>
                Ensure your account is using a long, random password to stay secure.
            </p>
        </header>

        <form @submit.prevent="updatePassword" class="mt-6 space-y-6">
            <div>
                <label for="current_password">Current Password</label>

                <input
                    id="current_password"
                    ref="currentPasswordInput"
                    class="mt-1 block w-full"
                    v-model="form.current_password"
                    type="password"
                    autocomplete="current-password"
                />

                <span v-show="form.errors.current_password" v-text="form.errors.current_password" />
            </div>

            <div>
                <label for="password">New Password</label>

                <input
                    id="password"
                    ref="passwordInput"
                    class="mt-1 block w-full"
                    v-model="form.password"
                    type="password"
                    autocomplete="new-password"
                />

                <span v-show="form.errors.password" v-text="form.errors.password" />
            </div>

            <div>
                <label for="password_confirmation">Confirm Password</label>

                <input
                    id="password_confirmation"
                    class="mt-1 block w-full"
                    v-model="form.password_confirmation"
                    type="password"
                    autocomplete="new-password"
                />

                <span v-show="form.errors.password_confirmation" v-text="form.errors.password_confirmation" />
            </div>

            <div class="flex items-center gap-4">
                <!-- Primary Button -->
                <button :disabled="form.processing">Save</button>

                <Transition
                    enter-active-class="transition ease-in-out"
                    enter-from-class="opacity-0"
                    leave-active-class="transition ease-in-out"
                    leave-to-class="opacity-0"
                >
                    <p v-if="form.recentlySuccessful" class="text-sm">Saved.</p>
                </Transition>
            </div>
        </form>
    </section>
</template>
