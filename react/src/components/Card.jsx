/**
 * Card Component
 */
export const Card = ({ children, className = '', hover = true, ...props }) => {
  const classes = [
    'chonks-card',
    !hover && 'chonks-card--no-hover',
    className
  ].filter(Boolean).join(' ')

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  )
}

/**
 * CardHeader Component
 */
export const CardHeader = ({ children, className = '', controls, ...props }) => {
  return (
    <div className={`chonks-card-header ${className}`} {...props}>
      <span>{children}</span>
      {controls && <div>{controls}</div>}
    </div>
  )
}

/**
 * CardBody Component
 */
export const CardBody = ({ children, className = '', ...props }) => {
  return (
    <div className={`chonks-card-body ${className}`} {...props}>
      {children}
    </div>
  )
}

/**
 * CardFooter Component
 */
export const CardFooter = ({ children, className = '', ...props }) => {
  return (
    <div className={`chonks-card-footer ${className}`} {...props}>
      {children}
    </div>
  )
}

/**
 * WindowControls Component - The classic macOS-style dots
 */
export const WindowControls = () => {
  return (
    <div className="chonks-window-controls">
      <div className="chonks-window-dot chonks-window-dot--red"></div>
      <div className="chonks-window-dot chonks-window-dot--yellow"></div>
      <div className="chonks-window-dot chonks-window-dot--green"></div>
    </div>
  )
}

export default Card
