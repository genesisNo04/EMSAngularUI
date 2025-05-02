import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { FormsModule } from '@angular/forms';
import { EmployeeService } from '../employee.service';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-update-employee',
  standalone: true,
  imports: [RouterModule, FormsModule],
  templateUrl: './update-employee.component.html',
  styleUrl: './update-employee.component.css'
})

export class UpdateEmployeeComponent implements OnInit {
  employee: Employee = new Employee();
  id: number;

  constructor(private employeeService: EmployeeService, private router: Router,
    private route: ActivatedRoute
  ) {}


  goToEmployeeList() {
    this.router.navigate([`/employees`]);
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params[`id`];
    this.employeeService.getEmployee(this.id).subscribe(data => {
      this.employee = data;
    }, error => console.log(error));
  }

  onSubmit() {
    console.log(this.employee);
    this.employeeService.updateEmployee(this.id, this.employee).subscribe(data => {
      console.log(data);
      this.goToEmployeeList();
    }, 
    error => console.log(error));
  }

}
