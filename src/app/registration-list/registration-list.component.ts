import { Component, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { User } from '../models/user.model';
@Component({
  selector: 'app-registration-list',
  templateUrl: './registration-list.component.html',
  styleUrls: ['./registration-list.component.scss']
})
export class RegistrationListComponent implements OnInit {
public dataSource!: MatTableDataSource<User>;
public users!: User[];
@ViewChild(MatPaginator) paginator!: MatPaginator;
@ViewChild(MatSort) sort!: MatSort;
displayedColumns: string[] = ['id','firstName','lastName','email','mobile','bmiResult','gender','package','enquiryDate', 'action'];

constructor(private api: ApiService){

}
ngOnInit(): void{
  this.getUsers();
}

getUsers(){
  this.api.getRegisteredUser()
  .subscribe((res=>{
    this.users = res;
    this.dataSource = new MatTableDataSource(this.users);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  })
}

}
