import { Component} from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {
  constructor() { }

  heroes:string[] = ["Spiderman","Ironman","Naruto","Kakashi"]
  DeleteHeroe:string=""


  borrarHeroe(){
    console.log("Borrando ")
    this.DeleteHeroe=this.heroes.shift() || '';
    console.log(this.DeleteHeroe.length)
  }
  
}
