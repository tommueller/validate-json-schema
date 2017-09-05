#!/usr/bin/env node
const program = require('commander');
const fs = require('fs');
const Ajv = require('ajv');




program
.option('-j, --json-file <file>', 'The file to be validated.')
.option('-s, --schema-file <file>', 'The schema to be validated against.')
.parse(process.argv);

const ajv = new Ajv(); // options can be passed, e.g. {allErrors: true}

const json = require(process.cwd() + '/' + program.jsonFile);
const schema = require(process.cwd() + '/' + program.schemaFile);

const schemaPath = require('path').dirname(process.cwd() + '/' + program.schemaFile);
fs.readdirSync(schemaPath).forEach(file => {
  ajv.addSchema(require(schemaPath + '/' + file, file));
});

const validate = ajv.compile(schema);
const valid = validate(json);
if (!valid) console.log(validate.errors);
else console.log('valid json');
