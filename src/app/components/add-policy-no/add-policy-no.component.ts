import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserPolicyList } from 'src/app/models/UserPolicyList';
import { ApiService } from 'src/app/services/policy.service';

@Component({
  selector: 'app-add-policy-no',
  templateUrl: './add-policy-no.component.html',
  styleUrls: ['./add-policy-no.component.css']
})
export class AddPolicyNoComponent implements OnInit {
  
  userPolicyForm!: FormGroup;

  constructor(private api: ApiService,private fb: FormBuilder) {
    this.userPolicyForm = this.fb.group({
      policyNumber: ['', Validators.required],
      chassisNumber: ['', Validators.required]
    });
   }

  ngOnInit(): void {
  }

  onSubmit() {
      
      var id = localStorage.getItem('userId');
      var userId: number = parseInt(id || '0', 10);

      const policyNumber = this.userPolicyForm.get('policyNumber')?.value;
      const chassisNumber = this.userPolicyForm.get('chassisNumber')?.value;
      const userPolicyList: UserPolicyList = {
        id: 1,
        userId: userId,
        policyNumber: policyNumber
      };

      this.api.addPolicyNumber(userPolicyList, chassisNumber).subscribe
      (
          (response) => {
          alert("Policy Number Added Successfully")
            window.location.reload();
          },
          (error) => {
            alert("Make sure policy and chasis number are valid");
          }
        );
    } 
  }


  
