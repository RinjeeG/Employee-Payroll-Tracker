// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Collect employee data
const collectEmployees = function() {
  let employeesArray = [];
  let addMore = true;

  while (addMore) {
// add employee information
    firstName = prompt('Please enter your first name');
    lastName = prompt('Please enter your last name');
    salary = prompt('Please enter your salary');
    // setting salary to 0 by default if nothing is specified
    if (isNaN(salary)) {
      salary = 0;
    }
    // store the employee information
    employeesArray.push({firstName: firstName, lastName: lastName, salary: salary});
    // Check if more employees are needed to be added
    addMore = confirm('Do you want to add more employees?');
  }
  return employeesArray;
}

// Display the average salary
const displayAverageSalary = function(employeesArray) {
  let totalSalary = 0;
  let numberOfEmployees = employeesArray.length;

  // TODO: Calculate and display the average salary
// summing up the salaries
  for(let i = 0; i < numberOfEmployees; i++) {
  totalSalary += employeesArray[i].salary;
  }
  averageSalary = totalSalary / numberOfEmployees;
  // Formatting the average salary as a currency value
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    
  });
  const formattedAverageSalary = formatter.format(averageSalary);

  console.log(`The average salary between our ${employeesArray.length} employee(s) is ${formattedAverageSalary}`);
}

// Select a random employee
const getRandomEmployee = function(employeesArray) {
  // TODO: Select and display a random employee
}

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
