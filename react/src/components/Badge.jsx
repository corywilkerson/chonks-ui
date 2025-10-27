/**
 * Badge Component
 *
 * @param {Object} props
 * @param {React.ReactNode} props.children - Badge content
 * @param {string} [props.variant='default'] - Badge variant: 'default', 'primary', 'success', 'warning', 'error'
 * @param {string} [props.className] - Additional CSS classes
 */
const Badge = ({
  children,
  variant = 'default',
  className = '',
  ...props
}) => {
  const classes = [
    'chonks-badge',
    variant !== 'default' && `chonks-badge--${variant}`,
    className
  ].filter(Boolean).join(' ')

  return (
    <span className={classes} {...props}>
      {children}
    </span>
  )
}

export default Badge
