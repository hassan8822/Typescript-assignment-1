Acces-Modifiers:
Modifires is a specific keyword that can change the nature of  value,method etc.

mainly it is a 4 type;
1.Public: 
we can access anywhere in the code.it is a default modifier in the typescript.

2.Private:
we can not access outside of the class.

3.Protected:
if we use 'protected' keyword in parent class ,we can access it.but outside of class we cann't direct access it.another,we can define a child class and extend keyword use .we can use it.

4.Readonly:
we can see the value ,but we can not change the initialized value.

Code Examples:

class Manager{
    constructor(
      public name: string,
     private _baseSalary: number,
     protected role: string,
     readonly email: string,

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

class Employes extends Manager{
    getRole(): string{
       return this.role;
    };
};


Conclusion:
Access modifiers is a very important for a developer.because,it can maintain  a secure code and well organized code and protected reassignment.