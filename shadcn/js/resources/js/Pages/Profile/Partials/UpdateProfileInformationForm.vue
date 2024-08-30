<script setup>
import { Button } from '@/Components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/Components/ui/card'
import { Input } from '@/Components/ui/input'
import { Label } from '@/Components/ui/label'

import { Link, useForm, usePage } from '@inertiajs/vue3';

defineProps({
    mustVerifyEmail: {
        type: Boolean,
    },
    status: {
        type: String,
    },
});

const user = usePage().props.auth.user;

const form = useForm({
    name: user.name,
    email: user.email,
});
</script>

<template>
    <Card>
        <CardHeader>
            <CardTitle>Profile Information</CardTitle>

            <CardDescription>
                Update your account's profile information and email address.
            </CardDescription>
        </CardHeader>

        <CardContent>
            <div class="max-w-xl">
                <form @submit.prevent="form.patch(route('profile.update'))">
                    <div class="grid gap-2">
                        <Label for="name">Name</Label>

                        <Input
                            id="name"
                            type="text"
                            v-model="form.name"
                            required
                            autofocus
                            autocomplete="name"
                        />

                        <div v-show="form.errors.name">
                            <p class="text-sm text-red-600">
                                {{ form.errors.name }}
                            </p>
                        </div>
                    </div>

                    <div class="grid gap-2 mt-4">
                        <Label for="email">Email</Label>

                        <Input
                            id="email"
                            type="email"
                            v-model="form.email"
                            required
                            autocomplete="username"
                        />

                        <div v-show="form.errors.email">
                            <p class="text-sm text-red-600">
                                {{ form.errors.email }}
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

        <CardFooter v-if="mustVerifyEmail && user.email_verified_at === null">
            <div>
                <p class="text-sm mt-2 text-slate-800">
                    Your email address is unverified.
                    <Link
                        :href="route('verification.send')"
                        method="post"
                        as="button"
                        class="underline text-sm text-slate-600 hover:text-slate-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        Click here to re-send the verification email.
                    </Link>
                </p>

                <div
                    v-show="status === 'verification-link-sent'"
                    class="mt-2 font-medium text-sm text-green-600"
                >
                    A new verification link has been sent to your email address.
                </div>
            </div>
        </CardFooter>
    </Card>
</template>
