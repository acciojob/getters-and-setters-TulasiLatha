//complete this code
class Person {
	constructor(name,age){
		this.name=name;
		this.age=age;
	}
	const user=new Person(
		"tulasi","22")
	)
	getName(){
		return "This user name"+this.name;
	}
	setName(){
		this.age=age;
	}
}

class Student extends Person {
	study(){
		console.log(this.name+"is studying");
	}
	
}

class Teacher extends Person {}
teach(){
	console.log(this.name+"is teaching");
}
// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
