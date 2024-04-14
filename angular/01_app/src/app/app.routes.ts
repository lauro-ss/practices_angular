import { Routes } from '@angular/router';
import { MainComponent } from './main/main.component';

export const routes: Routes = [
    { path: "", component: MainComponent },
    { 
        path: "animal/:animalId", 
        //lazy loading
        loadComponent: () => import("./animal-details/animal-details.component").then(c => c.AnimalDetailsComponent)
    }
];
