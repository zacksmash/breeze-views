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

import GuestLayout from '@/Layouts/GuestLayout.vue'
import {
  Head,
  useForm,
} from '@inertiajs/vue3'

defineProps<{
  status?: string;
}>()

const form = useForm({
  email: '',
})

const submit = () => {
  form.post(route('password.email'))
}
</script>

<template>
  <GuestLayout>
    <Head title="Forgot Password" />

    <form @submit.prevent="submit">
      <Card>
        <CardHeader>
          <CardTitle>Forgot your password?</CardTitle>

          <CardDescription>
            Forgot your password? No problem. Just let us know your email address and we will email you a password reset
            link that will allow you to choose a new one.
          </CardDescription>

          <div v-if="status" class="text-sm font-medium text-green-600">
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
              autocomplete="username"
            />

            <div v-show="form.errors.email">
              <p class="text-sm text-red-600">
                {{ form.errors.email }}
              </p>
            </div>
          </div>
        </CardContent>

        <CardFooter>
          <Button
            class="w-full"
            :class="{ 'opacity-25': form.processing }"
            :disabled="form.processing"
          >
            Email Password Reset Link
          </Button>
        </CardFooter>
      </Card>
    </form>
  </GuestLayout>
</template>
