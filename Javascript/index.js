

const person ={
Name:"md.Nurul islam",
Email:"nurulislam8433@gmail.com",
Phone:"01736126730",
Addes:"gazipur"

}


person.Name='title'

person.Addes ='Tangail'

// const persons =[person]

console.log("Name: " + person["Name"])

console.log("Addes: " + person["Addes"])

console.log(person)



    let names = new Array (1,2,3, "harry",undefined);

    console.log(names[1]);




    const person1 = {
      name: "Chris",
      introduceSelf() {
        console.log(`Hi! I'm ${this.name}.`);
      },
    };
    
    const person2 = {
      name: "Deepti",
      // roll:"1",
      introduceSelf() {
        console.log(`Hi! I'm ${this.name}. nurul`);
        return `Hi! I'm ${this.name}. return`
      },
    };

    // name ='roll'

    person2.name='raki'
    person2.roll= function person5() {

      return  this.name




    }

    // console.log(person2.introduceSelf(), "rakib")
    console.log(person2.name,person2.roll())

     



    function createPerson(name) {
      const obj = {};
      obj.name = name;
      obj.introduceSelf = function () {
        console.log(`Hi! I'm ${this.name}.`);
      };
      return obj;
    }
