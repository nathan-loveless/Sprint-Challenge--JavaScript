// ==== Objects ====

/* 
  Given the following information about dinosaurs, create 3 objects: 
  Use this pattern to create your objects: 
  object name, diet, weight, length, period
*/

// tyrannosaurus, carnivorous, 7000kg, 12m, Late Cretaceous
const tyrannosaurus =
{
	diet: 'carnivorous',
	weight: '7000kg',
	length: '12m',
	period: 'Late Cretaceous',

  roar() { return 'AWERSRARARWERSARARARRRR!'; }
};

// stegosaurus, herbivorous, 2000kg, 9m, Late Jurassic
const stegosaurus =
{
	diet: 'herbivorous',
	weight: '2000kg',
	length: '9m',
	period: 'Late Jurassic'
};

// velociraptor, carnivorous, 15kg, 1.8m, Late Cretaceous
const velociraptor =
{
	diet: 'carnivorous',
	weight: '15kg',
	length: '1.8m',
	period: 'Late Cretaceous'
};

// Using your dinosaur objects, log answers to these questions:

// How much did tyrannosaurus weigh?
console.log(tyrannosaurus.weight);

// What was the diet of a velociraptor?
console.log(velociraptor.diet);

// How long was a stegosaurus?
console.log(stegosaurus.length);

// What time period did tyrannosaurus live in?
console.log(tyrannosaurus.period);


// Create a new roar method for the tyrannosaurus.  When called, return "RAWERSRARARWERSARARARRRR!" Log the result.
console.log(tyrannosaurus.roar());


// ==== Arrays ====

// Given an array of college graduates.  Complete the following requests using any array method you like

const graduates = [{"id":1,"first_name":"Cynde","university":"Missouri Southern State College","email":"ctorry0@macromedia.com"},
{"id":2,"first_name":"Saundra","university":"The School of the Art Institute of Chicago","email":"swhal1@state.gov"},
{"id":3,"first_name":"Lambert","university":"Marian College","email":"lparham2@techcrunch.com"},
{"id":4,"first_name":"Modestine","university":"International Medical & Technological University","email":"mdolder3@symantec.com"},
{"id":5,"first_name":"Chick","university":"Sultan Salahuddin Abdul Aziz Shah Polytechnic","email":"camorts4@google.com.au"},
{"id":6,"first_name":"Jakob","university":"Fachhochschule Rosenheim, Hochschule für Technik und Wirtschaft","email":"jharken5@spiegel.de"},
{"id":7,"first_name":"Robbi","university":"Salem University","email":"rbrister6@redcross.org"},
{"id":8,"first_name":"Colline","university":"Coastal Carolina University","email":"cbrosh7@alibaba.com"},
{"id":9,"first_name":"Michail","university":"Universidad Católica de Ávila","email":"mrome8@shinystat.com"},
{"id":10,"first_name":"Hube","university":"Universitat Rovira I Virgili Tarragona","email":"hlethbrig9@foxnews.com"}]

/* Request 1: Create a new array called universities that contains all the universities in the graduates array.  

Once you have the new array created, sort the universities alphabetically and log the result. */
const universities = [];

graduates.forEach(element => universities.push(element.university));
console.log(universities)

/* Request 2: Create a new array called contactInfo that contains both first name and email of each student.

The resulting contact information should have a space between the first name and the email information like this: 
Name email@example.com

Log the result of your new array. */
const contactInfo = [];
graduates.forEach(element => contactInfo.push(element.first_name + ' ' + element.email));
console.log(contactInfo);


/* Request 3: Find out how many universities have the string "Uni" included in their name. Create a new array called uni that contains them all. Log the result. */
const uni = [];
graduates.forEach
(
  element =>   
  { 
    if((element.university.indexOf('Uni')) !== -1)
    { 
        uni.push(element.university);
    }
  });
console.log(uni);