// var profile = {
//     name : "Chaitra",
//     age : 22 ,
//     genderFemale : true
// }

// profile["name"] = "Rahul"
// console.log(profile)


// //key value pair 
// console.log(profile.name)
// console.log(profile["name"])

// console.log(profile["age"])
// console.log(profile.age)

// console.log(profile["genderFemale"])
// console.log(profile.genderFemale)


// var array = [2,3,4,5,6,7]
// console.log(array[0]) //here index is key 
//i want to create a profile of a girl where it should have -> fname , lname , age , gender , job , phone number

var profile = {
    fname : "Chaitra" ,
    lname : "Mishra" ,
    age : 88 , 
    gender : "female" ,
    job : "Sonata" ,
    phone : 9611814477
}

//change it to my profile 
profile.fname  = "Rahul"
profile.lname  = "Kabbur"
profile.age = 5
profile.gender = "male"
profile.job = "FUp" 
profile.phone = 8747905930
//add a new key -> location 
profile["location"] = "Bangalore"
console.log(profile)
