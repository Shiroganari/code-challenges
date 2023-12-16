var createCounter = function(init) {
    let presentValue = init;

    return {
        increment: () => ++presentValue,
        decrement: () => --presentValue,
        reset: () => presentValue = init
    };
};
