import { Employee as EmpRecord } from "./EmployeeData.js";

export class EmployeeRepo{
    private empList : EmpRecord[] = []//blank array..
    
    public getEmployees () : EmpRecord[]{
        return this.empList;
    }

    public getEmployee(id : number): EmpRecord{
        const found : EmpRecord | any = this.empList.find(r => r.id == id);
        return found;
    }

    public addEmployee(rec : EmpRecord) : void{
        this.empList = [...this.empList, rec];
    }

    public updateEmployee(rec : EmpRecord) : void{
        const foundRec = this.getEmployee(rec.id);
        if(foundRec){
            foundRec.name = rec.name;
            foundRec.address = rec.address;
        }
    }
    public deleteRecord(id : number): void{
        throw new Error("Do it URSelf");
    }
} 