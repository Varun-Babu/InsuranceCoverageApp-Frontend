import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import ValidateForms from 'src/app/helpers/validateforms';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  loginForm! : FormGroup;

  constructor(private fb: FormBuilder, private api: ApiService, private router: Router){ }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username:['', Validators.required ],
      password:['', Validators.required]
    })
  }

  onLogin(){
    if(this.loginForm.valid){
      console.log(this.loginForm.value)
      this.api.login(this.loginForm.value).subscribe({
        next:(response)=>{
          console.log("enter")
          alert("login success")
          this.loginForm.reset();
          this.router.navigate(['dashboard'])
        },
        error:(error)=>{
          console.log("Error:", error);
          alert(error?.error.message);
      ValidateForms.validateAllFormFields(this.loginForm);

        }
      })
    }
    else{
      ValidateForms.validateAllFormFields(this.loginForm);
    }
  }

}
