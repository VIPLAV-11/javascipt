/* Create a business name generator by combining list of adjectives and shop name and another word


Adjectives:
Crazy 
Amazing
Fire 

Shop Name:
Engine
Foods
Garments

Another Word:
Bros
Limited
Hub



*/
let random=Math.random()
let first,second,third;

if(random<0.33){
    first="Bros"
}
else if(random<0.66 && random>=0.33){
    first="legend"
}
else{
    first="toji"
}
random=Math.random()
if(random<0.33){
    second="Engine"
}
else if (random<0.66 && random>=0.33){
    second="food"
}
else{
    second="garments"
}
random=Math.random()
if(random<0.33){
    third="crazy"
}
else if (random<0.66 && random>=0.33){
    third="amazing"
}
else{
    third="fire"
}
console.log(`${first} ${second} ${third}`)
