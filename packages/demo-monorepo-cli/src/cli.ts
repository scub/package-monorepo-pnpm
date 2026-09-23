#!/usr/bin/env node
import { buildGreeting } from "./greeting.js";

console.log(buildGreeting(process.argv[2]));
