import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GlassMotionBase } from './glass-motion.base';
import { AngularGlassMotionComponent } from './angular-glass-motion.component';

@Component({
    selector: 'glass-motion-popup',
    standalone: true,
    imports: [CommonModule, AngularGlassMotionComponent],
    template: `
    <div class="popup-overlay" *ngIf="isOpen" (click)="onBackdropClick()">
      <div class="popup-container" (click)="$event.stopPropagation()">
        <glass-motion-effect
          [blur]="blur"
          [opacity]="opacity"
          [borderOpacity]="borderOpacity"
          [borderRadius]="borderRadius"
          [bgColor]="bgColor"
          [draggable]="draggable">
          <div class="popup-content">
            <button *ngIf="showCloseButton" class="close-btn" (click)="close.emit()">×</button>
            <ng-content></ng-content>
          </div>
        </glass-motion-effect>
      </div>
    </div>
  `,
    styles: [`
    .popup-overlay {
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      background: rgba(0, 0, 0, 0.4);
      backdrop-filter: blur(2px);
      z-index: 1000;
      display: flex;
      justify-content: center;
      align-items: center;
      animation: fadeIn 0.2s ease-out;
    }

    .popup-container {
      animation: scaleIn 0.3s cubic-bezier(0.16, 1, 0.3, 1);
      max-width: 90vw;
      max-height: 90vh;
    }

    .popup-content {
      position: relative;
      min-width: 300px;
      min-height: 200px;
    }

    .close-btn {
      position: absolute;
      top: 10px;
      right: 10px;
      background: none;
      border: none;
      font-size: 24px;
      cursor: pointer;
      color: inherit;
      opacity: 0.6;
      padding: 0 5px;
      z-index: 10;
      transition: opacity 0.2s;
    }

    .close-btn:hover {
      opacity: 1;
    }

    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }

    @keyframes scaleIn {
      from { transform: scale(0.95); opacity: 0; }
      to { transform: scale(1); opacity: 1; }
    }
  `]
})
export class AngularGlassMotionPopupComponent extends GlassMotionBase {
    @Input() isOpen = false;
    @Input() closeOnBackdrop = true;
    @Input() showCloseButton = true;

    @Output() close = new EventEmitter<void>();

    constructor() {
        super();
    }

    onBackdropClick() {
        if (this.closeOnBackdrop) {
            this.close.emit();
        }
    }
}
