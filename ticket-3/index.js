function countNumberOfNinesInNumber(number) {
  let count = 0;

  for (let i = 0; i < number.toString().length; i++) {
    const digit = number.toString()[i];
    console.log(i)
    console.log(digit)
    console.log("running")
    
    if ('9' === digit) {
      count++;
    }
  }
  
  return count;
}

// Enter a number
//    How do we count the numbers?
//    Split number into individual numbers and check how many are 9s
// Count how many 9s are in that number
// return that number by adding to the count

// Working attempt
// const numberString = number.toString();
// const digits = [];
// for (let i = 0; i < numberString.length; i++) {
//   digits.push(Number(numberString.charAt(i)))
//   console.log(digits)
  
//   if ('9' === digits) {
//     count++;
//   }
// }

// the loop is never running 
// for (let i = 0; i < number.length; i++)  replace with number 
//  console.log(digit)   retunred as undefined 
// console.log(i) returned the correct index
// should const line 5 be changed to let? doesn't change retruned undefined
// for (let i = 0; i < number.toString().length; i++)
//