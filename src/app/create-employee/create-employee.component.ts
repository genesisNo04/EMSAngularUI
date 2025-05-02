import { Component} from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { Employee } from '../employee';
import { FormsModule } from '@angular/forms';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-create-employee',
  standalone: true,
  imports: [RouterModule, FormsModule],
  templateUrl: './create-employee.component.html',
  styleUrl: './create-employee.component.css'
})
export class CreateEmployeeComponent {
  employee: Employee = new Employee();

  constructor(private employeeService: EmployeeService, private router: Router) {}

  saveEmployee() {
    this.employeeService.createEmployee(this.employee).subscribe(data => {
      console.log(data);
      this.goToEmployeeList();
    }, 
    error => console.log(error));
  }

  goToEmployeeList() {
    this.router.navigate([`/employees`]);
  }

  onSubmit() {
    console.log(this.employee);
    this.saveEmployee();
  }

}
