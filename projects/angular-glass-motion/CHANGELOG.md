# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [0.0.1] - 2026-01-31

### Added
- Initial release of Angular Glass Motion library
- Glassmorphism effect component with backdrop blur
- Customizable blur intensity (default: 10px)
- Adjustable opacity and border opacity
- RGB color customization
- Border radius configuration
- Optional drag-and-drop functionality
- Smooth hover effects
- Performance optimizations with CSS transforms
- Full TypeScript support
- Standalone component compatible with Angular 15+
- Zero external dependencies (except Angular core)

### Features
- **AngularGlassMotionComponent** - Main component with selector `glass-motion-effect`
- **Input Properties:**
  - `blur` - Backdrop blur intensity
  - `opacity` - Background opacity
  - `borderOpacity` - Border opacity
  - `borderRadius` - Border radius value
  - `bgColor` - RGB color values
  - `draggable` - Enable/disable drag functionality
- **Content Projection** - Supports any HTML content via ng-content
- **Automatic Event Cleanup** - Prevents memory leaks with proper listener disposal

### Technical Details
- Built with Angular 19.2.0
- Uses modern CSS features (backdrop-filter, CSS custom properties)
- Renderer2 for DOM manipulation
- HostListener for event handling
- Will-change optimization for transforms

[Unreleased]: https://github.com/yourusername/angular-glass-motion/compare/v0.0.1...HEAD
[0.0.1]: https://github.com/yourusername/angular-glass-motion/releases/tag/v0.0.1
