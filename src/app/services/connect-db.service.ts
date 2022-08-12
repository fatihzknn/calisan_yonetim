
import { Employee } from './../models/employee';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { baseUrl } from '../utils/baseUrl';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConnectDbService {

  constructor(private http:HttpClient) { }

  getToken() { // ************
     return "45141736723513863437"
    //return localStorage.getItem('token')
  }

  // insertEmployee(data: Employee) {
  //   const body = {
  //     Token: this.getToken(),
  //     DataStoreId: '45843328747388862482',
  //     Operation: 'insert',
  //     Encrypted: 1951,
  //     Data: `Insert into "postgres".public.botas_cik(Sicil No,Adı Soyadi,Birim/Ünite,Alt Birim1,unvanı,beden,AYAK NO,KAN GRUBU,CİNSİYET,İLK YARDIM) values(${data.sicil_no}, '${data.ad_soyad}', '${data.birim}',${data.alt_birim},${data.unvan},'${data.beden}','${data.ayak_numarasi}','${data.kan_grubu}','${data.cinsiyet}','${data.ilk_yardim}')`,
  //   };
  //   return this.http.post(baseUrl + 'Applications/DataOps', body);
  // }



  getEmployees() {
    const body = {
      Token: this.getToken(),
      DataStoreId: '45843328747388862482',
      Operation: 'read',
      Encrypted: 1951,
      Data: 'select * from "postgres".public.botas_cik',
    };
    return this.http.post(baseUrl + 'Applications/DataOps', body).pipe(
      map((response: any) => {
        return response.message;
      })
    );
  }

  deleteEmployee(sicil_no: any) {
      
  }
  updateEmployee(data: Employee) {

  }

}
