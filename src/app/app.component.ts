import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  name = 'Carlos';
  age = 31;
  img = 'https://source.unsplash.com/random';
  btnDisabled = true;
  person = {
    name: 'Carlos',
    age: 31,
    avatar: 'https://source.unsplash.com/random',
  }
  emojis: string[] = [ '😂' , '🐦', '🐳','🌮', '💚'];
  newName: string = '';

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
}

/**
 * Lista de eventos útiles en Angular: https://www.eduforbetterment.com/lists-of-useful-events-types-for-event-binding-in-angular/
 */
