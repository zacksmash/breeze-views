<script setup lang="ts">
import { Button } from '@/Components/ui/button'
import {
  Card, CardContent, CardDescription, CardHeader, CardTitle,
} from '@/Components/ui/card'

import { computed } from 'vue'
import GuestLayout from '@/Layouts/GuestLayout.vue'
import {
  Head, Link, useForm,
} from '@inertiajs/vue3'

const props = defineProps<{
  status?: string;
}>()

const form = useForm({})

const submit = () => {
  form.post(route('verification.send'))
}

const verificationLinkSent = computed(() => props.status === 'verification-link-sent')
</script>

<template>
  <GuestLayout>
    <Head title="Email Verification" />

    <Card>
      <CardHeader>
        <CardTitle>Verify Email</CardTitle>

        <CardDescription>
          Thanks for signing up! Before getting started, could you verify your email address by clicking on the link
          we just emailed to you? If you didn't receive the email, we will gladly send you another.
        </CardDescription>

        <div v-if="verificationLinkSent" class="text-sm font-medium text-green-600">
          A new verification link has been sent to the email address you provided during registration.
        </div>
      </CardHeader>

      <CardContent>
        <form class="w-full" @submit.prevent="submit">
          <div class="flex items-center justify-between">
            <!-- Primary Button -->
            <Button :class="{ 'opacity-25': form.processing }" :disabled="form.processing">
              Resend Verification Email
            </Button>

            <Link
              :href="route('logout')"
              method="post"
              as="button"
              class="rounded-md text-sm text-slate-600 underline hover:text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:text-slate-400 dark:hover:text-slate-100"
            >
              Log Out
            </Link>
          </div>
        </form>
      </CardContent>
    </Card>
  </GuestLayout>
</template>
