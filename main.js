// Створити функцію конструктор для обєкту який описує теги
// Властивості
// -назва тегу
// - опис його дій
// - масив з атрибутами (2-3 атрибути максимум)
// Кожен атрибут описати як окремий який буде містити
// -назву атрибуту
// -опис дії атрибуту
// інформацію брати з htmlbook.ru

// function TagDescribe(titleOfTag, action, attrs) {
//     this.titleOfTag = titleOfTag;
//     this.action = action;
//     this.attrs = attrs;

// }

// let name = '<a>';
// let actions = 'Тег <a> является одним из важных элементов HTML и предназначен для создания ссылок.';
// let attributes = [
//     {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//     {titleOfAttr: "coords", actionOfAttr: 'Устанавливает координаты активной области.'},
//     {titleOfAttr: 'download', actionOfAttr: 'Предлагает скачать указанный по ссылке файл.'},
// ];
//
// let a = new TagDescribe(name, actions, attributes);
// console.log(a);

// let name = '<div>';
// let actions = 'Элемент <div> является блочным элементом и предназначен для выделения фрагмента документа с целью  изменения вида содержимого.'+
//     'Как правило, вид блока управляется с помощью стилей. Чтобы не описывать каждый раз стиль внутри тега, можно выделить стиль во внешнюю таблицу стилей,'+
//     'а для тега добавить атрибут class или id с именем селектора.';
// let attributes = [
//     {titleOfAttr: 'align', actionOfAttr: 'Задает выравнивание содержимого тега <div>.'},
//     {titleOfAttr: "title", actionOfAttr: 'Добавляет всплывающую подсказку к содержимому'},
//
// ];
//
// let div = new TagDescribe(name, actions, attributes);
// console.log(div);


// let name = '<h1>';
// let actions = 'HTML предлагает шесть заголовков разного уровня, которые показывают относительную важность секции, расположенной после заголовка.';
// let attributes = [
//     {titleOfAttr: 'align', actionOfAttr: 'Определяет выравнивание заголовка.'},
// ];
//
// let h1 = new TagDescribe(name, actions, attributes);
// console.log(h1);

// let name = '<option>';
// let actions = 'Тег <option> определяет отдельные пункты списка, создаваемого с помощью контейнера <select>. Ширина списка определяется самым широким текстом, указанным в теге <option>, а также может изменяться с помощью стилей.';
// let attributes = [
//     {titleOfAttr: 'disabled', actionOfAttr: 'Заблокировать для доступа элемент списка.'},
//     {titleOfAttr: 'label', actionOfAttr: 'Указание метки пункта списка.'},
//     {titleOfAttr: 'selected', actionOfAttr: 'Заранее устанавливает определенный пункт списка выделенным.'},
// ];
//
// let option = new TagDescribe(name, actions, attributes);
// console.log(option);
//
// let name = '<span>';
// let actions = 'Тег <span> предназначен для определения строчных элементов документа. ';
// let attributes = [
//     {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//      {titleOfAttr: "coords", actionOfAttr: 'Устанавливает координаты активной области.'},
//      {titleOfAttr: 'download', actionOfAttr: 'Предлагает скачать указанный по ссылке файл.'},
// ];
//
// let span = new TagDescribe(name, actions, attributes);
// console.log(span);


//Створити класс  для об'єкту який описує теги
// Властивості
//  -назва тегу
//  - опис його дій
//  - масив з атрибутами (2-3 атрибути максимум)


// class TagDescribe {
//   constructor (titleOfTag, action, attrs) {
//     this.titleOfTag = titleOfTag;
//     this.action = action;
//     this.attrs = attrs;

//  }
// }
// let name = '<a>';
// let actions = 'Тег <a> является одним из важных элементов HTML и предназначен для создания ссылок.';
// let attributes = [
//     {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//     {titleOfAttr: "coords", actionOfAttr: 'Устанавливает координаты активной области.'},
//     {titleOfAttr: 'download', actionOfAttr: 'Предлагает скачать указанный по ссылке файл.'},
// ];
//
// let a = new TagDescribe(name, actions, attributes);
// console.log(a);

// let name = '<h1>';
// let actions = 'HTML предлагает шесть заголовков разного уровня, которые показывают относительную важность секции, расположенной после заголовка.';
// let attributes = [
//     {titleOfAttr: 'align', actionOfAttr: 'Определяет выравнивание заголовка.'},
// ];
//
// let h1 = new TagDescribe(name, actions, attributes);
// console.log(h1);

// let name = '<option>';
// let actions = 'Тег <option> определяет отдельные пункты списка, создаваемого с помощью контейнера <select>. Ширина списка определяется самым широким текстом, указанным в теге <option>, а также может изменяться с помощью стилей.';
// let attributes = [
//     {titleOfAttr: 'disabled', actionOfAttr: 'Заблокировать для доступа элемент списка.'},
//     {titleOfAttr: 'label', actionOfAttr: 'Указание метки пункта списка.'},
//     {titleOfAttr: 'selected', actionOfAttr: 'Заранее устанавливает определенный пункт списка выделенным.'},
// ];
//
// let option = new TagDescribe(name, actions, attributes);
// console.log(option);
//
// let name = '<span>';
// let actions = 'Тег <span> предназначен для определения строчных элементов документа. ';
// let attributes = [
//     {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//      {titleOfAttr: "coords", actionOfAttr: 'Устанавливает координаты активной области.'},
//      {titleOfAttr: 'download', actionOfAttr: 'Предлагает скачать указанный по ссылке файл.'},
// ];
//
// let span = new TagDescribe(name, actions, attributes);
// console.log(span);


// -- Створити об'єкт car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car


// let car = {
//     model: "Passat",
//     manufacturer: "VolksWagen",
//     year: 2016,
//     maxSpeed: 220,
//     capacity: 2.0,
//     driver: 'Empty',
//
//
//     drive: function () {
//         console.log(`Їдемо із швидкістю ${this.maxSpeed} на годину`);
//
//     },
//
//      info() { console.log(
//          ` model: ${this.model},
//            manufacturer: ${this.manufacturer},
//            driver: ${this.driver},
//            year: ${this.year},
//            maxSpeed:${this.maxSpeed},
//            capacity: ${this.capacity},
//            `);
//     },
//
//
//     increaseMaxSpeed (newSpeed) {
//         this.maxSpeed += newSpeed;
//         console.log(this.maxSpeed);
//     },
//
//     changeYear (newValue) {
//         this.year = newValue
//         console.log(this.year);
//     },
//
//     addDriver (driver) {
//         this.driver = newDriver;
//         console.log(this.driver);
//
//     }
// }
// let newDriver = {
//     name: 'Jenya',
//     age: 35,
//     experience: 15
// };
//
// let newSpeed = 50;
// car.addDriver(newDriver);
// car.changeYear(2017)
// car.increaseMaxSpeed(newSpeed)
// car.drive();
// car.info();
// console.log(car);


//- Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car


// function Car(model, manufacturer, year, maxSpeed, capacity, driver) {
//     this.model = model;
//     this.manufacturer = manufacturer;
//     this.year = year;
//     this.maxSpeed = maxSpeed;
//     this.capacity = capacity;
//     this.driver = 'empty'
//
//
//     this.drive =function () {
//         console.log(`Їдемо із швидкістю ${this.maxSpeed} на годину`);
//
//     }
//
//     this.info = function () { console.log(
//         ` model: ${this.model},
//           manufacturer: ${this.manufacturer},
//           driver: ${this.driver},
//           year: ${this.year},
//           maxSpeed:${this.maxSpeed},
//           capacity: ${this.capacity},
//           `);
//
//     }
//
//
//     this.increaseMaxSpeed =function (newSpeed) {
//         this.maxSpeed += newSpeed;
//         console.log(this.maxSpeed);
//     }
//
//     this.changeYear = function (newValue) {
//         this.year = newValue
//         console.log(this.year);
//     }
//
//     this.addDriver = function (driver) {
//         this.driver = newDriver;
//         console.log(this.driver);
//
//     }
//
// }
//
// let car = new Car('Passat', 'VolksWagen', '2016', 220, 2.0)
// console.log(car);
//
// let newDriver = {
//     name: 'Jenya',
//     age: 35,
//     experience: 15
// };
//
// let newSpeed = 50;
// car.addDriver(newDriver);
// car.changeYear(2017)
// car.increaseMaxSpeed(newSpeed)
// car.drive();
// car.info();
// console.log(car);


//- Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car


// class Car {
//     constructor(model, manufacturer, year, maxSpeed, capacity) {
//         this.model = model;
//         this.manufacturer = manufacturer;
//         this.year = year;
//         this.maxSpeed = maxSpeed;
//         this.capacity = capacity;
//         this.driver = 'empty'
//
//     }
//
//     drive() {
//         console.log(`Їдемо із швидкістю ${this.maxSpeed}`)
//     }
//
//
//     info() {
//         console.log(
//             ` model: ${this.model},
//               manufacturer: ${this.manufacturer},
//               driver: ${this.driver},
//               year: ${this.year},
//               maxSpeed:${this.maxSpeed},
//               capacity: ${this.capacity},
//       `);
//     }
//
//       increaseMaxSpeed(newSpeed) {
//         this.maxSpeed += newSpeed;
//         console.log(this.maxSpeed);
//     }
//
//     changeYear(newValue) {
//         this.year = newValue
//         console.log(this.year);
//     }
//
//     addDriver(driver) {
//         this.driver = newDriver;
//         console.log(this.driver);
//     }
//
// }
//
// let car = new Car('Passat', 'VolksWagen', '2016', 220, 2.0)
// console.log(car);
//
// let newDriver = {
//     name: 'Jenya',
//     age: 35,
//     experience: 15
// };
//
// let newSpeed = 50;
// car.addDriver(newDriver);
// car.changeYear(2017)
// car.increaseMaxSpeed(newSpeed)
// car.drive();
// car.info();
// console.log(car);

//-створити класс попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// -- за допоиоги циклу знайти яка попелюшка повинна бути з принцом

// class Cinderella {
//     constructor(name, age, footSize) {
//         this.name = name;
//         this.age = age;
//         this.footSize = footSize;
//     }
// }
//
// class Prince  {
//     constructor(name, age, sizeFind) {
//         this.name = name;
//         this.age = age;
//         this.sizeFind = sizeFind;
//     }
// }
//
// let cinderellas = [
//     new Cinderella('Anna', 22, 38),
//     new Cinderella('Inna', 22, 39),
//     new Cinderella('Ira', 22, 38),
//     new Cinderella('Olga', 22, 38),
//     new Cinderella('Katya', 22, 37),
//     new Cinderella('Vika', 22, 33),
//     new Cinderella('Nastya', 22, 36),
//     new Cinderella('Marta', 22, 41),
//     new Cinderella('Sonya', 22, 39),
//     new Cinderella('Galya', 22, 38)
//  ] ;
//
// console.log(cinderellas);
//
//  let prince = new Prince('leonid', 36, 37);
//
//
// for (let princess  of cinderellas) {
//     if (princess.footSize === prince.sizeFind) {
//         console.log(princess);
//
// }
//
// }


//-створити функцію конструктор попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт типу "принц" за допомоги функції конструктора з полями ім'я, вік, туфелька яку він знайшов, та функцію "пошук попелюшки"
// -- функція повинна приймати масив попелюшок, та шукає ту котра йому підходить

// function Cinderella(name, age, footSize) {
//     this.name = name;
//     this.age = age;
//     this.footSize = footSize;
// }
//
// function Prince(name, age, sizeFind) {
//     this.name = name;
//     this.age = age;
//     this.sizeFind = sizeFind;
//
//     this.findPrinsess = function (arrSinderellas) {
//         for (let prinsess of arrSinderellas) {
//             if (prinsess.footSize === prince.sizeFind){
//                 console.log(prinsess);
//             }
//
//         }
//
//     }
// }
//
// let cinderellas = [
//     new Cinderella('Anna', 22, 38),
//     new Cinderella('Inna', 24, 39),
//     new Cinderella('Ira', 27, 38),
//     new Cinderella('Olga', 21, 38),
//     new Cinderella('Katya', 34, 37),
//     new Cinderella('Vika', 29, 33),
//     new Cinderella('Nastya', 22, 36),
//     new Cinderella('Marta', 22, 41),
//     new Cinderella('Sonya', 32, 39),
//     new Cinderella('Galya', 22, 38)
// ];
//
// let prince = new Prince('leonid',36, 37);
//
// prince.findPrinsess(cinderellas);

//Hеобхідно реалізувати базовий клас комютера. Який має лише параметри:
// Оперативна память.
// Потужність процесора. (цифра від 0 до 1000)
// Назва.
// В кожного компютера має бути метод включання.

// class Computer {
//     constructor(name, cpu, ram) {
//         this.name = name;
//         this.ram = ram;
//         this.cpu = cpu;
//     }
//
//     goStart() {
//         console.log('Ввімкнення');
//     }
// }

//Від базового компютрера треба реалізувати ноутбук.
// Він має нову властивість дюймаж монітора.
//
// У нього зявляється нова змінна роботи батареї. Ця змінна визначається як потужність / (дюйми * оперативку)


// class Laptop extends Computer {
//     constructor(name, cpu, ram, inchMonitor) {
//         super(name, cpu, ram);
//         this.inchMonitor = inchMonitor;
//         this.battery = Math.round(this.cpu / this.inchMonitor * this.ram);
//     }
//
//     goStart() {
//         console.log('Ввімкнення');
//     }
// }

//Від ноутбука потрібно зробити ультрабук.
// Він має нову змінну ваги.
// При включенні ультрабуку має видаватися помилка, якшо вага більша за 2кг та батарея тримаж менше ніж 4 години.

//
// class Ultrabook extends Laptop {
//     constructor(name, cpu, rum, inchMonitor, battery, weight) {
//         super(name, cpu, rum, inchMonitor, battery);
//         this.weight = weight;
//
//     }
//
//     goStart() {
//         if (this.weight < 2 && this.battery > 4) {
//             console.log('Hello');
//         } else {
//             console.log(`Error this ${this.name} is broken`);
//         }
//     }
// }


//Від базвого класу потрібно створити базовий ПК.
// В нього має бути новий метод запуску ігор.
// Кількість FPS визначається як потужність / опервтивку.
// Example: `You are playing *GAME_NAME* with *FPS_COUNT* FSP`

// class BasicPc extends Computer {
//     constructor(name, cpu, ram, fps) {
//         super(name, cpu, ram);
//         this.fps = this.cpu / this.ram;
//     }
//
//     goPlay (game) {
//         console.log(`You are playing ${game} with ${this.fps} FPS`);
//     }
//
//     goStart() {
//         console.log('Ввімкнення');
//     }
//
// }

//Компютер можна апгрейдити.
// Потужність процесора можна збільшувати максимум на 10%. Зменшувати її не можна.
// Оперативку можна збільшити лише в 2 рази. Зменшувати її не можна.
// Для зміни характеритик мають бути свої методи. Мняти змінну "в лоб" заборонено.

// class BasicPc extends Computer {
//     constructor(name, cpu, ram, fps) {
//         super(name, cpu, ram);
//         this.fps = this.cpu / this.ram;
//     }
//
// //
//     setPower (newPower) {
//          this.cpu = newPower
//          console.log(newPower);
//      }
//
//     goStart() {
//         console.log('Ввімкнення');
//     }
//
// }

//Від базового ПК необхідно зробити ігровий ПК.
// Кількість ФПС має бути рівно в 2 рази більший ніж в звичайного ПК.
// При запуску однієї гри потужніть процесора має падати на 0.1%.
// Якшо потужність процесора менша ніж 500. І оперативка менша за 8 потрібно видати помилку, (алерт, або консоль)
// що на цьому відрі ігри не запускаються.

// class GamePc extends BasicPc {
//     constructor(name, cpu, ram, fps) {
//         super(name, cpu, ram, fps);
//         this.fps *= 2;
//
//     }
//     goStart() {
//         console.log('Ввімкнення');
//     }
//
//     goStartGame(game) {
//         if (this.cpu < 500 && this.ram < 8) {
//             console.error(`На цьому відрі ${this.name} ігри не запускаються`);
//         } else {
//             this.cpu -= this.cpu * 0.01;
//             console.log(`let's go to play ${game} with cpu level ${this.cpu} `)
//         }
//     }
//
//
// }


// let comp = new Computer('basicComp', 500, 8)
// let compTop = new Laptop('laptop', 800, 16, 15.6)
// let ultrabook = new Ultrabook('ultraboook',
//     850, 32, 15.5, 10, 1);
//
// let basicPc = new BasicPc('basic', 700, 16,)
//
// let gamePc = new GamePc('gamePc', 500, 16, 43.75)

// comp.goStart()
// compTop.goStart()
//  ultrabook.goStart()
//  basicPc.goStart();
 // basicPc.goPlay('FarCray')
//  basicPc.setPower(700*1.2)
// gamePc.goStart()
// gamePc.goStartGame('FarCry')


// console.log(comp);
// console.log(compTop);
//  console.log(ultrabook);
//  console.log(basicPc);
//  console.log(gamePc);