import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Doctores } from "./doctores"
import { environment } from "../environments/environment"
@Injectable({
  providedIn: 'root'
})
export class DoctoresService {
  baseUrl = environment.baseUrl
  constructor(private http: HttpClient) { }
  getDoctores() {
    return this.http.get(`${this.baseUrl}/getAllDoctores.php`);
  }

  addDoctor(doctores: Doctores) {
    return this.http.post(`${this.baseUrl}/postDoctores.php`, doctores);
  }

  deleteDoctor(doctores: Doctores) {
    return this.http.delete(`${this.baseUrl}/deleteDoctores.php?idDoctor=${doctores.id}`);
  }

}
