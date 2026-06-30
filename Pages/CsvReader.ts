import fs from 'fs';
import { parse } from 'csv-parse/sync';

export function readCSV(path: string){

    const file = fs.readFileSync(path,'utf-8');

    return parse(file,{
        columns:true,
        skip_empty_lines:true
    });

}