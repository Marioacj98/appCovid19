import { TriageService } from './../../triage.service';
import { Triage } from '../../triage';
import { Component, OnInit } from '@angular/core';


@Component({
    selector: 'notifications-cmp',
    moduleId: module.id,
    templateUrl: 'notifications.component.html'
})

export class NotificationsComponent implements OnInit{


  public model = new Triage('', '', '', '', '', '');
  public triages: Triage[] = [];


  constructor(
    private triageService : TriageService,
    ) {}

  ngOnInit() {
    this.obtenerMascotas();
  }

  obtenerMascotas() {
    return this.triageService
      .getTriage()
      .subscribe((triage: Triage[]) => this.triages = triage);
  }

  agregarTriage(): void {
    this.triageService.addTriage(this.model).subscribe(() => {
      alert('Triage guardado');
      this.obtenerMascotas();
    })
  }

  borrarTriage(triage : Triage): void {
    this.triageService
    .deleteTriage(triage)
    .subscribe(() => {
      this.obtenerMascotas();
    });
  }


}
