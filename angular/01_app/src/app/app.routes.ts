import { Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { AnimalDetailsComponent } from './animal-details/animal-details.component';

export const routes: Routes = [
    { path: "", component: MainComponent },
    { path: "animal/:animalId", component: AnimalDetailsComponent }
];
