//shallow copy : creates new copy of js object but will not create copy of nested object hence a reference copy is created due to which any changes in copy object will also make change in original object

let algorithm = {
    name : "Javascript",
    subject:{
        name:"NodeJS",
        marks:99
    },
    hobbies : ["Server side language" , "Client Side language"]
}

let value = {...algorithm}; 


value.name = "JS";
value.subject.marks=100
value.hobbies.push("Scripting language");
console.log("**********SHALLOW COPY ************************");
console.log(value);
console.log(algorithm);


//deep copy   (doesnt modify data)

let algorithm1 = {
    name : "Javascript",
    subject:{
        name:"NodeJS",
        marks:99
    },
    hobbies : ["Server side language" , "Client Side language"]
}

let value1 = JSON.parse(JSON.stringify(algorithm1));//performance issue so replace it with structuredClone(algorithm1)

value1.name = "JS";
value1.subject.marks=100
value1.hobbies.push("Scripting language");
console.log("************DEEP COPY*********************")
console.log(value1);
console.log(algorithm1);


"###############################################################################################################################################################"

const a =[1,2,3,4];

const b=[...a];

b.push(5);
console.log(a); //1,2,3,4 because spread operator doesnt gives reference
console.log(b);//1 2 3 4 5