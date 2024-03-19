// Code your solution in this file!
let start = 42
function distanceFromHqInBlocks(dropofLocation){
    const blockDistance = dropofLocation - start
    if(blockDistance < 0){
        return blockDistance * -1
    }else{
        return blockDistance
    }
}
function distanceFromHqInFeet(dropofLocation){
const feetDistance = dropofLocation - start
if(feetDistance < 0){
    return [feetDistance * -1]* 264
    }else{ 
        return  feetDistance* 264 
    }
}
function distanceTravelledInFeet(start,dropofLocation){
const feetDistance = dropofLocation - start
if(feetDistance < 0){
    return [feetDistance * -1]* 264
    }else{ 
        return  feetDistance* 264 
    }
}
console.log(distanceTravelledInFeet(43,6))
function calculatesFarePrice(start,dropofLocation){
const distanceTraveled = distanceTravelledInFeet(start,dropofLocation)
if(distanceTraveled <= 400){
    return 0
}else if(distanceTraveled > 400 && distanceTraveled <= 2000){
    return [distanceTraveled - 400] * 0.02
}else if(distanceTraveled > 2000 && distanceTraveled <= 2500 ){
    return 25
}else{
    return `cannot travel that far`
}

    
}
