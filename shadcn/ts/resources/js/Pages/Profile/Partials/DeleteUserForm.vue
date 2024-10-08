<script setup lang="ts">
import { Button } from '@/Components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/Components/ui/card'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/Components/ui/dialog'
import { Input } from '@/Components/ui/input'
import { Label } from '@/Components/ui/label'

import { useForm } from '@inertiajs/vue3'
import { ref } from 'vue'

const passwordInput = ref<HTMLInputElement | null>(null)

const form = useForm({
  password: '',
})

const deleteUser = () => {
  form.delete(route('profile.destroy'), {
    preserveScroll: true,
    onError: () => passwordInput.value?.focus(),
    onFinish: () => {
      form.reset()
    },
  })
}

const handleDialogState = (isOpen: boolean) => {
  if (!isOpen) {
    form.reset()
  }
}
</script>

<template>
  <Card>
    <CardHeader class="max-w-xl">
      <CardTitle>Delete Account</CardTitle>

      <CardDescription>
        Once your account is deleted, all of its resources and data will be permanently deleted. Before deleting
        your account, please download any data or information that you wish to retain.
      </CardDescription>
    </CardHeader>

    <CardContent>
      <Dialog @update:open="handleDialogState">
        <DialogTrigger>
          <!-- Danger Button -->
          <Button variant="destructive">
            Delete Account
          </Button>
        </DialogTrigger>

        <DialogContent class="w-full max-w-2xl">
          <DialogHeader>
            <DialogTitle>Are you sure you want to delete your account?</DialogTitle>

            <DialogDescription>
              Once your account is deleted, all of its resources and data will be permanently deleted. Please
              enter your password to confirm you would like to permanently delete your account.
            </DialogDescription>
          </DialogHeader>

          <div class="mt-2">
            <Label for="password" class="sr-only">Password</Label>

            <Input
              id="password"
              ref="passwordInput"
              v-model="form.password"
              type="password"
              class="w-3/4"
              placeholder="Password"
              @keyup.enter="deleteUser"
            />

            <div v-show="form.errors.password">
              <p class="text-sm text-red-600">
                {{ form.errors.password }}
              </p>
            </div>
          </div>

          <DialogFooter>
            <div class="mt-2 flex justify-end">
              <!-- Secondary Button -->
              <DialogClose as-child>
                <Button variant="secondary">
                  Cancel
                </Button>
              </DialogClose>

              <!-- Danger Button -->
              <Button
                variant="destructive"
                class="ms-3"
                :class="{ 'opacity-25': form.processing }"
                :disabled="form.processing"
                @click="deleteUser"
              >
                Delete Account
              </Button>
            </div>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </CardContent>
  </Card>
</template>
