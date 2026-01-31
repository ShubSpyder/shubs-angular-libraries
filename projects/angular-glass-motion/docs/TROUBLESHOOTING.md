# Troubleshooting Guide

Having issues with Angular Glass Motion? This guide covers common problems and their solutions.

## Table of Contents
- [Installation Issues](#installation-issues)
- [Component Issues](#component-issues)
- [Visual/Styling Issues](#visualstyling-issues)
- [Drag Functionality Issues](#drag-functionality-issues)
- [Performance Issues](#performance-issues)
- [Browser Compatibility Issues](#browser-compatibility-issues)
- [Build and Deployment Issues](#build-and-deployment-issues)

---

## Installation Issues

### Problem: `npm install` fails

**Symptoms:**
```
npm ERR! code ERESOLVE
npm ERR! ERESOLVE unable to resolve dependency tree
```

**Solutions:**

1. **Check Angular version compatibility:**
   ```bash
   ng version
   ```
   Ensure you're using Angular 19.2.0 or higher.

2. **Use legacy peer deps (temporary fix):**
   ```bash
   npm install angular-glass-motion --legacy-peer-deps
   ```

3. **Clear npm cache:**
   ```bash
   npm cache clean --force
   npm install
   ```

4. **Update Angular:**
   ```bash
   ng update @angular/core @angular/cli
   ```

### Problem: Module not found after installation

**Symptoms:**
```
Error: Cannot find module 'angular-glass-motion'
```

**Solutions:**

1. **Verify installation:**
   ```bash
   npm list angular-glass-motion
   ```

2. **Check node_modules:**
   ```bash
   ls node_modules | grep angular-glass-motion
   ```

3. **Reinstall:**
   ```bash
   npm uninstall angular-glass-motion
   npm install angular-glass-motion
   ```

4. **Restart dev server:**
   ```bash
   # Stop current server (Ctrl+C)
   ng serve
   ```

---

## Component Issues

### Problem: Component selector not recognized

**Symptoms:**
```
'glass-motion-effect' is not a known element
```

**Solutions:**

1. **Import the component:**
   ```typescript
   import { AngularGlassMotionComponent } from 'angular-glass-motion';

   @Component({
     standalone: true,
     imports: [AngularGlassMotionComponent],
     // ...
   })
   ```

2. **For non-standalone components:**
   ```typescript
   @NgModule({
     imports: [AngularGlassMotionComponent],
     // ...
   })
   ```

3. **Check import path:**
   ```typescript
   // ✅ Correct
   import { AngularGlassMotionComponent } from 'angular-glass-motion';

   // ❌ Incorrect
   import { AngularGlassMotionComponent } from 'angular-glass-motion/lib';
   ```

### Problem: Inputs not working

**Symptoms:**
Changes to input properties don't affect the component.

**Solutions:**

1. **Use property binding:**
   ```html
   <!-- ✅ Correct -->
   <glass-motion-effect [blur]="10">

   <!-- ❌ Incorrect -->
   <glass-motion-effect blur="10">
   ```

2. **Check TypeScript value types:**
   ```typescript
   // ✅ Correct
   blur = 10;              // number
   opacity = 0.1;          // number
   bgColor = '255, 0, 0';  // string

   // ❌ Incorrect
   blur = '10';            // string instead of number
   opacity = '0.1';        // string instead of number
   ```

3. **Verify property names:**
   ```html
   <!-- ✅ Correct -->
   <glass-motion-effect [blur]="10">

   <!-- ❌ Incorrect (typo) -->
   <glass-motion-effect [blurr]="10">
   ```

---

## Visual/Styling Issues

### Problem: Glass effect not visible

**Symptoms:**
Component appears as a solid box or completely transparent.

**Solutions:**

1. **Check browser support:**
   ```javascript
   // Run in browser console
   console.log(CSS.supports('backdrop-filter', 'blur(10px)'));
   // Should return true
   ```

2. **Ensure background content exists:**
   Glass effects need content behind them to show the blur.
   ```html
   <div style="background: url('image.jpg');">
     <glass-motion-effect>
       Content with visible glass effect
     </glass-motion-effect>
   </div>
   ```

3. **Verify opacity settings:**
   ```html
   <!-- Too transparent -->
   <glass-motion-effect [opacity]="0.01">
   
   <!-- Better -->
   <glass-motion-effect [opacity]="0.1">
   ```

4. **Check blur value:**
   ```html
   <!-- No blur -->
   <glass-motion-effect [blur]="0">
   
   <!-- Visible blur -->
   <glass-motion-effect [blur]="10">
   ```

### Problem: Border not showing

**Symptoms:**
No visible border around the glass container.

**Solutions:**

1. **Increase border opacity:**
   ```html
   <glass-motion-effect [borderOpacity]="0.5">
     Content
   </glass-motion-effect>
   ```

2. **Check background contrast:**
   ```html
   <!-- Dark background -->
   <glass-motion-effect bgColor="255, 255, 255" [borderOpacity]="0.3">
   
   <!-- Light background -->
   <glass-motion-effect bgColor="0, 0, 0" [borderOpacity]="0.3">
   ```

### Problem: Colors look wrong

**Symptoms:**
Background color doesn't match expectations.

**Solutions:**

1. **Check RGB format:**
   ```html
   <!-- ✅ Correct -->
   <glass-motion-effect bgColor="255, 0, 0">
   
   <!-- ❌ Incorrect -->
   <glass-motion-effect bgColor="rgb(255, 0, 0)">
   <glass-motion-effect bgColor="#FF0000">
   ```

2. **Adjust opacity:**
   ```html
   <!-- Low opacity = more transparent -->
   <glass-motion-effect bgColor="255, 0, 0" [opacity]="0.05">
   
   <!-- High opacity = more solid -->
   <glass-motion-effect bgColor="255, 0, 0" [opacity]="0.3">
   ```

3. **Convert hex to RGB:**
   ```typescript
   // Hex: #FF5733
   // RGB: 255, 87, 51
   bgColor = '255, 87, 51';
   ```

### Problem: Hover effects not working

**Symptoms:**
No visual change on hover.

**Solutions:**

1. **Check for CSS overrides:**
   ```css
   /* Remove any styles blocking hover */
   glass-motion-effect {
     pointer-events: auto !important;
   }
   ```

2. **Ensure element is not disabled:**
   ```html
   <glass-motion-effect style="pointer-events: none;"> <!-- ❌ -->
   <glass-motion-effect> <!-- ✅ -->
   ```

---

## Drag Functionality Issues

### Problem: Dragging not working

**Symptoms:**
Element doesn't move when clicked and dragged.

**Solutions:**

1. **Enable draggable property:**
   ```html
   <!-- ❌ Incorrect -->
   <glass-motion-effect>
   
   <!-- ✅ Correct -->
   <glass-motion-effect [draggable]="true">
   ```

2. **Check for CSS preventing drag:**
   ```css
   /* Remove styles that block dragging */
   glass-motion-effect {
     pointer-events: auto !important;
     user-select: none;
   }
   ```

3. **Ensure no overlapping elements:**
   ```html
   <!-- Overlapping element blocks drag -->
   <div style="position: absolute; z-index: 999;">
     <glass-motion-effect [draggable]="true">
   ```

4. **Check event propagation:**
   ```html
   <!-- Parent stopping events -->
   <div (click)="doSomething($event); $event.stopPropagation()">
     <glass-motion-effect [draggable]="true">
   ```

### Problem: Element snaps back after dragging

**Symptoms:**
Element returns to original position after drag.

**Solutions:**

This is expected behavior. Position is not persisted. To save position:

```typescript
@Component({
  template: `
    <glass-motion-effect 
      [draggable]="true"
      [style.transform]="savedPosition">
      Content
    </glass-motion-effect>
  `
})
export class MyComponent {
  savedPosition = 'translate(0px, 0px)';

  // Implement logic to save position
  savePosition(x: number, y: number) {
    this.savedPosition = `translate(${x}px, ${y}px)`;
    localStorage.setItem('position', this.savedPosition);
  }
}
```

### Problem: Drag is laggy or slow

**Symptoms:**
Dragging performance is poor.

**Solutions:**

1. **Reduce blur value:**
   ```html
   <glass-motion-effect [blur]="5" [draggable]="true">
   ```

2. **Lower opacity:**
   ```html
   <glass-motion-effect [opacity]="0.08" [draggable]="true">
   ```

3. **Check for complex child content:**
   Simplify content inside the draggable element.

---

## Performance Issues

### Problem: Page is slow with glass effects

**Symptoms:**
Animations stuttering, low FPS, slow scrolling.

**Solutions:**

1. **Reduce number of glass elements:**
   ```html
   <!-- ❌ Too many -->
   <glass-motion-effect *ngFor="let item of items"> <!-- 100 items -->
   
   <!-- ✅ Better -->
   <glass-motion-effect> <!-- Wrap multiple items in one glass container -->
     <div *ngFor="let item of items">
   ```

2. **Lower blur values:**
   ```typescript
   // ❌ Heavy blur
   blur = 30;
   
   // ✅ Optimized blur
   blur = 10;
   ```

3. **Conditional rendering:**
   ```html
   <glass-motion-effect *ngIf="showEffect">
     Content
   </glass-motion-effect>
   ```

4. **Responsive optimization:**
   ```typescript
   @Component({
     template: `
       <glass-motion-effect [blur]="adaptiveBlur">
     `
   })
   export class MyComponent {
     get adaptiveBlur() {
       return window.innerWidth < 768 ? 5 : 15;
     }
   }
   ```

### Problem: High CPU usage

**Symptoms:**
Browser using excessive CPU.

**Solutions:**

1. **Limit concurrent effects:**
   ```typescript
   // Only show glass effects in viewport
   @Component({
     template: `
       <glass-motion-effect *ngIf="isInViewport">
     `
   })
   ```

2. **Use IntersectionObserver:**
   ```typescript
   ngAfterViewInit() {
     const observer = new IntersectionObserver((entries) => {
       entries.forEach(entry => {
         this.showEffect = entry.isIntersecting;
       });
     });
     observer.observe(this.elementRef.nativeElement);
   }
   ```

---

## Browser Compatibility Issues

### Problem: Effect doesn't work in Firefox

**Symptoms:**
Glass effect works in Chrome but not Firefox.

**Solutions:**

1. **Check Firefox version:**
   Firefox 103+ required for backdrop-filter support.

2. **Enable backdrop-filter in older Firefox:**
   Go to `about:config` and enable `layout.css.backdrop-filter.enabled`

3. **Provide fallback:**
   ```css
   glass-motion-effect::ng-deep .glass-container {
     /* Fallback for browsers without backdrop-filter */
     background: rgba(255, 255, 255, 0.8);
   }
   
   @supports (backdrop-filter: blur(10px)) {
     glass-motion-effect::ng-deep .glass-container {
       background: rgba(255, 255, 255, 0.1);
       backdrop-filter: blur(10px);
     }
   }
   ```

### Problem: Safari performance issues

**Symptoms:**
Slow rendering or animation in Safari.

**Solutions:**

1. **Use -webkit prefix (already included):**
   ```css
   -webkit-backdrop-filter: blur(10px);
   backdrop-filter: blur(10px);
   ```

2. **Reduce blur on Safari:**
   ```typescript
   get blur() {
     const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
     return isSafari ? 8 : 15;
   }
   ```

---

## Build and Deployment Issues

### Problem: Build fails with the library

**Symptoms:**
```
Error: Module not found during build
```

**Solutions:**

1. **Clear build cache:**
   ```bash
   rm -rf .angular/cache
   ng build
   ```

2. **Check tsconfig paths:**
   ```json
   {
     "compilerOptions": {
       "paths": {
         "angular-glass-motion": [
           "dist/angular-glass-motion"
         ]
       }
     }
   }
   ```

3. **Verify production build:**
   ```bash
   ng build --configuration=production
   ```

### Problem: Styles not working in production

**Symptoms:**
Glass effects visible in dev but not in production build.

**Solutions:**

1. **Check ViewEncapsulation:**
   Already set to default, should work correctly.

2. **Verify CSS is included:**
   Check browser DevTools → Network → Look for CSS files

3. **Check Content Security Policy:**
   Ensure CSP allows inline styles if applicable.

---

## Still Having Issues?

### Debug Checklist

- [ ] Angular version is 19.2.0 or higher
- [ ] Browser supports backdrop-filter
- [ ] Component is properly imported
- [ ] Property bindings use square brackets `[property]`
- [ ] RGB values are in correct format: "R, G, B"
- [ ] Blur value is greater than 0
- [ ] Opacity is between 0 and 1
- [ ] Background content exists behind glass element
- [ ] No CSS overrides blocking the effect

### Getting Help

1. **Check existing issues:**
   [GitHub Issues](https://github.com/ShubSpyder/shubs-angular-libraries/issues)

2. **Create a minimal reproduction:**
   Use [StackBlitz](https://stackblitz.com) to reproduce the issue

3. **Report the bug:**
   Include:
   - Angular version
   - Library version
   - Browser and OS
   - Minimal reproduction code
   - Screenshots if applicable

4. **Ask questions:**
   [GitHub Discussions](https://github.com/ShubSpyder/shubs-angular-libraries/discussions)

---

**For more information, see:**
- [API Documentation](./API.md)
- [Examples](./EXAMPLES.md)
- [Quick Reference](./QUICK_REFERENCE.md)
