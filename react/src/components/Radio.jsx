import { forwardRef } from 'react'

/**
 * Radio Button Component
 *
 * @param {Object} props
 * @param {string} [props.label] - Radio label
 * @param {string} [props.name] - Radio group name
 * @param {string} [props.value] - Radio value
 * @param {string} [props.className] - Additional CSS classes
 * @param {boolean} [props.checked] - Checked state
 * @param {Function} [props.onChange] - Change handler
 */
export const Radio = forwardRef(({
  label,
  name,
  value,
  className = '',
  checked,
  onChange,
  ...props
}, ref) => {
  const radioElement = (
    <input
      ref={ref}
      type="radio"
      name={name}
      value={value}
      className={`chonks-radio ${className}`}
      checked={checked}
      onChange={onChange}
      {...props}
    />
  )

  if (label) {
    return (
      <label className="chonks-radio-label">
        {radioElement}
        <span>{label}</span>
      </label>
    )
  }

  return radioElement
})

Radio.displayName = 'Radio'

/**
 * RadioGroup Component - For radio button groups
 */
export const RadioGroup = ({ children, className = '' }) => {
  return (
    <div className={`chonks-form-group ${className}`}>
      {children}
    </div>
  )
}

export default Radio
