import { Component, Input } from '@angular/core';

import { Hero } from './hero';

@Component({
  selector: 'app-hero-child',
  template: `
    <h3>{{heroChild.name}} says:</h3>
    <p>I, {{heroChild.name}}, am at your service, {{masterName}}.</p>
  `
})
export class HeroChildComponent {
  @Input() heroChild!: Hero;
  @Input('masterChild') masterName = '';
}
