import { useState } from 'react'
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  Terminal,
  Input,
  Badge,
  Spinner,
  Alert,
  useTheme,
  THEMES,
  setTheme
} from '../../react/src/index'

/**
 * Example React App using Chonks UI
 */
function App() {
  const [currentTheme, setCurrentTheme] = useState(THEMES.PINK)
  const [loading, setLoading] = useState(false)
  const [showAlert, setShowAlert] = useState(false)

  // Apply theme
  useTheme(currentTheme)

  const handleThemeChange = (theme) => {
    setCurrentTheme(theme)
    setTheme(theme)
  }

  const handleConvert = () => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setShowAlert(true)
      setTimeout(() => setShowAlert(false), 3000)
    }, 2000)
  }

  return (
    <div className="chonks-container" style={{ paddingTop: '48px', paddingBottom: '48px' }}>

      {/* Hero Section */}
      <header className="chonks-text-center chonks-mb-xl">
        <h1 className="chonks-h1 chonks-display">CHONKS UI</h1>
        <p className="chonks-text-lg chonks-mb-md">
          A retro brutalist design system for power users
        </p>
        <div className="chonks-flex chonks-justify-center chonks-gap-md">
          <Button>Get Started</Button>
          <Button variant="outline">Documentation</Button>
        </div>
      </header>

      {/* Theme Switcher */}
      <Card className="chonks-mb-xl">
        <CardHeader>Theme Switcher</CardHeader>
        <CardBody>
          <p className="chonks-mb-md">
            Current theme: <Badge variant="primary">{currentTheme}</Badge>
          </p>
          <div className="chonks-flex chonks-gap-sm" style={{ flexWrap: 'wrap' }}>
            <Button
              size="sm"
              variant={currentTheme === THEMES.PINK ? 'primary' : 'secondary'}
              onClick={() => handleThemeChange(THEMES.PINK)}
            >
              Pink
            </Button>
            <Button
              size="sm"
              variant={currentTheme === THEMES.BLUE ? 'primary' : 'secondary'}
              onClick={() => handleThemeChange(THEMES.BLUE)}
            >
              Blue
            </Button>
            <Button
              size="sm"
              variant={currentTheme === THEMES.PURPLE ? 'primary' : 'secondary'}
              onClick={() => handleThemeChange(THEMES.PURPLE)}
            >
              Purple
            </Button>
            <Button
              size="sm"
              variant={currentTheme === THEMES.GREEN ? 'primary' : 'secondary'}
              onClick={() => handleThemeChange(THEMES.GREEN)}
            >
              Green
            </Button>
          </div>
        </CardBody>
      </Card>

      {/* Alert Section */}
      {showAlert && (
        <Alert variant="success" className="chonks-mb-md">
          <strong>Success!</strong> Your music link has been converted.
        </Alert>
      )}

      {/* Interactive Demo */}
      <Card className="chonks-mb-xl">
        <CardHeader>Music Link Converter Demo</CardHeader>
        <CardBody>
          <Input
            placeholder="https://open.spotify.com/track/..."
            disabled={loading}
            className="chonks-mb-md"
          />
          <Button onClick={handleConvert} disabled={loading}>
            {loading ? <Spinner /> : 'Convert'}
          </Button>
        </CardBody>
      </Card>

      {/* Component Showcase */}
      <div className="chonks-mb-xl">
        <h2 className="chonks-h2 chonks-display chonks-mb-md">Components</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
          <Card>
            <h3 className="chonks-h3 chonks-mb-sm">Buttons</h3>
            <div className="chonks-flex chonks-flex-col chonks-gap-sm">
              <Button>Primary</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="success">Success</Button>
              <Button variant="error">Error</Button>
            </div>
          </Card>

          <Card>
            <h3 className="chonks-h3 chonks-mb-sm">Badges</h3>
            <div className="chonks-flex chonks-gap-sm" style={{ flexWrap: 'wrap' }}>
              <Badge>Default</Badge>
              <Badge variant="primary">Primary</Badge>
              <Badge variant="success">Success</Badge>
              <Badge variant="warning">Warning</Badge>
              <Badge variant="error">Error</Badge>
            </div>
          </Card>

          <Card>
            <h3 className="chonks-h3 chonks-mb-sm">Terminal</h3>
            <Terminal title="installation.sh">
              <pre><code>{`# Install Chonks UI
npm install @chonks-ui/react

# Import components
import { Button, Card } from '@chonks-ui/react'`}</code></pre>
            </Terminal>
          </Card>
        </div>
      </div>

    </div>
  )
}

export default App