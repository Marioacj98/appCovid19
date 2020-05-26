import { PacientesService } from '../../pacientes.service';
import { Paciente } from '../../pacientes';
import { Component,OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'maps-cmp',
    templateUrl: 'pacientes.component.html'
})

export class PacientesComponent implements OnInit{

  public model = new Paciente('', '', '', '', '', '','');
  public pacientes : Paciente[] = [];

  constructor(
    private pacientesService : PacientesService,
  ){}



  agregarPaciente(): void {
    this.pacientesService.addPaciente(this.model).subscribe(() => {
      alert('Paciente guardado');
      this.obtenerMascotas();
    })
  }

  borrarPaciente(paciente: Paciente): void {
    this.pacientesService
    .deletePaciente(paciente)
    .subscribe(() => {
      this.obtenerMascotas();
    });
  }


    ngOnInit() {
      this.obtenerMascotas();
    }

    obtenerMascotas() {
      return this.pacientesService
        .getPacientes()
        .subscribe((paciente: Paciente[]) => this.pacientes = paciente);
    }
}
