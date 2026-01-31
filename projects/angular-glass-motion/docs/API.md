# API Documentation

Complete API reference for the Angular Glass Motion library.

## Table of Contents
- [Component](#component)
- [Inputs](#inputs)
- [CSS Custom Properties](#css-custom-properties)
- [Styling](#styling)
- [Events](#events)
- [TypeScript Interfaces](#typescript-interfaces)

---

## Component

### AngularGlassMotionComponent

The main component that provides glassmorphism effects with optional drag functionality.

**Selector:** `glass-motion-effect`

**Type:** Standalone Component

**Import:**
```typescript
import { AngularGlassMotionComponent } from 'angular-glass-motion';
```

**Basic Usage:**
```html
<glass-motion-effect>
  <!-- Your content here -->
</glass-motion-effect>
```

---

## Inputs

### blur

Controls the backdrop blur intensity in pixels.

- **Type:** `number`
- **Default:** `10`
- **Range:** `0` to `50` (recommended)
- **Unit:** pixels

**Example:**
```html
<glass-motion-effect [blur]="20">
  <!-- Content -->
</glass-motion-effect>
```

**Description:**
Higher values create a stronger blur effect. Values above 30px may impact performance on lower-end devices.

---

### opacity

Controls the background opacity.

- **Type:** `number`
- **Default:** `0.1`
- **Range:** `0` to `1`
- **Unit:** decimal (0 = transparent, 1 = opaque)

**Example:**
```html
<glass-motion-effect [opacity]="0.25">
  <!-- Content -->
</glass-motion-effect>
```

**Description:**
Lower values create more transparency, allowing background content to show through more clearly. Higher values make the glass effect more opaque.

---

### borderOpacity

Controls the border opacity.

- **Type:** `number`
- **Default:** `0.2`
- **Range:** `0` to `1`
- **Unit:** decimal

**Example:**
```html
<glass-motion-effect [borderOpacity]="0.4">
  <!-- Content -->
</glass-motion-effect>
```

**Description:**
Adjusts the visibility of the component's border. Higher values create more prominent borders.

---

### borderRadius

Controls the corner radius of the glass container.

- **Type:** `string`
- **Default:** `'16px'`
- **Valid Values:** Any valid CSS border-radius value

**Examples:**
```html
<!-- Pixels -->
<glass-motion-effect borderRadius="24px">
  <!-- Content -->
</glass-motion-effect>

<!-- Percentage -->
<glass-motion-effect borderRadius="50%">
  <!-- Content -->
</glass-motion-effect>

<!-- Multiple values -->
<glass-motion-effect borderRadius="20px 20px 0 0">
  <!-- Content -->
</glass-motion-effect>
```

**Description:**
Changes the roundness of corners. Use percentage values for elliptical shapes.

---

### bgColor

Sets the background color in RGB format (without 'rgb()' wrapper).

- **Type:** `string`
- **Default:** `'255, 255, 255'` (white)
- **Format:** `'R, G, B'` where R, G, B are 0-255

**Examples:**
```html
<!-- White -->
<glass-motion-effect bgColor="255, 255, 255">
  <!-- Content -->
</glass-motion-effect>

<!-- Blue -->
<glass-motion-effect bgColor="100, 149, 237">
  <!-- Content -->
</glass-motion-effect>

<!-- Dark Gray -->
<glass-motion-effect bgColor="50, 50, 50">
  <!-- Content -->
</glass-motion-effect>
```

**Description:**
Define the tint color of the glass effect. Works in combination with the `opacity` property to create the final color appearance.

---

### draggable

Enables or disables drag-and-drop functionality.

- **Type:** `boolean`
- **Default:** `false`

**Example:**
```html
<glass-motion-effect [draggable]="true">
  <!-- Content -->
</glass-motion-effect>
```

**Description:**
When enabled, users can click and drag the component to move it around the viewport. The component maintains its position until dragged again or the page is reloaded.

**Behavior:**
- Mouse cursor changes to 'move' when hovering over draggable elements
- Uses CSS transforms for smooth, GPU-accelerated movement
- Event listeners are automatically cleaned up to prevent memory leaks
- Position is not persisted between page reloads

---

## CSS Custom Properties

The component uses CSS custom properties internally for dynamic styling. These are set automatically based on input values but can be overridden if needed.

| Property | Description | Default |
|----------|-------------|---------|
| `--blur` | Backdrop blur amount | `10px` |
| `--opacity` | Background opacity | `0.1` |
| `--border-opacity` | Border opacity | `0.2` |
| `--border-radius` | Corner radius | `16px` |
| `--bg-color` | RGB color values | `255, 255, 255` |

**Example Override:**
```css
glass-motion-effect {
  --blur: 15px;
  --opacity: 0.15;
}
```

---

## Styling

### Host Element

The component uses `:host` styling:

```css
:host {
  display: inline-block;
  user-select: none;
}
```

This means the component can be styled like any inline-block element:

```css
glass-motion-effect {
  width: 300px;
  margin: 20px;
}
```

### Content Projection

Content is projected into the `.glass-content` div with default padding of `1rem`. To customize:

```css
glass-motion-effect::ng-deep .glass-content {
  padding: 2rem;
}
```

Or use a wrapper div:

```html
<glass-motion-effect>
  <div style="padding: 2rem;">
    <!-- Custom padded content -->
  </div>
</glass-motion-effect>
```

### Hover Effects

The component includes built-in hover effects:
- Enhanced box shadow
- Increased border opacity

To disable or customize:

```css
glass-motion-effect::ng-deep .glass-container:hover {
  box-shadow: none; /* Disable hover shadow */
}
```

---

## Events

### Mouse Events (Draggable Mode)

When `draggable` is true, the component listens to these events:

| Event | Description | Handler |
|-------|-------------|---------|
| `mousedown` | Initiates drag operation | `onMouseDown()` |
| `document:mousemove` | Updates position during drag | Internal handler |
| `document:mouseup` | Ends drag operation | Internal handler |

**Note:** Event listeners are automatically attached and removed using Angular's `Renderer2` to ensure proper cleanup and prevent memory leaks.

### Custom Events

The component doesn't emit custom events currently. If you need to track drag operations, wrap the component:

```typescript
@Component({
  template: `
    <div (mousedown)="onDragStart()" (mouseup)="onDragEnd()">
      <glass-motion-effect [draggable]="true">
        Content
      </glass-motion-effect>
    </div>
  `
})
export class WrapperComponent {
  onDragStart() {
    console.log('Drag started');
  }
  
  onDragEnd() {
    console.log('Drag ended');
  }
}
```

---

## TypeScript Interfaces

### Component Class Structure

```typescript
export class AngularGlassMotionComponent {
  // Public Inputs
  @Input() blur: number = 10;
  @Input() opacity: number = 0.1;
  @Input() borderOpacity: number = 0.2;
  @Input() borderRadius: string = '16px';
  @Input() bgColor: string = '255, 255, 255';
  @Input() draggable: boolean = false;

  // Private Properties
  private isDragging: boolean = false;
  private startX: number = 0;
  private startY: number = 0;
  private currentX: number = 0;
  private currentY: number = 0;

  // Computed Property
  get transformStyle(): string;

  // Constructor
  constructor(
    private el: ElementRef,
    private renderer: Renderer2
  );

  // Event Handler
  @HostListener('mousedown', ['$event'])
  onMouseDown(event: MouseEvent): void;
}
```

### Usage in TypeScript

```typescript
import { Component, ViewChild } from '@angular/core';
import { AngularGlassMotionComponent } from 'angular-glass-motion';

@Component({
  selector: 'app-example',
  standalone: true,
  imports: [AngularGlassMotionComponent],
  template: `
    <glass-motion-effect #glassEffect [blur]="blurValue">
      Content
    </glass-motion-effect>
  `
})
export class ExampleComponent {
  @ViewChild('glassEffect') glassEffect!: AngularGlassMotionComponent;
  blurValue = 15;

  ngAfterViewInit() {
    // Access component properties
    console.log(this.glassEffect.blur);
    
    // Modify properties programmatically
    this.blurValue = 20;
  }
}
```

---

## Browser Compatibility

### Backdrop Filter Support

The glassmorphism effect relies on the CSS `backdrop-filter` property:

| Browser | Minimum Version | Support |
|---------|----------------|---------|
| Chrome | 76+ | ✅ Full |
| Safari | 9+ | ✅ Full (-webkit prefix) |
| Firefox | 103+ | ✅ Full |
| Edge | 79+ | ✅ Full |
| Opera | 63+ | ✅ Full |
| IE | Any | ❌ Not supported |

### Fallback Behavior

For browsers without `backdrop-filter` support, the component shows:
- Solid background with the specified `bgColor` and `opacity`
- No blur effect
- All other features (dragging, borders, etc.) work normally

### Feature Detection

To detect backdrop-filter support in your code:

```typescript
const supportsBackdropFilter = CSS.supports('backdrop-filter', 'blur(10px)') ||
                                CSS.supports('-webkit-backdrop-filter', 'blur(10px)');

if (!supportsBackdropFilter) {
  console.warn('Backdrop filter not supported - using fallback styles');
}
```

---

## Performance Considerations

### Optimization Tips

1. **Blur Values:** Keep blur values under 25px for best performance
2. **Transform-based Animation:** The component uses CSS transforms for dragging, which is GPU-accelerated
3. **Will-change:** The component uses `will-change: transform` for optimized animations
4. **Event Cleanup:** Drag event listeners are properly cleaned up to prevent memory leaks

### Performance Monitoring

```typescript
@Component({
  template: `
    <glass-motion-effect 
      [blur]="blur"
      [draggable]="true">
      Content
    </glass-motion-effect>
  `
})
export class MonitoredComponent {
  blur = 10;

  @HostListener('window:resize')
  onResize() {
    // Reduce blur on smaller screens for better performance
    if (window.innerWidth < 768) {
      this.blur = 5;
    } else {
      this.blur = 15;
    }
  }
}
```

---

## Advanced Usage

### Dynamic Property Updates

```typescript
@Component({
  template: `
    <glass-motion-effect 
      [blur]="currentBlur"
      [opacity]="currentOpacity"
      [bgColor]="currentColor">
      <div>Dynamic Glass Effect</div>
    </glass-motion-effect>
    <button (click)="randomize()">Randomize</button>
  `
})
export class DynamicComponent {
  currentBlur = 10;
  currentOpacity = 0.1;
  currentColor = '255, 255, 255';

  randomize() {
    this.currentBlur = Math.random() * 25;
    this.currentOpacity = Math.random() * 0.3;
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    this.currentColor = `${r}, ${g}, ${b}`;
  }
}
```

### Conditional Dragging

```typescript
@Component({
  template: `
    <glass-motion-effect [draggable]="isEditMode">
      <div>
        {{ isEditMode ? 'Drag me!' : 'Static content' }}
      </div>
    </glass-motion-effect>
    <button (click)="toggleEditMode()">
      {{ isEditMode ? 'Lock' : 'Unlock' }}
    </button>
  `
})
export class ConditionalDragComponent {
  isEditMode = false;

  toggleEditMode() {
    this.isEditMode = !this.isEditMode;
  }
}
```

---

For more examples and use cases, see [EXAMPLES.md](./EXAMPLES.md).
