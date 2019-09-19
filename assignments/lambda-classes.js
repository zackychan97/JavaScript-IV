// CODE here for your Lambda Classes
//base class Person below
class Person = {
    constructor(personAttributes){
        //person receives name age and location as props
        this.name = personAttributes.name;
        this.age = personAttributes.age;
        this.location = personAttributes.location;
    }
    //methods go here
    //speak method below
    speak(){
        return `Hello my name is ${this.name}, I am from Bedrock`
    }

}// closes person