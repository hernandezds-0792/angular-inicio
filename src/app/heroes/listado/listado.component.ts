import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'

})
export class ListadoComponent {

  heroes: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor', 'Capitan America'];
  heroeBorrado : string = '';

  borrarHeroe(): void{
    //this.heroes.splice(1,1);
    //const heroeBorrado = this.heroes.shift();
    //console.log(heroeBorrado);
    this.heroeBorrado = this.heroes.shift() || '';
  }


}
