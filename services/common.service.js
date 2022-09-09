module.exports={

caluculateValues:(inputValues)=>{
let populationCountArray = [inputValues[0]];
let compactCityArray = [inputValues[1]];
let economicPowerArray = [inputValues[2]];
let walkingAccessibilityArray = [inputValues[3]];
let bicycleAccessibilityArray = [inputValues[4]];
let publicTransportAccessibilityArray = [inputValues[5]];
let motorVehicleAccessibilityArray = [inputValues[6]];
for (let i = 0; i < 10; i++) {
    if (i === 1) {
        populationCountArray.push(populationCountArray[i - 1]);
        compactCityArray.push(compactCityArray[i - 1]);
        economicPowerArray.push(economicPowerArray[i - 1]);
        walkingAccessibilityArray.push(
            walkingAccessibilityArray[i - 1] +
            (compactCityArray[1] - compactCityArray[0]));
        bicycleAccessibilityArray.push(
            bicycleAccessibilityArray[i - 1] +
            (compactCityArray[1] - compactCityArray[0])
        );
        publicTransportAccessibilityArray.push(publicTransportAccessibilityArray[0] -
            (compactCityArray[1] - compactCityArray[0]) / 2);
        motorVehicleAccessibilityArray.push(motorVehicleAccessibilityArray[i - 1] -
            (compactCityArray[1] - compactCityArray[0]) / 2);
    } else if (i === 2) {
        populationCountArray.push(populationCountArray[i - 1]);
        compactCityArray.push(compactCityArray[i - 1]);
        economicPowerArray.push(economicPowerArray[i - 1]);
        walkingAccessibilityArray.push(
            walkingAccessibilityArray[i - 1] +
            (compactCityArray[2] - compactCityArray[1]));
        bicycleAccessibilityArray.push(
            bicycleAccessibilityArray[i - 1] +
            (compactCityArray[2] - compactCityArray[1])
        );
        publicTransportAccessibilityArray.push(publicTransportAccessibilityArray[0] -
            (compactCityArray[2] - compactCityArray[1]) / 2);
        motorVehicleAccessibilityArray.push(motorVehicleAccessibilityArray[i - 1] -
            (compactCityArray[2] - compactCityArray[1]) / 2);
    } else if (i === 3) {
        populationCountArray.push(populationCountArray[i - 1]);
        compactCityArray.push(compactCityArray[i - 1]);
        economicPowerArray.push(economicPowerArray[i - 1]);
        walkingAccessibilityArray.push(
            walkingAccessibilityArray[i - 1] +
            (compactCityArray[3] - compactCityArray[2]));
        bicycleAccessibilityArray.push(
            bicycleAccessibilityArray[i - 1] +
            (compactCityArray[3] - compactCityArray[2])
        );
        publicTransportAccessibilityArray.push(publicTransportAccessibilityArray[0] -
            (compactCityArray[3] - compactCityArray[2]) / 2);
        motorVehicleAccessibilityArray.push(motorVehicleAccessibilityArray[i - 1] -
            (compactCityArray[3] - compactCityArray[2]) / 2);
    } else if (i === 4) {
        populationCountArray.push(populationCountArray[i - 1]);
        compactCityArray.push(compactCityArray[i - 1]);
        economicPowerArray.push(economicPowerArray[i - 1]);
        walkingAccessibilityArray.push(
            walkingAccessibilityArray[i - 1] +
            (compactCityArray[4] - compactCityArray[3]));
        bicycleAccessibilityArray.push(
            bicycleAccessibilityArray[i - 1] +
            (compactCityArray[4] - compactCityArray[3])
        );
        publicTransportAccessibilityArray.push(publicTransportAccessibilityArray[0] -
            (compactCityArray[4] - compactCityArray[3]) / 2);
        motorVehicleAccessibilityArray.push(motorVehicleAccessibilityArray[i - 1] -
            (compactCityArray[4] - compactCityArray[3]) / 2);
    } else if (i === 5) {
        populationCountArray.push(populationCountArray[i - 1]);
        compactCityArray.push(compactCityArray[i - 1]);
        economicPowerArray.push(economicPowerArray[i - 1]);
        walkingAccessibilityArray.push(
            walkingAccessibilityArray[i - 1] +
            (compactCityArray[5] - compactCityArray[4]));
        bicycleAccessibilityArray.push(
            bicycleAccessibilityArray[i - 1] +
            (compactCityArray[5] - compactCityArray[4])
        );
        publicTransportAccessibilityArray.push(publicTransportAccessibilityArray[0] -
            (compactCityArray[5] - compactCityArray[4]) / 2);
        motorVehicleAccessibilityArray.push(motorVehicleAccessibilityArray[i - 1] -
            (compactCityArray[5] - compactCityArray[4]) / 2);
    }
    else if (i === 6) {
        populationCountArray.push(populationCountArray[i - 1]);
        compactCityArray.push(compactCityArray[i - 1] +
            (populationCountArray[0] - 0) / 2 / 5 +
            (economicPowerArray[0] - 0) / 2 / 5 +
            (walkingAccessibilityArray[0] - 0) / 5 +
            (bicycleAccessibilityArray[0] - 0) / 2 / 5 +
            (publicTransportAccessibilityArray[0] - 0) / 2 / 5 -
            (motorVehicleAccessibilityArray[0] - 0) / 5);
        economicPowerArray.push(economicPowerArray[i - 1]);
        walkingAccessibilityArray.push(
            walkingAccessibilityArray[i - 1] +
            (compactCityArray[6] - compactCityArray[5]));
        bicycleAccessibilityArray.push(
            bicycleAccessibilityArray[i - 1] +
            (compactCityArray[6] - compactCityArray[5])
        );
        publicTransportAccessibilityArray.push(publicTransportAccessibilityArray[i-1] 
            + (compactCityArray[6] - compactCityArray[5]) / 2);
        motorVehicleAccessibilityArray.push(motorVehicleAccessibilityArray[i - 1]
            + (compactCityArray[6] - compactCityArray[5]) / 2);
    } else if (i === 7) {
        populationCountArray.push(populationCountArray[i - 1]);
        compactCityArray.push(compactCityArray[i - 1] +
            (populationCountArray[0] - 0) / 2 / 5 +
            (economicPowerArray[0] - 0) / 2 / 5 +
            (walkingAccessibilityArray[0] - 0) / 5 +
            (bicycleAccessibilityArray[0] - 0) / 2 / 5 +
            (publicTransportAccessibilityArray[0] - 0) / 2 / 5 -
            (motorVehicleAccessibilityArray[0] - 0) / 5 +
            (populationCountArray[1] - populationCountArray[0]) / 2 / 5 +
            (economicPowerArray[1] - economicPowerArray[0]) / 2 / 5 +
            (walkingAccessibilityArray[1] - walkingAccessibilityArray[0]) / 5 +
            (bicycleAccessibilityArray[1] - bicycleAccessibilityArray[0]) / 2 / 5 +
            (publicTransportAccessibilityArray[1] - publicTransportAccessibilityArray[0]) / 2 / 5 -
            (motorVehicleAccessibilityArray[1] - motorVehicleAccessibilityArray[0]) / 5);

        economicPowerArray.push(economicPowerArray[i - 1]);
        walkingAccessibilityArray.push(
            walkingAccessibilityArray[i - 1] +
            (compactCityArray[7] - compactCityArray[6]));
        bicycleAccessibilityArray.push(
            bicycleAccessibilityArray[i - 1] +
            (compactCityArray[7] - compactCityArray[6])
        );
        publicTransportAccessibilityArray.push(publicTransportAccessibilityArray[i-1] 
            + (compactCityArray[7] - compactCityArray[6]) / 2);
        motorVehicleAccessibilityArray.push(motorVehicleAccessibilityArray[i - 1]
            + (compactCityArray[7] - compactCityArray[6]) / 2);
    } else if (i === 8) {
        populationCountArray.push(populationCountArray[i - 1]);

        compactCityArray.push(compactCityArray[i - 1] +
            (populationCountArray[0] - 0) / 2 / 5 +
            (economicPowerArray[0] - 0) / 2 / 5 +
            (walkingAccessibilityArray[0] - 0) / 2 / 5 +
            (bicycleAccessibilityArray[0] - 0) / 2 / 5 +
            (publicTransportAccessibilityArray[0] - 0) / 2 / 5 -
            (motorVehicleAccessibilityArray[0] - 0) / 5 +
            (populationCountArray[1] - populationCountArray[0]) / 2 / 5 +
            (economicPowerArray[1] - economicPowerArray[0]) / 2 / 5 +
            (walkingAccessibilityArray[1] - walkingAccessibilityArray[0]) / 5 +
            (bicycleAccessibilityArray[1] - bicycleAccessibilityArray[0]) / 2 / 5 +
            (publicTransportAccessibilityArray[1] - publicTransportAccessibilityArray[0]) / 2 / 5 -
            (motorVehicleAccessibilityArray[1] - motorVehicleAccessibilityArray[0]) / 5 +
            (populationCountArray[2] - populationCountArray[1]) / 2 / 5 +
            (economicPowerArray[2] - economicPowerArray[1]) / 2 / 5 +
            (walkingAccessibilityArray[2] - walkingAccessibilityArray[1]) / 5 +
            (bicycleAccessibilityArray[2] - bicycleAccessibilityArray[1]) / 2 / 5 +
            (publicTransportAccessibilityArray[2] - publicTransportAccessibilityArray[1]) / 2 / 5 -
            (motorVehicleAccessibilityArray[2] - motorVehicleAccessibilityArray[1]) / 5);

        economicPowerArray.push(economicPowerArray[i - 1]);
        walkingAccessibilityArray.push(
            walkingAccessibilityArray[i - 1] +
            (compactCityArray[8] - compactCityArray[7]));
        bicycleAccessibilityArray.push(
            bicycleAccessibilityArray[i - 1] +
            (compactCityArray[8] - compactCityArray[7])
        );
        publicTransportAccessibilityArray.push(publicTransportAccessibilityArray[i-1]
            + (compactCityArray[8] - compactCityArray[7]) / 2);
        motorVehicleAccessibilityArray.push(motorVehicleAccessibilityArray[i - 1]
            + (compactCityArray[8] - compactCityArray[7]) / 2);
    } else if (i === 9) {
        populationCountArray.push(populationCountArray[i - 1]);

        compactCityArray.push(compactCityArray[i - 1] +
            (populationCountArray[0] - 0) / 2 / 5 +
            (economicPowerArray[0] - 0) / 2 / 5 +
            (walkingAccessibilityArray[0] - 0) / 2 / 5 +
            (bicycleAccessibilityArray[0] - 0) / 2 / 5 +
            (publicTransportAccessibilityArray[0] - 0) / 2 / 5 -
            (motorVehicleAccessibilityArray[0] - 0) / 5 +
            (populationCountArray[1] - populationCountArray[0]) / 2 / 5 +
            (economicPowerArray[1] - economicPowerArray[0]) / 2 / 5 +
            (walkingAccessibilityArray[1] - walkingAccessibilityArray[0]) / 5 +
            (bicycleAccessibilityArray[1] - bicycleAccessibilityArray[0]) / 2 / 5 +
            (publicTransportAccessibilityArray[1] - publicTransportAccessibilityArray[0]) / 2 / 5 -
            (motorVehicleAccessibilityArray[1] - motorVehicleAccessibilityArray[0]) / 5 +
            (populationCountArray[2] - populationCountArray[1]) / 2 / 5 +
            (economicPowerArray[2] - economicPowerArray[1]) / 2 / 5 +
            (walkingAccessibilityArray[2] - walkingAccessibilityArray[1]) / 5 +
            (bicycleAccessibilityArray[2] - bicycleAccessibilityArray[1]) / 2 / 5 +
            (publicTransportAccessibilityArray[2] - publicTransportAccessibilityArray[1]) / 2 / 5 -
            (motorVehicleAccessibilityArray[2] - motorVehicleAccessibilityArray[1]) / 5 +
            (populationCountArray[3] - populationCountArray[2]) / 2 / 5 +
            (economicPowerArray[3] - economicPowerArray[2]) / 2 / 5 +
            (walkingAccessibilityArray[3] - walkingAccessibilityArray[2]) / 5 +
            (bicycleAccessibilityArray[3] - bicycleAccessibilityArray[2]) / 2 / 5 +
            (publicTransportAccessibilityArray[3] - publicTransportAccessibilityArray[2]) / 2 / 5 -
            (motorVehicleAccessibilityArray[3] - motorVehicleAccessibilityArray[2]) / 5);

        economicPowerArray.push(economicPowerArray[i - 1]);
        walkingAccessibilityArray.push(
            walkingAccessibilityArray[i - 1] +
            (compactCityArray[9] - compactCityArray[8]));
        bicycleAccessibilityArray.push(
            bicycleAccessibilityArray[i - 1] +
            (compactCityArray[9] - compactCityArray[8])
        );
        publicTransportAccessibilityArray.push(publicTransportAccessibilityArray[i-1] 
            +(compactCityArray[9] - compactCityArray[8]) / 2);
        motorVehicleAccessibilityArray.push(motorVehicleAccessibilityArray[i - 1]
            + (compactCityArray[9] - compactCityArray[8]) / 2);
    }
}
return [
    populationCountArray,
    compactCityArray,
    economicPowerArray, 
    walkingAccessibilityArray,
    bicycleAccessibilityArray,
    publicTransportAccessibilityArray,
    motorVehicleAccessibilityArray]
},
prepareData:(data)=>{
    const categories = [
    "Population count",
    "Compact City",
    "Economic power",
    "Walking Accessibility",
    "Bicycle Accessibility",
    "Public Transport Accessibility",
    "Motor Vehicle Accessibility"];
    let str = ''
    categories.forEach((category, i)=>{
        str += '('
        str += `'${category}'` +", "+ `'${data[i]}'` + '),'
    })
    return str?.substring(0, str.length - 1);
}
}