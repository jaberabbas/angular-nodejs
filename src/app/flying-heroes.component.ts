// Only used in deprecated `pipes.md`
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { FlyingHeroesPipe, FlyingHeroesImpurePipe, } from './flying-heroes.pipe';
import { HEROES } from './heroes';

@Component({
  standalone: true,
  selector: 'app-flying-heroes',
  templateUrl: './flying-heroes.component.html',
  imports: [CommonModule, FormsModule, FlyingHeroesPipe],
  styles: ['#flyers, #all {font-style: italic}', 'button {display: block}', 'input {margin: .25rem .25rem .5rem 0;}']
})
export class FlyingHeroesComponent {
  heroes: any[] = [];
  canFly = true;
  mutate = true;
  title = 'Flying Heroes (pure pipe)';

  constructor() { this.reset(); }

  addHero(name: string) {
    name = name.trim();
    if (!name) { return; }
    const hero = { name, canFly: this.canFly };
    if (this.mutate) {
      // Pure pipe won't update display because heroes array reference is unchanged
      // Impure pipe will display
      this.heroes.push(hero);
    } else {
      // Pipe updates display because heroes array is a new object
      this.heroes = this.heroes.concat(hero);
    }
  }

  reset() { this.heroes = HEROES.slice(); }
}

////// Identical except for impure pipe //////
@Component({
  standalone: true,
  selector: 'app-flying-heroes-impure',
  templateUrl: './flying-heroes-impure.component.html',
  imports: [CommonModule, FormsModule, FlyingHeroesImpurePipe],
  styles: ['#flyers, #all {font-style: italic}', 'button {display: block}', 'input {margin: .25rem .25rem .5rem 0;}'],
})
export class FlyingHeroesImpureComponent extends FlyingHeroesComponent {
  override title = 'Flying Heroes (impure pipe)';
}
