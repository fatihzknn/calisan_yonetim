import { ConnectDbService } from './../services/connect-db.service';
import { Employee } from './../models/employee';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-table-input-update',
  templateUrl: './table-input-update.component.html',
  styleUrls: ['./table-input-update.component.scss']
})
export class TableInputUpdateComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: {employee: Employee},private fb:FormBuilder,private connectSerice:ConnectDbService) { }
  employees:Employee[]=[];
  formGrup!:FormGroup;
  ngOnInit(): void {
    this.formGrup = this.fb.group({
      sicil_no:[this.data.employee.sicil_no, Validators.required],
      ad_soyad:[this.data.employee.ad_soyad, Validators.required],
      birim:[this.data.employee.birim, Validators.required],
      alt_birim:[this.data.employee.alt_birim, Validators.required],
      unvan:[this.data.employee.unvan, Validators.required],
      beden:[this.data.employee.beden, Validators.required],
      ayak_numarasi:[this.data.employee.ayak_no, Validators.required],
      kan_grubu:[this.data.employee.kan_grubu, Validators.required],
      cinsiyet:[this.data.employee.cinsiyet, Validators.required],
      ilk_yardim:[this.data.employee.ilk_yardim, Validators.required],

    })
  }
  get f() { 
    return this.formGrup.controls; 
  }

  // updateEmployee(){
    
  //   let employee = Object.assign(this.formGrup.value, {} as Employee)
  //   // bagis.bagis_id=this.data.bagis.bagis_id
    
  //   this.connectSerice.updateEmployee(employee).subscribe(res => {
      
  //     alert("Başarıyla Güncellendi!")
    
  //   })
  // }
}
