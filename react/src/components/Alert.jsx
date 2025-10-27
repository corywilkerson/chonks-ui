/**
 * Alert Component
 *
 * @param {Object} props
 * @param {React.ReactNode} props.children - Alert content
 * @param {string} [props.variant='info'] - Alert variant: 'info', 'success', 'warning', 'error'
 * @param {string} [props.className] - Additional CSS classes
 */
const Alert = ({
  children,
  variant = 'info',
  className = '',
  ...props
}) => {
  const classes = [
    'chonks-alert',
    `chonks-alert--${variant}`,
    className
  ].filter(Boolean).join(' ')

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  )
}

export default Alert
