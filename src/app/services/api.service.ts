import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private authBaseUrl:string = "https://localhost:7134/api/UserAuth/"
  private userBaseUrl:string = "https://localhost:7134/api/UserPolicy/"


  constructor(private http: HttpClient) { }

  login(loginObj:any){
    return this.http.post<any>(`${this.authBaseUrl}login`, loginObj)
  }

  addPolicyNumber(userid:number,policynumber:number,chasisnumber:string): Observable<any>{
    const url = `${this.userBaseUrl}validate/${userid}/${policynumber}/${chasisnumber}`;
    return this.http.post<any>(url, {});
  }

  getPolicyNumbers(userid:number): Observable<number[]> {
    const url = `${this.userBaseUrl}${userid}`;
    return this.http.get<number[]>(url);
  }

  getCoverage(policyNumber: number): Observable<any>{
    return this.http.get<any>(`${this.userBaseUrl}GetCoveragesByPolicyNumber/${policyNumber}`)
 }

 deletePolicyNumber(policyNumber: number): Observable<any> {
  return this.http.delete<any>(`${this.userBaseUrl}${policyNumber}`);
}


}
