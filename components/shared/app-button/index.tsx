import { type VariantProps, cva } from 'class-variance-authority'
import { type ButtonHTMLAttributes, forwardRef } from 'react'
import { twMerge } from 'tailwind-merge'

const buttonVariants = cva(
    'inline-flex items-center justify-center text-base font-bold shadow-sm transition-colors focus:outline-none disabled:opacity-50 disabled:pointer-events-none',
    {
        variants: {
            variant: {
                default: 'bg-primary text-white hover:bg-primary-hover',
                primary: 'bg-blue-500 text-white hover:bg-blue-400',
                white: 'bg-white text-primary hover:bg-gray-400 hover:text-white',
                orange: 'bg-orange-app text-white hover:bg-orange-300',
                gray: 'bg-[#464545] hover:bg-[#999999] text-white',
                green: ' rounded bg-[#00BC8C]   text-white hover:bg-[#46a88f]',
                dark: 'bg-black text-white hover:bg-black',
                destructive:
                    'bg-red-500 text-white hover:bg-red-600 dark:hover:bg-red-600',
                outline: 'bg-transparent text-white border border-solid border-white',
            },
            size: {
                default: 'py-3 px-6',
                sm: 'h-9 px-2',
                md: 'w-32 px-6 py-3',
                lg: 'h-14 w-44 px-2 py-4 lg:h-16 lg:w-60',
                slim: 'h-12.5 w-60 px-2 py-4',
                qn: 'px-6 py-3',
                search: 'h-[56px] w-[158px] py-2 px-6',
            },
            font: {
                normal: 'font-normal',
            },
        },
        defaultVariants: {
            variant: 'default',
            size: 'default',
        },
    }
)

export interface ButtonProps
    extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
    loading?: boolean
}

// eslint-disable-next-line react/display-name
const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, loading, variant, size, ...props }, ref) => {
        return (
            <button
                className={twMerge(buttonVariants({ variant, size, className }))}
                ref={ref}
                {...props}
            >
                {props.children}
            </button>
        )
    }
)

export { Button, buttonVariants }
