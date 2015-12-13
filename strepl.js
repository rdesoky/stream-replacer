#!/usr/bin/env node

/**
 * Created by Ramy Eldesoky on 12/13/2015.
 */

var replacer = require("./replacer");

var find = process.argv[2] || ";";
var replace = process.argv[3] || "\n";

process.stdin.pipe(replacer(find, replace)).pipe(process.stdout);
