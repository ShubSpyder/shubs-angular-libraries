# Quick Reference Guide

A quick reference for the Angular Glass Motion library. Perfect for when you need a fast lookup!

## Installation

```bash
npm install angular-glass-motion
```

## Basic Import

```typescript
import { AngularGlassMotionComponent } from 'angular-glass-motion';

@Component({
  standalone: true,
  imports: [AngularGlassMotionComponent],
  // ...
})
```

## Component Selector

```html
<glass-motion-effect>
  <!-- Your content -->
</glass-motion-effect>
```

## Input Properties Quick Reference

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `blur` | `number` | `10` | Blur intensity (px) |
| `opacity` | `number` | `0.1` | Background opacity (0-1) |
| `borderOpacity` | `number` | `0.2` | Border opacity (0-1) |
| `borderRadius` | `string` | `'16px'` | Border radius |
| `bgColor` | `string` | `'255, 255, 255'` | RGB color (comma-separated) |
| `draggable` | `boolean` | `false` | Enable dragging |

## Common Patterns

### Default Glass Effect
```html
<glass-motion-effect>
  <p>Default glass effect</p>
</glass-motion-effect>
```

### Custom Colors

```html
<!-- Light Blue -->
<glass-motion-effect bgColor="173, 216, 230">
  <p>Light blue glass</p>
</glass-motion-effect>

<!-- Dark Theme -->
<glass-motion-effect bgColor="30, 30, 30" [opacity]="0.3">
  <p>Dark glass</p>
</glass-motion-effect>

<!-- Vibrant Red -->
<glass-motion-effect bgColor="255, 99, 71" [opacity]="0.15">
  <p>Red glass</p>
</glass-motion-effect>
```

### Blur Variations

```html
<!-- Subtle -->
<glass-motion-effect [blur]="5">
  <p>Light blur</p>
</glass-motion-effect>

<!-- Default -->
<glass-motion-effect [blur]="10">
  <p>Medium blur</p>
</glass-motion-effect>

<!-- Strong -->
<glass-motion-effect [blur]="25">
  <p>Heavy blur</p>
</glass-motion-effect>
```

### Opacity Levels

```html
<!-- Very transparent -->
<glass-motion-effect [opacity]="0.05">
  <p>Highly transparent</p>
</glass-motion-effect>

<!-- Balanced -->
<glass-motion-effect [opacity]="0.1">
  <p>Default transparency</p>
</glass-motion-effect>

<!-- More solid -->
<glass-motion-effect [opacity]="0.3">
  <p>More opaque</p>
</glass-motion-effect>
```

### Border Styles

```html
<!-- Subtle border -->
<glass-motion-effect [borderOpacity]="0.1">
  <p>Soft border</p>
</glass-motion-effect>

<!-- Prominent border -->
<glass-motion-effect [borderOpacity]="0.5">
  <p>Strong border</p>
</glass-motion-effect>

<!-- Rounded corners -->
<glass-motion-effect borderRadius="24px">
  <p>Large border radius</p>
</glass-motion-effect>

<!-- Circular -->
<glass-motion-effect borderRadius="50%">
  <p>Circular shape</p>
</glass-motion-effect>
```

### Draggable

```html
<glass-motion-effect [draggable]="true">
  <p>Click and drag me!</p>
</glass-motion-effect>
```

## Complete Example Combinations

### Card
```html
<glass-motion-effect 
  [blur]="15"
  [opacity]="0.1"
  borderRadius="20px"
  bgColor="240, 248, 255">
  <div style="padding: 2rem;">
    <h3>Card Title</h3>
    <p>Card content goes here</p>
  </div>
</glass-motion-effect>
```

### Modal/Dialog
```html
<glass-motion-effect 
  [blur]="20"
  [opacity]="0.2"
  borderRadius="24px"
  bgColor="255, 255, 255">
  <div style="padding: 2rem; min-width: 400px;">
    <h2>Dialog Title</h2>
    <p>Dialog content</p>
    <button>Close</button>
  </div>
</glass-motion-effect>
```

### Navigation Bar
```html
<glass-motion-effect 
  [blur]="15"
  [opacity]="0.1"
  borderRadius="50px"
  bgColor="255, 255, 255">
  <nav style="padding: 1rem 2rem; display: flex; gap: 2rem;">
    <a href="/">Home</a>
    <a href="/about">About</a>
    <a href="/contact">Contact</a>
  </nav>
</glass-motion-effect>
```

### Widget Dashboard
```html
<glass-motion-effect 
  [draggable]="true"
  [blur]="12"
  [opacity]="0.15"
  borderRadius="16px"
  bgColor="100, 149, 237">
  <div style="padding: 1.5rem;">
    <h4>Widget Title</h4>
    <p>Widget content</p>
  </div>
</glass-motion-effect>
```

### Hero Section
```html
<glass-motion-effect 
  [blur]="25"
  [opacity]="0.15"
  borderRadius="32px"
  bgColor="255, 255, 255">
  <div style="padding: 4rem; text-align: center;">
    <h1>Welcome</h1>
    <p>Your tagline here</p>
    <button>Get Started</button>
  </div>
</glass-motion-effect>
```

## Color Presets

### Light Theme
```html
<!-- Pure White -->
bgColor="255, 255, 255"

<!-- Light Blue -->
bgColor="173, 216, 230"

<!-- Mint Green -->
bgColor="152, 251, 152"

<!-- Lavender -->
bgColor="230, 230, 250"

<!-- Peach -->
bgColor="255, 218, 185"
```

### Dark Theme
```html
<!-- Dark Gray -->
bgColor="30, 30, 30"

<!-- Midnight Blue -->
bgColor="25, 25, 112"

<!-- Deep Purple -->
bgColor="75, 0, 130"

<!-- Dark Teal -->
bgColor="0, 77, 64"
```

### Vibrant
```html
<!-- Coral -->
bgColor="255, 127, 80"

<!-- Royal Blue -->
bgColor="65, 105, 225"

<!-- Lime Green -->
bgColor="50, 205, 50"

<!-- Hot Pink -->
bgColor="255, 105, 180"

<!-- Orange -->
bgColor="255, 165, 0"
```

## TypeScript Usage

### Component Property Binding
```typescript
@Component({
  template: `
    <glass-motion-effect 
      [blur]="myBlur"
      [opacity]="myOpacity"
      [bgColor]="myColor">
      Content
    </glass-motion-effect>
  `
})
export class MyComponent {
  myBlur = 15;
  myOpacity = 0.12;
  myColor = '100, 149, 237';
}
```

### Dynamic Updates
```typescript
@Component({
  template: `
    <glass-motion-effect [blur]="currentBlur">
      Content
    </glass-motion-effect>
    <button (click)="increaseBlur()">More Blur</button>
  `
})
export class MyComponent {
  currentBlur = 10;

  increaseBlur() {
    this.currentBlur += 5;
  }
}
```

### Conditional Dragging
```typescript
@Component({
  template: `
    <glass-motion-effect [draggable]="canDrag">
      Content
    </glass-motion-effect>
    <button (click)="toggleDrag()">Toggle Drag</button>
  `
})
export class MyComponent {
  canDrag = false;

  toggleDrag() {
    this.canDrag = !this.canDrag;
  }
}
```

## Browser Support Matrix

| Browser | Version | Support |
|---------|---------|---------|
| Chrome | 76+ | ✅ Full |
| Safari | 9+ | ✅ Full |
| Firefox | 103+ | ✅ Full |
| Edge | 79+ | ✅ Full |
| Opera | 63+ | ✅ Full |
| IE | Any | ❌ No support |

## Performance Tips

✅ **Do:**
- Keep blur values under 25px
- Use the component sparingly on the same page
- Test on lower-end devices

❌ **Don't:**
- Use extremely high blur values (>30px)
- Nest multiple glass effects
- Apply to very large containers

## Common Recommended Values

### Subtle Effect
```typescript
blur: 5-8
opacity: 0.05-0.08
borderOpacity: 0.1-0.15
```

### Balanced Effect (Default)
```typescript
blur: 10-15
opacity: 0.1-0.15
borderOpacity: 0.2-0.3
```

### Strong Effect
```typescript
blur: 20-25
opacity: 0.2-0.3
borderOpacity: 0.3-0.5
```

## Debugging

### Effect Not Visible?
1. Check if backdrop-filter is supported in your browser
2. Ensure there's content behind the glass element
3. Verify opacity is not 0 or 1
4. Check blur value is greater than 0

### Dragging Not Working?
1. Verify `[draggable]="true"` is set
2. Check for CSS preventing pointer events
3. Ensure no overlapping elements blocking interaction

### Performance Issues?
1. Reduce blur value
2. Limit number of glass elements on page
3. Use lower opacity values
4. Test on different devices

## Getting Help

- 📖 [Full Documentation](./INDEX.md)
- 🔍 [API Reference](./API.md)
- 📝 [Examples](./EXAMPLES.md)
- 🐛 [Report Issue](https://github.com/ShubSpyder/shubs-angular-libraries/issues)
- 💬 [Discussions](https://github.com/ShubSpyder/shubs-angular-libraries/discussions)

---

**Need more details?** Check the [complete documentation](./INDEX.md).
