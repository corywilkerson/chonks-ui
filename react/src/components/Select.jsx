import { forwardRef } from 'react'

/**
 * Select Dropdown Component
 *
 * @param {Object} props
 * @param {React.ReactNode} props.children - Option elements
 * @param {string} [props.label] - Select label
 * @param {string} [props.className] - Additional CSS classes
 */
export const Select = forwardRef(({
  children,
  label,
  className = '',
  ...props
}, ref) => {
  const selectElement = (
    <select
      ref={ref}
      className={`chonks-select ${className}`}
      {...props}
    >
      {children}
    </select>
  )

  if (label) {
    return (
      <div>
        <label className="chonks-label">{label}</label>
        {selectElement}
      </div>
    )
  }

  return selectElement
})

Select.displayName = 'Select'

export default Select
