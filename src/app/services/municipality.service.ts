import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MunicipalityService {

  constructor(private http: HttpClient) { }

  baseUrl = 'https://www.php.engenius.com.co/DatabaseIE.php';



  getMunicipiosInstituciones(CodMun: string) {

    const dataMunicipiosInstituciones = {
      "User": "etraining",
      "Password": "explorandoando2020%",
      "option": "instituciones",
      "CodMun": CodMun
    }

    return new Promise((resolve, reject) => {
      this.http.post<any>(this.baseUrl, dataMunicipiosInstituciones).subscribe((res: any) => {
        resolve(res);
      });
    });
  }

  getSedes(CodInst: string) {

   const dataSedes = {
      "User": "etraining",
      "Password": "explorandoando2020%",
      "option": "sedes",
      "CodInst": CodInst
    }

    return new Promise((resolve, reject) => {
      this.http.post<any>(this.baseUrl, dataSedes).subscribe((res: any) => {
        resolve(res);
      });
    });
  }

  getGrupo(CodSede: string) {

  const dataGrupo = {
      "User": "etraining",
      "Password": "explorandoando2020%",
      "option": "grupos",
      "CodSede": CodSede
    }
    return new Promise((resolve, reject) => {
      this.http.post<any>(this.baseUrl, dataGrupo).subscribe((res: any) => {
        resolve(res);
      });
    });
  }
}
