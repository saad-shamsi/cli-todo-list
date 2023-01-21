#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import { message } from "./utils/welcome.js";
import { todoFunc } from "./todo.js";





await message()
await todoFunc()