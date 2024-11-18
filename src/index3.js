// Classes of Heroes
class Heroe {
    constructor(name, age, type) {
      this.name = name;
      this.age = age;
      this.type = type;
    }
  
    attack() {
      let attacked;
      
      // Switch-Case Decision Structure
      switch (this.type) {
        case "Mage":
          attacked = "magic!";
          break;
        case "Warrior":
          attacked = "a sword!";
          break;
        case "Monk":
          attacked = "martial arts!";
          break;
        case "Ninja":
          attacked = "a shuriken!";
          break;
        default:
          attacked = "clean hands!";
      }
  
      console.log(`The ${this.type} attacked using ${attacked}`);
    }
  }
  
  // instances of heroes
  const heroeWarrior = new Heroe("Arthur", 29, "Warrior");
  const heroeMage = new Heroe("Lilly", 25, "Mage");
  const heroeMonk = new Heroe("Shin", 38, "Monk");
  const heroeNinja = new Heroe("Ryuzen", 28, "Ninja");
  
  // Vector to add to a list
  const heroes = [heroeWarrior, heroeMage, heroeMonk, heroeNinja];
  
  // Repeat loop to call each hero's attack() method
  for (const heroe of heroes) {
    heroe.attack();
  }
  