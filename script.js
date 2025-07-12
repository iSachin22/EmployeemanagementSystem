const employeeForm = document.getElementById('employeeForm');
const employeeTable = document.querySelector('#employeeTable tbody');

let employees = JSON.parse(localStorage.getItem('employees')) || [];

function displayEmployees() {
  employeeTable.innerHTML = '';

  employees.forEach((employee, index) => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${employee.name}</td>
      <td>${employee.email}</td>
      <td>${employee.department}</td>
      <td><button class="delete-btn" onclick="deleteEmployee(${index})">Delete</button></td>
    `;
    employeeTable.appendChild(row);
  });
}

function deleteEmployee(index) {
  employees.splice(index, 1);
  localStorage.setItem('employees', JSON.stringify(employees));
  displayEmployees();
}

employeeForm.addEventListener('submit', function(e) {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const department = document.getElementById('department').value.trim();

  if (name && email && department) {
    employees.push({ name, email, department });
    localStorage.setItem('employees', JSON.stringify(employees));
    displayEmployees();
    employeeForm.reset();
  }
});

// Initialize
displayEmployees();
