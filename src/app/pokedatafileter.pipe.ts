import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pokedatafileter'
})
export class PokedatafileterPipe implements PipeTransform {

 
  transform(pokeNewArry: any, searchValue: string) {    
    if (!pokeNewArry) {
      return [];
      
    }
    if (!searchValue) {
      return pokeNewArry;
    }
    if (pokeNewArry && searchValue) {      
      return pokeNewArry.filter(searchdata => {
        return searchdata.pokename.toLowerCase().includes(searchValue.toLowerCase());
      });
     
   
    }

  }

}
