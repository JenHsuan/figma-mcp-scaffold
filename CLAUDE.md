# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a React + Vite + Ant Design scaffold project. It's a minimal setup with HMR (Hot Module Replacement) and ESLint configured for React development.

## Stack

- **Build Tool**: Vite 7.x
- **Framework**: React 19.x
- **UI Library**: Ant Design 5.x
- **Language**: JavaScript (JSX)
- **Linting**: ESLint with React-specific plugins

## Common Commands

```bash
# Start development server with HMR
npm run dev

# Build for production
npm run build

# Run linting
npm run lint

# Preview production build
npm run preview
```

## Architecture

### Entry Point
- `src/main.jsx` - Application entry point that renders the root `App` component with React StrictMode

### Component Structure
- `src/App.jsx` - Main application component that demonstrates Ant Design integration
- Static assets are in `src/assets/` and `public/`

### ESLint Configuration
- Uses flat config format (`eslint.config.js`)
- Configured for React Hooks and React Refresh
- Custom rule: allows unused variables that match `^[A-Z_]` pattern
- Ignores `dist/` directory

### Vite Configuration
- Minimal setup using `@vitejs/plugin-react` with Babel for Fast Refresh
- Default configuration without additional customizations
