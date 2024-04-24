#! usr/bin/env node
    import inquirer from "inquirer";

    let myPin = 1234;
    let balance = 5000;
    
    let pinAns = await inquirer.prompt([{
        name: "pin",
        type: "number",
        message: "enter your pin"
    }]);
    
    if (pinAns.pin === myPin) {
        console.log(`your pin is correct`);
        let operationAns = await inquirer.prompt([{
            name: "operation",
            type: "list",
            message: "select the opertion",
            choices: ["withdraw", "checkBalance"]
        }]);
        if (operationAns.operation === "withdraw") {
            let drawMethod = await inquirer.prompt([{
                name: "withdraw",
                type: "list",
                message: "select the method of withdrawal",
                choices: ["fastCash", "enterAmount"]
            }]);
            if (drawMethod.withdraw === "fastCash") {
                let fastAmount = await inquirer.prompt([{
                    name: "amount",
                    type: "list",
                    message: "select the number",
                    choices: [1000, 3000, 5000, 9000]
                }]);
                if (fastAmount.amount > balance) {
                    console.log(`Insufficient amount`);
                } else {
                    balance -= fastAmount.amount;
                    console.log(`${balance} are successfully withdrawn`);
                    console.log(`your remaining balance is ${balance}`);
                }
            }
            if (operationAns.operation === "checkBalance") {
                console.log(`your current balance is ${balance}`);
            }
            if (drawMethod.withdraw === "enterAmount") {
                let amountAns = await inquirer.prompt([{
                    name: "amount",
                    type: "number",
                    message: "enter amount"
                }]);
                if (amountAns.amount > balance) {
                    console.log(`Insufficient balance`);
                } else {
                    balance -= amountAns.amount;
                    console.log(`${balance} are successfully withdrawn`);
                    console.log(`your remaining balance is ${balance}`);
                }
            }
        }
    } else {
        console.log(`your password is incorrect`);
    }
    