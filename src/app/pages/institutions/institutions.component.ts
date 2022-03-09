import { Component, OnInit } from '@angular/core';
import { InstitutionsService } from 'src/app/services/institutions.service';

@Component({
  selector: 'app-institutions',
  templateUrl: './institutions.component.html',
  styleUrls: ['./institutions.component.css']
})
export class InstitutionsComponent implements OnInit {

  public institutions: any;
  public municipios: any = [];

  constructor(private InstitutionsService: InstitutionsService) { }

  ngOnInit(): void {
    this.InstitutionsService.getInstitutions().then((res: any) => {
      this.institutions = res;
    });

    this.InstitutionsService.getMunicipios().then((res: any) => {
      this.municipios = res;
    });
  }

}
