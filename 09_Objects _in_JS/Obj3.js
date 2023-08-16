// Destructuring of objects
 const course={
    name: "Web Development",
    Instructor: "Arpit Saxena"
 }
 //Now if you want to print name and instructor
 //So instead of doing console.log again and again 
 //we can use destructor by extracting a particluar key from object and then printing it
 const {name}=course
 console.log(name);
 
 //We can also give our own name to a destructor
 const{name:naam}=course
 console.log(naam);