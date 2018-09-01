class Vampire {
  constructor(name, yearConverted) {
    this.name = name;
    this.yearConverted = yearConverted;
    this.creator = null;
    this.offspring = [];

  }

  /** Simple tree methods **/

  // Adds the vampire as an offspring of this vampire
  addOffspring(vampire) {
    this.offspring.push(vampire);
    vampire.creator = this;
  }

  // Returns the total number of vampires created by that vampire
  get numberOfOffspring() {
    return this.offspring.length;
  }

  // Returns the number of vampires away from the original vampire this vampire is
  get numberOfVampiresFromOriginal() {
    let numberOfOffspring = 0;
    let currentVampire = this;
    while (currentVampire.creator) {
      currentVampire = currentVampire.creator;
      numberOfOffspring++;
    }
    return numberOfOffspring;
  }

  // Returns true if this vampire is more senior than the other vampire. (Who is closer to the original vampire)
  isMoreSeniorThan(vampire) {
    return this.numberOfVampiresFromOriginal < vampire.numberOfVampiresFromOriginal;
  }

  /** Tree traversal methods **/

  // Returns the vampire object with that name, or null if no vampire exists with that name
  vampireWithName(name) {
    if (this.name = name) {
      return this;
    }

    for (let i=0;i<this.offspring.length;i++) {
      let child = this.offspring[i];
      let res = child.vampireWithName(name);
      if (res != null) {
        return res;
      }
    }

    return null;
  }

  // Returns the total number of vampires that exist
  get totalDescendents() {
    if (this.offspring.length === 0) {
      return 0;
    }
    let total = 0;
     for (let i = 0; i < this.offspring.length; i++) {
        let child = this.offspring[i];
        let result = 1 + child.totalDescendents;
        total += result;
     }
     return total;


  }

  get allVampires() {
     let array = [];
     array.push(this);

     if (this.offspring.length === 0) {
      return array;
     }

     for (let i = 0; i < this.offspring.length; i++) {
      let child = this.offspring[i];
      array = array.concat(child.allVampires);
     }
     return array;
  }

  // Returns an array of all the vampires that were converted after 1980
  get allMillennialVampires() {
    if (this.yearConverted > 1980) {
      return this.allVampires;
    }

    let array = [];
    for (let i = 0; i < this.offspring.length; i++) {
      let child = this.offspring[i];
      array = array.concat(child.allMillennialVampires);
    }

    return array;
  }

  /** Tree traversal methods **/

  // Returns the vampire object with that name, or null if no vampire exists with that name
  vampireWithName(name) {
    
  }

  // Returns the total number of vampires that exist
  get totalDescendents() {
    
  }

  // Returns an array of all the vampires that were converted after 1980
  get allMillennialVampires() {
    
  }

  /** Stretch **/

  // Returns the closest common ancestor of two vampires.
  // The closest common anscestor should be the more senior vampire if a direct ancestor is used.
  // For example:
  // * when comparing Ansel and Sarah, Ansel is the closest common anscestor.
  // * when comparing Ansel and Andrew, Ansel is the closest common anscestor.
  closestCommonAncestor(vampire) {

  }
}

module.exports = Vampire;

