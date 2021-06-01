// Write your solution in this file!
const driver = {}

function updateDriverWithKeyAndValue(driver, key, value){
    return Object.assign({},driver,{[key]:value});
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value){
    return Object.assign(driver,{[key]:value});
}

function deleteFromDriverByKey(driver, key){
    let cloneDriver = Object.assign({}, driver)
    delete cloneDriver[key]
    return cloneDriver 
}

function destructivelyDeleteFromDriverByKey(driver, key) {
    delete driver[key]
    return driver 
}

// const doSomething = (obj, prop) => {
//     let res = Object.assign({}, obj)
//     delete res[prop]
//     return res
//   }