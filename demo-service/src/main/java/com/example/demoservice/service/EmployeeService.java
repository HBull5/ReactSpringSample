package com.example.demoservice.service;

import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.rest.webmvc.ResourceNotFoundException;
import org.springframework.stereotype.Service;
import com.example.demoservice.domain.Employee;
import com.example.demoservice.repository.EmployeeRepository;

@Service
public class EmployeeService {
  
  @Autowired
  EmployeeRepository employeeRepo;

  public List<Employee> getAllEmployees() {
    return employeeRepo.findAll();
  }

  public Employee getEmployeeById(Integer id) {
    Optional<Employee> employeeOptional = employeeRepo.findById(id);
    if (employeeOptional.isPresent()) {
      return employeeOptional.get();
    } else {
      throw new ResourceNotFoundException("No Employees with the id of " + id);
    }
  }

  public List<Employee> getEmployeesByName(String name) {
    return employeeRepo.findByNameContainingIgnoreCase(name);
  }

}
