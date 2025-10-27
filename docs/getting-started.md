# Getting Started with Chonks UI

This guide will help you get up and running with Chonks UI in your projects.

## Installation

### For Plain HTML/CSS Projects

1. Copy the `css/` folder to your project
2. Link to the CSS files in your HTML:

```html
<!DOCTYPE html>
<html>
<head>
    <!-- Main CSS (required) -->
    <link rel="stylesheet" href="path/to/chonks-ui/css/chonks.css">

    <!-- Theme CSS (optional but recommended) -->
    <link rel="stylesheet" href="path/to/chonks-ui/css/themes/pink.css">
</head>
<body>
    <!-- Your content here -->
</body>
</html>
```

### For React Projects

1. Copy the `react/` and `css/` folders to your project
2. Import the components you need:

```jsx
// Import CSS (do this once in your main file)
import 'chonks-ui/css/chonks.css'

// Import components
import { Button, Card, Terminal } from 'chonks-ui/react'
```

## Your First Component

### HTML/CSS Example

```html
<div class="chonks-container">
    <!-- Header -->
    <h1 class="chonks-h1 chonks-display">My App</h1>

    <!-- Card with Terminal -->
    <div class="chonks-card chonks-card--no-padding">
        <div class="chonks-card-header">
            <span>terminal</span>
            <div class="chonks-window-controls">
                <div class="chonks-window-dot chonks-window-dot--red"></div>
                <div class="chonks-window-dot chonks-window-dot--yellow"></div>
                <div class="chonks-window-dot chonks-window-dot--green"></div>
            </div>
        </div>
        <div class="chonks-card-body">
            <pre class="chonks-mono">$ npm install</pre>
        </div>
    </div>

    <!-- Button -->
    <button class="chonks-btn">Get Started</button>
</div>
```

### React Example

```jsx
import { Card, CardHeader, CardBody, Terminal, Button, WindowControls } from 'chonks-ui/react'

function App() {
  return (
    <div className="chonks-container">
      <h1 className="chonks-h1 chonks-display">My App</h1>

      <Card>
        <CardHeader controls={<WindowControls />}>
          terminal
        </CardHeader>
        <CardBody>
          <pre className="chonks-mono">$ npm install</pre>
        </CardBody>
      </Card>

      <Button>Get Started</Button>
    </div>
  )
}
```

## Choosing a Theme

Chonks UI comes with 4 themes:
- **Pink** - Vibrant pink, inspired by the cutie app
- **Blue** - Cool blue, inspired by bops.to
- **Purple** - Rich purple tones
- **Green** - Fresh green aesthetic

### HTML/CSS Theme Switching

Simply change the theme CSS import:

```html
<!-- Pink Theme -->
<link rel="stylesheet" href="path/to/themes/pink.css">

<!-- Blue Theme -->
<link rel="stylesheet" href="path/to/themes/blue.css">

<!-- Purple Theme -->
<link rel="stylesheet" href="path/to/themes/purple.css">

<!-- Green Theme -->
<link rel="stylesheet" href="path/to/themes/green.css">
```

### React Theme Switching

Use the `useTheme` hook:

```jsx
import { useTheme, THEMES } from 'chonks-ui/react'

function App() {
  // Set theme on app load
  useTheme(THEMES.PINK)

  return <div>...</div>
}
```

For dynamic theme switching:

```jsx
import { useState } from 'react'
import { useTheme, setTheme, THEMES } from 'chonks-ui/react'

function App() {
  const [currentTheme, setCurrentTheme] = useState(THEMES.PINK)

  // Apply theme
  useTheme(currentTheme)

  const handleThemeChange = (newTheme) => {
    setCurrentTheme(newTheme)
    setTheme(newTheme)
  }

  return (
    <div>
      <button onClick={() => handleThemeChange(THEMES.BLUE)}>
        Switch to Blue
      </button>
    </div>
  )
}
```

## Layout Best Practices

### Container

Always wrap your content in a container for proper centering and padding:

```html
<div class="chonks-container">
    <!-- Your content -->
</div>
```

### Spacing

Use the spacing utility classes for consistent margins and padding:

```html
<!-- Margin bottom extra large -->
<div class="chonks-mb-xl">...</div>

<!-- Padding medium -->
<div class="chonks-p-md">...</div>

<!-- Margin top small -->
<div class="chonks-mt-sm">...</div>
```

Available spacing sizes: `xs`, `sm`, `md`, `lg`, `xl`

### Flexbox Utilities

Use flexbox utilities for layouts:

```html
<div class="chonks-flex chonks-gap-md chonks-items-center">
    <button class="chonks-btn">Button 1</button>
    <button class="chonks-btn">Button 2</button>
</div>

<div class="chonks-flex chonks-justify-between">
    <span>Left</span>
    <span>Right</span>
</div>
```

## Typography

### Headings

```html
<h1 class="chonks-h1">Heading 1</h1>
<h2 class="chonks-h2">Heading 2</h2>
<h3 class="chonks-h3">Heading 3</h3>
<h4 class="chonks-h4">Heading 4</h4>
```

### Display Text

For big, bold, uppercase headings:

```html
<h1 class="chonks-h1 chonks-display">CHONKS UI</h1>
```

### Text Sizes

```html
<p class="chonks-text-sm">Small text</p>
<p class="chonks-text-base">Base text</p>
<p class="chonks-text-lg">Large text</p>
<p class="chonks-text-xl">Extra large text</p>
```

### Monospace

```html
<p class="chonks-mono">Monospace text</p>
<code class="chonks-code">inline code</code>
```

## Next Steps

- Check out the [Component Documentation](./components.md)
- See the [HTML Example](/examples/html/index.html)
- See the [React Example](/examples/react/App.jsx)
- Learn about [creating custom themes](#creating-custom-themes)

## Common Patterns

### Music Link Converter (like bops.to)

```html
<div class="chonks-card">
    <div class="chonks-card-header">
        Music Link Converter
    </div>
    <div class="chonks-card-body">
        <div class="chonks-input-group">
            <input type="text" class="chonks-input" placeholder="Paste music link...">
            <button class="chonks-btn">Convert</button>
        </div>
    </div>
</div>
```

### Terminal/CLI Interface (like cutie)

```html
<div class="chonks-terminal">
    <div class="chonks-terminal-titlebar">
        <div class="chonks-terminal-titlebar-left">
            <div class="chonks-window-controls">
                <div class="chonks-window-dot chonks-window-dot--red"></div>
                <div class="chonks-window-dot chonks-window-dot--yellow"></div>
                <div class="chonks-window-dot chonks-window-dot--green"></div>
            </div>
            <span>terminal</span>
        </div>
        <span>Copy</span>
    </div>
    <div class="chonks-terminal-content">
        <pre><code>$ npm install chonks-ui</code></pre>
    </div>
</div>
```

### Form with Validation

```html
<div class="chonks-card">
    <div class="chonks-card-header">Contact Form</div>
    <div class="chonks-card-body">
        <div class="chonks-mb-md">
            <label class="chonks-label" for="email">Email</label>
            <input type="email" id="email" class="chonks-input">
        </div>
        <div class="chonks-mb-md">
            <label class="chonks-label" for="message">Message</label>
            <textarea id="message" class="chonks-input chonks-textarea"></textarea>
        </div>
        <div class="chonks-alert chonks-alert--error">
            Please fill out all fields.
        </div>
    </div>
    <div class="chonks-card-footer">
        <button class="chonks-btn chonks-btn--block">Submit</button>
    </div>
</div>
```
