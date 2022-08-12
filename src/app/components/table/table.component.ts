import { TableInputComponent } from './../table-input/table-input.component';
import { ConnectDbService } from './../../services/connect-db.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Employee } from './../../models/employee';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  // displayedColumns: string[] = ['sicil_no', 'ad_soyad', 'birim', 'alt_birim', "unvan", "beden","ayak_numarasi","kan_grubu","cinsiyet","ilk_yardim"];
  // dataSource!: MatTableDataSource<Employee>;
  // @ViewChild(MatPaginator) paginator: MatPaginator;
  // @ViewChild(MatSort) sort: MatSort;

  employeeArray:Employee[] = []
  constructor(public dialog:MatDialog, private fb:FormBuilder, private router:Router, private ngbmodal:NgbModal,private connectService:ConnectDbService) { }
  formGrup!:FormGroup
  ngOnInit(): void {
    this.formGrup = this.fb.group({
      sicil_no:['', Validators.required],
      ad_soyad:['', Validators.required],
      birim:['', Validators.required],
      alt_birim:['', Validators.required],
      unvan:['', Validators.required],
      beden:['', Validators.required],
      ayak_no:['', Validators.required],
      kan_grubu:['', Validators.required],
      cinsiyet:['', Validators.required],
      ilk_yardim:['', Validators.required],
    })
    this.readEmployee()
  }
  
  readEmployee(){
    this.connectService.getEmployees().subscribe(res => { 
      this.employeeArray=res;
      console.log(res)
    })
  }
  openDialog(){
    this.dialog.open(TableInputComponent,{
      data:{ }
    })
  }
  // update(employee:Employee):void{
  //   if (!employee) {
  //     return;
  //   }
    
  //   this.router.navigate([`table-input/${employee.sicil_no}`]);
  // }
  // deleteTable(sicil_no:any){
  //   if(confirm("Kayıdı silmek istiyor musunuz? ")) {
  //     this.connectService.deleteEmployee(sicil_no).subscribe(res => {
      
  //       alert("Kayıt silindi!")
  //     })
  //   } 
  // }
  // updateEmployee(){
  //   let employee = Object.assign(this.formGrup.value, {} as Employee)
    
  //   this.connectService.updateEmployee(employee).subscribe(res => {
      
  //   })
  // }
  // openDialog2(employee: Employee){
  //   this.dialog.open(TableInputComponent, {
  //     data: {employee: employee}
  //   })
  // }
  // refresh(){
  //   window.location.reload(); 

  // }



}
