# Component Documentation

Complete reference for all Chonks UI components.

## Button

Retro-styled buttons with offset shadows and press animations.

### HTML/CSS

```html
<!-- Primary (default) -->
<button class="chonks-btn">Primary Button</button>

<!-- Variants -->
<button class="chonks-btn chonks-btn--secondary">Secondary</button>
<button class="chonks-btn chonks-btn--outline">Outline</button>
<button class="chonks-btn chonks-btn--success">Success</button>
<button class="chonks-btn chonks-btn--error">Error</button>

<!-- Sizes -->
<button class="chonks-btn chonks-btn--sm">Small</button>
<button class="chonks-btn">Medium (default)</button>
<button class="chonks-btn chonks-btn--lg">Large</button>

<!-- Full width -->
<button class="chonks-btn chonks-btn--block">Block Button</button>

<!-- As link -->
<a href="#" class="chonks-btn">Link Button</a>

<!-- Disabled -->
<button class="chonks-btn" disabled>Disabled</button>
```

### React

```jsx
import { Button } from 'chonks-ui/react'

<Button>Primary Button</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="outline">Outline</Button>
<Button variant="success">Success</Button>
<Button variant="error">Error</Button>

<Button size="sm">Small</Button>
<Button size="md">Medium</Button>
<Button size="lg">Large</Button>

<Button block>Block Button</Button>

<Button href="/path">Link Button</Button>

<Button disabled>Disabled</Button>

<Button onClick={() => console.log('clicked')}>
  Click Me
</Button>
```

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| variant | string | 'primary' | Button style: primary, secondary, outline, success, error |
| size | string | 'md' | Button size: sm, md, lg |
| block | boolean | false | Full width button |
| disabled | boolean | false | Disabled state |
| href | string | - | If provided, renders as `<a>` tag |
| onClick | function | - | Click handler |
| className | string | '' | Additional CSS classes |

---

## Card

Container component with optional header, body, and footer.

### HTML/CSS

```html
<!-- Basic card -->
<div class="chonks-card">
    <h3>Card Title</h3>
    <p>Card content goes here.</p>
</div>

<!-- Card with header -->
<div class="chonks-card chonks-card--no-padding">
    <div class="chonks-card-header">
        <span>Card Title</span>
        <div class="chonks-window-controls">
            <div class="chonks-window-dot chonks-window-dot--red"></div>
            <div class="chonks-window-dot chonks-window-dot--yellow"></div>
            <div class="chonks-window-dot chonks-window-dot--green"></div>
        </div>
    </div>
    <div class="chonks-card-body">
        <p>Content</p>
    </div>
</div>

<!-- Card with footer -->
<div class="chonks-card chonks-card--no-padding">
    <div class="chonks-card-header">Header</div>
    <div class="chonks-card-body">Body</div>
    <div class="chonks-card-footer">
        <button class="chonks-btn">Action</button>
    </div>
</div>
```

### React

```jsx
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  WindowControls
} from 'chonks-ui/react'

// Basic card
<Card>
  <h3>Card Title</h3>
  <p>Card content goes here.</p>
</Card>

// Card with header
<Card>
  <CardHeader controls={<WindowControls />}>
    Card Title
  </CardHeader>
  <CardBody>
    <p>Content</p>
  </CardBody>
</Card>

// Card with footer
<Card>
  <CardHeader>Header</CardHeader>
  <CardBody>Body</CardBody>
  <CardFooter>
    <Button>Action</Button>
  </CardFooter>
</Card>
```

---

## Terminal

Code block / terminal window component.

### HTML/CSS

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
        <pre><code>$ npm install chonks-ui
$ npm start</code></pre>
    </div>
</div>

<!-- Inline code -->
<p>Use <code class="chonks-code">const x = 5</code> in your code.</p>
```

### React

```jsx
import { Terminal, Code } from 'chonks-ui/react'

<Terminal title="installation.sh">
  <pre><code>{`$ npm install chonks-ui
$ npm start`}</code></pre>
</Terminal>

<Terminal title="script.js" showCopy={false}>
  <pre>console.log('Hello!')</pre>
</Terminal>

<p>Use <Code>const x = 5</Code> in your code.</p>
```

#### Terminal Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| title | string | 'terminal' | Terminal window title |
| showCopy | boolean | true | Show copy button |
| onCopy | function | - | Custom copy handler |
| className | string | '' | Additional CSS classes |

---

## Input

Form input components.

### HTML/CSS

```html
<!-- Text input -->
<label class="chonks-label" for="name">Name</label>
<input type="text" id="name" class="chonks-input" placeholder="Enter name">

<!-- Textarea -->
<label class="chonks-label" for="message">Message</label>
<textarea id="message" class="chonks-input chonks-textarea"></textarea>

<!-- Input group (input + button) -->
<div class="chonks-input-group">
    <input type="text" class="chonks-input" placeholder="Enter URL">
    <button class="chonks-btn">Convert</button>
</div>

<!-- Disabled -->
<input type="text" class="chonks-input" disabled>
```

### React

```jsx
import { Input, Textarea, InputGroup, Label } from 'chonks-ui/react'

<Input
  label="Name"
  type="text"
  placeholder="Enter name"
/>

<Textarea
  label="Message"
  placeholder="Type your message..."
/>

<Label htmlFor="email">Email</Label>
<Input id="email" type="email" />

<InputGroup>
  <Input placeholder="Enter URL" />
  <Button>Convert</Button>
</InputGroup>

<Input disabled placeholder="Disabled" />
```

#### Input Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| label | string | - | Input label (creates wrapper) |
| className | string | '' | Additional CSS classes |
| ...props | - | - | All standard input props |

---

## Badge

Small status indicators.

### HTML/CSS

```html
<span class="chonks-badge">Default</span>
<span class="chonks-badge chonks-badge--primary">Primary</span>
<span class="chonks-badge chonks-badge--success">Success</span>
<span class="chonks-badge chonks-badge--warning">Warning</span>
<span class="chonks-badge chonks-badge--error">Error</span>
```

### React

```jsx
import { Badge } from 'chonks-ui/react'

<Badge>Default</Badge>
<Badge variant="primary">Primary</Badge>
<Badge variant="success">Success</Badge>
<Badge variant="warning">Warning</Badge>
<Badge variant="error">Error</Badge>
```

---

## Spinner / Loading

Loading indicators.

### HTML/CSS

```html
<!-- Just the spinner -->
<div class="chonks-spinner">
    <div class="chonks-spinner-dot"></div>
    <div class="chonks-spinner-dot"></div>
    <div class="chonks-spinner-dot"></div>
</div>

<!-- Loading with text -->
<div class="chonks-loading">
    <div class="chonks-spinner">
        <div class="chonks-spinner-dot"></div>
        <div class="chonks-spinner-dot"></div>
        <div class="chonks-spinner-dot"></div>
    </div>
    <p class="chonks-loading-text">Loading...</p>
</div>
```

### React

```jsx
import { Spinner, Loading } from 'chonks-ui/react'

<Spinner />

<Loading text="Converting your link..." />
```

---

## Alert

Notification/message boxes.

### HTML/CSS

```html
<div class="chonks-alert chonks-alert--info">
    <strong>Info:</strong> This is an info message.
</div>

<div class="chonks-alert chonks-alert--success">
    <strong>Success!</strong> Operation completed.
</div>

<div class="chonks-alert chonks-alert--warning">
    <strong>Warning:</strong> Please be careful.
</div>

<div class="chonks-alert chonks-alert--error">
    <strong>Error:</strong> Something went wrong.
</div>
```

### React

```jsx
import { Alert } from 'chonks-ui/react'

<Alert variant="info">
  <strong>Info:</strong> This is an info message.
</Alert>

<Alert variant="success">
  <strong>Success!</strong> Operation completed.
</Alert>

<Alert variant="warning">
  <strong>Warning:</strong> Please be careful.
</Alert>

<Alert variant="error">
  <strong>Error:</strong> Something went wrong.
</Alert>
```

---

## Modal / Dialog

Modal dialogs with backdrop and focus management.

### HTML/CSS

```html
<!-- Basic modal -->
<div class="chonks-modal-backdrop" role="dialog" aria-modal="true" aria-labelledby="modal-title">
  <div class="chonks-modal chonks-modal--md">
    <div class="chonks-modal-header">
      <h2 id="modal-title" class="chonks-modal-title">Modal Title</h2>
      <button class="chonks-modal-close" aria-label="Close modal">×</button>
    </div>
    <div class="chonks-modal-body">
      <p>Modal content goes here.</p>
    </div>
    <div class="chonks-modal-footer">
      <button class="chonks-btn chonks-btn--secondary">Cancel</button>
      <button class="chonks-btn">Confirm</button>
    </div>
  </div>
</div>

<!-- Size variants -->
<div class="chonks-modal chonks-modal--sm">Small Modal</div>
<div class="chonks-modal chonks-modal--md">Medium Modal</div>
<div class="chonks-modal chonks-modal--lg">Large Modal</div>
<div class="chonks-modal chonks-modal--fullscreen">Fullscreen Modal</div>
```

### React

*Note: Modal components are CSS-only. Use the HTML structure above with your own JavaScript for functionality.*

---

## Toast / Notification

Toast notifications with auto-dismiss and positioning.

### HTML/CSS

```html
<!-- Toast container (positioned) -->
<div class="chonks-toast-container chonks-toast-container--top-right">
  <!-- Success toast -->
  <div class="chonks-toast chonks-toast--success" role="alert">
    <div class="chonks-toast-header">
      <h4 class="chonks-toast-title">Success!</h4>
      <button class="chonks-toast-close" aria-label="Close">×</button>
    </div>
    <div class="chonks-toast-body">
      Your changes have been saved.
    </div>
  </div>

  <!-- Error toast -->
  <div class="chonks-toast chonks-toast--error" role="alert">
    <div class="chonks-toast-header">
      <h4 class="chonks-toast-title">Error</h4>
      <button class="chonks-toast-close" aria-label="Close">×</button>
    </div>
    <div class="chonks-toast-body">
      Something went wrong. Please try again.
    </div>
  </div>
</div>

<!-- Position variants -->
<div class="chonks-toast-container--top-left">Top Left</div>
<div class="chonks-toast-container--top-center">Top Center</div>
<div class="chonks-toast-container--top-right">Top Right</div>
<div class="chonks-toast-container--bottom-left">Bottom Left</div>
<div class="chonks-toast-container--bottom-center">Bottom Center</div>
<div class="chonks-toast-container--bottom-right">Bottom Right</div>
```

### React

*Note: Toast components are CSS-only. Use the HTML structure above with your own JavaScript for functionality.*

---

## Tabs

Tabbed interface with keyboard navigation.

### HTML/CSS

```html
<div class="chonks-tabs">
  <ul class="chonks-tab-list" role="tablist">
    <li role="presentation">
      <button class="chonks-tab" role="tab" aria-selected="true" 
              aria-controls="panel-1" id="tab-1">Settings</button>
    </li>
    <li role="presentation">
      <button class="chonks-tab" role="tab" aria-selected="false" 
              aria-controls="panel-2" id="tab-2">Profile</button>
    </li>
    <li role="presentation">
      <button class="chonks-tab" role="tab" aria-selected="false" 
              aria-controls="panel-3" id="tab-3">Billing</button>
    </li>
  </ul>
  
  <div class="chonks-tab-panel" role="tabpanel" id="panel-1" 
       aria-labelledby="tab-1" aria-hidden="false">
    <h3>Settings</h3>
    <p>Configure your account settings here.</p>
  </div>
  
  <div class="chonks-tab-panel" role="tabpanel" id="panel-2" 
       aria-labelledby="tab-2" aria-hidden="true">
    <h3>Profile</h3>
    <p>Update your profile information.</p>
  </div>
  
  <div class="chonks-tab-panel" role="tabpanel" id="panel-3" 
       aria-labelledby="tab-3" aria-hidden="true">
    <h3>Billing</h3>
    <p>Manage your subscription and billing.</p>
  </div>
</div>
```

### React

*Note: Tab components are CSS-only. Use the HTML structure above with your own JavaScript for functionality.*

---

## Tooltip

Contextual help text on hover/focus.

### HTML/CSS

```html
<!-- Basic tooltip -->
<div class="chonks-tooltip chonks-tooltip--top">
  <button class="chonks-tooltip-trigger" aria-describedby="tooltip-1">
    Help
  </button>
  <div id="tooltip-1" class="chonks-tooltip-content" role="tooltip">
    This button will save your changes
  </div>
</div>

<!-- Position variants -->
<div class="chonks-tooltip chonks-tooltip--top">Top</div>
<div class="chonks-tooltip chonks-tooltip--bottom">Bottom</div>
<div class="chonks-tooltip chonks-tooltip--left">Left</div>
<div class="chonks-tooltip chonks-tooltip--right">Right</div>
```

### React

*Note: Tooltip components are CSS-only. Use the HTML structure above with your own JavaScript for functionality.*

---

## Progress Bar

Progress indicators for loading states.

### HTML/CSS

```html
<!-- Determinate progress -->
<div class="chonks-progress" role="progressbar" 
     aria-valuenow="65" aria-valuemin="0" aria-valuemax="100" 
     aria-label="Upload progress">
  <div class="chonks-progress-bar" style="width: 65%"></div>
  <div class="chonks-progress-text">65%</div>
</div>

<!-- Indeterminate progress -->
<div class="chonks-progress" role="progressbar" aria-label="Loading">
  <div class="chonks-progress-bar chonks-progress-bar--striped"></div>
</div>

<!-- Size variants -->
<div class="chonks-progress chonks-progress--sm">Small</div>
<div class="chonks-progress">Medium (default)</div>
<div class="chonks-progress chonks-progress--lg">Large</div>

<!-- Color variants -->
<div class="chonks-progress-bar chonks-progress-bar--success">Success</div>
<div class="chonks-progress-bar chonks-progress-bar--warning">Warning</div>
<div class="chonks-progress-bar chonks-progress-bar--error">Error</div>
```

### React

*Note: Progress components are CSS-only. Use the HTML structure above with your own JavaScript for functionality.*

---

## Skeleton Loader

Loading placeholders for content.

### HTML/CSS

```html
<!-- Basic skeleton shapes -->
<div class="chonks-skeleton chonks-skeleton--rectangle"></div>
<div class="chonks-skeleton chonks-skeleton--circle"></div>

<!-- Text lines -->
<div class="chonks-skeleton chonks-skeleton--text"></div>
<div class="chonks-skeleton chonks-skeleton--text"></div>
<div class="chonks-skeleton chonks-skeleton--text"></div>

<!-- Card skeleton -->
<div class="chonks-skeleton-card">
  <div class="chonks-skeleton chonks-skeleton--text"></div>
  <div class="chonks-skeleton chonks-skeleton--text"></div>
  <div class="chonks-skeleton chonks-skeleton--text"></div>
</div>
```

### React

*Note: Skeleton components are CSS-only. Use the HTML structure above with your own JavaScript for functionality.*

---

## Window Controls

macOS-style window control dots.

### HTML/CSS

```html
<div class="chonks-window-controls">
    <div class="chonks-window-dot chonks-window-dot--red"></div>
    <div class="chonks-window-dot chonks-window-dot--yellow"></div>
    <div class="chonks-window-dot chonks-window-dot--green"></div>
</div>
```

### React

```jsx
import { WindowControls } from 'chonks-ui/react'

<WindowControls />

// Often used in card headers
<CardHeader controls={<WindowControls />}>
  Window Title
</CardHeader>
```

---

## Utility Classes

### Spacing

```html
<!-- Padding -->
<div class="chonks-p-xs"></div>  <!-- 4px -->
<div class="chonks-p-sm"></div>  <!-- 8px -->
<div class="chonks-p-md"></div>  <!-- 16px -->
<div class="chonks-p-lg"></div>  <!-- 24px -->
<div class="chonks-p-xl"></div>  <!-- 32px -->

<!-- Margin -->
<div class="chonks-m-xs"></div>
<div class="chonks-m-sm"></div>
<div class="chonks-m-md"></div>
<div class="chonks-m-lg"></div>
<div class="chonks-m-xl"></div>

<!-- Directional -->
<div class="chonks-mt-md"></div>  <!-- margin-top -->
<div class="chonks-mb-lg"></div>  <!-- margin-bottom -->
```

### Layout

```html
<!-- Flexbox -->
<div class="chonks-flex"></div>
<div class="chonks-flex chonks-flex-col"></div>
<div class="chonks-flex chonks-items-center"></div>
<div class="chonks-flex chonks-justify-center"></div>
<div class="chonks-flex chonks-justify-between"></div>
<div class="chonks-flex chonks-gap-md"></div>

<!-- Width -->
<div class="chonks-w-full"></div>  <!-- width: 100% -->
<div class="chonks-w-auto"></div>  <!-- width: auto -->

<!-- Container -->
<div class="chonks-container"></div>  <!-- Max-width centered -->
```

### Text

```html
<div class="chonks-text-left"></div>
<div class="chonks-text-center"></div>
<div class="chonks-text-right"></div>
```

### Visibility

```html
<div class="chonks-hidden"></div>  <!-- display: none -->
```
