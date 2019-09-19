/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday










/*
  === GameObject ===
  * createdAt
  * dimensions (These represent the character's size in the video game)
  * destroy() // prototype method -> returns the string: 'Object was removed from the game.'
*/

// function GameObject (attributes) {
//     this.createdAt = attributes.createdAt;
//     this.dimensions = attributes.dimensions;
//   }
  
  class GameObject {
      constructor(gameObjectAttributes){
          this.createdAt = gameObjectAttributes.createdAt;
          this.dimensions = gameObjectAttributes.dimensions; 
      }
      //methods
      destroy(){
          return `${this.name} was removed from the game.`;
      }
  }//closes game object
  
  /*
    === CharacterStats ===
    * healthPoints
    * name
    * takeDamage() // prototype method -> returns the string '<object name> took damage.'
    * should inherit destroy() from GameObject's prototype
  */
  
//   function CharacterStats (attributes) {
//     GameObject.call(this, attributes);
//     this.name = attributes.name;
//     this.healthPoints = attributes.healthPoints;
//   }

  class CharacterStats extends GameObject {
      constructor(characterAttributes) {
          super(characterAttributes)
          this.newHealthPoints =characterAttributes.newHealthPoints
      }
      takeDamage(){
        return `${this.name} was attacked and damaged!`;
    }
  }
  

  
  
  
  /*
    === Humanoid (Having an appearance or character resembling that of a human.) ===
    * team
    * weapons
    * language
    * greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
    * should inherit destroy() from GameObject through CharacterStats
    * should inherit takeDamage() from CharacterStats
  */
   
  
//   function Humanoid (attributes) {
//     CharacterStats.call(this, attributes);
//     this.team = attributes.team;
//     this.weapons = attributes.weapons;
//     this.language = attributes.language;
//   }
  


class Humanoid extends CharacterStats {
    constructor(humanAttributes){
        super(humanAttributes);
        this.team = humanAttributes.team;
        this.weapons = humanAttributes.weapons;
        this.language = humanAttributes.language;
    }
    greet(){
        return `${this.newname} offers a greeting in ${this.language}.`;
    }
}//closes humanoid
  
  
  /*
    * Inheritance chain: GameObject -> CharacterStats -> Humanoid
    * Instances of Humanoid should have all of the same properties as CharacterStats and GameObject.
    * Instances of CharacterStats should have all of the same properties as GameObject.
  */
  
//   CharacterStats.prototype = Object.create(GameObject.prototype);
  
//   Humanoid.prototype = Object.create(CharacterStats.prototype);
  
//   GameObject.prototype.destroy = function () {
//     return `${this.name} was removed from the game`
//   }
  
//   CharacterStats.prototype.takeDamage = function () {
//     return `${this.name} took damage`
//   }
  
//   Humanoid.prototype.greet = function () {
//     return `Hello I am ${this.name}`
//   }
  
  
  
  // Test you work by un-commenting these 3 objects and the list of console logs below:
  
    const mage = new Humanoid({
      createdAt: new Date(),
      dimensions: {
        length: 2,
        width: 1,
        height: 1,
      },
      healthPoints: 5,
      name: 'Bruce',
      team: 'Mage Guild',
      weapons: [
        'Staff of Shamalama',
      ],
      language: 'Common Tongue',
    });
  
    const swordsman = new Humanoid({
      createdAt: new Date(),
      dimensions: {
        length: 2,
        width: 2,
        height: 2,
      },
      healthPoints: 15,
      name: 'Sir Mustachio',
      team: 'The Round Table',
      weapons: [
        'Giant Sword',
        'Shield',
      ],
      language: 'Common Tongue',
    });
  
    const archer = new Humanoid({
      createdAt: new Date(),
      dimensions: {
        length: 1,
        width: 2,
        height: 4,
      },
      healthPoints: 10,
      name: 'Lilith',
      team: 'Forest Kingdom',
      weapons: [
        'Bow',
        'Dagger',
      ],
      language: 'Elvish',
    });
  
    console.log(mage.createdAt); // Today's date
    console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
    console.log(swordsman.healthPoints); // 15
    console.log(mage.name); // Bruce
    console.log(swordsman.team); // The Round Table
    console.log(mage.weapons); // Staff of Shamalama
    console.log(archer.language); // Elvish
    console.log(archer.greet()); // Lilith offers a greeting in Elvish.
    console.log(mage.takeDamage()); // Bruce took damage.
    console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.
//   stretch
//   // Stretch task: 
//     // * Create Villain and Hero constructor functions that inherit from the Humanoid constructor function.  
//     // * Give the Hero and Villains different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
//     // * Create two new objects, one a villain and one a hero and fight it out with methods!
  

// class Villain extends Humanoid{
//     constructor(villainAttributes){
//         super(villainAttributes);
//         this.healthDrain = villainAttributes.healthDrain;
//     }

//     attackVillain(hero){
//         const randomAttack = 
    
// }



// class Hero extends Humanoid{
//     constructor(heroAttributes){
//         super(heroAttributes);
//     }
//     //methods will go here
// }






/*
2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.
*/
