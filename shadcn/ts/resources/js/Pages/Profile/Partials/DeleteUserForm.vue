<script setup lang="ts">
import { Button } from '@/Components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/Components/ui/card'
import { Input } from '@/Components/ui/input'
import { Label } from '@/Components/ui/label'

import Modal from '@/Components/Modal.vue';
import { useForm } from '@inertiajs/vue3';
import { nextTick, ref } from 'vue';

const confirmingUserDeletion = ref(false);
const passwordInput = ref<HTMLInputElement | null>(null);

const form = useForm({
    password: '',
});

const confirmUserDeletion = () => {
    confirmingUserDeletion.value = true;

    nextTick(() => passwordInput.value?.focus());
};

const deleteUser = () => {
    form.delete(route('profile.destroy'), {
        preserveScroll: true,
        onSuccess: () => closeModal(),
        onError: () => passwordInput.value?.focus(),
        onFinish: () => {
            form.reset();
        },
    });
};

const closeModal = () => {
    confirmingUserDeletion.value = false;

    form.reset();
};
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
            <!-- Danger Button -->
            <Button variant="destructive" @click="confirmUserDeletion">Delete Account</Button>
        </CardContent>

        <Modal :show="confirmingUserDeletion" @close="closeModal">
            <Card>
                <CardHeader>
                    <CardTitle>Are you sure you want to delete your account?</CardTitle>

                    <CardDescription>
                        Once your account is deleted, all of its resources and data will be permanently deleted. Please
                        enter your password to confirm you would like to permanently delete your account.
                    </CardDescription>
                </CardHeader>

                <CardContent>
                    <div class="mt-6">
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

                    <div class="mt-6 flex justify-end">
                        <!-- Secondary Button -->
                        <Button variant="secondary" @click="closeModal"> Cancel </Button>

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
                </CardContent>
            </Card>
        </Modal>
    </Card>
</template>
