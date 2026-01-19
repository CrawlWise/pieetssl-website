"use client"
import React from 'react'
import Link from 'next/link'
import { clsx } from 'clsx'

type Variant = 'default' | 'secondary' | 'ghost'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant
  href?: string
}

export default function Button({
  children,
  className,
  variant = 'default',
  href,
  ...props
}: ButtonProps) {
  const base = 'inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none'

  const variants: Record<Variant, string> = {
    default: 'bg-[var(--primary-color)] hover:bg-[var(--third-color)] text-white py-2 px-4',
    secondary: 'bg-white text-gray-800 px-6 py-3 rounded-xl shadow-md border hover:bg-gray-100',
    ghost: 'bg-transparent text-gray-800 hover:text-[var(--primary-color)]'
  }

  const classes = clsx(base, variants[variant], className)

  if (href) {
    return (
      <Link href={href} className={classes} {...(props as unknown as Record<string, unknown>)}>
        {children}
      </Link>
    )
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  )
}
