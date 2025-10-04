console.log("=== Class Function Examples (by Tới) ===");

// 1. Class cơ bản
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    speak() {
        console.log(`Xin chào, tôi là ${this.name}, năm nay ${this.age} tuổi.`);
    }
}

const p1 = new Person("Tới", 21);
p1.speak();

// 2. Class kế thừa (extends)
class Student extends Person {
    constructor(name, age, major) {
        super(name, age); // gọi lại constructor của Person
        this.major = major;
    }

    study() {
        console.log(`${this.name} đang học ngành ${this.major}`);
    }
}

const s1 = new Student("Tới", 21, "CNTT");
s1.speak();   // từ Person
s1.study();   // từ Student

// 3. Class có method static (không cần new)
class MathHelper {
    static add(a, b) {
        return a + b;
    }
}

console.log("Tính 5 + 7 =", MathHelper.add(5, 7));

// 4. Getter / Setter trong class
class Product {
    constructor(name, price) {
        this._name = name;
        this._price = price;
    }

    get price() {
        return this._price + " VND";
    }

    set price(newPrice) {
        if (newPrice > 0) {
            this._price = newPrice;
        } else {
            console.log("Giá phải > 0");
        }
    }
}

const phone = new Product("iPhone", 20000);
console.log(phone.price);   // getter
phone.price = 25000;        // setter
console.log(phone.price);
