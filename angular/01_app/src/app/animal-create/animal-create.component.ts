import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-animal-create',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './animal-create.component.html',
  styleUrl: './animal-create.component.css'
})
export class AnimalCreateComponent {

  // form = new FormGroup({
  //   name: new FormControl<string>(''),
  //   status: new FormControl<string>(''),
  //   alive: new FormControl<boolean>(false)
  // });

  form = this.formBuilder.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    status: ['eating', Validators.required],
    alive: [true]
  });

  load() {
    console.log("teste");
  }

  onSubmit() {
    console.log(this.form.value.name)
    console.log(this.form.value.status)
  }

  constructor(private formBuilder: FormBuilder) {}
}
