import { Directive, ElementRef, EventEmitter, HostListener, Input, OnDestroy, Output, Renderer2 } from '@angular/core';

@Directive({
  selector: '[CooldownBtn]',
  standalone: true
})
export class CooldownBtnDirective implements OnDestroy {

  @Input() maxClicks = 1;
  @Input() coolDownTime = 1000;

  @Output() coolDownState = new EventEmitter<boolean>();


  private clickCount = 0;
  private inCooldown = false;
  private cooldownTimer: any = null;
  private weDisabledElement = false;

  constructor(private el: ElementRef<HTMLElement>, private renderer: Renderer2) { }

  @HostListener('click', ['$event']) onClick(event: MouseEvent) {
    if (this.inCooldown) {
      event.preventDefault();
      event.stopImmediatePropagation();
      return false;
    }

    const max = Number(this.maxClicks) || 1;
    const cooldown = Number(this.coolDownTime) || 1000;

    this.clickCount += 1;

    if (this.clickCount >= max) {
      this.enterCooldown(cooldown);
    }

    return true;
  }

  private enterCooldown(ms: number) {
    this.inCooldown = true;
    this.clickCount = 0;

    const native = this.el.nativeElement as HTMLButtonElement | HTMLElement;

    if ('disabled' in native) {
      if (!(native as any).disabled) {
        this.renderer.setProperty(native, 'disabled', true);
        this.weDisabledElement = true;
      }
    } else {
      this.renderer.setAttribute(native, 'aria-disabled', 'true');
      this.renderer.setStyle(native, 'pointer-events', 'none');
      this.weDisabledElement = true;
    }
    this.coolDownState.emit(true);

    this.cooldownTimer = setTimeout(() => this.exitCooldown(), ms);
  }

  private exitCooldown() {
    const native = this.el.nativeElement as HTMLButtonElement | HTMLElement;
    if (this.weDisabledElement) {
      if ('disabled' in native) {
        this.renderer.setProperty(native, 'disabled', false);
      } else {
        this.renderer.removeAttribute(native, 'aria-disabled');
        this.renderer.removeStyle(native, 'pointer-events');
      }
      this.weDisabledElement = false;
    }

    this.inCooldown = false;
    this.cooldownTimer = null;
    this.coolDownState.emit(false);
  }

  ngOnDestroy(): void {
    if (this.cooldownTimer) {
      clearTimeout(this.cooldownTimer);
      this.cooldownTimer = null;
    }
  }

}
