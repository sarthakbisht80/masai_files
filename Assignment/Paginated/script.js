//Json  user POst Api
const API ="https://dummyjson.com/users";

let allData =[];//emptY data should be initially 
let filteredData = [];

let currentPage = 1;
const rowsPerPage=10;

let sortColumn =null;
let sortDirection= "asc";

const tbody=document.querySelector("tbody");
const paginationDiv =document.getElementById("pagination");

const searchInput =document.getElementById("searchInput");
const roleFilter=document.getElementById("roleFilter");
const statusFilter= document.getElementById("statusFilter");


// fetch data first thibf
async function loadData() {
  const res= await fetch(API);

  const data= await res.json();

  const AllUsers=data.users;
  console.log(AllUsers);
  
  allData =AllUsers.map(p => ({
    id: p.id,
    name:  p.firstName +" "+p.lastName,
    email:  p.firstName+"@gmail.com",
    role: p.role,
    status: p.id % 2 ? "Active" : "Inactive"
  }));

  filteredData = [...allData];
  render();
}

loadData();

// render everything
function render(){
  renderTable();
  renderPagination();
}


// table rows
function renderTable(){
//empty the previous innerHTml if any.
  tbody.innerHTML ="";

  const start =(currentPage - 1) * rowsPerPage;
  const pageData= filteredData.slice(start, start + rowsPerPage);

  pageData.forEach(row => {

    const tr = document.createElement("tr");

    tr.innerHTML = `
      <td>${row.id}</td>
      <td>${row.name}</td>
      <td>${row.email}</td>
      <td>${row.role}</td>
      <td>${row.status}</td>
    `;

    tbody.appendChild(tr);
  });

}


// pagination buttons
function renderPagination(){

  paginationDiv.innerHTML = "";

  const totalPages= Math.ceil(filteredData.length / rowsPerPage);

  const prev =document.createElement("button");
  prev.textContent ="Prev";
  prev.disabled = currentPage === 1;
  prev.onclick = () => {
    currentPage--;
     render();
  };
  paginationDiv.appendChild(prev);

  for(let i=1;i<=totalPages;i++) {
    const btn = document.createElement("button");
    btn.textContent = i;

    if(i === currentPage){
      btn.disabled = true;
    }

    btn.onclick =() => {
      currentPage = i;
       render();
    };

    paginationDiv.appendChild(btn);
  }

  const next =document.createElement("button");
  next.textContent= "Next";
next.disabled =currentPage === totalPages;

  next.onclick =() => {
    currentPage++;
  render();
  };

  paginationDiv.appendChild(next);
}


// filtering + search
function applyFilters(){

  const search = searchInput.value.toLowerCase();
  const role = roleFilter.value;
  const status = statusFilter.value;

  filteredData = allData.filter(item => {

    const matchSearch =
      item.name.toLowerCase().includes(search) ||
      item.email.toLowerCase().includes(search);

    const matchRole = role ? item.role === role : true;
    const matchStatus = status ? item.status === status : true;

    return matchSearch && matchRole && matchStatus;
  });

  applySorting();

  currentPage = 1;
  render();
}


// sorting
function applySorting(){

  if(!sortColumn) return;

  filteredData.sort((a,b) => {

    if(a[sortColumn] < b[sortColumn]) return sortDirection === "asc" ? -1 : 1;
    if(a[sortColumn] > b[sortColumn]) return sortDirection === "asc" ? 1 : -1;
    return 0;

  });

}


// header 
document.querySelectorAll("th").forEach(th => {

  th.addEventListener("click", () => {

    const key = th.dataset.key;

    if(sortColumn === key){
      sortDirection = sortDirection === "asc" ? "desc" : "asc";
    } else {
      sortColumn = key;
      sortDirection = "asc";
    }

    applySorting();
    render();
  });

});


// debounce search Logic
let timer;

searchInput.addEventListener("input", () => {

  clearTimeout(timer);

  timer = setTimeout(() => {
    applyFilters();
  }, 300);

});


roleFilter.addEventListener("change", applyFilters);
statusFilter.addEventListener("change", applyFilters);