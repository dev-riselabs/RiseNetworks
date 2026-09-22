import React from 'react'

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  rounded?: 'full' | 'lg' | 'md' | 'none'
  children: React.ReactNode
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  rounded = 'full',
  className = '',
  children,
  ...props
}) => {
  const baseStyles =
    'inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed active:scale-95 cursor-pointer select-none'

  const variants = {
    primary: 'bg-primary hover:bg-primary-hover text-white shadow-sm hover:shadow focus:ring-primary',
    secondary: 'bg-surface-secondary hover:bg-surface-secondary-hover text-dark border border-badge-border/50 focus:ring-primary',
    outline: 'border border-badge-border text-dark hover:bg-surface-secondary focus:ring-primary',
    ghost: 'text-muted hover:text-dark hover:bg-surface-secondary focus:ring-primary',
  }

  const sizes = {
    sm: 'px-4 py-1.5 text-sm gap-1.5',
    md: 'px-6 py-2.5 text-base gap-2',
    lg: 'px-7 py-3.5 text-base sm:text-lg gap-2.5',
  }

  const roundedStyles = {
    full: 'rounded-full',
    lg: 'rounded-2xl',
    md: 'rounded-lg',
    none: 'rounded-none',
  }

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${roundedStyles[rounded]} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button
