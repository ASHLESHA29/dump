import { Component } from '@angular/core';
import { AbstractControl, Form, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-log-out',
  templateUrl: './log-out.component.html',
  styleUrls: ['./log-out.component.scss']
})
export class LogOutComponent {
signInForm: FormGroup = new FormGroup({
  email: new FormControl(''),
  password: new FormControl(''),
});
submitted=false;

constructor(private formBuilder: FormBuilder,private router: Router){}
ngOnInit(): void {
  this.signInForm= this.formBuilder.group({
      email:['',[Validators.required,Validators.email]],
      password: ['',[Validators.required,Validators.minLength(6)]],
    },
  );
}

get f():{[key:string]: AbstractControl}{
  return this.signInForm.controls;
}


onSubmit(): void{
  this.submitted=true;

  if (this.signInForm.invalid){
    return;
  }
  this.router.navigate(['/home']);

  console.log(JSON.stringify(this.signInForm.value,null,2));
}

logout(){
  console.log('user logout the website');
  alert("Are you sure want to log-out");
}
}
