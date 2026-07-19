class Student {
    name: string;
    id: string;
    scores: number[];

    constructor(name: string, id: string) {
        this.name = name;
        this.id = id;
        this.scores = []; 
    }

    addScore(score: number): void {
        this.scores.push(score);
    }

    getAverage(): number {
        if (this.scores.length === 0) {
            return 0; 
        }
        
        const sum = this.scores.reduce((total, current) => total + current, 0);
        
        return sum / this.scores.length;
    }
}

const studentJohn = new Student("John", "001");

studentJohn.addScore(85);
studentJohn.addScore(90);
studentJohn.addScore(78);

const johnAverage = studentJohn.getAverage();
console.log(`Student: ${studentJohn.name}`);
console.log(`Scores: ${studentJohn.scores.join(", ")}`);
console.log(`Average Score: ${johnAverage.toFixed(2)}`);