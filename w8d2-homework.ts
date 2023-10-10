// ========================================================================CLASSES============================================================================================

abstract class RPGCharacter {
    
    constructor(protected ign: string){
        this.ign = ign
    }

    collect(): void {
        console.log(`${this.ign} collected some gold`)
    }
}

class Ogres extends RPGCharacter implements Attack, Defend, NewWeapon, DisplayCharacter {

    characterType: string
    weapon: string
    defense: string
    stats: string[]

    constructor (ign: string, characterType: string = 'Ogre', _weapon: string = 'club', defense: string = 'shield', stats: string[] = ['HP: 200', 'Str: 150', 'Def: 150', 'Spd: 20', 'Crit: 10']){
        super(ign)
        this.characterType = characterType
        this.weapon = _weapon
        this.defense = defense
        this.stats = stats
    }

    attack(): void {
        console.log(`${this.ign} attacks with a ${this.weapon}`)
    }

    defend(): void {
        console.log(`${this.ign} defends with a ${this.defense}`)
    }

    newWeapon(value: string): void {
        this.weapon = value
    }

    displayCharacter(): void {
        console.log(`
        IGN: ${this.ign}
        Character Type: ${this.characterType}
        Weapon: ${this.weapon}
        Defense: ${this.defense}
        Stats: ${this.stats}
        `)
    }
}

class Peons extends RPGCharacter implements Attack, Defend, NewWeapon, DisplayCharacter {

    characterType: string
    weapon: string
    defense: string
    stats: string[]

    constructor (ign: string, characterType: string = 'Peon', _weapon: string = 'club', defense: string = 'shield', stats: string[] = ['HP: 50', 'Str: 70', 'Def: 60', 'Spd: 50', 'Crit: 10']){
        super(ign)
        this.characterType = characterType
        this.weapon = _weapon
        this.defense = defense
        this.stats = stats
    }

    attack(): void {
        console.log(`${this.ign} attacks with a ${this.weapon}`)
    }

    defend(): void {
        console.log(`${this.ign} defends with a ${this.defense}`)
    }

    newWeapon(value: string): void {
        this.weapon = value
    }

    displayCharacter(): void {
        console.log(`
        IGN: ${this.ign}
        Character Type: ${this.characterType}
        Weapon: ${this.weapon}
        Defense: ${this.defense}
        Stats: ${this.stats}
        `)
    }
}

class Knights extends RPGCharacter implements Attack, Defend, NewWeapon, DisplayCharacter {

    characterType: string
    weapon: string
    defense: string
    stats: string[]

    constructor (ign: string, characterType: string = 'Knight', _weapon: string = 'sword', defense: string = 'armor', stats: string[] = ['HP: 130', 'Str: 100', 'Def: 250', 'Spd: 30', 'Crit: 20']){
        super(ign)
        this.characterType = characterType
        this.weapon = _weapon
        this.defense = defense
        this.stats = stats
    }

    attack(): void {
        console.log(`${this.ign} attacks with a ${this.weapon}`)
    }

    defend(): void {
        console.log(`${this.ign} defends with ${this.defense}`)
    }

    newWeapon(value: string): void {
        this.weapon = value
    }

    displayCharacter(): void {
        console.log(`
        IGN: ${this.ign}
        Character Type: ${this.characterType}
        Weapon: ${this.weapon}
        Defense: ${this.defense}
        Stats: ${this.stats}
        `)
    }
}

class Archers extends RPGCharacter implements Attack, Defend, NewWeapon, DisplayCharacter {

    characterType: string
    weapon: string
    defense: string
    stats: string[]

    constructor (ign: string, characterType: string = 'Archer', _weapon: string = 'Bow and Arrow', defense: string = 'tunic', stats: string[] = ['HP: 60', 'Str: 130', 'Def: 60', 'Spd: 200', 'Crit: 80']){
        super(ign)
        this.characterType = characterType
        this.weapon = _weapon
        this.defense = defense
        this.stats = stats
    }

    attack(): void {
        console.log(`${this.ign} attacks with a ${this.weapon}`)
    }

    defend(): void {
        console.log(`${this.ign} defends with a ${this.defense}`)
    }

    newWeapon(value: string): void {
        this.weapon = value
    }

    displayCharacter(): void {
        console.log(`
        IGN: ${this.ign}
        Character Type: ${this.characterType}
        Weapon: ${this.weapon}
        Defense: ${this.defense}
        Stats: ${this.stats}
        `)
    }
}

// ========================================================================INTERFACES============================================================================================

interface Attack {
    attack(): void
}

interface Defend {
    defend(): void
}

interface NewWeapon {
    newWeapon(value: string): void
}

interface DisplayCharacter {
    displayCharacter(): void
}

// ========================================================================INSTANCES/TESTING============================================================================================


// Making multiple RPG Characters of different sub class
const rpgCharacterList: RPGCharacter[] = [new Ogres('OgreKing'), new Peons('PeonSpecialist'), new Knights('K1ng 4rthur'), new Archers('OliverQueen')]

console.log(rpgCharacterList)


// Testing each method for a character role
const OgreCharacter = new Ogres('OgreKing')
OgreCharacter.attack()
OgreCharacter.defend()
OgreCharacter.collect()
OgreCharacter.displayCharacter()


const PeonCharacter = new Peons('PeonSpecialist')
PeonCharacter.attack()
PeonCharacter.defend()
PeonCharacter.collect()
PeonCharacter.displayCharacter()

const KnightCharacter = new Knights('K1ng 4rthur')
KnightCharacter.attack()
KnightCharacter.defend()
KnightCharacter.collect()
KnightCharacter.displayCharacter()

const ArcherCharacter = new Archers('OliverQueen')
ArcherCharacter.attack()
ArcherCharacter.defend()
ArcherCharacter.collect()
ArcherCharacter.displayCharacter()


// Testing Updating Weapon
PeonCharacter.newWeapon('sword')
PeonCharacter.attack()