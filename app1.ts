#! /usr/bin/env node

import chalk from "chalk";
import inquirer from "inquirer";

let calculator = await inquirer.prompt([
  {
    message: "kindly enter your first number",
    name: "question1",
    type: "number",
  },
  {
    message: "kindly enter your second number ",
    name: "question2",
    type: "number",
  },
  {
    message: "please select the operator",
    name: "operator",
    type: "list",
    choices: ["+", "-", "*", "/", "**", "%"],
  },
]);

if (calculator.operator === "+") {
  console.log(chalk.blue(calculator.question1 + calculator.question2));
} else if (calculator.operator === "-") {
  console.log(chalk.redBright(calculator.question1 - calculator.question2));
} else if (calculator.operator === "*") {
  console.log(chalk.grey(calculator.question1 * calculator.question2));
} else if (calculator.operator === "/") {
  console.log(chalk.yellowBright(calculator.question1 / calculator.question2));
} else if (calculator.operator === "**") {
  console.log(
    chalk.bgMagentaBright(calculator.question1 ** calculator.question2)
  );
} else if (calculator.operator === "%") {
  console.log(calculator.question1 % calculator.question2);
} else {
  ("you entered a in valid term");
}
