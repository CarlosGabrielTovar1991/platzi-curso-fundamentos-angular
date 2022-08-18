import { Component } from '@angular/core';
import { Product } from './product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // Formulario
  register = {
    name: '',
    email: '',
    password: '',
  }

  // Estilos
  widthImg = 10;

  box = {
    width: 100,
    height: 100,
    background: 'red',
  }

  // String interpolation
  name = 'Carlos';
  age = 31;
  img = 'https://source.unsplash.com/random';

  // Property binding

  btnDisabled = true;
  person = {
    name: 'Carlos',
    surname: null,
    age: 31,
    avatar: 'https://source.unsplash.com/random',
  }

  emojis: string[] = [ '😂' , '🐦', '🐳','🌮', '💚'];
  newName: string = '';

  products: Product[] = [
    {
      name: 'Bicicleta',
      price: 250,
      image: '../assets/images/bike.jpeg'
    },
    {
      name: 'Computadora',
      price: 400,
      image: '../assets/images/computer.jpeg'
    },
    {
      name: 'Oso de peluche',
      price: 60,
      image: '../assets/images/teddy.jpeg'
    },
    {
      name: 'Mini nevera',
      price: 165,
      image: '../assets/images/minibar.jpeg',
      category: 'kitchen'
    },
    {
      name: 'Sombrero',
      price: 46,
      image: '../assets/images/hat.jpeg'
    }
  ];

  toggleButton() {
    this.btnDisabled = !this.btnDisabled;
  }

  increaseAge() {
    this.person.age++;
  }

  decreaseAge() {
    this.person.age--;
  }



  onScroll(event : Event) {
    const element = event.target as HTMLElement;
    console.log(element.scrollTop);
  }

  changeName(event : Event) {
    const element = event.target as HTMLInputElement;
    this.person.name = element.value;
  }

  agregarNombre() {
    this.emojis.push(this.newName);
    this.newName = '';
  }

  quitarElemento(index: number) {
    this.emojis.splice(index, 1);
  }

  onRegister() {
    console.log(this.register);
  }
}

/**
 * Lista de eventos útiles en Angular: https://www.eduforbetterment.com/lists-of-useful-events-types-for-event-binding-in-angular/
 */
