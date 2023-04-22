// Define the handler function
const QueryHandler = next => query => {
    if (next) {
        return next(query);
    }
    return null;
};

// Define the concrete handlers
const BillingHandler = next => query => {
    if (query.type === "billing") {
        console.log("BillingHandler handles the query: " + query.text);
        // Handle the query related to billing
        return true;
    } else {
        return next(query);
    }
};

const TechnicalHandler = next => query => {
    if (query.type === "technical") {
        console.log("TechnicalHandler handles the query: " + query.text);
        // Handle the query related to technical support
        return true;
    } else {
        return next(query);
    }
};

const GeneralHandler = next => query => {
    if (query.type === "general") {
        console.log("GeneralHandler handles the query: " + query.text);
        // Handle the general query
        return true;
    } else {
        return next(query);
    }
};

// Create the chain of handlers
const queryHandler = BillingHandler(TechnicalHandler(GeneralHandler(null)));

// Send queries through the chain
const query1 = { type: "billing", text: "I have a question about my bill." };
const query2 = { type: "technical", text: "My internet is not working." };
const query3 = { type: "general", text: "What are your office hours?" };

queryHandler(query1);
queryHandler(query2);
queryHandler(query3);