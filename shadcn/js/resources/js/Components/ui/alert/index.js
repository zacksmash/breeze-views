import { cva } from 'class-variance-authority'

export { default as Alert } from './Alert.vue'
export { default as AlertTitle } from './AlertTitle.vue'
export { default as AlertDescription } from './AlertDescription.vue'

export const alertVariants = cva(
  'relative w-full rounded-lg border border-slate-200 p-4 dark:border-slate-800 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-slate-950 dark:[&>svg]:text-slate-50 [&>svg~*]:pl-7',
  {
    variants: {
      variant: {
        default: 'bg-white text-slate-950 dark:bg-slate-950 dark:text-slate-50',
        destructive:
          'border-red-500/50 text-red-500 dark:border-red-500 dark:dark:border-red-900 dark:text-red-900 [&>svg]:text-red-500 dark:[&>svg]:text-red-900',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
)
