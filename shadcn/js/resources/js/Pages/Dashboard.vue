<script setup>
import { Home } from 'lucide-vue-next'
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/Components/ui/card'

import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue'
import { Head } from '@inertiajs/vue3'
</script>

<template>
  <Head title="Dashboard" />

  <AuthenticatedLayout>
    <Card>
      <div class="flex items-center">
        <Home class="ml-4 size-12" />

        <CardHeader>
          <CardTitle>Dashboard</CardTitle>

          <CardDescription>
            Welcome back, {{ $page.props.auth.user.name }}!
          </CardDescription>
        </CardHeader>
      </div>
    </Card>
  </AuthenticatedLayout>
</template>
