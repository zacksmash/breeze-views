<script setup>
import { Button } from '@/Components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/Components/ui/card'
import { Input } from '@/Components/ui/input'
import { Label } from '@/Components/ui/label'

import GuestLayout from '@/Layouts/GuestLayout.vue'
import {
  Head,
  Link,
  useForm,
} from '@inertiajs/vue3'

const form = useForm({
  name: '',
  email: '',
  password: '',
  password_confirmation: '',
})

const submit = () => {
  form.post(route('register'), {
    onFinish: () => form.reset('password', 'password_confirmation'),
  })
}
</script>

<template>
  <GuestLayout>
    <Head title="Register" />

    <form @submit.prevent="submit">
      <Card>
        <CardHeader>
          <CardTitle>Register</CardTitle>

          <CardDescription>
            Enter your details below to create your account.
          </CardDescription>
        </CardHeader>

        <CardContent>
          <div class="grid gap-2">
            <Label for="name">Name</Label>

            <Input
              id="name"
              v-model="form.name"
              type="text"
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

          <div class="mt-4 grid gap-2">
            <Label for="email">Email</Label>

            <Input
              id="email"
              v-model="form.email"
              type="email"
              required
              autocomplete="username"
            />

            <div v-show="form.errors.email">
              <p class="text-sm text-red-600">
                {{ form.errors.email }}
              </p>
            </div>
          </div>

          <div class="mt-4 grid gap-2">
            <Label for="password">Password</Label>

            <Input
              id="password"
              v-model="form.password"
              type="password"
              required
              autocomplete="new-password"
            />

            <div v-show="form.errors.password">
              <p class="text-sm text-red-600">
                {{ form.errors.password }}
              </p>
            </div>
          </div>

          <div class="mt-4 grid gap-2">
            <Label for="password_confirmation">Confirm Password</Label>

            <Input
              id="password_confirmation"
              v-model="form.password_confirmation"
              type="password"
              required
              autocomplete="new-password"
            />

            <div v-show="form.errors.password_confirmation">
              <p class="text-sm text-red-600">
                {{ form.errors.password_confirmation }}
              </p>
            </div>
          </div>
        </CardContent>

        <CardFooter>
          <div class="flex w-full flex-col">
            <!-- Primary Button -->
            <Button
              class="w-full"
              :class="{ 'opacity-25': form.processing }"
              :disabled="form.processing"
            >
              Sign Up
            </Button>

            <div class="mt-4 space-x-2 text-center text-sm">
              <span>Already registered?</span>

              <Link
                :href="route('login')"
                class="rounded-md text-sm text-slate-600 underline hover:text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:text-slate-400 dark:hover:text-slate-100"
              >
                Log in
              </Link>
            </div>
          </div>
        </CardFooter>
      </Card>
    </form>
  </GuestLayout>
</template>
