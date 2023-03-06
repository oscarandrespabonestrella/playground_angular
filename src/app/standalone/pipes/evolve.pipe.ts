import { Pipe, PipeTransform } from '@angular/core';

enum DIGIMON_EVOLUTIONS {
  agumon = 'greymon',
  gabumon = 'garurumon',
  bakudamon = 'bakugimon',
  palmon = 'togemon',
}

@Pipe({
  name: 'evolve',
  standalone: true
})
export class EvolvePipe implements PipeTransform {

  transform(digimon: string): string {
    
    console.log(typeof DIGIMON_EVOLUTIONS);
    return "digimonEvolution";
  }

}
