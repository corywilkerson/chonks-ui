import { useEffect } from 'react'

/**
 * Available themes
 */
export const THEMES = {
  PINK: 'pink',
  BLUE: 'blue',
  PURPLE: 'purple',
  GREEN: 'green',
  GREYSCALE: 'greyscale'
}

/**
 * Theme configurations
 */
const THEME_CONFIGS = {
  [THEMES.PINK]: {
    '--chonks-primary': '#ff6b9d',
    '--chonks-primary-dark': '#e5427a',
    '--chonks-primary-light': '#ffb3d1',
  },
  [THEMES.BLUE]: {
    '--chonks-primary': '#87CEEB',
    '--chonks-primary-dark': '#4682B4',
    '--chonks-primary-light': '#B0E0E6',
  },
  [THEMES.PURPLE]: {
    '--chonks-primary': '#a78bfa',
    '--chonks-primary-dark': '#7c3aed',
    '--chonks-primary-light': '#c4b5fd',
  },
  [THEMES.GREEN]: {
    '--chonks-primary': '#86efac',
    '--chonks-primary-dark': '#22c55e',
    '--chonks-primary-light': '#bbf7d0',
  },
  [THEMES.GREYSCALE]: {
    '--chonks-primary': '#4a4a4a',
    '--chonks-primary-dark': '#2c2c2c',
    '--chonks-primary-light': '#6e6e6e',
  }
}

/**
 * Hook to manage theme switching
 *
 * @param {string} theme - Theme name from THEMES
 *
 * @example
 * import { useTheme, THEMES } from '@chonks-ui/react'
 *
 * function App() {
 *   useTheme(THEMES.PINK)
 *   return <div>...</div>
 * }
 */
export const useTheme = (theme = THEMES.BLUE) => {
  useEffect(() => {
    const themeConfig = THEME_CONFIGS[theme]

    if (!themeConfig) {
      console.warn(`Theme "${theme}" not found. Using default.`)
      return
    }

    // Apply theme CSS variables to root
    const root = document.documentElement
    Object.entries(themeConfig).forEach(([property, value]) => {
      root.style.setProperty(property, value)
    })
  }, [theme])
}

/**
 * Function to switch theme programmatically
 */
export const setTheme = (theme) => {
  const themeConfig = THEME_CONFIGS[theme]

  if (!themeConfig) {
    console.warn(`Theme "${theme}" not found.`)
    return
  }

  const root = document.documentElement
  Object.entries(themeConfig).forEach(([property, value]) => {
    root.style.setProperty(property, value)
  })
}

export default useTheme
