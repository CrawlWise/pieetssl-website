import React from 'react'
import { clsx } from 'clsx'

interface CardProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'title'> {
  title?: React.ReactNode
  footer?: React.ReactNode
}

export default function Card({ title, children, footer, className, ...props }: CardProps) {
  return (
    <div className={clsx('bg-white rounded-xl shadow-md p-6 w-full transition hover:shadow-lg', className)} {...props}>
      {title ? <div className="mb-4">{title}</div> : null}
      <div className="card-content">{children}</div>
      {footer ? <div className="mt-4">{footer}</div> : null}
    </div>
  )
}
