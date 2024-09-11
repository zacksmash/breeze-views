<script setup>
import {
  CircleUser,
  Menu,
} from 'lucide-vue-next'
import { Button } from '@/Components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/Components/ui/dropdown-menu'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/Components/ui/sheet'
import { VisuallyHidden } from 'radix-vue'

import ApplicationLogo from '@/Components/ApplicationLogo.vue'
import { Link } from '@inertiajs/vue3'
</script>

<template>
  <div class="min-h-screen bg-white dark:bg-slate-950">
    <!-- Primary Navigation Menu -->
    <header class="sticky top-0 border-b bg-white px-4 dark:border-slate-800 dark:bg-gray-950 sm:px-6">
      <div class="mx-auto flex h-16 max-w-7xl items-center gap-4">
        <nav class="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
          <Link :href="route('dashboard')">
            <ApplicationLogo class="block size-9 w-auto fill-current text-slate-900 dark:text-slate-200"/>

            <span class="sr-only">Acme Inc</span>
          </Link>

          <Link
            :href="route('dashboard')"
            :class="[
              route().current('dashboard') ? 'dark:text-slate-200' : 'text-slate-500 transition-colors hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100',
            ]"
          >
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
              <Menu class="size-5 dark:text-slate-200" />

              <span class="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>

          <SheetContent side="left" class="dark:border-slate-800">
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
                <ApplicationLogo class="block size-9 w-auto fill-current text-slate-900 dark:text-slate-200"/>

                <span class="sr-only">Acme Inc</span>
              </Link>

              <Link
                :href="route('dashboard')"
                :class="[
                  route().current('dashboard') ? 'dark:text-slate-200' : 'text-slate-500 transition-colors hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100',
                ]"
              >
                Dashboard
              </Link>
            </nav>
          </SheetContent>
        </Sheet>

        <div class="flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
          <DropdownMenu>
            <DropdownMenuTrigger as-child>
              <Button
                variant="secondary"
                size="icon"
                class="ml-auto rounded-full"
              >
                <CircleUser class="size-5" />

                <span class="sr-only">Toggle user menu</span>
              </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>

              <DropdownMenuSeparator />

              <DropdownMenuItem as-child>
                <Link :href="route('profile.edit')">
                  Profile
                </Link>
              </DropdownMenuItem>

              <DropdownMenuSeparator />

              <DropdownMenuItem as-child>
                <Link
                  :href="route('logout')"
                  method="post"
                  as="button"
                  class="w-full"
                >
                  Log Out
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>

    <!-- Page Content -->
    <main>
      <div class="px-4 pt-12 sm:px-6">
        <div class="mx-auto max-w-7xl space-y-6">
          <slot />
        </div>
      </div>
    </main>
  </div>
</template>
