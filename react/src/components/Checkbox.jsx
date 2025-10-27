import { forwardRef } from 'react'

/**
 * Checkbox Component
 *
 * @param {Object} props
 * @param {string} [props.label] - Checkbox label
 * @param {string} [props.className] - Additional CSS classes
 * @param {boolean} [props.checked] - Checked state
 * @param {Function} [props.onChange] - Change handler
 */
export const Checkbox = forwardRef(({
  label,
  className = '',
  checked,
  onChange,
  ...props
}, ref) => {
  const checkboxElement = (
    <input
      ref={ref}
      type="checkbox"
      className={`chonks-checkbox ${className}`}
      checked={checked}
      onChange={onChange}
      {...props}
    />
  )

  if (label) {
    return (
      <label className="chonks-checkbox-label">
        {checkboxElement}
        <span>{label}</span>
      </label>
    )
  }

  return checkboxElement
})

Checkbox.displayName = 'Checkbox'

/**
 * CheckboxGroup Component - For multiple checkboxes
 */
export const CheckboxGroup = ({ children, className = '' }) => {
  return (
    <div className={`chonks-form-group ${className}`}>
      {children}
    </div>
  )
}

export default Checkbox
