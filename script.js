//complete this code
class Person {
	constructor(name,age){
		this.name=name;
		this.age=age;
	}
	const Person=win.Person;
	const Person=new Person("John",30);

	getName(){
		return "This user name"+this.name;
	}
	setAge(){
		this.age=newAge;
	}
	
	
}

class Student extends Person {
	study(){
		const Student=win.Student;
		const student=new Student("John",30);
		console.log('${student.name}is studying');
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
