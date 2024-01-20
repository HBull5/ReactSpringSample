package com.example.demoservice.repository;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import com.example.demoservice.domain.Employee;

public interface EmployeeRepository extends JpaRepository<Employee, Integer> {

  List<Employee> findByNameContainingIgnoreCase(String Name);

}
