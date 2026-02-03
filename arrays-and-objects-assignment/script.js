// Task 1: Create and Use an Object
console.log("Task 1: Create and Use an Object");

let book = {
    title: "Grandmaster of Demonic Cultivation",
    author: "Mo Xiang Tong Xiu",
    pages: 439,
    isRead: false
}
console.log("Book Title: " + book.title);
console.log("Author: " + book.author);
console.log("Pages: " + (book["pages"] ));
console.log("Is Read: " + (book["isRead"] ));

book.isRead = true;
book.genre = "Fantasy";

//console.log(Object.entries(book));
//console.log(book);
for (let key in book){
    console.log(key + ": " + book[key]);
}



//Task 2: Create and Modify an Array of Objects
console.log("\n\nTask 2: Create and Modify an Array of Objects");

let movies = [
    {title: "Avatar", director: "James Cameron", year: 2009},
    {title: "Avengers: Endgame", director: "Anthony and Joe Russo", year: 2019},
    {title: "The Notebook", director: "Nick Cassavetes", year: 2004}
]

console.log("Second Movie title: " + movies[1].title);

movies.push({title: "Toc Toc", director: "Vicente Villanueva", year: 2017});

movies[0].year = 2023;

console.log(movies);



// Task 3: Combine Objects and Arrays
console.log("\n\nTask 3: Combine Objects and Arrays");

let student = {
    name: "Krishae",
    age: 21,
    courses: ["English", "Prgramming", "Math"]
}

console.log("First subject: " + student.courses[0]);

student.courses.push("Science");

//console.log(Object.entries(student));
//console.log(student);
for (let key in student){
    console.log(key + ": " + student[key]);
}



// Task 4: Challenge Task (Optional)
console.log("\n\nTask 4: Challenge Task (Optional)");

let recipe = {
    name: "Banana Bread",
    ingredients: [
        {name: "Banana", quantity: "2 pieces"},
        {name: "Flour", quantity: "1 1/2 cups"},
        {name: "Sugar", quantity: "10 tbsp,"},
        {name: "Eggs", quantity: "2 pieces"},
        {name: "Baking Soda", quantity: "1/2 tsp"},
        {name: "Cooking oil", quantity: "1/2 cup"},
        {name: "Vanilla Extract", quantity: "1 tsp"},
        {name: "Salt", quantity: "1 tsp"}
        ],
    isVegetarian: true
}

recipe.ingredients.push({name: "Chocolate Chips", quantity: "1/2 cup"});

console.log("The name of the second ingredient is: " + recipe.ingredients[1].name);

//console.log(recipe);
for (let key in recipe){
    console.log(key + ": " + recipe[key]); 
}   