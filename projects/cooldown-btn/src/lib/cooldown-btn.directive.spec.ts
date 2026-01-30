import { CooldownBtnDirective } from './cooldown-btn.directive';
import { ElementRef, Renderer2 } from '@angular/core';

describe('CooldownBtnDirective', () => {
  it('should create an instance', () => {
    const el = { nativeElement: {} } as ElementRef<HTMLElement>;

    const renderer = ({
      setProperty: () => {},
      setAttribute: () => {},
      setStyle: () => {},
      removeAttribute: () => {},
      removeStyle: () => {},
      createElement: () => null,
      createComment: () => null,
      createText: () => null,
      appendChild: () => null,
      insertBefore: () => null,
      removeChild: () => null,
      selectRootElement: () => null,
      parentNode: () => null,
      nextSibling: () => null,
      setValue: () => null,
      listen: () => (() => {})
    } as unknown) as Renderer2;

    const directive = new CooldownBtnDirective(el, renderer);
    expect(directive).toBeTruthy();
  });
});
