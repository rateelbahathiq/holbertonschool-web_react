// 1. Define the interface
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// 2. Create two students
const student1: Student = {
  firstName: 'John',
  lastName: 'Doe',
  age: 20,
  location: 'Riyadh',
};

const student2: Student = {
  firstName: 'Jane',
  lastName: 'Smith',
  age: 22,
  location: 'Jeddah',
};

// 3. Store them in an array
const studentsList: Student[] = [student1, student2];

// 4. Create a table using Vanilla JS
const table: HTMLTableElement = document.createElement('table');

// Loop through students
studentsList.forEach((student: Student) => {
  const row: HTMLTableRowElement = document.createElement('tr');

  const firstNameCell: HTMLTableCellElement = document.createElement('td');
  firstNameCell.textContent = student.firstName;

  const locationCell: HTMLTableCellElement = document.createElement('td');
  locationCell.textContent = student.location;

  row.appendChild(firstNameCell);
  row.appendChild(locationCell);

  table.appendChild(row);
});

// Add table to the page
document.body.appendChild(table);