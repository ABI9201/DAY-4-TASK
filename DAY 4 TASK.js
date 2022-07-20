DAY 4 TASK
 1. //compare two json have the same properties without order

 const object1 = {
  	  name: 'Person 1',
     age  : '5'
  	};
  	    
 	const object2 = {
  	  age: '5',
  	  name: 'person 1'
  	};
  	    
  	JSON.stringify(object1) === JSON.stringify(object2)
  	// false
  	    
  	_.isEqual(object1, object2)
  	// true

2.//Print all the countries flag

var request = new XMLHttpRequest();

request.open('GET','https://restcountries.com/v2/all', true);

request.send();

request.onload = function(){

    var data = JSON.parse(request.response);//request from server
    console.log(data);

for(i=0;i<data.length;i++){
    console.log(` Flag- ${data[i].flag} `)
}
}

3.//print all the countries name,region,subregion,population

var request = new XMLHttpRequest();

request.open('GET','https://restcountries.com/v2/all', true);

request.send();

request.onload = function(){

    var data = JSON.parse(request.response);//request from server
    console.log(data);

for(i=0;i<data.length;i++){
    console.log(`CountryName-${data[i].name} and Region- ${data[i].region} and Subregion - ${data[i].subregion} and Population-${data[i].population}`)
}
}





