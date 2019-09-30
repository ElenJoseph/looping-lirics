// 1 Using a loop or loops and an Object and/or Array, output 3 verses of the song "Old MacDonald" to the console.
// 2 Using nested loops and an Object and/or Array, output the ENTIRE song of "Bingo" to the console.
// 3 Using loops and conditional statements, output the ENTIRE song of "5 Little Ducks" to the console.

const animals = [
    {name:'caw',sound:'moo, moo'},
    {name:'pig',sound:'oink, oink'},
    {name:'duck',sound:'quack, quack'}
]
for(let i =0; i < animals.length; i++){
    console.log(`Old MACDONALD had a farm
E-I-E-I-O And on his farm he had a ${animals[i].name} With a ${animals[i].sound} 
here And a ${animals[i].sound} there
Here a ${animals[i].sound}, there a ${animals[i].sound}
Everywhere a ${animals[i].sound}
Old MacDonald had a farm
E-I-E-I-O`)
console.log(' ')
} 

// 2 Using nested loops and an Object and/or Array, output the ENTIRE song of "Bingo" to the console.

const bingo = ['B','I','N','G','O']

for(let i =0; i < 6; i++){
console.log(`There was a farmer who had a dog,
And Bingo was his name-o.`)

for(let p =0; p < 3; p++){
    console.log(bingo.join('-'))
}
console.log(`And Bingo was his name-o.`)
bingo[i]='clap'
console.log(' ')
}

// 3 Using loops and conditional statements, output the ENTIRE song of "5 Little Ducks" to the console.
console.log(' ')
console.log('Title: 5 Little Ducks')
const ducks = 5

for(let i = ducks; i >= 0; i--){
    if (i > 0){
        console.log(`${i} little ducks went out one day...`)
    }else{
        console.log(`Sad mother duck went out one day…`)
    }

    console.log(`Over the hills and far away
Mother duck said “Quack, quack, quack, quack"`)

    if(i > 1){
         console.log(`But only ${i -1} little ducks came back.`)
     }else if(i == 1){
        console.log(`But none of the ${ducks} little ducks came back`)
    }else{
        console.log(`And all of the ${ducks} little ducks came back.`)
    }
    console.log('')
}