import chalk from "chalk"
import inquirer from "inquirer"
    export async function repetationOfFlow() {
        const {repeat} :{repeat:boolean}=await inquirer.prompt([{
            name:"repeat",
            type: "confirm",
           
            message:chalk.greenBright("Do you Want to add Any Task?")
        }])
        return repeat
    }