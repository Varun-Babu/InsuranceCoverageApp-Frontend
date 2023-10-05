import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserPolicyList } from '../models/UserPolicyList';
import { Coverage } from '../models/Coverage';
import { authEnvironment } from '../environment/authEnvironment';
import { crudEnvironment } from '../environment/apiCrudEnvironment';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  
  apiUrl = crudEnvironment.apiUrl;
  authBaseUrl = authEnvironment.apiUrl;

  constructor(private http: HttpClient) { }

  login(loginObj:User): Observable<User>{
    return this.http.post<User>(`${this.authBaseUrl}login`, loginObj)
  }

getPolicyNumbers(userId: number): Observable<UserPolicyList[]> {
  return this.http.get<UserPolicyList[]>(`${this.apiUrl}GetAllPolicyNumbers/${userId}`);
}

getCoverage(policyNumber: number): Observable<Coverage[]> {
  return this.http.get<Coverage[]>(`${this.apiUrl}GetCoveragesByPolicyNumber/${policyNumber}`);
}

addPolicyNumber( policyList: UserPolicyList, chasisNumber: string): Observable<string> {
  return this.http.post<string>(`${this.apiUrl}validate/${chasisNumber}`, policyList);
}

deletePolicyNumber(policyNo: number): Observable<string> {
  return this.http.delete<string>(`${this.apiUrl}${policyNo}`);
}


}
