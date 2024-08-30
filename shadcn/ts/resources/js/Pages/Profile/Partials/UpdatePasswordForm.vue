<script setup lang="ts">
import { Button } from '@/Components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/Components/ui/card'
import { Input } from '@/Components/ui/input'
import { Label } from '@/Components/ui/label'

import { useForm } from '@inertiajs/vue3';
import { ref } from 'vue';

const passwordInput = ref<HTMLInputElement | null>(null);
const currentPasswordInput = ref<HTMLInputElement | null>(null);

const form = useForm({
    current_password: '',
    password: '',
    password_confirmation: '',
});

const updatePassword = () => {
    form.put(route('password.update'), {
        preserveScroll: true,
        onSuccess: () => {
            form.reset();
        },
        onError: () => {
            if (form.errors.password) {
                form.reset('password', 'password_confirmation');
                passwordInput.value?.focus();
            }
            if (form.errors.current_password) {
                form.reset('current_password');
                currentPasswordInput.value?.focus();
            }
        },
    });
};
</script>

<template>
    <Card>
        <CardHeader>
            <CardTitle>
                Update Password
            </CardTitle>

            <CardDescription>
                Ensure your account is using a long, random password to stay secure.
            </CardDescription>
        </CardHeader>

        <CardContent>
            <div class="max-w-xl">
                <form @submit.prevent="updatePassword">
                    <div class="grid gap-2">
                        <Label for="current_password">Current Password</Label>

                        <Input
                            id="current_password"
                            ref="currentPasswordInput"
                            v-model="form.current_password"
                            type="password"
                            autocomplete="current-password"
                        />

                        <div v-show="form.errors.current_password">
                            <p class="text-sm text-red-600">
                                {{ form.errors.current_password }}
                            </p>
                        </div>
                    </div>

                    <div class="grid gap-2 mt-4">
                        <Label for="password">New Password</Label>

                        <Input
                            id="password"
                            ref="passwordInput"
                            v-model="form.password"
                            type="password"
                            autocomplete="new-password"
                        />

                        <div v-show="form.errors.password">
                            <p class="text-sm text-red-600">
                                {{ form.errors.password }}
                            </p>
                        </div>
                    </div>

                    <div class="grid gap-2 mt-4">
                        <Label for="password_confirmation">Confirm Password</Label>

                        <Input
                            id="password_confirmation"
                            v-model="form.password_confirmation"
                            type="password"
                            autocomplete="new-password"
                        />

                        <div v-show="form.errors.password_confirmation">
                            <p class="text-sm text-red-600">
                                {{ form.errors.password_confirmation }}
                            </p>
                        </div>
                    </div>

                    <div class="flex items-center gap-4 mt-4">
                        <!-- Primary Button -->
                        <Button :disabled="form.processing">Save</Button>

                        <Transition
                            enter-active-class="transition ease-in-out"
                            enter-from-class="opacity-0"
                            leave-active-class="transition ease-in-out"
                            leave-to-class="opacity-0"
                        >
                            <p v-if="form.recentlySuccessful" class="text-sm text-slate-600">Saved.</p>
                        </Transition>
                    </div>
                </form>
            </div>
        </CardContent>
    </Card>
</template>
