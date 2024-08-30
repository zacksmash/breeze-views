<script setup lang="ts">
import {
  CircleUser, Menu, Package2,
} from 'lucide-vue-next'
import { Button } from '@/Components/ui/button'
import {
  DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger,
} from '@/Components/ui/dropdown-menu'
import {
  Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger,
} from '@/Components/ui/sheet'
import { VisuallyHidden } from 'radix-vue'

import ApplicationLogo from '@/Components/ApplicationLogo.vue'
import { Link } from '@inertiajs/vue3'
</script>

<template>
  <div>
    <!-- Primary Navigation Menu -->
    <header class="bg-background sticky top-0 flex h-16 items-center gap-4 border-b px-4 dark:border-gray-800 md:px-6">
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
            <Menu class="size-5 dark:text-gray-200" />

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

            <Link :href="route('profile.edit')">
              <DropdownMenuItem>Profile</DropdownMenuItem>
            </Link>

            <DropdownMenuSeparator />

            <Link
              :href="route('logout')"
              method="post"
              as="button"
              class="w-full"
            >
              <DropdownMenuItem>Log Out</DropdownMenuItem>
            </Link>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>

    <!-- Page Content -->
    <main>
      <div class="px-4 py-12 sm:px-6">
        <div class="mx-auto max-w-7xl space-y-6 sm:px-6 lg:px-8">
          <slot />
        </div>
      </div>
    </main>
  </div>
</template>
