// HOMEWORK:

// - Arrayin methodlarini sifirdan yazmaq
//  Filter +
// find+
// findIndex+
// every+
// some+
// reduce(?)
// includes+
// map+
// sort(?)
//  -  Bir funksiya yazin set olunan deyeri herdefe funksiya cagirdildiqca 2 defe artirsin+

// High order function istifade edin+

// ---------------------------------------------

// FILTER FUNC

(function () {
  function customFilter(arr, fn) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
      if (fn(arr[i])) newArr.push(arr[i]);
    }
    return newArr;
  }

  let givenArr = [1, -2, 3, -4, 5, -6];
  nepNewArr = customFilter(givenArr, function (v) {
    return v < 0;
  });
  // console.log(nepNewArr);
})();

// ---------------------------------------------

// FIND FUNC
(function () {
  let givenArr = [1, -2, 3, -4, 5, -6];
  function FindArr(arr, fn) {
    for (let i = 0; i < arr.length; i++) {
      if (fn(arr[i])) {
        return arr[i];
      }
    }
    return undefined;
  }
  let FoundArr = FindArr(givenArr, (v) => v > 1);
  // console.log(FoundArr);
})();

// ---------------------------------------------

// FINDINDEX FUNC
(function () {
  let givenArr = [1, -2, 3, -4, 5, -6];

  function findIndex(arr, item) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] == item) {
        return i;
      }
    }
    return "-1";
  }
  FoundArr = findIndex(givenArr, 5);
  // console.log(FoundArr);
})();

// ---------------------------------------------

// EVERY FUNC

(function () {
  let givenArr = [1, 2, 3];
  function every(arr, fn) {
    for (let i = 0; i < arr.length; i++) {
      if (!fn(arr[i])) {
        return false;
      }
    }
    return true;
  }
  result = every(givenArr, function (v) {
    return v > 0;
  });

  // console.log(result);
})();

// ---------------------------------------------

// SOME FUNC

(function () {
  let givenArr = [17, 23, 45];

  function some(array, fn) {
    for (let i = 0; i < array.length; i++) {
      if (fn(array[i])) {
        return true;
      }
    }

    return false;
  }

  result = some(givenArr, function (v) {
    return v < 18;
  });
  // console.log(result);
})();

// ---------------------------------------------

// REDUCE FUNC

(function () {
  let givenArr = [1, 2, 3, 4, 5];
  function reduce(initial, array, fn) {
    let result = initial;
    let i = 0;
    while (i < array.length) {
      result = fn(result, array[i]);
      i++;
    }

    return result;
  }

  result = reduce(0, givenArr, function (v, a) {
    return v + a;
  });

  // console.log(result);
})();

// ---------------------------------------------

// INCLUDES FUNC

(function () {
  let givenArr = [1, -2, 3, -4, 5, -6];
  function includesArr(array, item) {
    for (let i = 0; i < array.length; i++) {
      if (array[i] == item) return true;
    }
    return false;
  }

  result = includesArr(givenArr, 2);
  // console.log(result);
})();

// ---------------------------------------------

// MAP FUNC

(function () {
  let givenArr = [1, -2, 3, -4, 5, -6];
  function mapArr(array, fn) {
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
      newArray.push(fn(array[i]));
    }
    return newArray;
  }

  result = mapArr(givenArr, function (v) {
    return v * 10;
  });

  // console.log(result);
})();

// ----------------------------------------------

// SORT FUNC

(function () {
  function sortArr(arr, fn) {
    for (let i = 0; i < arr.length; i++) {
      if (fn(arr[i])) {
      }
    }
  }
});

// ----------------------------------------------

//  -  Bir funksiya yazin set olunan deyeri herdefe funksiya cagirdildiqca 2 defe artirsin

function double(initial) {
  let value = initial;

  return function () {
    value *= 2;
    return value;
  };
}

// const start = double(2);
// console.log(start);
// console.log(start());
// console.log(start());
// console.log(start());
// commit
