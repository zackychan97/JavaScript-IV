// CODE here for your Lambda Classes
//base class Person below
class Person  {
    constructor(personAttributes){
        //person receives name age and location as props
        this.name = personAttributes.name;
        this.age = personAttributes.age;
        this.location = personAttributes.location;
    }
    //methods go here
    //speak method below
    speak(){
        return `Hello my name is ${this.name}, I am from Bedrock`;
    }

}// closes person




//need to extend both students and instructors so lets start w the latter

class Instructors extends Person {
    constructor(instructorAttributes){
        super(instructorAttributes)
        //instructor receives specialty favlanguage and catchphrase as props
        this.specialty = instructorAttributes.specialty;
        this.favLanguage = instructorAttributes.favLanguage;
        this.catchPhrase = instructorAttributes.catchPhrase;
    }
    //methods go here
    demo(subject){
        return `Today we are learning about ${subject}`;
    }// closes demo
    grade(student, subject){
        return `${student.name} receives a perfect score on {subject}`;
    }//closes grade
}// closes instructors

//student class below
class Students extends person {
    constructor(studentAttributes){
        super(studentAttributes);
        this.previousBackground = studentAttributes.previousBackground;
        this.className = studentAttributes.className;
        this.favSubjects = studentAttributes.favSubjects;  
        //student receives previousbackground, classname, favsubjects
    }//closes constructor
    //methods here
    listsSubjects(){
        return `${this.favSubjects}`;
    }

    PRAssignment(subject){
        return `${this.name} has submitted a PR for ${this.subject}`;
    }

    sprintChallenge(subject){
        return `${this.name} has begun a sprint challenge on ${this.subject}`
    }
}//closes student




///// extended instructor and students, so now we need Project Manager which is an extension of instructor

class ProjectManager extends Instructors{
    //constructor
    constructor(ManagerAttributes){
        super(ManagerAttributes);
        this.gradClassName = ManagerAttributes.gradClassName;
        this.favInstructor = ManagerAttributes.favInstructor;
    }//closes constructor
    //methods go here
    standUp(){
        return `${this.name} announces to all of the coders in ${this.gradClassName}, @channel standy times!`;
    }

    debugsCode(){
        return `${this.name} debugs ${student.name}'s  code on ${subject}.`;
    }
}//closes project manager







/////////// Questions As I go //////////////

/*
1. in the Instructors class, when you look at the methods, would we console.log demo(subject) or return? What is the difference really
*/