const csvToJson = require('convert-csv-to-json');
 
const input = './gundata-full.csv'; 
const output = './public/gundata.json';
 
csvToJson.fieldDelimiter(',').formatValueByType().generateJsonFileFromCsv(input, output);