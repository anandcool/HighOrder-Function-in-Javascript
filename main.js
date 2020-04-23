const companies = [
    {name:"Company One",category:"Finanace",start:1997,end:2019},
    {name:"Company Two",category:"Automobile",start:1998,end:3030},
    {name:"Company Three",category:"Sales",start:1997,end:2019},
    {name:"Company Four",category:"Drawing",start:1998,end:2014},
    {name:"Company Five",category:"Retail",start:1990,end:2015},
    {name:"Company Six",category:"Retail",start:1234,end:0987}
]

const ages = [12,34,45,34,54,09,34];

for(i=0;i<companies.length;i++){
    console.log(companies[i].name);
}

//foreach
companies.forEach(function (ritvik){
    console.log(ritvik);
})


let canDrink = [];
for(i=0;i<=ages.length;i++){
    if(ages[i]>21) canDrink.push(ages[i]);
}
console.log(canDrink);
//filter
// automatically create array and push the value who pass the test in the function
const canDrink = ages.filter(function (age){ 
    if(age>=21)
    return true;
})
console.log(canDrink);
const canDrink = ages.filter(ritvik=> ritvik>=21);
console.log(canDrink);


// Filter retail companies
const retailCompanies = companies.filter(company => company.category === 'Retail');
console.log(retailCompanies);

// Get companies that last 10 year or more
const lastedTenYear = companies.filter(company=>(company.end - company.start >10));
console.log(lastedTenYear);

//map => map is used to create new array

const companyNames = companies.map(function(company){
    return company.name;
})
console.log(companyNames);

const testmap = companies.map(function (){
    return 2;
})
console.log(testmap);

const testmap = companies.map(company =>`${company.name}[${company.start}-${company.end}]`);
console.log(testmap);

const agesSquare = ages.map(age=>Math.sqrt(age));
console.log(agesSquare);

// //sort
const sortedCompanies = companies.sort(function (c1,c2){
    if(c1.start>c2.start)
    return 1;
    else
    return -1;
});

const sortedCompanies = companies.sort((a,b)=>(a.start>b.start?1:-1));
console.log(sortedCompanies);

// Sort ages
const sortAges = ages.sort((a,b)=>a-b);
const sortAges = ages.sort((a,b)=>b-a);
console.log(sortAges);

//reduce function

let ageSum = 0;
for(let i=0;i<ages.length;i++){
    ageSum+=ages[i];
}
console.log(ageSum);

const ageSum = ages.reduce(function(total,age){
    return total +=age;
},0) // 0 means first time total=0

// console.log(ageSum);
const ageSum = ages.reduce((total,age)=> total+=age,0);
console.log(ageSum);

//Combine Methods
const combined = ages
                    .map(age=>age*2)
                    .filter(age=>age>40)
                    .sort((a,b)=>a-b)
                    .reduce((a,b)=>a+b,0);
console.log(combined)