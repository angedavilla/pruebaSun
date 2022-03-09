import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InstitutionsService {

  constructor(private http: HttpClient) { }

  baseUrl = 'https://www.php.engenius.com.co/DatabaseIE.php';

  dataInstituciones = {
    "User" : "etraining",
    "Password" : "explorandoando2020%",
    "option": "instituciones"
  }

  dataMunicipios = {
    "User" : "etraining",
    "Password" : "explorandoando2020%",
    "option": "municipios"
  }

  getInstitutions() {
    return new Promise((resolve, reject) => {
      this.http.post<any>(this.baseUrl, this.dataInstituciones).subscribe((res: any) => {
        resolve(res);
      });
    });
  }

  getMunicipios() {
    return new Promise((resolve, reject) => {
      this.http.post<any>(this.baseUrl, this.dataMunicipios).subscribe((res: any) => {
        resolve(res);
      });
    });
  }
}
