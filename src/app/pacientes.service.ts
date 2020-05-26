import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Paciente } from "./pacientes"
import { environment } from "../environments/environment"
@Injectable({
  providedIn: 'root'
})
export class PacientesService {
  baseUrl = environment.baseUrl
  constructor(private http: HttpClient) { }

  getPacientes() {
    return this.http.get(`${this.baseUrl}/getAllPacientes.php`);
  }

  addPaciente(paciente: Paciente) {
    return this.http.post(`${this.baseUrl}/postPacientes.php`, paciente);
  }

  deletePaciente(paciente: Paciente) {
    return this.http.delete(`${this.baseUrl}/deletePacientes.php?id=${paciente.id}`);
  }

}
