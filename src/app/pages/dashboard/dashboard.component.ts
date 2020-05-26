import { Component, OnInit } from '@angular/core';
import { Hospital } from '../../hospital';
import { HospitalService } from '../../hospital.service';

@Component({
  selector: 'ngx-dashboard',
  styleUrls: ['./dashboard.component.scss'],
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnInit{

  public model = new Hospital('', '', '', '', '', '');

  public hospitales : Hospital[] = [];


  constructor(
    private hospitalService : HospitalService,
  ){}


  agregarHospital(): void {
    this.hospitalService.addHospital(this.model).subscribe(() => {
      // this.snackBar.open('Doctor guardada', undefined, {
      //   duration: 1500,
      // });
      alert('Hospital guardado');
      // window.location.reload();
      this.obtenerMascotas();
      // this.router.navigate(['/doctores']);
    })
  }

  borrarHospital(hospital: Hospital): void {
    this.hospitalService
    .deleteHospital(hospital)
    .subscribe(() => {
      this.obtenerMascotas();
      // this.snackBar.open('Doctor eliminado', undefined, {
      //   duration: 1500,
      // });
    });
  }


    ngOnInit(){
      this.obtenerMascotas();
    }

    obtenerMascotas() {
      return this.hospitalService
        .getHospitales()
        .subscribe((hospitales: Hospital[]) => this.hospitales = hospitales);
    }

  }
