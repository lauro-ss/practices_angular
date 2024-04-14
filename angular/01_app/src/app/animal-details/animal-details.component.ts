import { Component } from '@angular/core';
import { Input as RouterInput } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgIf } from '@angular/common';
import { Animal } from '../interface/animal';

@Component({
  selector: 'app-animal-details',
  standalone: true,
  imports: [RouterLink, NgIf],
  templateUrl: './animal-details.component.html',
  styleUrl: './animal-details.component.css'
})
export class AnimalDetailsComponent {
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
  
  @RouterInput() animalId!: string;

  animal?: Animal;

  ngOnInit() {
    let id = Number(this.animalId);
    if(id) {
      this.animal = this.animals.find(a => a.id == id);
    }
  }
}
