
import { Component, ViewChild, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { User } from './../models/user.model';
import { ApiService } from './../services/api.service';
import { NgToastService } from 'ng-angular-popup';
import { Router } from '@angular/router';
import {NgConfirmService} from 'ng-confirm-box'

@Component({
  selector: 'app-registration-list',
  templateUrl: './registration-list.component.html',
  styleUrls: ['./registration-list.component.scss'],
})
export class RegistrationListComponent implements OnInit {
  public dataSource!: MatTableDataSource<User>;
  public users!: User[];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  displayedColumns: string[] = ['id','firstName','lastName','email','mobile','bmiResult','gender','package','enquiryDate','action'];
  input: any;

  constructor(
    private api: ApiService,
    private toast: NgToastService,
    private router: Router,
    private confirm: NgConfirmService){
      
    }
  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    this.api.getRegisteredUser()
    .subscribe((res) => {
      this.users = res;
      this.dataSource = new MatTableDataSource(this.users);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })
  }
  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  edit(id: number) {
    this.router.navigate(['update', id]);
  }

  delete(id: number){
    this.confirm.showConfirm("Are you sure want to delete?",
    ()=>{
      this.api.deleteRegistered(id)
      .subscribe(res=>{
      this.toast.success({ detail: 'SUCCESS', summary: 'Deleted Successfully', duration: 3000})
      this.getUsers();
    })
    },
    ()=>{

    })
    
  }
}
