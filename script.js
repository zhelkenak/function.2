function calculateDiscount(price, discount) {
    
    if (price < 0 || discount < 0 || discount > 100) {
        return "Ошибка";
    }

    let discountAmount = price * discount / 100;
    let finalPrice = price - discountAmount;
 
    return finalPrice;
}

console.log(calculateDiscount(20000, 15));   
console.log(calculateDiscount(50000, 120));  
console.log(calculateDiscount(10000, -5));   

function getStudentLevel(score) {
    if (score >= 90 && score <= 100) {
        return "Отличный уровень. Продолжай в том же духе";
    } else if (score >= 70 && score < 90) {
        return "Хороший уровень. Есть над чем поработать";
    } else if (score >= 50 && score < 70) {
        return "Средний уровень. Попробуй еще раз";
    } else if (score >= 0 && score < 50) {
        return "Низкий уровень. Углубись в материал";
    } else {
        return "Некорректный балл";
    }
}

console.log(getStudentLevel(95));
console.log(getStudentLevel(72));
console.log(getStudentLevel(38));

function generatePassword(length) {
    let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$";
    let password = "";

    for (let i = 0; i < length; i++) {
        let index = Math.floor(Math.random() * chars.length);
        password += chars[index];
    }

    return password;
}

let userLength = 10;
console.log(generatePassword(userLength)); 
console.log(generatePassword(15));

function countVowelsAndConsonants(text) {
    let vowels = "аеёиоуыэюяaeiou";
    let consonants = "бвгджзклмнпрстфхцчшщbcdfghjklmnpqrstvwxyz";
    
    let vowelCount = 0;
    let consonantCount = 0;
 
    text = text.toLowerCase();
 
    for (let char of text) {
        if (vowels.includes(char)) {
            vowelCount++;
        } else if (consonants.includes(char)) {
            consonantCount++;
        }
    }
 
    return {
        vowels: vowelCount,
        consonants: consonantCount
    };
}
 
console.log(countVowelsAndConsonants("Программирование"));

let products = [
    { name: "Ноутбук", price: 350000 },
    { name: "Телефон", price: 220000 },
    { name: "Планшет", price: 180000 },
    { name: "Компьютер", price: 500000 }
];

function findCheapestProduct(products) {
    if (products.length === 0) {
        return null;
    }
 
    let cheapest = products[0];
 
    for (let product of products) {
        if (product.price < cheapest.price) {
            cheapest = product;
        }
    }
 
    return cheapest;
}
console.log(findCheapestProduct(products));



function calculateAttendance(total, attended) {
    if (total <= 0 || attended < 0 || attended > total) {
        return "Ошибка данных";
    }
 
    let percent = (attended / total) * 100;
 
    let status = "";
    if (percent >= 85) {
        status = "Высокая посещаемость";
    } else if (percent >= 60) {
        status = "Средняя посещаемость";
    } else {
        status = "Низкая посещаемость";
    }
 
    return {
        percent: percent.toFixed(1) + "%",
        status: status
    };
}
 
console.log(calculateAttendance(40, 36)); 
console.log(calculateAttendance(40, 28)); 
console.log(calculateAttendance(40, 20));



const students = [
    { name: "Алия", score: 92 },
    { name: "Руслан", score: 65 },
    { name: "Дамир", score: 78 },
    { name: "Аружан", score: 48 },
    { name: "Ильяс", score: 88 }
];
 
function getSuccessfulStudentsSorted(students) {
    return students
        .filter(student => student.score >= 70)
        .sort((a, b) => b.score - a.score); 
}
 
console.log(getSuccessfulStudentsSorted(students));



let balance = 100000;

function deposit(amount) {
    if (amount <= 0) return "Некорректная сумма";
    balance += amount;
    return "Баланс пополнен на " + amount;
}
 
function withdraw(amount) {
    if (amount <= 0) return "Некорректная сумма";
    if (amount > balance) return "Недостаточно средств";
    balance -= amount;
    return "Снято: " + amount;
}
 
function getBalance() {
    return balance;
}


function transfer(amount, targetAccountName) {
    if (amount <= 0) {
        return "Некорректная сумма для перевода";
    }
    if (amount > balance) {
        return "Недостаточно средств для перевода";
    }

    balance -= amount;
    return `Успешно переведено ${amount} тенге на счёт пользователя ${targetAccountName}. Остаток на счёте: ${balance}`;
}

console.log(transfer(25000, "Арман"));