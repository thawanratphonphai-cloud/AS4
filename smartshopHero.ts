function findLowStockItems(quantities: number[], threshold: number): number[] {
    return quantities.filter(qty => qty < threshold);
}

// Part 2

class Product {
    readonly id: number;
    name: string;
    price: number;
    quantity: number;

    constructor(id: number, name: string, price: number, quantity: number) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }

    sell(amount: number): void {
        if (amount > this.quantity) {
            console.log(`Error: Not enough stock for ${this.name}`);
        } else {
            this.quantity -= amount;
        }
    }

    restock(amount: number): void {
        this.quantity += amount;
    }
}

// Part 3 
class Hero {
    name: string;
    hp: number;
    inventory: Product[];

    constructor(name: string, hp: number) {
        this.name = name;

        this.hp = hp;
        this.inventory = [];
    }

    addItem(item: Product): void {
        this.inventory.push(item);
    }

    useItem(itemName: string): void {
        const itemIndex = this.inventory.findIndex(item => item.name === itemName);

        if (itemIndex !== -1) {
            const item = this.inventory[itemIndex];
            
            console.log(`${this.name} used ${item.name}. Remaining: ${item.quantity}`);

            if (item.quantity <= 0) {
                this.inventory.splice(itemIndex, 1);
            }
        } else {
            console.log(`Item "${itemName}" not found in inventory.`);
        }
    }

    // Part 4: Take Damage Method
    takeDamage(damage: number): void {
        this.hp -= damage;
        if (this.hp <= 0) {
            this.hp = 0;
            console.log(`Game Over: ${this.name} has fallen!`);
        }
    }
}

console.log("--- Testing Part 1: findLowStockItems ---");
const lowStock = findLowStockItems([20, 5, 12, 8, 30], 10);
console.log("Low stock items (< 10):", lowStock); 

console.log("\n--- Testing Part 2: Product Class ---");
const potion = new Product(1, "Health Potion", 50, 2);
potion.sell(3); 
potion.sell(1); 
console.log(`Current ${potion.name} stock:`, potion.quantity);
potion.restock(5); 
console.log(`After restock ${potion.name}:`, potion.quantity);

console.log("\n--- Testing Part 3 & 4: Hero System ---");
const myHero = new Hero("Arthur", 100);

const hiPotion = new Product(2, "High Potion", 100, 2);
myHero.addItem(hiPotion);

myHero.useItem("High Potion"); 
myHero.useItem("High Potion"); 
console.log("Inventory size after using all potions:", myHero.inventory.length); 

console.log("\n--- Testing Damage System ---");
myHero.takeDamage(40);
console.log(`Hero HP: ${myHero.hp}`);
myHero.takeDamage(70); 