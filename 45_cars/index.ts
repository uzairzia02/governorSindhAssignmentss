/*
Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should 
then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as 
a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.
*/
function storeCarInfo(manufacturer: string, model: string, ...extras: {[key : string ]: any}[]): object {
  const carInfo: any = {
    manufacturer,
    model,
    ...Object.assign({}, ...extras)
  };

  return carInfo;
}
const myCarInfo = storeCarInfo('Toyota', 'Camry', {color: 'blue'}, {features: ['navigation', 'sunroof']}, {MadeIn: ['Germany']})
console.log(myCarInfo);

