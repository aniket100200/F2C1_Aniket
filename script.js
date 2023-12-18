const data = [
  { name: "john", age: 24, profession: "developer" },
  { name: "jane", age: 27, profession: "admin" },
];

// 1. Print Developers
function printDeveloper() {
  data.forEach((ele) => {
    if (ele.profession === 'developer') console.log(ele);
  })
}

// 2. Add Data
function addData() {
  let name = prompt('Enter the name');
  let age = prompt("Enter Your age");
  let profession = prompt("Enter your Profession");
  data.push({
    "name": name,
    "age": parseInt(age),
    "profession": profession
  })

  console.log(data[data.length - 1]);
}

// 3. Remove Admins
function removeAdmin() {
  for (let i = 0; i < data.length;) {
    if (data[i].profession === 'admin') {
      data.splice(i, 1);
    }
    else i++;
  }

  console.log(data);
}

// 4. Concatenate Array
function concatenateArray() {
  let extra_data = [
    { name: "Aniket", age: 23, profession: "developer" },
    { name: "Pranali", age: 20, profession: "wife" }
  ]

  extra_data.forEach(e => data.push(e));

  //as Data is Const I cannot change it's Value that's why didn't implement using concat Method
  console.log(data);
  return data;

}

// 5. Average Age
function averageAge() {

  //let's calculate the Average of the each element..
  let total_age=0;
  data.forEach(e=>total_age+=e.age);
  console.log("The Average is "+total_age/data.length);
  return total_age/data.length;
 }

// 6. Age Check
function checkAgeAbove25() { 
  // let isTrue=false;
  // data.forEach(e=>{
  //   if(e.age>25)isTrue=true;
  // });
  // console.log(isTrue);

  // return isTrue;
  let isTrue=data.some(e=>e.age>25)
  console.log(isTrue);
  return isTrue ;
}

// 7. Unique Professions
function uniqueProfessions() 
{ 
  let ans={};
  data.forEach(e=>ans[e.profession]=true);
  for (const key in ans) {
   console.log(key);
  }
}

// 8. Sort by Age
function sortByAge() {
  data.sort((a,b)=>a.age-b.age);
  console.log(data);
 }

// 9. Update Profession
function updateJohnsProfession() {
  data.forEach(e=>{
    if(e.name==='john'){
      e.profession='Manager';
    }
  });

  console.log(data);
 }

// 10. Profession Count
function getTotalProfessions() { 
  let ans={};
  data.forEach(e=>ans[e.profession]=true);

 let count=0;
 for (const key in ans) {
  count++;
 }

 console.log(count);
  return count;
}
