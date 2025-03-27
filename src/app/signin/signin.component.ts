import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent {
  signInForm: FormGroup = new FormGroup({
    name: new FormControl(''),
    address: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
  });
  submitted = false;

  constructor(private formBuilder: FormBuilder,private router: Router) {}
  ngOnInit(): void {
    this.signInForm= this.formBuilder.group({
      name: ['', [Validators.required]],
      address: ['',[Validators.required]],
      email: ['',[Validators.required,Validators.email]],
      password:['',[Validators.required,Validators.minLength(6)]]
    },
  );
  }

  //getter for easier access to form controls
  get f(): { [key:string]: AbstractControl}{
    return this.signInForm.controls;
  }

  onSubmit(): void{
    this.submitted=true;

    if(this.signInForm.invalid){
      return;
    }

    this.router.navigate(['/home']);

    console.log(JSON.stringify(this.signInForm.value,null,4));
    console.log('user sign-in');
    alert("you have successfully signin");
  }
}