import { Component, OnInit } from '@angular/core';
import { NbAuthIllegalJWTTokenError } from '@nebular/auth';
import { DoctoresService } from '../../doctores.service';
import { Doctores } from '../../doctores';

@Component({
  selector: 'ngx-ecommerce',
  templateUrl: './e-commerce.component.html',
})
export class ECommerceComponent implements OnInit {
  constructor(
    private doctoresService : DoctoresService,
  ){
  }

  public model = new Doctores('','','','','','','');

  public doctores : Doctores[] = [];


  ngOnInit() {
    this.obtenerDoctores();
  }

  obtenerDoctores() {
    return this.doctoresService
      .getDoctores()
      .subscribe((doctores: Doctores[]) => this.doctores = doctores);
  }


  agregarDoctores(): void {
    this.doctoresService.addDoctor(this.model).subscribe(() => {
      alert('Doctor guardado');
      this.obtenerDoctores();
  })
  }

  borrarDoctores(doctor: Doctores): void {
    this.doctoresService
    .deleteDoctor(doctor)
    .subscribe(() => {
      this.obtenerDoctores();
    });
  }
}
