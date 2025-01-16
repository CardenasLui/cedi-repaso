import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonItem, IonInput, IonButton, } from '@ionic/angular/standalone';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.page.html',
  styleUrls: ['./contacto.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonItem, IonInput, IonButton, ReactiveFormsModule]
})
export class ContactoPage implements OnInit {
  nombre = new FormControl('');

  constructor() { }

  ngOnInit() {
  }

  funcionHola() {
    if (this.nombre.value!.length > 1) {
      alert('todo ok')
    } else {
      alert('nombre es requerido')
    }
  }

}
