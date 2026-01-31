import { Component, HostListener, ElementRef, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GlassMotionBase } from './glass-motion.base';

@Component({
  selector: 'glass-motion-effect',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div 
      class="glass-container" 
      [class.is-draggable]="draggable"
      [style.--blur]="blur + 'px'"
      [style.--opacity]="opacity"
      [style.--border-opacity]="borderOpacity"
      [style.--border-radius]="borderRadius"
      [style.--bg-color]="bgColor"
      [style.transform]="transformStyle"
    >
      <div class="glass-background"></div>
      <div class="glass-content" >
        <ng-content></ng-content>
      </div>
    </div>
  `,
  styles: `
    :host {
      display: inline-block;
      user-select: none;
    }

    .glass-container {
      position: relative;
      border-radius: var(--border-radius, 16px);
      overflow: hidden;
      border: 1px solid rgba(255, 255, 255, var(--border-opacity, 0.2));
      background: rgba(var(--bg-color, 255, 255, 255), var(--opacity, 0.1));
      box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.15);
      backdrop-filter: blur(var(--blur, 10px));
      -webkit-backdrop-filter: blur(var(--blur, 10px));
      transition: box-shadow 0.3s ease, border 0.3s ease;
      will-change: transform;
    }

    .glass-container.is-draggable {
      cursor: move;
    }

    .glass-background {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: linear-gradient(
        135deg,
        rgba(255, 255, 255, 0.1),
        rgba(255, 255, 255, 0.05)
      );
      z-index: -1;
    }

    .glass-content {
      position: relative;
      z-index: 200;
      padding: 1rem;
    }

    .glass-container:hover {
      box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.25);
      border: 1px solid rgba(255, 255, 255, calc(var(--border-opacity, 0.2) + 0.1));
    }
  `
})
export class AngularGlassMotionComponent extends GlassMotionBase {
  private isDragging = false;
  private startX = 0;
  private startY = 0;
  private currentX = 0;
  private currentY = 0;

  get transformStyle() {
    return `translate(${this.currentX}px, ${this.currentY}px)`;
  }

  constructor(private el: ElementRef, private renderer: Renderer2) {
    super();
  }

  @HostListener('mousedown', ['$event'])
  onMouseDown(event: MouseEvent) {
    if (!this.draggable) return;

    this.isDragging = true;
    this.startX = event.clientX - this.currentX;
    this.startY = event.clientY - this.currentY;

    event.preventDefault();

    const mouseMoveListener = this.renderer.listen('document', 'mousemove', (e: MouseEvent) => {
      if (this.isDragging) {
        this.currentX = e.clientX - this.startX;
        this.currentY = e.clientY - this.startY;
      }
    });

    const mouseUpListener = this.renderer.listen('document', 'mouseup', () => {
      this.isDragging = false;
      mouseMoveListener();
      mouseUpListener();
    });
  }
}


