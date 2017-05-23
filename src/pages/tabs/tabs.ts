import { Component } from '@angular/core';



import { ContactoPage } from '../contacto/contacto';
import { PistasPage } from '../pistas/pistas';
import { RadioPage } from '../radio/radio';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = RadioPage;
  tab2Root = PistasPage;
  tab3Root = ContactoPage;

  constructor() {

   

  }
}
