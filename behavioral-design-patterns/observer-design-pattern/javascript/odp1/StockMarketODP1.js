let createStock = (name, price) => {
    const observers = [];

    return {
        getName: () => name,
        getPrice: () => price,
        addObserver: (observer) => observers.push(observer),
        removeObserver: (observer) => {
            const index = observers.indexOf(observer);
            if (index > -1) {
                observers.splice(index, 1);
            }
        },
        notifyObservers: () => {
            observers.forEach((observer) => {
                observer.update({ name, price });
            });
        },
        setPrice: (stockObj, newPrice) => {
            price = newPrice;
            stockObj.notifyObservers();
        }
    };
}

let createInvestor = (name, stocks) => {
    return {
        getName: () => name,
        getStocks: () => stocks,
        update: (stock) => {
            console.log(`Hey ${name}, the price of ${stock.name} has changed to ${stock.price}`);
        },
        buyStock: (observer, stock) => {
            stocks.push(stock);
            stock.addObserver(observer);
            console.log(`${name} bought a share of ${stock.getName()} at ${stock.getPrice()}`);
        },
        sellStock: (observer, stock) => {
            const index = stocks.indexOf(stock);
            if (index > -1) {
                stocks.splice(index, 1);
                stock.removeObserver(observer);
                console.log(`${name} sold a share of ${stock.getName()} at ${stock.getPrice()}`);
            }
        }
    };
}

const apple = createStock('Apple', 100);
const microsoft = createStock('Microsoft', 200);
const google = createStock('Google', 300);

const investor1 = createInvestor('Alice', []);
const investor2 = createInvestor('Bob', []);
const investor3 = createInvestor('Charlie', []);

investor1.buyStock(investor1, apple);
investor2.buyStock(investor2, microsoft);
investor3.buyStock(investor3, google);

apple.setPrice(apple, 110);
microsoft.setPrice(microsoft, 190);
google.setPrice(google, 320);