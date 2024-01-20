package com.example.demoservice.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import com.example.demoservice.domain.Employee;
import com.example.demoservice.service.EmployeeService;

@RestController
public class EmployeeController {

  @Autowired
  EmployeeService employeeService;

  @GetMapping("/employees")
  public List<Employee> getAllEmployees() {
    return employeeService.getAllEmployees();
  }

  @GetMapping("/employees/{id}")
  public Employee getEmployeeById(@PathVariable Integer id) {
    return employeeService.getEmployeeById(id);
  }

  @GetMapping("/employees/name/{name}")
  public List<Employee> getEmployeesByName(@PathVariable String name) {
    return employeeService.getEmployeesByName(name);
  }

}
