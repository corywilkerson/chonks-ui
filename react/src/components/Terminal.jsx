import { useState } from 'react'
import { WindowControls } from './Card'

/**
 * Terminal Component
 *
 * @param {Object} props
 * @param {React.ReactNode} props.children - Terminal content
 * @param {string} [props.title='terminal'] - Terminal title
 * @param {boolean} [props.showCopy=true] - Show copy button
 * @param {Function} [props.onCopy] - Custom copy handler
 * @param {string} [props.className] - Additional CSS classes
 */
const Terminal = ({
  children,
  title = 'terminal',
  showCopy = true,
  onCopy,
  className = '',
  ...props
}) => {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    if (onCopy) {
      await onCopy()
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } else {
      // Default copy behavior - copy text content
      const textContent = typeof children === 'string' ? children : ''
      try {
        await navigator.clipboard.writeText(textContent)
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
      } catch (error) {
        console.error('Failed to copy:', error)
      }
    }
  }

  return (
    <div className={`chonks-terminal ${className}`} {...props}>
      <div className="chonks-terminal-titlebar">
        <div className="chonks-terminal-titlebar-left">
          <WindowControls />
          <span>{title}</span>
        </div>
        {showCopy && (
          <button
            onClick={handleCopy}
            style={{
              background: 'none',
              border: 'none',
              color: 'var(--chonks-surface)',
              cursor: 'pointer',
              fontSize: '12px',
              fontFamily: 'var(--chonks-font-mono)',
              opacity: 0.8
            }}
          >
            {copied ? 'Copied!' : 'Copy'}
          </button>
        )}
      </div>
      <div className="chonks-terminal-content">
        {children}
      </div>
    </div>
  )
}

/**
 * Code Component - Inline code
 */
export const Code = ({ children, className = '' }) => {
  return (
    <code className={`chonks-code ${className}`}>
      {children}
    </code>
  )
}

export default Terminal
