Union(|) and Intersection(&) :

Union:
It is accept a different type of value : as a number, string,boolean.
We can assign anyone value.

Intersection:
Intersection is a  combine  multiple type value in a one type.

Example of Union:

type Student = {
    name: string;
    id: number;
}

type Engineer = {
    name: string;
    salary: number;
}

type Person = Student | Enginerr;

const Person1: Person ={
    name: "Rafi",
    id: 108
}



Example of Intersection:

type Doctor = {
    name: string;
    designation: string;
}

type Engineer = {
    name: string;
    salary: number;
}

type GoodBehavior = Doctor & Engineer;

const person: GoodBehavior = {
    name: "Akbor",
    designation: "Assistant Professor",
    salary: 45000

}


Conclusion:




