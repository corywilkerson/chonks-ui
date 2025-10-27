import { forwardRef } from 'react'

/**
 * Button Component
 *
 * @param {Object} props
 * @param {React.ReactNode} props.children - Button content
 * @param {string} [props.variant='primary'] - Button variant: 'primary', 'secondary', 'outline', 'success', 'error'
 * @param {string} [props.size='md'] - Button size: 'sm', 'md', 'lg'
 * @param {boolean} [props.block=false] - Full width button
 * @param {boolean} [props.disabled=false] - Disabled state
 * @param {string} [props.href] - If provided, renders as anchor tag
 * @param {Function} [props.onClick] - Click handler
 * @param {string} [props.className] - Additional CSS classes
 */
const Button = forwardRef(({
  children,
  variant = 'primary',
  size = 'md',
  block = false,
  disabled = false,
  href,
  onClick,
  className = '',
  ...props
}, ref) => {
  const classes = [
    'chonks-btn',
    variant !== 'primary' && `chonks-btn--${variant}`,
    size !== 'md' && `chonks-btn--${size}`,
    block && 'chonks-btn--block',
    className
  ].filter(Boolean).join(' ')

  if (href) {
    return (
      <a
        ref={ref}
        href={href}
        className={classes}
        onClick={onClick}
        {...props}
      >
        {children}
      </a>
    )
  }

  return (
    <button
      ref={ref}
      className={classes}
      disabled={disabled}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  )
})

Button.displayName = 'Button'

export default Button
