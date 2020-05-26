import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Hospital } from "./hospital"
import { environment } from "../environments/environment"
@Injectable({
  providedIn: 'root'
})
export class HospitalService {
  baseUrl = environment.baseUrl
  constructor(private http: HttpClient) { }

  getHospitales() {
    return this.http.get(`${this.baseUrl}/getAllHospital.php`);
  }

  addHospital(hospital: Hospital) {
    return this.http.post(`${this.baseUrl}/postHospital.php`, hospital);
  }

  deleteHospital(hospital: Hospital) {
    return this.http.delete(`${this.baseUrl}/deleteHospital.php?id=${hospital.id}`);
  }

}
