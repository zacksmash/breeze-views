<script setup lang="ts">
import { CircleUser, Menu, Package2 } from 'lucide-vue-next'
import { Button } from '@/Components/ui/button'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/Components/ui/dropdown-menu'
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetDescription, SheetHeader } from '@/Components/ui/sheet'
import { VisuallyHidden } from 'radix-vue'

import { ref } from 'vue';
import ApplicationLogo from '@/Components/ApplicationLogo.vue';
import { Link } from '@inertiajs/vue3';

const showingNavigationDropdown = ref(false);
</script>

<template>
    <div>
        <!-- Primary Navigation Menu -->
        <header class="sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
            <nav class="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
                <Link :href="route('dashboard')">
                    <ApplicationLogo class="block h-9 w-auto fill-current text-slate-800"/>
                    <span class="sr-only">Acme Inc</span>
                </Link>

                <Link :href="route('dashboard')" :class="[
                    route().current('dashboard') ? '' : 'text-slate-500 hover:text-slate-900 transition-colors',
                ]">
                    Dashboard
                </Link>
            </nav>

            <Sheet>
                <SheetTrigger as-child>
                    <Button
                        variant="outline"
                        size="icon"
                        class="shrink-0 md:hidden"
                    >
                        <Menu class="h-5 w-5" />
                        <span class="sr-only">Toggle navigation menu</span>
                    </Button>
                </SheetTrigger>
                <SheetContent side="left">
                    <VisuallyHidden>
                        <SheetHeader>
                            <SheetTitle>Mobile Menu</SheetTitle>
                            <SheetDescription>
                                Navigation menu for mobile devices
                            </SheetDescription>
                        </SheetHeader>
                    </VisuallyHidden>
                    <nav class="grid gap-6 text-lg font-medium">
                        <Link :href="route('dashboard')">
                            <ApplicationLogo class="block h-9 w-auto fill-current text-slate-800"/>
                            <span class="sr-only">Acme Inc</span>
                        </Link>
                        <Link :href="route('dashboard')" :class="[
                            route().current('dashboard') ? '' : 'text-slate-500 hover:text-slate-900 transition-colors',
                        ]">
                            Dashboard
                        </Link>
                    </nav>
                </SheetContent>
            </Sheet>

            <div class="flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
                <DropdownMenu>
                    <DropdownMenuTrigger as-child>
                        <Button variant="secondary" size="icon" class="rounded-full ml-auto">
                            <CircleUser class="h-5 w-5" />
                            <span class="sr-only">Toggle user menu</span>
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuLabel>My Account</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <Link :href="route('profile.edit')">
                            <DropdownMenuItem>Profile</DropdownMenuItem>
                        </Link>
                        <DropdownMenuSeparator />
                        <Link :href="route('logout')" method="post" as="button" class="w-full">
                            <DropdownMenuItem>Log Out</DropdownMenuItem>
                        </Link>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </header>

        <!-- Page Content -->
        <main>
            <div class="py-12 px-4 sm:px-6">
                <div class="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6">
                    <slot />
                </div>
            </div>
        </main>
    </div>
</template>
