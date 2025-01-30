/**Write an object initializer about a thing you come up with. This initializer object should have 4 parameters that make up attributes of the thing. 
 * Also include one method inside of this object initializer that is based on that thing's behavior.
 *  Write console log statements to verify your object attributes and its method once you have your object initializer created. */
const trafficObject1 = {id: "vehicle_123", type: "car", speed: 65, distance: 0,

// Method to update speed
updateSpeed(speed) {
    this.speed = speed;  
    }
   
}
trafficObject1.updateSpeed(99);
console.log(trafficObject1.speed);
trafficObject1.updateSpeed(88);
console.log(trafficObject1.speed);

