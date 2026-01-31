# Angular Glass Motion - Examples

This document provides comprehensive examples for using the Angular Glass Motion library in various scenarios.

## Table of Contents
- [Basic Examples](#basic-examples)
- [Color Variations](#color-variations)
- [Draggable Components](#draggable-components)
- [Real-World Use Cases](#real-world-use-cases)
- [Integration Examples](#integration-examples)

## Basic Examples

### Simple Glass Container

The most basic usage with default settings:

```html
<glass-motion-effect>
  <h1>Welcome</h1>
  <p>This is a simple glass effect container.</p>
</glass-motion-effect>
```

### Custom Blur Level

Adjust the blur intensity for different effects:

```html
<!-- Subtle blur -->
<glass-motion-effect [blur]="5">
  <p>Light glass effect</p>
</glass-motion-effect>

<!-- Medium blur (default) -->
<glass-motion-effect [blur]="10">
  <p>Default glass effect</p>
</glass-motion-effect>

<!-- Strong blur -->
<glass-motion-effect [blur]="25">
  <p>Heavy glass effect</p>
</glass-motion-effect>
```

### Opacity Variations

Control background transparency:

```html
<!-- Very transparent -->
<glass-motion-effect [opacity]="0.05">
  <p>Highly transparent</p>
</glass-motion-effect>

<!-- Balanced -->
<glass-motion-effect [opacity]="0.1">
  <p>Balanced transparency</p>
</glass-motion-effect>

<!-- More opaque -->
<glass-motion-effect [opacity]="0.3">
  <p>Higher opacity</p>
</glass-motion-effect>
```

## Color Variations

### Light Theme Colors

```html
<!-- Pure White Glass -->
<glass-motion-effect bgColor="255, 255, 255" [opacity]="0.1">
  <p>Classic white glass</p>
</glass-motion-effect>

<!-- Light Blue Glass -->
<glass-motion-effect bgColor="173, 216, 230" [opacity]="0.15">
  <p>Soft blue glass</p>
</glass-motion-effect>

<!-- Mint Green Glass -->
<glass-motion-effect bgColor="152, 251, 152" [opacity]="0.12">
  <p>Fresh mint glass</p>
</glass-motion-effect>

<!-- Lavender Glass -->
<glass-motion-effect bgColor="230, 230, 250" [opacity]="0.15">
  <p>Elegant lavender glass</p>
</glass-motion-effect>
```

### Dark Theme Colors

```html
<!-- Pure Dark Glass -->
<glass-motion-effect bgColor="20, 20, 20" [opacity]="0.3">
  <p>Dark glass effect</p>
</glass-motion-effect>

<!-- Dark Blue Glass -->
<glass-motion-effect bgColor="25, 25, 112" [opacity]="0.25">
  <p>Midnight blue glass</p>
</glass-motion-effect>

<!-- Dark Purple Glass -->
<glass-motion-effect bgColor="75, 0, 130" [opacity]="0.2">
  <p>Deep purple glass</p>
</glass-motion-effect>
```

### Vibrant Colors

```html
<!-- Gradient-ready vibrant colors -->
<glass-motion-effect bgColor="255, 99, 71" [opacity]="0.15">
  <p>Tomato red glass</p>
</glass-motion-effect>

<glass-motion-effect bgColor="138, 43, 226" [opacity]="0.15">
  <p>Blue violet glass</p>
</glass-motion-effect>

<glass-motion-effect bgColor="255, 215, 0" [opacity]="0.2">
  <p>Gold glass</p>
</glass-motion-effect>
```

## Draggable Components

### Basic Draggable Card

```html
<glass-motion-effect [draggable]="true">
  <div style="padding: 20px;">
    <h3>Drag Me!</h3>
    <p>Click and drag to move this card around</p>
  </div>
</glass-motion-effect>
```

### Draggable Widget Dashboard

```typescript
import { Component } from '@angular/core';
import { AngularGlassMotionComponent } from 'angular-glass-motion';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, AngularGlassMotionComponent],
  template: `
    <div class="dashboard">
      <glass-motion-effect 
        [draggable]="true"
        [blur]="15"
        bgColor="100, 149, 237"
        class="widget">
        <h4>Weather</h4>
        <p>72°F Sunny</p>
      </glass-motion-effect>

      <glass-motion-effect 
        [draggable]="true"
        [blur]="15"
        bgColor="50, 205, 50"
        class="widget">
        <h4>Tasks</h4>
        <p>5 pending</p>
      </glass-motion-effect>

      <glass-motion-effect 
        [draggable]="true"
        [blur]="15"
        bgColor="255, 165, 0"
        class="widget">
        <h4>Messages</h4>
        <p>3 new</p>
      </glass-motion-effect>
    </div>
  `,
  styles: [`
    .dashboard {
      min-height: 100vh;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      padding: 2rem;
    }
    .widget {
      display: inline-block;
      margin: 1rem;
    }
  `]
})
export class DashboardComponent {}
```

## Real-World Use Cases

### 1. Hero Section

```typescript
@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [AngularGlassMotionComponent],
  template: `
    <div class="hero-background">
      <glass-motion-effect 
        [blur]="20"
        [opacity]="0.15"
        borderRadius="32px"
        bgColor="255, 255, 255">
        <div class="hero-content">
          <h1>Welcome to Our Platform</h1>
          <p>Experience the future of web design</p>
          <button class="cta-button">Get Started</button>
        </div>
      </glass-motion-effect>
    </div>
  `,
  styles: [`
    .hero-background {
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      background: url('/assets/hero-bg.jpg') center/cover;
      padding: 2rem;
    }
    .hero-content {
      text-align: center;
      padding: 4rem 3rem;
      max-width: 600px;
    }
    h1 {
      font-size: 3rem;
      margin-bottom: 1rem;
      color: #333;
    }
    p {
      font-size: 1.25rem;
      margin-bottom: 2rem;
      color: #666;
    }
    .cta-button {
      background: #667eea;
      color: white;
      border: none;
      padding: 1rem 2rem;
      font-size: 1.1rem;
      border-radius: 8px;
      cursor: pointer;
      transition: transform 0.2s;
    }
    .cta-button:hover {
      transform: translateY(-2px);
    }
  `]
})
export class HeroComponent {}
```

### 2. Modal Dialog

```typescript
@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [AngularGlassMotionComponent, CommonModule],
  template: `
    <div class="modal-overlay" *ngIf="isOpen" (click)="close()">
      <glass-motion-effect 
        [blur]="15"
        [opacity]="0.2"
        borderRadius="24px"
        bgColor="255, 255, 255"
        (click)="$event.stopPropagation()">
        <div class="modal-content">
          <div class="modal-header">
            <h2>{{ title }}</h2>
            <button class="close-btn" (click)="close()">×</button>
          </div>
          <div class="modal-body">
            <ng-content></ng-content>
          </div>
          <div class="modal-footer">
            <button (click)="close()">Cancel</button>
            <button class="primary" (click)="confirm()">Confirm</button>
          </div>
        </div>
      </glass-motion-effect>
    </div>
  `,
  styles: [`
    .modal-overlay {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0, 0, 0, 0.5);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 1000;
      backdrop-filter: blur(5px);
    }
    .modal-content {
      min-width: 400px;
      max-width: 600px;
    }
    .modal-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 1.5rem;
      border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    }
    .modal-body {
      padding: 2rem 1.5rem;
    }
    .modal-footer {
      display: flex;
      justify-content: flex-end;
      gap: 1rem;
      padding: 1.5rem;
      border-top: 1px solid rgba(0, 0, 0, 0.1);
    }
    .close-btn {
      background: none;
      border: none;
      font-size: 2rem;
      cursor: pointer;
      color: #666;
    }
  `]
})
export class ModalComponent {
  isOpen = false;
  title = 'Modal Title';

  close() {
    this.isOpen = false;
  }

  confirm() {
    // Handle confirmation
    this.close();
  }
}
```

### 3. Product Card

```typescript
@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [AngularGlassMotionComponent, CommonModule],
  template: `
    <glass-motion-effect 
      [blur]="12"
      [opacity]="0.1"
      borderRadius="20px"
      bgColor="240, 240, 255">
      <div class="product-card">
        <img [src]="product.image" [alt]="product.name" />
        <div class="product-info">
          <h3>{{ product.name }}</h3>
          <p class="description">{{ product.description }}</p>
          <div class="price-section">
            <span class="price">{{ product.price | currency }}</span>
            <button (click)="addToCart()">Add to Cart</button>
          </div>
        </div>
      </div>
    </glass-motion-effect>
  `,
  styles: [`
    .product-card {
      overflow: hidden;
    }
    img {
      width: 100%;
      height: 200px;
      object-fit: cover;
    }
    .product-info {
      padding: 1.5rem;
    }
    h3 {
      margin: 0 0 0.5rem 0;
      font-size: 1.5rem;
    }
    .description {
      color: #666;
      margin-bottom: 1rem;
      line-height: 1.6;
    }
    .price-section {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .price {
      font-size: 1.75rem;
      font-weight: bold;
      color: #667eea;
    }
  `]
})
export class ProductCardComponent {
  product = {
    name: 'Sample Product',
    description: 'Amazing product description',
    price: 99.99,
    image: '/assets/product.jpg'
  };

  addToCart() {
    // Handle add to cart
  }
}
```

### 4. Notification Toast

```typescript
@Component({
  selector: 'app-toast',
  standalone: true,
  imports: [AngularGlassMotionComponent, CommonModule],
  template: `
    <div class="toast-container">
      <glass-motion-effect 
        *ngFor="let toast of toasts"
        [blur]="10"
        [opacity]="0.2"
        borderRadius="12px"
        [bgColor]="getColor(toast.type)"
        class="toast">
        <div class="toast-content">
          <span class="icon">{{ getIcon(toast.type) }}</span>
          <div class="message">
            <strong>{{ toast.title }}</strong>
            <p>{{ toast.message }}</p>
          </div>
          <button (click)="dismiss(toast)">×</button>
        </div>
      </glass-motion-effect>
    </div>
  `,
  styles: [`
    .toast-container {
      position: fixed;
      top: 20px;
      right: 20px;
      z-index: 9999;
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }
    .toast {
      min-width: 300px;
      animation: slideIn 0.3s ease-out;
    }
    .toast-content {
      display: flex;
      align-items: flex-start;
      gap: 1rem;
      padding: 1rem;
    }
    .icon {
      font-size: 1.5rem;
    }
    .message {
      flex: 1;
    }
    @keyframes slideIn {
      from {
        transform: translateX(100%);
        opacity: 0;
      }
      to {
        transform: translateX(0);
        opacity: 1;
      }
    }
  `]
})
export class ToastComponent {
  toasts: Array<{type: string, title: string, message: string}> = [];

  getColor(type: string): string {
    const colors = {
      success: '50, 205, 50',
      error: '220, 53, 69',
      warning: '255, 193, 7',
      info: '23, 162, 184'
    };
    return colors[type as keyof typeof colors] || '128, 128, 128';
  }

  getIcon(type: string): string {
    const icons = {
      success: '✓',
      error: '✗',
      warning: '⚠',
      info: 'ℹ'
    };
    return icons[type as keyof typeof icons] || '•';
  }

  dismiss(toast: any) {
    this.toasts = this.toasts.filter(t => t !== toast);
  }
}
```

### 5. Navigation Menu

```typescript
@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [AngularGlassMotionComponent, CommonModule],
  template: `
    <glass-motion-effect 
      [blur]="15"
      [opacity]="0.1"
      borderRadius="50px"
      bgColor="255, 255, 255"
      class="nav-container">
      <nav>
        <a *ngFor="let item of navItems" 
           [href]="item.link"
           [class.active]="item.active">
          {{ item.label }}
        </a>
      </nav>
    </glass-motion-effect>
  `,
  styles: [`
    .nav-container {
      position: fixed;
      top: 20px;
      left: 50%;
      transform: translateX(-50%);
      z-index: 1000;
    }
    nav {
      display: flex;
      gap: 2rem;
      padding: 1rem 2rem;
    }
    a {
      text-decoration: none;
      color: #333;
      font-weight: 500;
      transition: color 0.3s;
    }
    a:hover, a.active {
      color: #667eea;
    }
  `]
})
export class NavComponent {
  navItems = [
    { label: 'Home', link: '/', active: true },
    { label: 'About', link: '/about', active: false },
    { label: 'Services', link: '/services', active: false },
    { label: 'Contact', link: '/contact', active: false }
  ];
}
```

## Integration Examples

### With Angular Forms

```typescript
@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [AngularGlassMotionComponent, ReactiveFormsModule],
  template: `
    <glass-motion-effect 
      [blur]="15"
      [opacity]="0.15"
      borderRadius="24px">
      <form [formGroup]="loginForm" (ngSubmit)="onSubmit()">
        <h2>Login</h2>
        <div class="form-group">
          <label>Email</label>
          <input type="email" formControlName="email" />
        </div>
        <div class="form-group">
          <label>Password</label>
          <input type="password" formControlName="password" />
        </div>
        <button type="submit">Sign In</button>
      </form>
    </glass-motion-effect>
  `
})
export class LoginFormComponent {
  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  });

  onSubmit() {
    console.log(this.loginForm.value);
  }
}
```

### With Angular Router

```typescript
@Component({
  selector: 'app-page-wrapper',
  standalone: true,
  imports: [AngularGlassMotionComponent, RouterOutlet],
  template: `
    <glass-motion-effect 
      [blur]="12"
      [opacity]="0.1"
      borderRadius="20px"
      class="page-container">
      <router-outlet></router-outlet>
    </glass-motion-effect>
  `
})
export class PageWrapperComponent {}
```

---

For more examples and live demos, visit the [documentation website](https://yourusername.github.io/angular-glass-motion).
