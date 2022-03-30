// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8]
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9]
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6]
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5]
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6]

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5]
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3]
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4]
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5]
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4]

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4]
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9]
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3]
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3]
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3]

const myCard1 = [4,5,5,6,8,9,9,2,2,7,6,5,0,1,7,6]
const myCard2 = [6,0,1,1,6,9,3,2,7,0,5,1,6,2,6,7]
const myCard3 = [5,2,8,4,8,8,8,3,1,8,3,6,6,9,3,9]
const myCard4 = [3,4,6,9,9,9,6,0,1,7,7,8,5,5,5]
const myCard5 = [6,0,1,1,5,6,4,0,5,4,4,2,3,0,4,5,7,1,9]

const create = str =>{
    const card = [];
    for (let i=0; i<str.length; i++) {
        card.push(parseInt(str[i]))
    }
    return card;
    }
    

const myCard6 = create('5434245624105363')

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5]
const batch2 = [myCard1, myCard2,myCard3, myCard4, myCard5 ]

// Add your functions below:
const validateCred = arr => {
    
    let number;
    let sum = 0;
for (let i = arr.length-1; i >= 0; i -= 2) {
    number = arr[i]
    sum += number
  
}
for (let j = arr.length-2; j >= 0; j -= 2){
    number = arr[j] * 2
    if (number > 9) {
        number -= 9
       
    }
    
    sum += number
} console.log(sum)
 if (sum % 10 === 0) {
     return true
 } else {
     return false
 }
}



/*
rem = sum % 10
if (rem !== 0) {

}

1) посчитать остаток sum % 10 
2) если он не !== 0 то 
3) присвоить значение остатка переменной rem = 10 - (sum % 10)
4) card[card.length-1] + remувеличить или уменьшить номер карты на rem 
5) если card[card.length-1] > 10 {
    card[card.length-1] - 10;
}

*/



console.log(validateCred(myCard5));

const findInvalidCards = arr => {
    let invalid = [];
    for (let i = 0; i<arr.length; i++) {
        if (validateCred(arr[i]) === false){
            invalid.push(arr[i])
        }
    }
    return invalid;
}

// const invalidCards = findInvalidCards(batch);
// const invalidCards2 = findInvalidCards(batch2)
// console.log(invalidCards2)


const idInvalidCardCompanies = cards => {
    const companies = [];
for (let i=0; i<cards.length; i++) {
     
    // switch (cards[i][0]) {
    //     case 3: companies.push('Amex');
    //     case 4: companies.push('Visa');
    //     case 5: companies.push('Mastercard');
    //     case 6: companies.push('Discover')
    //     default: console.log('Company not found')
    // };
    if (!companies.includes('Amex') || !companies.includes('Mastercard') || !companies.includes('Discover')||!companies.includes('Visa'))
    if (cards[i][0] === 3) {
        
        companies.push('Amex');
    }  else if (cards[i][0] === 4) {
       
        companies.push('Visa');
    } else if (cards[i][0] === 5) {
        
        companies.push('Mastercard');
    } else if (cards[i][0] === 6) {
       
        companies.push('Discover');
    } else {
        console.log('Company not found')
    }

}

return companies;

}

// console.log(idInvalidCardCompanies(invalidCards))
// console.log(idInvalidCardCompanies(invalidCards2))
 







/*
функция в которой
1) for идет с конца +
2) каждую вторую цифру 
умножает на 2
3) если после умножения
там 2х значное надо отнять 9
4) просуммировать каждое
число
5) если при делении на 10
% остача 0 номер valid












*/



const toValid = card => {
    let rem;
    let number;
    let sum = 0;
for (let i = card.length-1; i >= 0; i -= 2) {
    number = card[i]
    sum += number
  
}
for (let j = card.length-2; j >= 0; j -= 2){
    number = card[j] * 2
    if (number > 9) {
        number -= 9
       
    }
    
    sum += number
} 
 if (sum % 10 !== 0) {
     rem = 10 - (sum % 10)
     card[card.length-1] += rem
     if (card[card.length-1] > 9) {
         card[card.length-1] -= 10
     }
 } 
 return card 
}


console.log(toValid(myCard5));


console.log(validateCred(myCard5));