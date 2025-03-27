import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Inject } from '@angular/core';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
  
})
export class LogInComponent {
  signInForm: FormGroup= new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });
  submitted= false;

  errorMessage: string = '';
  users: string[] = [];

  constructor(private formBuilder: FormBuilder, private router: Router) {}

    ngOnInit(): void{
      this.signInForm = this.formBuilder.group(
        {
          email:['',[Validators.required, Validators.email]],
          password:['',[Validators.required,Validators.minLength(6)]],
        },
      );
    }

    

  get f(): { [key:string]: AbstractControl}{
    return this.signInForm.controls;
  }

  onSubmit(): void{
    this.submitted=true;

    if(this.signInForm.invalid){
      return;
    }
    this.router.navigate(['/home']);

    console.log(JSON.stringify(this.signInForm.value,null,2));
  }



  


}
