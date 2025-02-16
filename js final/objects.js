// 🧑‍💻🧑‍💻 object question practice 
// 🧑‍💻🧑‍💻 ////////////////////////////////14/2/2025


// 🟢1🟢Create an object representing a student with name, age, and grades.

        // let student={ name:"aditya",age:22,grades:90}
        // console.log(student);
        

// 🟢2🟢Retrieve only the keys of {a: 1, b: 2, c: 3} as an array.

// let obj= {a: 1, b: 2, c: 3}

// let keys=Object.keys(obj)
// console.log(keys);             ////////////////////////////////////////////////

    // for(i in obj){
    //     console.log(i);
        
    // }



// 🟢3🟢Retrieve only the values of {x: "apple", y: "banana", z: "cherry"} as an array.
    // let obj={x: "apple", y: "banana", z: "cherry"}

    // let values=Object.values(obj)
    // console.log(values);           /////////////////////////////////////////////////////
    
    
    // for(let i in obj){
    //     console.log(obj[i])
    // }


// 🟢4🟢Convert ["a", "b", "c"] and [1, 2, 3] into {a: 1, b: 2, c: 3}.
        // let arr1=["a", "b", "c"]
        // let arr2=[1, 2, 3]
        // let newobj=Object.fromEntries(arr1.map((key,index)=>[key,arr2[index]]))
        // console.log(newobj);
        
// 🟢5🟢Check if the key "price" exists in {name: "Laptop", brand: "Dell"}

        // let obj={name: "Laptop", brand: "Dell"}

        // console.log(obj.hasOwnProperty("price"));

        // console.log( "price" in obj)            //second type
        

        
// 🟢6🟢Count the number of properties in {id: 101, title: "JS", duration: "2h"}.

        // let obj={id: 101, title: "JS", duration: "2h"}
        // console.log(Object.keys(obj).length);
        
// 🟢7🟢Create an object where keys are numbers [1,2,3] and values are their squares {1: 1, 2: 4, 3: 9}

    // let obj={}
    // for(let i=1;i<=3;i++){
    //     obj[i]=i*i
    // }
    // console.log(obj);
    
// 🟢8🟢Delete the property "age" from {name: "John", age: 25, city: "NY"}

    // let obj={name: "John", age: 25, city: "NY"}
    // delete obj.age
    // console.log(obj);
    
// 🟢9🟢Clone an object {a: 1, b: 2, c: 3} into a new object.

    // let obj={a: 1, b: 2, c: 3}
    // let obj2={...obj}
    // console.log(obj2);
    // console.log(obj);
    
// 🟢10🟢Swap keys and values in {a: "apple", b: "banana", c: "cherry"}

    // let obj={a: "apple", b: "banana", c: "cherry"}
    // let swapobj={}

    // for(let i in obj){
    //     swapobj[obj[i]]=i
    // }
    // console.log(swapobj);
    


// 🟢11🟢Print each key-value pair in {name: "Tom", age: 30, city: "Paris"}.

    // let obj={name: "Tom", age: 30, city: "Paris"}
    // for(let i in obj){
    //     console.log(`key is ${i} and this value is ${obj[i]}`);
        
    // }                                             first method using for in loop

    // Object.entries(obj).forEach(([key,value])=>{
    //     console.log(`key is ${key} and the value is ${value}`);
        
    // })                                            // using Object.entries and foreach loop using9

// 🟢12🟢Get an array of keys from {x: 10, y: 20, z: 30}.
        // let obj={x: 10, y: 20, z: 30}
        // let key=Object.keys(obj)
        // console.log(key);
        
        
// 🟢13🟢Get an array of values from {name: "Alice", role: "Developer"}
        // let obj={name: "Alice", role: "Developer"}
        // let value=Object.values(obj)
        // console.log(value);
        

// 🟢14🟢Use Object.entries() to convert {a: 1, b: 2} into [['a', 1], ['b', 2]]
        // let obj={a: 1, b: 2}
        // let arr=Object.entries(obj)
        // console.log(arr);
        

// 🟢15🟢Convert [['p', 3], ['q', 4]] into {p: 3, q: 4} using Object.fromEntries()
        // let arr=[['p', 3], ['q', 4]]
        // let obj=Object.fromEntries(arr)
        // console.log(obj);
        



// 🟢16🟢Merge {a: 1, b: 2} with {b: 3, c: 4} and check the result.
        // let obj1={a: 1, b: 2}
        // let obj2={b: 3, c: 4}

        // let obj3=Object.assign(obj1,obj2)
        // console.log(obj3);
        
        
// 🟢17🟢Clone {x: 10, y: 20} without modifying the original object.

        // let obj={x:"10",y:"20"}
        // let obj2={...obj}
        // console.log(obj2);
        

// 🟢18🟢Convert [{id: 1, name: "A"}, {id: 2, name: "B"}] into {1: "A", 2: "B"}

        // let arr=[{id: 1, name: "A"}, {id: 2, name: "B"}] 
        // let obj=arr.reduce((acc,curr)=>{acc[curr.id]=curr.name ; return acc} ,{})
        // console.log(obj);
        


        
        
// 🟢19🟢Extract names from [{name: "Tom"}, {name: "Jerry"}] into ["Tom", "Jerry"]
        // let arr=[{name: "Tom"}, {name: "Jerry"}]
        // let aname= arr.map(obj=>obj.name)
        // console.log(aname);
        
// 🟢20🟢Convert {name: "Mark", age: 25, city: "NY"} into an array of key-value pairs
                // let obj={name: "Mark", age: 25, city: "NY"}
                // let result=Object.entries(obj)
                // console.log(result);
                
// 🟢21🟢Filter out objects where age is below 18 from [{name: "Alex", age: 20}, {name: "Sam", age: 16}].
        // let arr=[{name: "Alex", age: 20}, {name: "Sam", age: 16}]
        // let result=arr.filter(obj=>obj.age>=18      
        // )
        // console.log(result);
        
// 🟢22🟢Convert {x: 2, y: 3, z: 4} into {x: 4, y: 9, z: 16} (square values).
        // let obj={x: 2, y: 3, z: 4}
        // let newObj={}
        // for(i in obj){  
        //         newObj[i]=obj[i]**2
        // }
        // console.log(newObj);
        // console.log(obj);
        
// 🟢23🟢Convert {1: "one", 2: "two"} into ["one", "two"].

        // let obj={1: "one", 2: "two"}
        // let result=Object.values(obj)
        // console.log(result);
        
// 🟢24🟢Remove the property "id" from {id: 123, name: "Product"}
        // let obj={id: 123, name: "Product"}
        // let newObj=Object.fromEntries(
        //         Object.entries(obj).filter(([key])=> key !=="id")
                
        // )
        // console.log(newObj);                             //now second method                          

        // let obj={id: 123, name: "Product"}
        // delete obj.id;
        // console.log(obj);
        
        
// 🟢25🟢Convert [{x: 1}, {y: 2}, {z: 3}] into {x: 1, y: 2, z: 3}

        // let arr=[{x: 1}, {y: 2}, {z: 3}]
        // let result=Object.fromEntries(
        //         arr.map(obj=>Object.entries(obj)[0])
        // )
        // console.log(result);
        

// 🟢26🟢Sort [{id: 2}, {id: 1}, {id: 3}] in ascending order of id.
        // let arr =[{id: 2}, {id: 1}, {id: 3}]
        // let result=arr.sort((a,b)=>a.id-b.id)
        // console.log(result);


// ❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️ 16/2/2024
        
// 🟢27🟢Find the person with the highest age from [{name: "A", age: 30}, {name: "B", age: 40}]
        // let arr=[{name: "A", age: 30}, {name: "B", age: 40}]
        // let result=arr.reduce((acc,curr)=>acc.age >= curr.age ? acc : curr)
        // console.log(result);
        
// 🟢28🟢Remove objects where "status": "inactive" from [ {status: "active"}, {status: "inactive"} ].
        // let arr=[ {status: "active"}, {status: "inactive"} ]
        // let result=arr.filter(obj=> obj.status === "active")
        // console.log(result);
        
// 🟢29🟢Sort [{score: 50}, {score: 70}, {score: 60}] in descending order.
        // let arr=[{score: 50}, {score: 70}, {score: 60}]
        // let result=arr.sort((a,b)=>b.score-a.score)
        // console.log(result);
        
// 🟢30🟢Filter out people with age less than 18 from {Alice: 22, Bob: 17, Charlie: 20}
        // let obj={Alice: 22, Bob: 17, Charlie: 20}
        // let result=Object.fromEntries(
        //        Object.entries(obj).filter(([name,age])=>age>=18)
        // )
        // console.log(result);        
        
// 🟢31🟢Convert {p1: {age: 25}, p2: {age: 30}} into {p1: 26, p2: 31} (increment age).
        // let obj={p1: {age: 25}, p2: {age: 30}}
        // let result=Object.fromEntries(
        //         Object.entries(obj).map(([key,value])=>[key,value.age+1])
        // )
        // console.log(result);
        

// 🟢32🟢Find the sum of all values in {x: 10, y: 20, z: 30}
        // let obj={x: 10, y: 20, z: 30}
        // let sum=0

        // for(i in obj){
        //         sum+=obj[i]
        // }
        // console.log(sum);
        

// 🟢33🟢Convert {name: "Alex", age: 25} into a JSON string.
        // let obj={name: "Alex", age: 25}

        // console.log(JSON.stringify(obj));
        // console.log(typeof JSON.stringify(obj));
        // console.log(typeof obj);
        
// 🟢34🟢Parse '{"id": 101, "name": "Sam"}' into an object.
        // let str='{"id": 101, "name": "Sam"}'
        // console.log(JSON.parse(str));
        
// 🟢35🟢Find all keys that have null values in {a: 1, b: null, c: 3, d: null}
        // let obj={a: 1, b: null, c: 3, d: null}
        // let result=Object.keys(obj).filter(Key=> obj[Key] === null)
        // console.log(result);
        

// 🟢36🟢Convert {x: "hello", y: "world"} into [{key: "x", value: "hello"}, {key: "y", value: "world"}]
        // let obj={x: "hello", y: "world"}
        // let result=Object.entries(obj).map(([k,v])=> ({ key: k, value: v }))
        // console.log(result);
        

        
// 🟢37🟢Extract the property "email" from [{name: "John", email: "john@mail.com"}, {name: "Alice", email: "alice@mail.com"}].
        // let arr=[{name: "John", email: "john@mail.com"}, {name: "Alice", email: "alice@mail.com"}]
        // let result=arr.map((obj)=>obj.email)
        // console.log(result);
        
// 🟢38🟢Convert {a: 1, b: 2, c: 3} into [{a: 1}, {b: 2}, {c: 3}]
        // let obj={a: 1, b: 2, c: 3}
        // let result=Object.entries(obj).map(([key,val])=>({[key]:val}))
        // console.log(result);

        

// 🟢39🟢Find the object with the longest string value in {a: "short", b: "longer", c: "longest"}
// let obj={a: "short", b: "longer", c: "longest"}
//         let result=Object.fromEntries(
//         Object.entries(obj).reduce((acc,curr)=>acc[1].length>curr[1].length ?acc :curr))
//         console.log(result);

        
// 🟢40🟢Convert {x: 5, y: 10} into [["x", 5], ["y", 10]]

        // let obj={x: 5, y: 10} 
        // let result=Object.entries(obj)
        // console.log(result);
        
// 🟢41🟢Remove all properties with falsy values from {a: 1, b: 0, c: false, d: "hello"}
        // let obj={a: 1, b: 0, c: false, d: "hello"}
        // let result=Object.entries(obj).filter(([Key,val])=>  Boolean(val))
        // console.log(result);
        

// 🟢42🟢Find the most frequent value in {a: "apple", b: "banana", c: "apple", d: "orange"}
        // let obj={a: "apple", b: "banana", c: "apple", d: "orange"}
        // let count=0
        // let result=Object.values(obj).reduce((acc,curr)=>{acc[curr]=(acc[curr] ||0)+1;return acc },{})
        // console.log(result);

//🟢🟢 2️⃣ destructuring

//🟢43🟢 Extract name and age from {name: "John", age: 25, city: "NY"} using destructuring.

        // let obj={name: "John", age: 25, city: "NY"}

        // let {name,age}=obj
        // console.log(name);
        // console.log(age);
        
//🟢44🟢 Use rest operator (...) to get remaining properties from {id: 101, title: "JS", level: "Advanced"}
        // let obj={id: 101, title: "JS", level: "Advanced"}
        // let {id,...rest}=obj
        // console.log(id);
        // console.log(rest);
        
        

//🟢45🟢 Extract the email property and store the rest of the data separately from {name: "Alex", email: "alex@mail.com", city: "LA"}.
        // let obj={name: "Alex", email: "alex@mail.com", city: "LA"}
        // let {email,...rest}=obj

        // console.log(email);
        // console.log(rest);
        

//🟢🟢 2️⃣ Object Freezing & Sealing
//🟢46🟢 Use Object.freeze() to prevent modifications in {pi: 3.14, gravity: 9.8}.
        // let obj={pi: 3.14, gravity: 9.8}
        // Object.freeze(obj)

        // obj.pi=213454
        // console.log(obj);
        
//🟢47🟢 Use Object.seal() on {name: "Alice", country: "USA"} and try modifying and adding new properties.
// let obj = { name: "Alice", country: "USA" };

// Object.seal(obj);

// obj.name = "Alicia";
// obj.country = "Canada"; 

// obj.age = 25; 
// delete obj.name; 

// console.log(obj); 


//🟢🟢 4️⃣ JSON Operations
//🟢48🟢 Convert {name: "Emma", age: 22} into a JSON string.
        // let obj={name: "Emma", age: 22}
        // console.log(JSON.stringify(obj));
        


//🟢49🟢 Deep clone {user: {id: 101, name: "Jake"}} using JSON methods.
// let obj = { user: { id: 101, name: "Jake" } };
// let deepClone = JSON.parse(JSON.stringify(obj));
// console.log(deepClone);



//🟢50🟢 Convert {a: 1, b: 2} into ["a=1", "b=2"]
        // let obj={a: 1, b: 2}
        // let result=Object.entries(obj).map(([key,value])=> `${key}=${value}`)
        // console.log(result);
        
//🟢51🟢 Get all keys that have string values in {x: "hello", y: 10, z: "world"}
        // let obj={x: "hello", y: 10, z: "world"}
        // let result=Object.keys(obj).filter(keys=>typeof obj[keys] === "string")
        // console.log(result);
        
//🟢52🟢 Find all properties with null values in {a: 1, b: null, c: "test", d: null}

        // let obj={a: 1, b: null, c: "test", d: null}
        // let result=Object.entries(obj).filter(([key,val])=>val ===null)
        // console.log(result);
        
//🟢53🟢 Replace all values with "hidden" in {password: "123", secret: "abc"}

        // let obj={password: "123", secret: "abc"}
        // let result=Object.fromEntries(
        // Object.keys(obj).map(key=>[key,"hidden"]))
        // console.log(result);
        
//🟢54🟢 Remove properties with empty strings ("") from {a: "", b: "hello", c: ""}.
        // let obj={a: "", b: "hello", c: ""}
        // let result=Object.fromEntries(
        // Object.entries(obj).filter(([key,value])=>value!==""))
        // console.log(result);
 
//🟢55🟢 nested object property access,
// let obj= {a: {b: {c: 3}}}
// console.log(obj.a.b.c);





        
