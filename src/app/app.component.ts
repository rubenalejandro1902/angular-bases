//es el componente principal
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'

})
export class AppComponent {
  public title: string  = 'MI PRIMERA APP';
  public counter: number=10;

increaseBY( value: number):void{
  this.counter+=value;
}

resetCounter(){
  this.counter=10;
}

}
