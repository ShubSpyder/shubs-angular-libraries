# Cooldown Button Directive

An Angular directive that prevents button spam by adding a cooldown period after a specified number of clicks. Perfect for preventing duplicate form submissions, API calls, or any action that shouldn't be triggered too frequently.

## Features

**Click Limiting** - Set maximum clicks before cooldown activates
**Customizable Cooldown** - Configure cooldown duration in milliseconds
**State Tracking** - Emit events when entering/exiting cooldown state
**Accessibility** - Automatically handles `disabled` attribute and ARIA states
**Framework Agnostic** - Works with any HTML element (buttons, anchors, divs, etc.)
**Memory Safe** - Automatically cleans up timers on component destruction

## Installation

```bash
npm install cooldown-btn
```

## Usage

### Import the Directive

#### Standalone Components (Angular 14+)

For standalone components, import `CooldownBtnDirective` directly:

```typescript
import { Component } from '@angular/core';
import { CooldownBtnDirective } from 'cooldown-btn';

@Component({
  selector: 'app-example',
  standalone: true,
  imports: [CooldownBtnDirective],
  templateUrl: './example.component.html'
})
export class ExampleComponent {
  // Your component logic
}
```

#### NgModule-Based (Angular 14+)

For module-based applications, import into your module:

```typescript
import { NgModule } from '@angular/core';
import { CooldownBtnDirective } from 'cooldown-btn';

@NgModule({
  imports: [CooldownBtnDirective],
  declarations: [ExampleComponent],
})
export class ExampleModule { }
```

### Basic Example

```html
<button CooldownBtn>
  Click Me
</button>
```

This applies a default cooldown of 1 second after 1 click.

### Customized Cooldown

```html
<button 
  CooldownBtn 
  [maxClicks]="3" 
  [coolDownTime]="2000"
  (coolDownState)="onCooldownChange($event)">
  Click Me (3 max, 2s cooldown)
</button>
```

```typescript
export class ExampleComponent {
  onCooldownChange(isInCooldown: boolean) {
    console.log('Cooldown active:', isInCooldown);
  }
}
```

### Real-World Examples

#### Prevent Double Form Submission

```html
<button 
  CooldownBtn 
  [maxClicks]="1" 
  [coolDownTime]="3000"
  (click)="submitForm()">
  Submit Form
</button>
```

#### Rate-Limited Action

```html
<button 
  CooldownBtn 
  [maxClicks]="5" 
  [coolDownTime]="10000"
  (coolDownState)="updateUI($event)">
  Refresh Data
</button>
```

#### Visual Feedback Example

```typescript
export class MyComponent {
  clicks = 0;
  isCooldown = false;

  onClick() {
    this.clicks++;
  }

  coolDownState(state: boolean) {
    this.isCooldown = state;
  }
}
```

```html
<button 
  CooldownBtn 
  [maxClicks]="3" 
  [coolDownTime]="2000"
  (click)="onClick()"
  (coolDownState)="coolDownState($event)"
  [class.cooldown-active]="isCooldown">
  Clicked: {{ clicks }}
</button>
```

```css
.cooldown-active {
  opacity: 0.5;
  cursor: not-allowed;
}
```

## API Reference

### Inputs

| Input | Type | Default | Description |
|-------|------|---------|-------------|
| `maxClicks` | `number` | `1` | Maximum number of clicks allowed before cooldown activates |
| `coolDownTime` | `number` | `1000` | Cooldown duration in milliseconds |

### Outputs

| Output | Type | Description |
|--------|------|-------------|
| `coolDownState` | `EventEmitter<boolean>` | Emits `true` when cooldown starts, `false` when it ends |

### Behavior

1. **Click Tracking**: The directive counts clicks on the element
2. **Cooldown Activation**: After `maxClicks` is reached, the element enters cooldown
3. **Element Disabling**: 
   - For buttons: Sets `disabled` property to `true`
   - For other elements: Sets `aria-disabled="true"` and `pointer-events: none`
4. **Event Prevention**: During cooldown, click events are prevented and stopped from propagating
5. **Cooldown Exit**: After `coolDownTime` milliseconds, the element is re-enabled and click count resets

## Use Cases

- **Form Submissions** - Prevent duplicate submissions
- **API Calls** - Rate limit expensive operations
- **Game Actions** - Implement cooldown mechanics
- **Social Interactions** - Prevent spam liking/favoriting
- **Data Refresh** - Limit how often users can refresh data

## Browser Support

Works with all modern browsers that support Angular 14+.

## Requirements

- Angular 14+
- TypeScript 4.6+