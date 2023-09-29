import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { ApiService } from 'src/app/services/api.service';


@Component({
  selector: 'app-view-coverage-list',
  templateUrl: './view-coverage-list.component.html',
  styleUrls: ['./view-coverage-list.component.css']
})
export class ViewCoverageListComponent {

  policyNumbers: any[] = [];
  selectedPolicyNumber!: number;
  coverageData: any[] = [];
  displayedColumns: string[] = ['coverageName', 'covCd', 'effectiveDt', 'expirationDt'];

  constructor(private api:ApiService, private location: Location) {}

  ngOnInit(): void {
    this.api.getPolicyNumbers(1)
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
          this.coverageData = coverageDataa;
          console.log(this.selectedPolicyNumber)
          console.log('Coverage data:', coverageDataa);
        });
    }
  }

  onDeletePolicyNumber(policyNumber: number): void {
    const confirmDelete = confirm(`Are you sure you want to delete policy number ${policyNumber}?`);
    if (confirmDelete) {
      this.api.deletePolicyNumber(policyNumber)
        .subscribe(
          () => {
            // Policy number deleted successfully
            console.log(`Policy number ${policyNumber} deleted.`);
            window.location.reload();
            // You can update the component's state or perform other actions as needed
          },
          (error) => {
            // Handle the error if deletion fails
            console.error( error);
          }
        );
    }
  }
  



}
