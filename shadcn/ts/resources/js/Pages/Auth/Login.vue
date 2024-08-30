<script setup lang="ts">
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
import { Checkbox } from '@/Components/ui/checkbox'

import GuestLayout from '@/Layouts/GuestLayout.vue'
import {
  Head,
  Link,
  useForm,
} from '@inertiajs/vue3'

defineProps<{
  canResetPassword?: boolean;
  status?: string;
}>()

const form = useForm({
  email: '',
  password: '',
  remember: false,
})

const submit = () => {
  form.post(route('login'), {
    onFinish: () => {
      form.reset('password')
    },
  })
}
</script>

<template>
  <GuestLayout>
    <Head title="Log in" />

    <form @submit.prevent="submit">
      <Card>
        <CardHeader>
          <CardTitle>Log in</CardTitle>

          <CardDescription>
            Log in to your account using your email and password.
          </CardDescription>

          <div v-if="status" class="mb-4 text-sm font-medium text-green-600">
            {{ status }}
          </div>
        </CardHeader>

        <CardContent>
          <div class="grid gap-2">
            <Label for="email">Email</Label>

            <Input
              id="email"
              v-model="form.email"
              type="email"
              required
              autofocus
              tabindex="1"
              autocomplete="username"
            />

            <div v-show="form.errors.email">
              <p class="text-sm text-red-600">
                {{ form.errors.email }}
              </p>
            </div>
          </div>

          <div class="mt-4 grid gap-2">
            <div class="flex items-center justify-between">
              <Label for="password">Password</Label>

              <Link
                v-if="canResetPassword"
                :href="route('password.request')"
                class="rounded-md text-xs text-slate-600 underline hover:text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:text-slate-400 dark:hover:text-slate-100"
                v-text="'Forgot your password?'"
              />
            </div>

            <Input
              id="password"
              v-model="form.password"
              type="password"
              required
              tabindex="1"
              autocomplete="current-password"
            />

            <div v-show="form.errors.password">
              <p class="text-sm text-red-600">
                {{ form.errors.password }}
              </p>
            </div>
          </div>

          <div class="mt-4 block">
            <Label class="flex items-center gap-2">
              <Checkbox
                v-model="form.remember"
                name="remember"
                tabindex="1"
              />

              <span>Remember me</span>
            </Label>
          </div>
        </CardContent>

        <CardFooter>
          <div class="flex w-full flex-col">
            <!-- Primary Button -->
            <Button
              class="w-full"
              :class="{ 'opacity-25': form.processing }"
              :disabled="form.processing"
              tabindex="1"
            >
              Log in
            </Button>

            <div class="mt-4 space-x-2 text-center text-sm">
              <span>Don't have an account?</span>

              <Link
                :href="route('register')"
                class="rounded-md text-sm text-slate-600 underline hover:text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:text-slate-400 dark:hover:text-slate-100"
                v-text="'Sign up'"
              />
            </div>
          </div>
        </CardFooter>
      </Card>
    </form>
  </GuestLayout>
</template>
