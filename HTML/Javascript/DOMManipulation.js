//UI Functions/Events for manipulating the DOM structure.

//Create a class for representing each Employee Record. 
class Employee {
    constructor(id, name, address, salary) {
        this.id = id
        this.name = name
        this.address = address
        this.salary= salary
    }
}

//Create a class for manipulating the data.This class shall be Repository class. 
class EmployeeRepo {
    empCollection = [] //Blank Array of Employees..

    addEmployee(rec){  
        this.empCollection.push(rec)
    }

    updateEmployee(rec){
        //find the matching rec in the collection
        const foundIndex = this.empCollection.findIndex((r)=> r.id == rec.id);
        //raise alert if no rec is found. 
        if(foundIndex == -1){
            alert("Record not found to update")
            return;
        }
        //replace the element in the found index with the rec passed as arg..
        this.empCollection.splice(foundIndex, 1, rec);
    }

    deleteEmployee(id){
        //find the matching rec in the collection
        const foundIndex = this.empCollection.findIndex((r)=> r.id == id);
        //raise alert if no rec is found. 
        if(foundIndex == -1){
            alert("Record not found to delete")
            return;
        }
        //replace the element in the found index with the rec passed as arg..
        this.empCollection.splice(foundIndex, 1);
    }

    getAll = () =>this.empCollection //implementing Arrow function in a class...
    
    getEmployee = (id) => this.empCollection.find(r => r.id === id);//refer jsFeatures 
    
} 
