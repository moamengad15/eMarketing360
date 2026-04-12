import { Component, ChangeDetectionStrategy } from '@angular/core';
import { MAILTO_INFO } from '../../shared/constants/contact';

export interface PricingPlan {
  id: 'launch' | 'growth' | 'peak';
  theme: 'light' | 'dark' | 'featured';
  featureKeys: string[];
}

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PricingComponent {
  readonly contactEmail = MAILTO_INFO;

  readonly plans: PricingPlan[] = [
    {
      id: 'launch',
      theme: 'light',
      featureKeys: ['f1', 'f2', 'f3', 'f4', 'f5', 'f6'],
    },
    {
      id: 'growth',
      theme: 'dark',
      featureKeys: ['f1', 'f2', 'f3', 'f4', 'f5', 'f6', 'f7'],
    },
    {
      id: 'peak',
      theme: 'featured',
      featureKeys: ['f1', 'f2', 'f3', 'f4', 'f5', 'f6', 'f7', 'f8', 'f9', 'f10'],
    },
  ];

  planKey(plan: PricingPlan, suffix: string): string {
    return `pricing.${plan.id}.${suffix}`;
  }

  featureKey(plan: PricingPlan, fk: string): string {
    return `pricing.${plan.id}.${fk}`;
  }

  trackByPlanId(_: number, p: PricingPlan): string {
    return p.id;
  }
  trackByFk(_: number, fk: string): string {
    return fk;
  }
}
