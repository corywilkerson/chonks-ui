# Security Policy

## Supported Versions

We provide security updates for the following versions:

| Version | Supported          |
| ------- | ------------------ |
| 1.x.x   | :white_check_mark: |
| < 1.0   | :x:                |

## Reporting a Vulnerability

If you discover a security vulnerability in Chonks UI, please report it responsibly:

1. **Do not** create a public GitHub issue
2. **Email** security concerns to: [your-email@domain.com]
3. **Include**:
   - Description of the vulnerability
   - Steps to reproduce
   - Potential impact
   - Suggested fix (if any)

## Security Considerations

### What We Protect

- **No sensitive data** - Chonks UI is a pure CSS/React library
- **No server-side code** - runs entirely in the browser
- **No external dependencies** - reduces attack surface
- **No data collection** - no analytics or tracking

### What You Should Know

- **CSS injection** - Always validate user-generated CSS
- **XSS prevention** - Sanitize any user content before rendering
- **Theme switching** - Validate theme names to prevent path traversal
- **CDN usage** - Consider using integrity hashes for CDN resources

### Best Practices

```html
<!-- Use integrity hashes for CDN resources -->
<link rel="stylesheet" 
      href="https://unpkg.com/chonks-ui@latest/css/chonks.css"
      integrity="sha384-...">
```

```js
// Sanitize user input before applying classes
const safeClass = userInput.replace(/[^a-zA-Z0-9-_]/g, '');
element.className = `chonks-${safeClass}`;
```

## Privacy

Chonks UI:
- ✅ **No tracking** - no analytics, no data collection
- ✅ **No external requests** - works offline
- ✅ **No personal data** - pure styling library
- ✅ **Open source** - fully auditable code

## Dependencies

Chonks UI has **zero runtime dependencies**:
- Pure CSS (no external libraries)
- Pure React (no additional packages)
- No build tools required
- No package manager needed for basic usage

## Updates

Security updates are released as:
- **Patch releases** (1.0.1, 1.0.2) for security fixes
- **Minor releases** (1.1.0) for new features
- **Major releases** (2.0.0) for breaking changes

Subscribe to releases to get notified of security updates.
