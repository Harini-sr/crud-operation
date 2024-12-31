import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../service/employee.service';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';


@Component({
  selector: 'app-view-form',
  templateUrl: './view-form.component.html',
  styleUrls: ['./view-form.component.css']
})
export class ViewFormComponent implements OnInit {

  viewAll: any;  // Holds the response data
  dataSource!: MatTableDataSource<any>;  // Holds the data for the table

  displayedColumns: string[] = [ 
    'id',
    'fname',
    'lname',
    'email',
    'number',
    'age',
     'edit'
  ];

  constructor( private router: Router, private tableService: EmployeeService) {}

  ngOnInit(): void {
    // Fetch all data and assign it to dataSource
    this.tableService.changeDetails().subscribe((res: any) => {
      this.viewAll = res;  // Directly use res if it's an array of objects
      console.log('Fetched data:', this.viewAll);  // Log fetched data
      this.dataSource = new MatTableDataSource(this.viewAll);
    }, );

    
  }

      edit(id: any) {
        this.router.navigate([`add-form/${id}`], {
          queryParams: { Alldata: id },
        });
        console.log(id);
      }
    
    }

 

 