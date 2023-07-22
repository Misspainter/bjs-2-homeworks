function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
  this.marks = [];
}

Student.prototype.setSubject = function (subjectName) {
    this.subject = subjectName;
  
}

Student.prototype.addMarks = function (...marks) {
    if ( this.marks !== undefined) {
        this.marks.push(...marks);
    }
    
}

Student.prototype.getAverage = function () {
  if (typeof this.marks === false || this.marks === undefined){
     return 0;
  }
  let result = this.marks.reduce((acc, item, index, arr) => {
    acc += item;
    if (index === arr.lenght - 1) {
        return acc / arr.length
     } return acc;
  }, 0 );
  return result;
}

Student.prototype.exclude = function (reason) {
    delete this.subject;
    delete this.marks;

    this.excluded = reason;
  
}
