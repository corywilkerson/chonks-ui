# Accessibility Guide

Chonks UI includes accessibility features to make your applications more usable. While we prioritize the brutalist aesthetic, we've implemented focus management, keyboard navigation, and ARIA support where possible.

## Key Features

### Keyboard Navigation
- **Tab order**: All interactive elements are keyboard accessible
- **Focus management**: Clear focus indicators with 2px offset rings
- **Skip links**: Use `.chonks-skip-link` to provide quick navigation
- **Arrow key navigation**: Tabs component supports arrow key navigation

### Screen Reader Support
- **ARIA attributes**: Proper roles, labels, and states throughout
- **Live regions**: Toast notifications use `aria-live` for announcements
- **Semantic HTML**: Components use appropriate HTML elements
- **Descriptive labels**: Form controls have proper label associations

### Visual Accessibility
- **Focus indicators**: Visible focus rings on all interactive elements
- **Scalable text**: Typography uses rem units for proper scaling
- **Color palettes**: Beautiful themes that prioritize aesthetic over strict contrast ratios

### Motion & Animation
- **Reduced motion**: Respects `prefers-reduced-motion` setting
- **Essential animations**: Critical animations remain functional
- **Smooth transitions**: 0.1-0.3s timing for comfortable experience

## Component Guidelines

### Buttons
```html
<!-- Good: Proper button with accessible text -->
<button class="chonks-btn" aria-describedby="help-text">
  Save Changes
</button>
<div id="help-text" class="chonks-text-sm chonks-text-muted">
  This will save your changes to the server
</div>

<!-- Good: Disabled state with proper ARIA -->
<button class="chonks-btn" disabled aria-disabled="true">
  Processing...
</button>
```

### Forms
```html
<!-- Good: Proper label association -->
<label for="email" class="chonks-label">Email Address</label>
<input type="email" id="email" class="chonks-input" required>

<!-- Good: Error state with ARIA -->
<label for="password" class="chonks-label">Password</label>
<input type="password" id="password" class="chonks-input" 
       aria-invalid="true" aria-describedby="password-error">
<div id="password-error" class="chonks-alert chonks-alert--error" role="alert">
  Password must be at least 8 characters
</div>
```

### Modals
```html
<!-- Good: Proper modal structure -->
<div class="chonks-modal-backdrop" role="dialog" aria-modal="true" 
     aria-labelledby="modal-title">
  <div class="chonks-modal chonks-modal--md">
    <div class="chonks-modal-header">
      <h2 id="modal-title" class="chonks-modal-title">Confirm Action</h2>
      <button class="chonks-modal-close" aria-label="Close modal">×</button>
    </div>
    <div class="chonks-modal-body">
      <p>Are you sure you want to delete this item?</p>
    </div>
    <div class="chonks-modal-footer">
      <button class="chonks-btn chonks-btn--secondary">Cancel</button>
      <button class="chonks-btn chonks-btn--error">Delete</button>
    </div>
  </div>
</div>
```

### Tabs
```html
<!-- Good: Proper tab structure -->
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
  </ul>
  <div class="chonks-tab-panel" role="tabpanel" id="panel-1" 
       aria-labelledby="tab-1" aria-hidden="false">
    <p>Settings content here</p>
  </div>
  <div class="chonks-tab-panel" role="tabpanel" id="panel-2" 
       aria-labelledby="tab-2" aria-hidden="true">
    <p>Profile content here</p>
  </div>
</div>
```

### Tooltips
```html
<!-- Good: Accessible tooltip -->
<div class="chonks-tooltip chonks-tooltip--top">
  <button class="chonks-tooltip-trigger" aria-describedby="tooltip-1">
    Help
  </button>
  <div id="tooltip-1" class="chonks-tooltip-content" role="tooltip">
    This button will save your changes
  </div>
</div>
```

### Progress Bars
```html
<!-- Good: Progress with proper ARIA -->
<div class="chonks-progress" role="progressbar" 
     aria-valuenow="65" aria-valuemin="0" aria-valuemax="100" 
     aria-label="Upload progress">
  <div class="chonks-progress-bar" style="width: 65%"></div>
  <div class="chonks-progress-text">65%</div>
</div>

<!-- Good: Indeterminate progress -->
<div class="chonks-progress" role="progressbar" 
     aria-label="Loading content">
  <div class="chonks-progress-bar chonks-progress-bar--striped"></div>
</div>
```

## Testing Your Implementation

### Keyboard Testing
1. **Tab through all interactive elements** - ensure logical order
2. **Test focus indicators** - all elements should show clear focus
3. **Test keyboard shortcuts** - ESC for modals, arrow keys for tabs
4. **Test skip links** - should jump to main content

### Screen Reader Testing
1. **Use NVDA (Windows) or VoiceOver (Mac)** to test announcements
2. **Check form labels** - should be announced clearly
3. **Test error messages** - should be announced immediately
4. **Test modal behavior** - should trap focus and announce properly

### Visual Testing
1. **Test with high contrast mode** - ensure all elements are visible
2. **Test with zoom up to 200%** - layout should remain usable
3. **Test with color blindness simulators** - information should be clear
4. **Test with reduced motion** - animations should be disabled

## Common Pitfalls

### ❌ Don't Do This
```html
<!-- Bad: No label association -->
<input type="text" class="chonks-input" placeholder="Enter name">

<!-- Bad: Generic button text -->
<button class="chonks-btn">Click here</button>

<!-- Bad: Missing ARIA attributes -->
<div class="chonks-modal-backdrop">
  <div class="chonks-modal">
    <h2>Title</h2>
  </div>
</div>
```

### ✅ Do This Instead
```html
<!-- Good: Proper label association -->
<label for="name" class="chonks-label">Full Name</label>
<input type="text" id="name" class="chonks-input" placeholder="Enter your full name">

<!-- Good: Descriptive button text -->
<button class="chonks-btn">Save Changes</button>

<!-- Good: Complete ARIA attributes -->
<div class="chonks-modal-backdrop" role="dialog" aria-modal="true" 
     aria-labelledby="modal-title">
  <div class="chonks-modal">
    <h2 id="modal-title">Confirm Deletion</h2>
  </div>
</div>
```

## Resources

- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [WebAIM Screen Reader Testing](https://webaim.org/articles/screenreader_testing/)
- [Color Contrast Checker](https://webaim.org/resources/contrastchecker/)
- [Keyboard Navigation Testing](https://webaim.org/techniques/keyboard/)

## Support

If you find accessibility issues or have questions about implementing accessible patterns with Chonks UI, please open an issue on GitHub or reach out to the maintainers.
