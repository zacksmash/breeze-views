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
  useForm,
} from '@inertiajs/vue3'

const form = useForm({
  password: '',
})

const submit = () => {
  form.post(route('password.confirm'), {
    onFinish: () => form.reset(),
  })
}
</script>

<template>
  <GuestLayout>
    <Head title="Confirm Password" />

    <form @submit.prevent="submit">
      <Card>
        <CardHeader>
          <CardTitle>Confirm Password</CardTitle>

          <CardDescription>
            This is a secure area of the application. Please confirm your password before continuing.
          </CardDescription>
        </CardHeader>

        <CardContent>
          <div class="grid gap-2">
            <Label for="password">Password</Label>

            <Input
              id="password"
              v-model="form.password"
              type="password"
              required
              autocomplete="current-password"
              autofocus
            />

            <div v-show="form.errors.password">
              <p class="text-sm text-red-600">
                {{ form.errors.password }}
              </p>
            </div>
          </div>
        </CardContent>

        <CardFooter>
          <!-- Button -->
          <Button
            class="w-full"
            :class="{ 'opacity-25': form.processing }"
            :disabled="form.processing"
          >
            Confirm
          </Button>
        </CardFooter>
      </Card>
    </form>
  </GuestLayout>
</template>
