import { Component, Input } from '@angular/core';

@Component({
    template: ''
})
export class GlassMotionBase {
    @Input() blur = 10;
    @Input() opacity = 0.1;
    @Input() borderOpacity = 0.2;
    @Input() borderRadius = '16px';
    @Input() bgColor = '255, 255, 255';
    @Input() draggable = false;
}
