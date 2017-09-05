# validate-json-schema

Validates JSON-files against a JSON-schema, which have inner file-depencies. While I was trying to validate against a JSON-schema with references to other schema-files, I had the problem that [ajv](https://github.com/epoberezkin/ajv) could not resolve the depencies by default.

So in order to resolve the "$ref" in a schema like this:

```
"options": {
  "items": {
    "$ref": "option.json"
  },
  "type": "array",
  "minItems": 1
}
```
I created this package.


## Install
```
npm install -g validate-json-schema
```

## Usage

Use this command to run the validation:

```
validate-json-schema -j json-file.json -s schema-file.json
```

*CONDITIONS*:
- all paths must be relative to the current folder
- all "sub-schema"-files must be within the same folder as the `schema-file.json`

Enjoy! Peace.
