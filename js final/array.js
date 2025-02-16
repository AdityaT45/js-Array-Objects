// 🧑‍💻🧑‍💻 array practice quetion
// 🧑‍💻🧑‍💻 ////////////////////////////////11/2/2025

// 🟢1🟢Create an array with five random numbers.

// let arr=[]

// for(let i=0;i<=5;i++){
//     arr.push(Math.floor(Math.random()*100))
// }
// console.log(arr)

// 🟢2🟢Add "Hello" to the beginning of an array.

// const arr=[1,2,3,4]
// console.log(arr)
// arr.unshift("hello")
// console.log(arr);

// 🟢3🟢Remove the last element of an array and return it.

// let arr=[1,2,3,4]
// console.log(arr)

// arr.pop()
// console.log(arr)

// 🟢4🟢Find the index of the number 7 in [3, 7, 1, 9, 7].

// let arr=[3, 7, 1, 9, 7]

// console.log(arr.findIndex(num=>num===7))

// 🟢5🟢 Check if all elements in [2, 4, 6, 8] are even.

// let arr=[2, 4, 6, 8]

// let allevent=arr.every(num=>num%2===0)

// console.log(allevent)

// 🟢6🟢Find the first number greater than 50 in [10, 25, 60, 80].

// let arr=[10, 25, 60, 80]

// let newa=arr.find(num=>num>50)
// console.log(newa);

// 🟢7🟢 Convert ["a", "b", "c"] to "a-b-c".

// let arr =["a", "b", "c"]

// let newarr=arr.join("-")
// console.log(newarr);
// console.log(typeof newarr);

//🟢8🟢 Reverse the array [1, 2, 3, 4, 5].

// let arr=[11,21,32,4,5]
// let revarr=arr.reverse()
// console.log(revarr);                    now without reeverse

// for(let i=arr.length-1;i>=0;i--){
//     console.log(arr[i])
// }
// console.log(arr);

//            /////////////////////////////////////////////12/2/2025

// 🟢9🟢Merge [1, 2] and [3, 4] into one array.

// arr1=[1,2]
// arr2=[3,4]

// arr3=arr1.concat(arr2)
// console.log(arr3);

// arr4=[...arr1,...arr2]
// console.log(arr4);

// 🟢10🟢Extract the middle two elements from [1, 2, 3, 4, 5, 6].

// let arr=[1, 2, 3, 4, 5,7]
// const middle=arr.slice(arr.length/2-1,arr.length/2+1)
// console.log(middle)                                               now using function

// function findmiddle(arr){
//     result=[]
//     let n=arr.length;

//     if(n%2===0){
//         result.push(arr[n/2-1])
//         result.push(arr[n/2])
//     }
//     else{
//         result.push(arr[Math.floor(n/2)])
//     }
//     return result;
// }
// findmiddle(arr)
// console.log(result)

// 🟢11🟢Replace all 3s in [3, 5, 3, 8] with 0..

// const arr=[3,5,3,8]

// const arr2=arr.map(num=>num===3 ? 0 : num )
// console.log(arr2);

// 🟢12🟢Double each number in [2, 5, 8] using map().

// const arr=[2, 5, 8]

// const doublearr=arr.map(num=>num*2)
// console.log(doublearr);

// 🟢13🟢Remove duplicates from [1, 2, 2, 3, 3, 4].

// const arr=[1, 2, 2, 3, 3, 4]
// const newarr1=[]

// arr.forEach(num=> !newarr1.includes(num) ? newarr1.push(num) : "")
// console.log(newarr1);

// const uniqueArr =arr.filter((num,index,self)=> self.indexOf(num)===index)
// console.log(uniqueArr);

// let n=[]
// arr.map(num=> !n.includes(num)? n.push(num):"")
// console.log(n);

// 🟢14🟢Sort [50, 10, 100, 20] in descending order.

//  let arr=[50, 10, 100, 20]
//  let newarr=arr.sort((a,b)=>b-a)
//  console.log(newarr)

// 🟢15🟢Check if [2, 3, 5] includes 5.

// let arr=[2, 3, 5]

// console.log(arr.includes(5))

// 🟢16🟢Count occurrences of 7 in [7, 8, 7, 9, 7].

// const arr= [7, 8, 7, 9, 7]

//                             //        using reduce method
// const occ=arr.reduce((accumulator,num)=>(num===7 ? accumulator+1 :accumulator),0)
// console.log(occ);

//                             //         using filter method
// const occfil=arr.filter(num=>num===7 ).length
// console.log(occfil);

//                             //         using for each method

// count=0
// arr.forEach(num=>{if(num===7){
//     count++
// }})
// console.log(count);

// 🟢17🟢Find the sum of [1, 2, 3, 4, 5]

//  const arr=[1, 2, 3, 4, 5]
//  const result=arr.reduce((acc,curr)=>acc+= curr)
//  console.log(result);

// 🟢18🟢Find the product of [1, 2, 3, 4, 5]

// const arr = [1, 2, 3, 4, 5];
// const result = arr.reduce((acc, curr) => (acc *= curr));
// console.log(result);

// 🟢19🟢Remove all odd numbers from [3, 6, 9, 12].
// const arr=[3, 6, 9, 12, 4, 13, 15, 17,  19];
// let length=arr.length;
// let flag=false;
// for(i=0;i<length;i++)
// {
//     if(arr[i]%2!==0)
//     {
//         let k=i;
//         flag=true;
//         for(k=i;k<length-1;k++)
//         {
//             arr[k]=arr[k+1];
//         }
//         i--;
//         length--;
//     }
// }
// if(flag)
// {
//     console.log("After remove odd numbers");
//     for(i=0;i<length;i++)
//     {
//         console.log(arr[i]);
//     }
// }
// else
// {
//     console.log("There is no odd number in given array");
// }

// 🟢20🟢Count words in ["apple", "banana", "apple"]
// using for loop

// let arr= ["apple", "banana", "apple"]
// let result={}

// for(let i=0;i<=arr.length-1;i++){
//     let char=arr[i]
//
//     if(result[char]){
//         result[char]++
//     }
//     else{
//         result[char]=1
//     }
// }
// console.log(result)

//using map method

// let arr= ["apple", "banana", "apple"]

// let wordcount= arr.reduce((acc,word)=>{
//     acc[word]=(acc[word] || 0)+1
//     return acc
// },{})
// console.log(wordcount)

// 🟢21🟢Find the second largest number in [10, 202, 30, 40].
// let arr=[10, 202, 30, 40]
// let result=arr.sort((a,b)=>b-a)[1]
// console.log(result)

// 🟢22🟢Extract domain names from ["abc@gmail.com", "xyz@yahoo.com"]            //using for loops

//     const arr = ["abc@gmail.com", "xyz@yahoo.com", "mno@gmail.com"]

//    for (let i=0;i<=arr.length-1;i++){
//     let a=arr[i]
//     let extractedarr=a.split("@")[0]
//              console.log(extractedarr);

//    }                                                                       /using map method

// const arr = ["abc@gmail.com", "xyz@yahoo.com", "mno@gmail.com"]

// let result=arr.map(email=>email.split("@")[1])
// console.log(result);

////////////////////////////////////////////////////////////////////////////// using for loops
// const arr = ["abc@gmail.com", "xyz@yahoo.com", "mno@gmail.com"];
// let result=[]
// for(i=0;i<arr.length;i++)
// {
//     let word=arr[i];
//     console.log("Given word is: "+word);
//     console.log("domain name is:");
//     for(let j=0;j<warr.length;j++)
//     {
//         if(warr[j]==='@')
//         {
//             for(k=j+1;k<warr.length;k++)
//             {
//254trew   23rt45rgewtrdfserthfgnbdrhtfgbdedfbgdf
//             }
//             break;
//         }
//     }
//     console.log("\n");
// }
// 🟢23🟢Generate an array of numbers from 1 to 50.

// let arr=[]

// for(let i=0;i<50;i++){
//     arr.push(i+1)
// }
// console.log(arr);

// 🟢24🟢Find numbers divisible by 5 in [10, 23, 50, 65, 80].
// let arr=[10, 23, 50, 65, 80]

// let result=arr.filter(num=>num%5===0 )
// console.log(result);              //////////////////////////////////now using forEach method

//     let arr=[10, 23, 50, 65, 80]
//     let newarr=[]
//    arr.forEach((num)=>{if(num%5===0){
//     newarr.push(num)
//    }})
//    console.log(newarr);

// 🟢25🟢Flatten [[1, 2], [3, 4], [5, 6]]

//  let arr=[[1, 2], [3, 4], [5, 6]]
//  const result=arr.flat()
// console.log(result);

// 🟢26🟢Extract unique values from [1, 1, 2, 3, 3, 4, 5].

// let arr =[1, 1, 2, 3, 3, 4, 5]

// let result=[...new Set(arr)]
// console.log(result)

// 🟢27🟢Find the longest string in ["hi", "hello", "welcome"]

// let arr=["hi", "hello", "welcome"]

// let result=arr.reduce((accumlator,current)=>accumlator.length> current.length ? accumlator : current)
// console.log(result);

// 🟢28🟢Convert ["dog", "cat"] to uppercase.

// let arr=["dog", "cat"]
// let result= arr.map(element=>element.toUpperCase())
// console.log(result);

// 🟢29🟢Convert [10, 20, 30] to strings.

// let arr=[10,20,30]
// let string=arr.map(num=>num.toString())
// console.log(string);   //[ '10', '20', '30' ]
// console.log(typeof string);   //object

// 🟢30🟢Convert "1,2,3" into [1,2,3].

// let string="1,2,3"
// let arr=string.split(",").map(Number)
// console.log(arr);

// 🟢31🟢Create an array of squares [1, 4, 9, 16].

// let arr=[1, 4, 9, 16]
// let newarr=arr.map(num=>num*num)
// console.log(newarr);

// 🟢32🟢Find common elements in [1, 2, 3] and [2, 3, 4].

// let arr=[1,2,3]
// let arr2=[2,3,4]

// let commonelement=arr.filter(num=>arr2.includes(num))
// console.log(commonelement);

// 🟢33🟢Check if [1, 2, 3] is a subset of [1, 2, 3, 4, 5].

// let arr1= [2,3,4]
// let arr2= [1,2,3,4,5]

// let result= arr1.filter( num=>arr2.includes(num)).length ===arr1.length
// console.log(result);

// 🟢34🟢Find all palindromes in ["mada", "hello", "racecar"].
// let arr=["madam", "hello", "racecar"]
// let flag=false

// for(let i=0;i<=arr.length-1;i++){
//     let str=arr[i]
//     let sarr=str.split("")
//     let reverse=""
//     for(let j=sarr.length-1;j>=0;j--){
//         reverse +=sarr[j]
//     }
//     if(str===reverse){
//         console.log(str +" is palindrom");
//         flag=true
//     }

// }
// if (!flag){
//     console.log("there is no palindrom word");

// }                                                    // using filter method

// let arr=["madam", "hello", "racecar"]
// let result= arr.filter(element=>element===element.split("").reverse().join(""))
// console.log(result);

// 🟢35🟢Remove falsy values from [0, null, "hello", false, 5]
// let arr=[0, null, "hello", false, 5]

// for (let i=0;i<=arr.length-1;i++){
//     let val=arr[i]

//     if(!val){
//         console.log( val+ " is falsy value");

//     }
// }
// 🟢36🟢Replace every odd number with "odd" in [1, 2, 3, 4]

// let arr=[1, 2, 3, 4]

// for(let i=0;i<=arr.length-1;i++){
//     num=arr[i]

//     if(num %2!==0){
//         arr[i]="odd"
//     }
// }
// console.log(arr);                  // using map method

//   let arr=[1, 2, 3, 4]

//   let result=arr.map(num=>num%2!== 0 ? "odd" : num)
//   console.log(result);

// 🟢37🟢Find the most frequent element in [3, 3, 2, 2, 2].

// let arr=[3, 3, 2, 2, 2]

// let result={}
// let count=0
// let length=arr.length
// let max=0
// let temp=0
//         2,3,3,2,3
//  for (let i=0 ; i<length;i++){
//     count=1
//     for(let j=i+1;j<length;j++){

//         if(arr[i]===arr[j]){
//             count++
//             for(let k=j;k<length-1;k++){
//                 arr[k]=arr[k+1]
//             }
//             length--
//             j--
//         }

//     }
//     if(count>max)
//     {
//         max=count
//         temp=arr[i]
//     }

//  }
//  console.log("maximum occurrance is: "+temp +"and count is "+max);

// 🟢38🟢Group [1,2,3,4] into [odd: [1,3], even: [2,4]].

// let arr=[1,2,3,4]
// let grouped=arr.reduce((acc,curr)=>{ curr %2===0 ? acc.even.push(curr) : acc.odd.push(curr) ;return acc},{even:[],odd:[]})
// console.log(grouped);

// 🟢39🟢Find all indexes of 7 in [3, 7, 1, 9, 7, 7].
// const arr =[3, 0, 1, 9, 8];
// console.log("Indexes of 7 are: ")
// let flag=true;
// for(let i=0;i<arr.length;i++)
// {
//     if(arr[i]===7)
//     {
//         console.log(i);
//         flag=false;

//     }
// }
// if(flag)
// {
//     console.log("7 is not found in array");
// }
// 🟢40🟢Find the missing elements in [10, 12, 9, 17, 22 20].
// let arr =[10, 12, 9, 17, 22, 20];
// let temp=0;
// let num=0
//     for(i=0;i<arr.length;i++)
//     {
//         for(j=i+1;j<arr.length;j++)
//         {
//             if(arr[i]>arr[j])
//                 {
//                     temp=arr[i];
//                     arr[i]=arr[j];
//                     arr[j]=temp;
//                 }
//         }
//     }
//     for(i=0;i<arr.length;i++)
//     {
//         for(num=arr[i]+1;num<arr[i+1];num++)
//         {
//             console.log(num)
//         }
//     }

// now strat session of 14/2/2025

// 🟢41🟢Convert [1, 2, 3, 4, 5] into [5, 4, 3, 2, 1].

// let arr =[1, 2, 3, 4, 5]

// let arr2=arr.reverse()
// console.log(arr2);

// 🟢42🟢Find the sum of all even numbers in [10, 21, 30, 45, 60].

// let arr=[10, 21, 30, 45, 60]

// let result=arr.reduce((acc,curr)=> curr %2===0 ? acc+=curr : acc)
// console.log(result);

// 🟢44🟢Convert ["John", "Doe"] into "John Doe".

// let arr=["John","Doe"]

// let result=arr.join(" ")
// console.log(result);

// 🟢45🟢Convert [{a: 1}, {b: 2}] into {a:1, b:2}.

// let arr=[{a: 1}, {b: 2}]
// let arr2=arr.reduce((acc,curr)=>({...acc,...curr}),{})
// console.log(arr2);

// 🟢46🟢Generate an array of multiples of 3 up to 30.

// let arr=[]

//     for (let i=0;i<=10;i++){
//         arr.push(3*i)
//     }
//     console.log(arr);

// 🟢47🟢Count the number of times "apple" appears in an array.

// let arr = ["apple", "banana", "apple", "orange", "apple"];

// let count=arr.reduce((acc,curr)=>(curr==="apple" ?acc+1 :acc),0)
// console.log(count);

// 🟢48🟢Convert [5, 10, 15] into ["5%", "10%", "15%"]

// let arr=["5", "10", "15"]
// let result=arr.map(num=> num +"%")
// console.log(result);

// 🟢49🟢Extract numbers from ["12px", "15px", "20px"]

// let arr=["12px", "15px", "20px"]
// let result=arr.map(val=>parseInt(val))
// console.log(result);

// 🟢50🟢Replace each vowel in ["hello", "world"] with "*" .

// let arr=["hello", "world"]
// let result=arr.map(ele=> ele.replace(/[aeiou]/,"*") )
// console.log(result);

// 🟢51🟢Find the largest even number in [1, 4, 5, 7, 10]

// let arr=[1, 14, 5, 7, 10,8,6,4,1]
// let result=arr.reduce((acc,curr)=> {if(curr%2===0){
//                         return acc %2===0 ? Math.max(acc, curr) : curr}
//                     return acc})
// console.log(result);

// 🟢52🟢Group [10, 20, 30, 40] into {greater_than_20: [...], less_than_20: [...]}

// let arr=[10, 20, 30, 40]

// let result=arr.reduce((acc,curr)=> {if (curr>=20){
//     acc.greater_than_20.push(curr)
// }
// else if(curr<=20){
//     acc.less_than_20.push(curr)

// }
// return acc},{ greater_than_20:[],less_than_20:[]})
// console.log(result);

// 🟢53🟢Merge [{id: 1, name: "John"}, {id: 2, name: "Doe"}] into {1: "John", 2: "Doe"}

// let arr=[{id: 1, name: "John"}, {id: 2, name: "Doe"}]

// let result=arr.reduce((acc,curr)=>{acc[curr.id]=curr.name; return acc},{})
// console.log(result);

// // 🟢54🟢Find the second smallest number in [40, 10, 20, 30].
// let  arr=[40,10,20,30]
// let result=arr.sort((a,b)=>a-b)
// console.log(result[1]);

// 🟢55🟢Convert [[1,2], [3,4], [5,6]] into {0: [1,2], 1: [3,4], 2: [5,6]}.

// let arr=[[1,2], [3,4], [5,6]]
// let result=arr.reduce((acc,curr,index)=>{acc[index]=curr;return acc},{})
// console.log(result);

// 🟢56🟢Convert an array into a string without commas.

// let arr = ["H", "e", "l", "l", "o"];
// let result=arr.join("")
// console.log(result);

// 🟢57🟢Replace null values in [1, null, 2, null, 3] with 0.

// let arr=[1, null, 2, null, 3]
// let result=arr.map(val=> val=== null ? 0 : val)
//     console.log(result);

// 🟢58🟢Find the mode (most common number) in [3, 3, 2, 1, 3]

// 🟢59🟢Convert [1,2,3] into [[1], [2], [3]].
// let arr=[1,2,3]
// let result=arr.map(num=>[num])
// console.log(result);

// 🟢60🟢Convert [2,4,6] into [{even: true}, {even: true}, {even: true}].

// let arr=[2,4,6]
// let result=arr.reduce((acc,curr)=> {if(curr%2===0){
//     acc.push({even:true})
// }return acc},[])
// console.log(result);

// 🟢61🟢Implement a function to count how many times each character appears in a string array.

// let str="hello i am aditya from pune"
// let result={}
// let ope=str.split("")

// for(let i=0;i<=ope.length-1;i++){
//     char=ope[i]

//     if(result[char]){
//         result[char]++
//     }
//     else(result[char]=1)
// }
// console.log(result);

// 🟢62🟢Find the first element that repeats twice in [5, 1, 3, 5, 2].

// let arr=[5, 1, 3, 5, 2]

// for(let i=0;i<arr.length;i++){
//     fnum=arr[i]
//     for(let j=i+1;j<arr.length;j++){
//         lnum=arr[j]
//         if(fnum===lnum){
//             console.log(" the first element that repeats twice is " + fnum)
//             return;
//         }
//       }
// }

// 🟢63🟢Convert [{score: 10}, {score: 20}] into [10, 20].

// let arr=[{score: 10}, {score: 20}]

// let result=arr.reduce((acc,curr)=>{ acc.push(curr.score); return acc},[])
// console.log(result);





// 🟢64🟢Convert ["a", "b", "c"] into {0: "a", 1: "b", 2: "c"}

// let arr=["a", "b", "c"] 

// let result=arr.reduce((acc,curr,index)=>{ acc[index]=curr; return acc},{})
// console.log(result);

// 🟢65🟢Find the longest word in ["apple", "banana", "strawberry"]
// 


    // let arr=["apple", "bananaaaaaaa", "strawberry"]
    // let result=arr.reduce((acc,curr)=> acc.length > curr.length ? acc : curr)
    
    // console.log(result);



// 🟢66🟢Convert [10, 20, 30] into {first: 10, second: 20, third: 30}.
            // let arr=[10,20,30]
            // let obj={first :arr[0], second:arr[1],third:arr[2]}
            // console.log(obj);


            
        
// 🟢67🟢Extract the last three elements of [10, 20, 30, 40, 50, 60]
            // let arr= [10, 20, 30, 40, 50, 60]
            // let result=arr.slice(-3)
            // console.log(result);           


// 🟢68🟢Generate an array of numbers from 100 to 110.
// let arr = [];
// for (let i = 100; i <= 110; i++) {
//     arr.push(i);
// }
// console.log(arr);

// 🟢69🟢Find numbers that are both in [1, 3, 5, 7] and [5, 7, 9, 11]
        // let arr1=[1, 3, 5, 7] 
        // let arr2=[5, 7, 9, 11]
        // let arr3=arr1.filter(num=>arr2.includes(num))
        // console.log(arr3);
        
        



        
        
// 🟢70🟢Remove elements that contain "a" from ["apple", "banana", "cherry"]
            let arr= ["apple", "banana", "cherry"]
        
            let result = arr.filter(word => !word.includes("a"));
            console.log(result);
            
