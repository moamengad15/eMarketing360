import { Component, ChangeDetectionStrategy } from '@angular/core';
import { MAILTO_INFO } from '../../shared/constants/contact';

@Component({
  selector: 'app-cta',
  templateUrl: './cta.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CtaComponent {
  readonly mailtoInfo = MAILTO_INFO;
}
