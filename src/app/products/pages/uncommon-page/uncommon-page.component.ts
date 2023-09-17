import { Component } from '@angular/core';
import { interval, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrls: ['./uncommon-page.component.css']
})
export class UncommonPageComponent {

  //i8nSelect
  public name: string = 'Kevin';
  public gender: 'male' | 'female' = 'male';
  public invitationMap = {
    'male': 'invitarlo',
    'female': 'invitarla'
  }

  changeClient(): void {
    this.name = 'Maria Emilia',
    this.gender = 'female'
  }

  //i18nPlural
  public clients: string[] = ['Emilio', 'Veronica', 'Gabriela', 'Melissa', 'Mauricion', 'Estefania', 'Gustavo'];
  public clientsMap = {
    '=0':'no tenemos ningun cliente',
    '=1':'tenemos un cliente',
    'other':'tenemos # clientes',
  }

  deleteClient(): void {
    this.clients.shift();
  }

  //KeyValue Pipe
  public person = {
    name: 'Kevin',
    age: 23,
    address: 'Quito, Ecuador'
  }

  //Async pipe
  public myObservableTimer = interval(2000).pipe(
    tap(value => console.log('tap', value))
  );

  public promiseValue: Promise<string> = new Promise((resolve,reject) => {
    setTimeout(() =>{
      resolve('Tenemos data en la promesa')
    },3500)
  })
}
