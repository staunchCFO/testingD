const enrolledStudents = 'this is a great value';
    if(enrolledStudents.length > 0){
        console.log("You are allowed access into this Class")
    }else if(enrolledStudents.length > 24) {
        console.log("The number of students present is smaller than expected")
    }else{
        console.log("Your'e neither for this class or the number of students isn't upto the expected.")
    }

let x = 3;
let y = 3;

const newOutput = `${x == y}`

console.log(newOutput)

const mat = Math.random(Math.floor(2*3))

console.log(mat)

// let goodsAmount = [
//     {
//         goodName : 'Tomato',
//         buyer : 'Emeka',
//         quanity : 24,
//         amount : 250
//     },
//     {
//         goodName : 'Pepper',
//         buyer : 'Adeniji',
//         quanity : 4,
//         amount : 25
//     },
//     {
//         goodName : 'Ginger',
//         buyer : 'Gift',
//         quanity : 24,
//         amount : 650
//     },
//     {
//         goodName : 'Onions',
//         buyer : 'Precious',
//         quanity : 24,
//         amount : 1000
//     },
//     {
//         goodName : 'Water Melon',
//         buyer : 'Emeka',
//         quanity : 50,
//         amount : 950
//     },
// ]

// let sum = goodsAmount.amount

// console.log(sum)

// import React, {Component} from "React"


// class Argon extends Component {
//     constructor(props){
//         selector(props)

//         this.state.fireButton= this.state.fireButton.bind(this)
//     }


//     render(){
//         return(
//             <div>
//                 <ChildComponent />
//                 <button onClick= {this.fireButton}></button>
//             </div>
//         )
//     }
// }

// extend default Argon

let array1 = [1,2,3,4,5]

let array2 = [5,6,7,8]
const map1 = array1.length;

console.log(map1)