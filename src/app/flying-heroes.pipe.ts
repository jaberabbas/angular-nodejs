// Only used in deprecated `pipes.md`
import { Pipe, PipeTransform } from '@angular/core';

import { Hero } from './heroes';

@Pipe({
  standalone: true,
  name: 'flyingHeroes'
})
export class FlyingHeroesPipe implements PipeTransform {
  transform(allHeroes: Hero[]) {
    return allHeroes.filter(hero => hero.canFly);
  }
}

/////// Identical except for the pure flag
@Pipe({
  standalone: true,
  name: 'flyingHeroesImpure',
  pure: false
})
export class FlyingHeroesImpurePipe extends FlyingHeroesPipe { }
