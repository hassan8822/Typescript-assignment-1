
const multiplyValue = (
    value: number,
    multiplier?: number ): number => {

    if(multiplier === undefined){
        return value * 2;

    }
    else{
        return value * multiplier;
    }
  }



const processInput = (
    value: string | number | boolean):
    string | number | boolean => {

        if(typeof value === "string"){
            return value.trim().toLowerCase();
        }
        else if(typeof value === "number"){
            return value * 10;
        }

        else{
            return value ? "Active" : "Inactive";
        }

    } 




const formatCoordinate=  ([latitude, longitude,locationName]:
readonly [number ,number ,string]):
 string => {
    return `Location: ${locationName} (${latitude}, ${longitude})`;
    
    } 




const concatenateArrays = <T>(...arrays: T[][]): 
                           T[] => {
    return arrays.reduce<T[]>((catenate, arr) => 
        [...catenate, ...arr],
    []);
    
    

}



interface Course{
    title: string;
    students: number;
    isPublished: boolean;
}

const getPopularCourses =(
     Courses: Course[],
     minStudents: number, ): Course[] =>{
   return Courses.filter(course => course.isPublished && course.students >= minStudents ); 
};



interface Users{
    id: number;
    name: string;
    role: string;
}

const pluckValues = <T,K extends keyof T>(
    items: T[],
    key: K): T[K][] => {
        return items.map(item => item[key])

    }







    

class Employee{
    constructor(
      protected name: string,
     private _baseSalary: number,
    ) {}

    get baseSalary(): number{
        return this._baseSalary;
    }

    set baseSalary(newSalary: number) {
        if (newSalary < 0){
            throw new Error("Cannot negeative");
        }
        this._baseSalary = newSalary;
    }

    getDetails(){
        return `Employee: ${this.name}, Base Salary: ${this.baseSalary}`;
    }
}


class Manager extends Employee{
   private department: string;

    constructor( name: string, 
        baseSalary: number,
        department: string,)
        {
        super(name, baseSalary);
        this.department = department;
    }

    getRoleInfo() {
        return `Manager of ${this.department}: ${this.name}`;
    }
}









const validateAgeAsync = async (age: number): Promise<string> => {

         if(age >= 18){
  await  new Promise(resolve => setTimeout(resolve, 1000));
    return "Access Granted"

   }
   else{
    throw new Error("Access Denied: Must be 18 or older")
   }
    
   }





