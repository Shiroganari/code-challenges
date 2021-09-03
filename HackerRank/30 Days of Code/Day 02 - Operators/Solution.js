function solve(meal_cost, tip_percent, tax_percent) {
    // Write your code here
    let tip = (meal_cost / 100) * tip_percent;
    let tax = (tax_percent / 100) * meal_cost;
    let total_cost = Math.round(meal_cost + tip + tax);

    console.log(total_cost);
}