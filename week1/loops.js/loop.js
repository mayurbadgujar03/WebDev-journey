// 1️⃣ PS: Distribute gifts equally among friends until you run out of gifts

function distributeGifts(totalGifts, friends) {
    let giftsCount = 0;
    for (let i = 0; i < friends; i++) {
      if(totalGifts > 0) {
        giftsCount++;
        totalGifts--;
      }
    }
    return giftsCount;
}

let res = distributeGifts(2, 4);
console.log(res);


// 2️⃣ PS: Count how many apples you picked

function countApples(apples) {
  let countApples = 0;
  for (let i = 0; i < apples; i++) {
    countApples++
  }
  return countApples;
}

let res1 = countApples(5);
console.log(res1);


// 3️⃣ PS: Calculate how many full boxes can be packed with the given chocolate bars

function countBoxes(totalBars, barsPerBox) {
  let numberOfBoxes = 0;
  for(let i = 0; i < totalBars; i++){
    numberOfBoxes = (parseInt(totalBars / barsPerBox))
  }
  return numberOfBoxes
}

let res2 = countBoxes(17, 5);
console.log(res2);



// 4️⃣ PS: Calculate the total amount of water collected from different containers


function totalWater(waterAmounts) {
  let toatlAmountOfWater = 0;
  for (let i = 0; i < waterAmounts.length; i++) {
    toatlAmountOfWater += waterAmounts[i];
  }
  return toatlAmountOfWater;
}

let res3 = totalWater([1, 2, 3, 4]);
console.log(res3);


// 5️⃣ PS: Count how many steps you took to reach your daily step goal

function countSteps(targetSteps) {
  let countSteps = 0;
  for (let i = 0; i < targetSteps; i++) {
    countSteps++;
  }
  return countSteps;
}

let res4 = countSteps(5);
console.log(res4);


// 6️⃣ PS: Count how many working days are in a given week (skip weekends)


function workingDays(days) {
  let workingDaysCount = 0;

  for(let i = 0; i < days.length; i++) {
    if(days[i] !== "Saturday" && days[i] !== "Sunday") {
      workingDaysCount++
    }
  }
  return workingDaysCount;
}

let res5 = workingDays(["Monday", "Tuesday", "Friday", "Saturday"]);
console.log(res5);

// 7️⃣ PS: Flatten a star-level array and count the total number of stars


function totalStars(starLevels) {
  let totalStarsArray = starLevels.flat();
  let totalStarsCount = 0;
  for(let i = 0; i < totalStarsArray.length; i++){
    totalStarsCount++
  }
  return totalStarsCount;
}

let res6 = totalStars([["*", "*", "*"], ["*"]])
console.log(res6);


// 8️⃣ PS: Calculate the total price by summing up all item prices in your shopping cart


function totalPrice(prices) {
  let totalCost = 0;
  for (let i = 0; i < prices.length; i++) {
    totalCost += prices[i];
  }
  return totalCost;
}

let res7 = totalPrice([1.5, 2.3, 3.7])
console.log(res7);
