function forEach(array, callback) {
  for (let i = 0; i < array.length; i++) {
    callback(array[i], i, array)
  }
}

function map(arr, callback) {
  const newArr = []
  for (let i = 0; i < arr.length; i++) {
    newArr.push(callback(arr[i]))
  }
  return newArr
}

function filter(arr, callback) {
  const newArr = []
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i]) === true) {
      newArr.push(arr[i])
    }
  }
  return newArr
}

function every(arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    if (filter(arr, callback).length === arr.length) {
      return true
    }
    else {
      return false
    }
  }
}

function some(arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    if(filter(arr, callback).length > 0) {
      return true
    }
    else {
      return false
    }
  }
}

function majority(arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    if (filter(arr, callback).length > arr.length/2) {
      return true
    }
    else {
      return false
    }
  }
}

function once(callback) {
  let test = false
  if (test) {
    return callback()
    test = true
    once()
  }
}

function groupBy(arr, callback) {
  const obj = {}
  for (let i = 0; i < arr.length; i++) {
    obj.callback(arr[i]) = arr[i]
  }
  return obj
}

function arrayToObject() {

}

module.exports = { 
  forEach, 
  map, 
  filter, 
  every, 
  some, 
  majority,
  once,
  groupBy,
  arrayToObject,
};
