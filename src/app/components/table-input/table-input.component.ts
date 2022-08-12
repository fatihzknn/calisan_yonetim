import { ConnectDbService } from './../../services/connect-db.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Employee } from 'src/app/models/employee';

@Component({
  selector: 'app-table-input',
  templateUrl: './table-input.component.html',
  styleUrls: ['./table-input.component.scss']
})
export class TableInputComponent implements OnInit {

  constructor(private fb:FormBuilder, private connectService:ConnectDbService) { }

  employees:Employee[]=[];
  formGrup!:FormGroup;
  ngOnInit(): void {
    this.formGrup = this.fb.group({
      sicil_no:['', Validators.required],
      ad_soyad:['', Validators.required],
      birim:['', Validators.required],
      alt_birim:['', Validators.required],
      unvan:['', Validators.required],
      beden:['', Validators.required],
      ayak_numarasi:['', Validators.required],
      kan_grubu:['', Validators.required],
      cinsiyet:['', Validators.required],
      ilk_yardim:['', Validators.required],

    })
  }

  get f(){
    return this.formGrup.controls;
  }


  saveEmployee(){
    // if (this.formGrup.valid){
    //   console.log(this.formGrup.value)
    // let employee = Object.assign(this.formGrup.value, {} as Employee)
    // this.connectService.insertEmployee(employee).subscribe(res => {
      
    //   alert("Bağış Kaydedildi")
    // })
    // }
    // else{
    //   alert("Tüm boşlukları doldurunuz")
    // }
  }
  
}
