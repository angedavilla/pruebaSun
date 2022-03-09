import { Component, OnInit } from '@angular/core';
import { MunicipalityService } from '../../services/municipality.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.css']
})
export class GroupsComponent implements OnInit {

  public grupos: any = [];
  public grupoSede: string;

  constructor(
    private MunicipalityService: MunicipalityService,
    private ActivatedRoute: ActivatedRoute
  ) {
    this.ActivatedRoute.params.subscribe(params => {
      this.grupoSede = params['dane'];
    });
  }

  ngOnInit(): void {
    this.MunicipalityService.getGrupo(this.grupoSede).then((res: any) => {
      this.grupos = res;
      console.log(res);
    })
  }

}
