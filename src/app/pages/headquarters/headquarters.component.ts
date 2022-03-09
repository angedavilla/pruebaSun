import { Component, OnInit } from '@angular/core';
import { MunicipalityService } from '../../services/municipality.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-headquarters',
  templateUrl: './headquarters.component.html',
  styleUrls: ['./headquarters.component.css']
})
export class HeadquartersComponent implements OnInit {

  public sedes: any;
  public sedesInstituciones: string;

  constructor(
    private MunicipalityService: MunicipalityService,
    private activatedRoute: ActivatedRoute
    ) { 
      this.activatedRoute.params.subscribe(params => {
        this.sedesInstituciones = params['dane'];
      });
    }

  ngOnInit(): void { 
    this.MunicipalityService.getSedes(this.sedesInstituciones).then((res: any) => {
      this.sedes = res;
      console.log(this.sedes);
    })
  }

}
