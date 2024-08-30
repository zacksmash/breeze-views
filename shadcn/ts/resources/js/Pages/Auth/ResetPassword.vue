<script setup lang="ts">
import { Button } from '@/Components/ui/button'
import {
  Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle,
} from '@/Components/ui/card'
import { Input } from '@/Components/ui/input'
import { Label } from '@/Components/ui/label'

import GuestLayout from '@/Layouts/GuestLayout.vue'
import { Head, useForm } from '@inertiajs/vue3'

const props = defineProps<{
  email: string;
  token: string;
}>()

const form = useForm({
  token: props.token,
  email: props.email,
  password: '',
  password_confirmation: '',
})

const submit = () => {
  form.post(route('password.store'), {
    onFinish: () => {
      form.reset('password', 'password_confirmation')
    },
  })
}
</script>

<template>
  <GuestLayout>
    <Head title="Reset Password" />

    <form @submit.prevent="submit">
      <Card>
        <CardHeader>
          <CardTitle class="text-2xl">
            Reset Password
          </CardTitle>

          <CardDescription>
            Ensure your account is using a long, random password to stay secure.
          </CardDescription>
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
          <!-- Primary Button -->
          <Button
            class="w-full"
            :class="{ 'opacity-25': form.processing }"
            :disabled="form.processing"
          >
            Reset Password
          </Button>
        </CardFooter>
      </Card>
    </form>
  </GuestLayout>
</template>
