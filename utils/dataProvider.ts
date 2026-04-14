import fs from 'fs';
import {parse} from 'csv-parse/sync';

export class DataProvider{

static getTestDataFromJson(filepath:string){
   let data= JSON.parse(fs.readFileSync(filepath,'utf-8'));
   return data;
}

static getTestDataFromCSV(filepath:string):any[]{
        const fileContent = fs.readFileSync(filepath, 'utf-8');

        const data = parse(fileContent, {
            columns: true,
            skip_empty_lines: true
        });

        return data; 
    }
}

