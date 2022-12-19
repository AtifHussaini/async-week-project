const objects = [];

const array = [{name: "The Pearl McCullough Primary School", address: "Broomfield, CO"}, {name: "Patriot Technical College", address: "Malden, MA"}, {name: "Stalin Girls School", address:"Elizabeth, NJ"}, {name: "Valley County Nursery for Art", address: "Logan, UT"}, {name: "St Luther Dillon's Separatist School", address: "Surprise, AZ"}, {name:"Andreas Islamic School", address: "Daly City, CA"},{name:"Truthful High", address: "Muncie, IN"},{name: "Valley Forest Elementary", address:"Ankeny, IA"},{name: "Otley Learning Institute", address: "Deerfield Beach, FL"}, {name: "The Bernice Franklin High", address:"Rock Hill, SC"},{name: "Kent CE School", address: "Greenfield, WI"},{name: "The Nell Pearson Science Academy for Intelligent Talents", address: "Joplin, MO"},{name: "The Leola Craig Academy School", address:"Harrisburg, PA"}, {name: "Andreas Shores Separatist School", address: "Jackson, TN"}];

for (let i = 0; i < array.length; i++) {
  const object = {
    name: array[i].name,
    address: array[i].address,
  };
  objects.push(object);
}