const employees = [
  { id: 1, name: "Alice", department: "Engineering", salary: 120000, experience: 5, rating: 4.8 },
  { id: 2, name: "Bob", department: "Engineering", salary: 95000, experience: 2, rating: 3.9 },
  { id: 3, name: "Charlie", department: "Sales", salary: 80000, experience: 4, rating: 4.5 },
  { id: 4, name: "Diana", department: "HR", salary: 70000, experience: 1, rating: 3.2 },
  { id: 5, name: "Evan", department: "Engineering", salary: 135000, experience: 7, rating: 4.9 },
  { id: 6, name: "Fiona", department: "Marketing", salary: 90000, experience: 3, rating: 4.1 },
  { id: 7, name: "George", department: "Sales", salary: 65000, experience: 1, rating: 3.5 },
  { id: 8, name: "Hannah", department: "Engineering", salary: 110000, experience: 4, rating: 4.6 },
  { id: 9, name: "Ian", department: "Marketing", salary: 105000, experience: 6, rating: 4.7 },
  { id: 10, name: "Jenny", department: "HR", salary: 72000, experience: 3, rating: 3.8 },
  { id: 11, name: "Kevin", department: "Sales", salary: 125000, experience: 8, rating: 4.2 },
  { id: 12, name: "Liam", department: "Engineering", salary: 98000, experience: 3, rating: 4.0 },
  { id: 13, name: "Mia", department: "Design", salary: 85000, experience: 2, rating: 4.3 },
  { id: 14, name: "Noah", department: "Design", salary: 115000, experience: 9, rating: 4.8 },
  { id: 15, name: "Olivia", department: "Marketing", salary: 78000, experience: 2, rating: 3.9 }
];
// filter + map we need to a[plly  
const HighPerformance= employees.filter(el=>el.rating>=4.5).map(ele=>ele.name);
console.log(HighPerformance);

//for budgt planning filter + reduce
const engineeringBudget = employees
  .filter(el => el.department ==="Engineering").reduce((sum, e)=>
    sum + e.salary,0);
//
 const experienceRanking = [...employees].sort((a, b) => 
  b.experience - a.experience || b.salary - a.salary
);
console.log(experienceRanking);