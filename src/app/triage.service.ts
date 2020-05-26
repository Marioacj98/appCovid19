import { Triage } from './triage';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Hospital } from "./hospital"
import { environment } from "../environments/environment"
@Injectable({
  providedIn: 'root'
})
export class TriageService {
  baseUrl = environment.baseUrl
  constructor(private http: HttpClient) { }

  getTriage() {
    return this.http.get(`${this.baseUrl}/getAllTriage.php`);
  }

  addTriage(triage: Triage) {
    return this.http.post(`${this.baseUrl}/postTriage.php`, triage);
  }

  deleteTriage(triage: Triage) {
    return this.http.delete(`${this.baseUrl}/deleteTriage.php?id=${triage.id}`);
  }

}
