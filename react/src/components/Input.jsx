import { forwardRef } from 'react'

/**
 * Input Component
 */
export const Input = forwardRef(({
  className = '',
  label,
  ...props
}, ref) => {
  const inputElement = (
    <input
      ref={ref}
      className={`chonks-input ${className}`}
      {...props}
    />
  )

  if (label) {
    return (
      <div>
        <label className="chonks-label">{label}</label>
        {inputElement}
      </div>
    )
  }

  return inputElement
})

Input.displayName = 'Input'

/**
 * Textarea Component
 */
export const Textarea = forwardRef(({
  className = '',
  label,
  ...props
}, ref) => {
  const textareaElement = (
    <textarea
      ref={ref}
      className={`chonks-input chonks-textarea ${className}`}
      {...props}
    />
  )

  if (label) {
    return (
      <div>
        <label className="chonks-label">{label}</label>
        {textareaElement}
      </div>
    )
  }

  return textareaElement
})

Textarea.displayName = 'Textarea'

/**
 * InputGroup Component - For input with button
 */
export const InputGroup = ({ children, className = '' }) => {
  return (
    <div className={`chonks-input-group ${className}`}>
      {children}
    </div>
  )
}

/**
 * Label Component
 */
export const Label = ({ children, htmlFor, className = '' }) => {
  return (
    <label htmlFor={htmlFor} className={`chonks-label ${className}`}>
      {children}
    </label>
  )
}

export default Input
