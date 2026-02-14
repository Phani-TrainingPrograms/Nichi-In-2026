export class EmployeeRepo {
    constructor() {
        this.empList = []; //blank array..
    }
    getEmployees() {
        return this.empList;
    }
    getEmployee(id) {
        const found = this.empList.find(r => r.id == id);
        return found;
    }
    addEmployee(rec) {
        this.empList = [...this.empList, rec];
    }
    updateEmployee(rec) {
        const foundRec = this.getEmployee(rec.id);
        if (foundRec) {
            foundRec.name = rec.name;
            foundRec.address = rec.address;
        }
    }
    deleteRecord(id) {
        throw new Error("Do it URSelf");
    }
}
