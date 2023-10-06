import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { ApiService } from 'src/app/services/policy.service';


@Component({
  selector: 'app-view-coverage-list',
  templateUrl: './view-coverage-list.component.html',
  styleUrls: ['./view-coverage-list.component.css']
})
export class ViewCoverageListComponent {

  policyNumbers: any = {};
  selectedPolicyNumber!: number;
  coverageData: any = {};
  displayedColumns: string[] = ['coverageName', 'covCd', 'effectiveDt', 'expirationDt'];

  constructor(private api:ApiService, private location: Location) {}

  ngOnInit(): void {

    var id = localStorage.getItem('userId');
    var userId: number = parseInt(id || '0', 10);

    this.api.getPolicyNumbers(userId)
    .subscribe({
      
      next:(response) =>{
        console.log(response)
        this.policyNumbers = response;
      },
      error: (response)=>{
        console.log(response)
      }
    })
  }

  onPolicyNumberSelected(): void {
    if (this.selectedPolicyNumber) {
      this.api.getCoverage(this.selectedPolicyNumber)
        .subscribe((coverageDataa: any) => {
          console.log(coverageDataa)
          this.coverageData = coverageDataa;
        });
    }
  }

  onDeletePolicyNumber(policyNumber: number): void {
    const confirmDelete = confirm(`Are you sure you want to delete policy number ${policyNumber}?`);
    if (confirmDelete) {
      this.api.deletePolicyNumber(policyNumber)
        .subscribe(
          () => {
            console.log(`Policy number ${policyNumber} deleted.`);
            window.location.reload();
          },
          (error) => {
            console.error( error);
          }
        );
    }
  }
  



}
