/**
 * Spinner Component
 */
export const Spinner = ({ className = '' }) => {
  return (
    <div className={`chonks-spinner ${className}`}>
      <div className="chonks-spinner-dot"></div>
      <div className="chonks-spinner-dot"></div>
      <div className="chonks-spinner-dot"></div>
    </div>
  )
}

/**
 * Loading Component - Spinner with text
 */
export const Loading = ({ text = 'Loading...', className = '' }) => {
  return (
    <div className={`chonks-loading ${className}`}>
      <Spinner />
      <p className="chonks-loading-text">{text}</p>
    </div>
  )
}

export default Spinner
