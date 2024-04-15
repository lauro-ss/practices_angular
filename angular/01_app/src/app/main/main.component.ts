import { NgFor } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Animal } from '../interface/animal';
import { AnimalCreateComponent } from "../animal-create/animal-create.component";

@Component({
    selector: 'app-main',
    standalone: true,
    templateUrl: './main.component.html',
    styleUrl: './main.component.css',
    imports: [NgFor, RouterModule, AnimalCreateComponent]
})
export class MainComponent {
  animals: Animal[] = [
    {
      id: 1,
      name: "Cat",
      status: "Sleeping",
      alive: true
    },
    {
      id: 2,
      name: "Dog",
      status: "Walking",
      alive: true
    },
    {
      id: 3,
      name: "Bird",
      status: "Sleeping",
      alive: false
    },
  ];
  result?: Animal[];

  getAnimals(n: string) {
    n = n.toLowerCase();
    this.result = this.animals.filter(a => a.name.toLowerCase().includes(n));
  }
}
