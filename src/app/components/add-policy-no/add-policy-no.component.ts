import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-add-policy-no',
  templateUrl: './add-policy-no.component.html',
  styleUrls: ['./add-policy-no.component.css']
})
export class AddPolicyNoComponent implements OnInit {
  policyNumber!: number;
  chassisNumber!: string;

  constructor(private api: ApiService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    if (this.policyNumber && this.chassisNumber) {
      this.api.addPolicyNumber(1,this.policyNumber, this.chassisNumber)
        .subscribe(
          (response) => {
          alert("Policy Number Added Successfully")
            window.location.reload();
          },
          (error) => {
            alert("Something Went Wrong");
            console.log(error);
          }
        );
    } else {
      alert("invalid input")
    }
  }
}

  
