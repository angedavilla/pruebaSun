import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MunicipalityService } from '../../services/municipality.service';


@Component({
  selector: 'app-municipality',
  templateUrl: './municipality.component.html',
  styleUrls: ['./municipality.component.css']
})
export class MunicipalityComponent implements OnInit {

  public instituciones: any = [];
  public daneInstitucion: string;

  constructor(
    private MunicipalityService: MunicipalityService,
    private activatedRoute: ActivatedRoute
  ) { 
    this.activatedRoute.params.subscribe(params => {
      this.daneInstitucion = params['dane'];
    });
  }

  ngOnInit(): void {
    this.MunicipalityService.getMunicipiosInstituciones(this.daneInstitucion).then((res: any) => {
      this.instituciones = res;
      console.log(this.instituciones);
    })
  }

}
