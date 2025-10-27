# Contributing to Chonks UI

## 🚀 How Releases Work

Chonks UI uses **release-please** for automated releases. This is the same tool used by Google for their open source projects.

### How It Works

1. **Make changes** and commit with conventional commit messages
2. **Push to main** - release-please automatically creates a PR
3. **Review and merge** the release PR
4. **GitHub Action** automatically publishes to npm

### Commit Message Format

Use [Conventional Commits](https://conventionalcommits.org) format:

```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

#### Types

- `feat:` - New features (triggers minor release)
- `fix:` - Bug fixes (triggers patch release)
- `docs:` - Documentation changes
- `style:` - Code style changes (formatting, etc.)
- `refactor:` - Code refactoring
- `perf:` - Performance improvements
- `test:` - Adding or updating tests
- `chore:` - Maintenance tasks
- `ci:` - CI/CD changes
- `build:` - Build system changes

#### Examples

```bash
# New feature (minor release)
git commit -m "feat: add dark mode theme"

# Bug fix (patch release)  
git commit -m "fix: resolve button focus ring issue"

# Documentation
git commit -m "docs: update installation guide"

# Breaking change (major release)
git commit -m "feat!: redesign button component API

BREAKING CHANGE: Button props have changed from variant to type"
```

### Release Process

1. **Work on feature branch**
   ```bash
   git checkout -b feat/new-component
   # Make changes
   git commit -m "feat: add modal component"
   git push origin feat/new-component
   # Create PR to main
   ```

2. **Merge to main**
   - Release-please automatically creates a release PR
   - Review the generated changelog
   - Merge when ready

3. **Automatic publishing**
   - GitHub Action publishes to npm
   - CDN updates automatically
   - GitHub release created

### Manual Release

If you need to trigger a release manually:

1. Go to **Actions** tab
2. Click **Release Please** workflow  
3. Click **Run workflow**
4. Select **main** branch
5. Click **Run workflow**

### Version Numbers

- **Patch** (1.0.0 → 1.0.1): Bug fixes, docs, chores
- **Minor** (1.0.0 → 1.1.0): New features, new components
- **Major** (1.0.0 → 2.0.0): Breaking changes

### What Gets Released

- **Main package**: `chonks-ui` (CSS + React)
- **React package**: `chonks-ui-react` (React components)
- **CDN**: Available on unpkg.com immediately
- **GitHub release**: With changelog and notes

### Setup for Contributors

1. **Fork the repo**
2. **Clone your fork**
3. **Install dependencies**: `npm install`
4. **Make changes**
5. **Commit with conventional format**
6. **Push and create PR**

### Development

```bash
# Install dependencies
npm install

# Test locally
npm run dev  # (if you add a dev script)

# Build (if needed)
npm run build  # (if you add a build script)
```

### Questions?

- Check [GitHub Issues](https://github.com/corywilkerson/chonks-ui/issues)
- Read [Documentation](./docs/)
- See [Examples](./examples/)

## 🎯 This is Professional Grade

This setup is used by:
- Google (Angular, Material Design)
- Microsoft (TypeScript, VS Code)
- Facebook (React, Jest)
- And thousands of other major projects

No manual scripts, no sketchy processes - just industry-standard automation! 🚀