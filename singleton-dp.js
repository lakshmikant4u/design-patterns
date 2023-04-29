let configurationSingleton = (() => {
    // private value of the singleton initialized only once
    let config;
 
    const initializeConfiguration = (values) => {
        this.randomNumber = Math.random();
        values = values || {};
        this.number = values.number || 5;
        this.size = values.size || 10;
    }
 
    // We export the centralized method to return
    // the singleton's value
    return {
        getConfig: (values) => {
            // initialize the singleton only once
            if (config === undefined) {
                config = new initializeConfiguration(values);
            }
 
            // and always return the same value
            return config;
        }
    };
})();
 
const configObject = configurationSingleton.getConfig({ "size": 8 });
// prints number: 5, size: 8, randomNumber: someRandomDecimalValue
console.log(configObject);
 
const configObject1 = configurationSingleton.getConfig({ "number": 8 });
// prints number: 5, size: 8, randomNumber: same randomDecimalValue // config
console.log(configObject1);
