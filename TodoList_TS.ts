// Create Employee Class

class Employee {
    public name: string;
    public email: string;
    public phone: number;

    constructor(name: string, email: string, phone: number) {
        this.name = name;
        this.email = email;
        this.phone = phone;
    }

    displayEmployee(): string {
        return this.name + " " + this.email + " " + this.phone;
    }

}

// Create UI class 

class UserInterface {
    static addEmployeeToList(employee) {
        
    }
}


// Event: Add 
document.querySelector('#addEmployee').addEventListener('click', () => {

    console.log("@@@@@@@@@@@@@@@@@@@@@@");

    // get The Element from The List
    const username: string = document.querySelector('#name').value;
    const email: string = document.querySelector('#email').value;
    const phone: number = parseInt(document.querySelector('#mobile').value);

    console.log("@@@@@@@@@@@@@@@@@@@@@@");

    // initilize The Employee Variable
    var employee = new Employee(username, email, phone);

    console.log(employee);

})