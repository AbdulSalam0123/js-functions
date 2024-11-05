const maxOfTwoNumbers = (x, y) => {
    if (x >= y) {
      return x;
    } else {
      return y;
    }
  }
  
  console.log('Exercise 1 Result:', maxOfTwoNumbers(3, 9));

//   Exercise 2
const isAdult = (num) => 
{
    if(num >= 18)
    {
        return "Adult";
    }
    else
    {
        return "Minor";
    }
}
console.log('Exercise 2 Result:', isAdult(21));

// Exercise 3

const isCharAVowel = (char) => 
{
    if(char==='a'||char==='e'||char==='i'||char==='o'||char==='u')
    {
        return true;
    }
    else
    {
        return false;
    }
}

console.log('Exercise 3 Result:', isCharAVowel("b"));

const generateEmail = (Name, domain) => 
{
    return `${Name}@${domain}`
}
console.log('Exercise 4 Result:', generateEmail("johnsmith", "example.com"));

// Exercise 5
const greetUser = (Name, greeting)=>
{
    return `Good ${greeting}, ${Name}!`;
}
console.log('Exercise 5 Result:', greetUser("Sam", "morning"));

// Exersice 6
const maxOfThree = (num1, num2, num3) =>
{
    let result =num1;
    if(result<num2)
    {
        result=num2;
    }
    if(result<num3)
    {
        result=num3;
    }
    return result;
}
console.log('Exercise 6 Result:', maxOfThree(5, 10, 8));

// Exercise 7
const calculateTip = (billAmount, tipPercentage) =>
{
    return `${billAmount*(tipPercentage/100)}`
}
console.log('Exercise 7 Result:', calculateTip(50, 20));

// Exercise 8

const convertTemperature = (temp, unit) =>
{
    if(unit==='C')
    {
        return `${(temp)*(9/5)+32}`;
    }
    else if(unit==='F')
    {
        return `${(temp-32)/(5/9)}`
    }
}

console.log('Exercise 8 Result:', convertTemperature(32, "C"));

// Exercise 9
const basicCalculator = (num1, num2, operator) =>
{
    if(operator==='add')
    {
        return `${num1+num2}`
    }
    else if(operator==='subtract')
    {
        return `${num1-num2}`
    }
    else if(operator==='multiply')
    {
        return `${num1*num2}`
    }
    else if(operator==='divide')
    {
        if(num2!==0)
        {
        return `${num1/num2}`
        }
    }
}

console.log('Exercise 9 Result:', basicCalculator(10, 5, "subtract"));

// Exercise 10//
const calculateGrade = (Score) =>
{
    if(Score>=90 && Score<=100)
    {
        return 'A'
    }
    else if(Score>=80 && Score<=89)
    {
        return 'B'
    }
    else if(Score>=70 && Score<=79)
    {
        return 'C'
    }
    else if(Score>=60 && Score<=69)
    {
        return 'D'
    }
    else if(Score<60)
    {
        return 'F'
    }

}

console.log('Exercise 10 Result:', calculateGrade(85));

// Exercise 11
const createUsername = (fName, lName) =>
{

    return `${fName.substring(0,3)+lName.substring(0,3)+(fName.length+lName.length)}`;
}

console.log('Exercise 11 Result:', createUsername("Samantha", "Green"));

// Exercise 12
const numArgs=()=>
{
    return arguments.length-1;
}
console.log('Exercise 12 Result:', numArgs(1, 2, 3, 4));