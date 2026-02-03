let empCollection = [
    {id : 1, name : "Phaniraj", address : "Bangalore", salary : 45000}
];

function addEmployee(emp){
    empCollection = [...empCollection, emp];
}

function deleteEmployee(id){
    empCollection = empCollection.filter(emp => emp.id !== id);
}

function updateEmployee(updatedEmp){
    //find the record, update the found record with new inputs else retain the old one. 
    empCollection = empCollection.map(emp => emp.id === updatedEmp.id ? { ...emp, name : updatedEmp.name} : emp)
}

function findEmployee(id){
    return empCollection.find(e =>e.id === id)
}

const getAllEmployees = () => [...empCollection];
