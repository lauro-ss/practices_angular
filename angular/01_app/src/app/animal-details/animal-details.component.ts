import { Component } from '@angular/core';
import {Input as RouterInput} from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-animal-details',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './animal-details.component.html',
  styleUrl: './animal-details.component.css'
})
export class AnimalDetailsComponent {
  @RouterInput() animalId!: string;

  ngOnInit() {
    console.log(this.animalId);
  }
}
