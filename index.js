// 1. Ask for user's name
let userName = prompt("Enter your name:");
while (!userName || userName.trim() === "") {
    userName = prompt("Please enter a valid name:");
}

// 2. Ask for total income and validate
let totalIncome = Number(prompt("Enter your total income ($):"));
while (isNaN(totalIncome) || totalIncome <= 0) {
    totalIncome = Number(prompt("Invalid input! Please enter a valid income amount ($):"));
}

// 3. Ask for the number of expenses and collect amounts dynamically using a loop
let expenseCount = Number(prompt("How many expenses do you have?"));
while (isNaN(expenseCount) || expenseCount < 0) {
    expenseCount = Number(prompt("Please enter a valid number of expenses:"));
}

let totalExpenses = 0;
for (let i = 1; i <= expenseCount; i++) {
    let expenseAmount = Number(prompt(`Enter amount for expense #${i} ($):`));
    while (isNaN(expenseAmount) || expenseAmount < 0) {
        expenseAmount = Number(prompt(`Invalid input! Enter a valid amount for expense #${i} ($):`));
    }
    totalExpenses += expenseAmount;
}

// 4. Perform all calculations
let taxDeducted = totalIncome * 0.10; // 10% tax
let netIncome = totalIncome - taxDeducted;
let remainingBalance = netIncome - totalExpenses;
let savings = remainingBalance > 0 ? remainingBalance * 0.20 : 0; // 20% of balance (if positive)

// Financial Status Condition
let financialStatus = "";
if (remainingBalance < 0) {
    financialStatus = "⚠️ Critical Warning: You are in debt! Expenses exceed net income.";
} else if (remainingBalance < 1000) {
    financialStatus = "⚠️ Needs Improvement. Consider reducing expenses.";
} else {
    financialStatus = "🎉 Healthy Financial Status. Good job!";
}

// 5. Show the results in the console
console.log("📊 Personal Budget Tracker");
console.log(`User: ${userName}`);
console.log(`💰 Total Income: $${totalIncome}`);
console.log(`💸 Total Expenses: $${totalExpenses}`);
console.log(`📉 Tax Deducted (10%): $${taxDeducted}`);
console.log(`💵 Net Income After Tax: $${netIncome}`);
console.log(`🟢 Remaining Balance: $${remainingBalance}`);
console.log(`🏦 Savings (20% of balance): $${savings}`);
console.log(financialStatus);