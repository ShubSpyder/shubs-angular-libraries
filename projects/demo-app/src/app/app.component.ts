import { Component } from '@angular/core';
import { CooldownBtnDirective } from '../../../cooldown-btn/src/public-api';
import { AngularGlassMotionComponent, AngularGlassMotionPopupComponent } from '../../../angular-glass-motion/src/public-api';

@Component({
  selector: 'app-root',
  imports: [CooldownBtnDirective, AngularGlassMotionComponent, AngularGlassMotionPopupComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'demo-app';
  clicks = 0;
  showPopup = false;

  onClick() {
    this.clicks += 1;
  }

  coolDownState(isInCooldown: boolean) {
    console.log('Cooldown state changed:', isInCooldown);
  }
}
