import { Component } from '@angular/core';
import { ViewChild } from '@angular/core';
import { NgxCsvParser } from 'ngx-csv-parser';
import { NgxCSVParserError } from 'ngx-csv-parser';
import {findTeams} from './findTeams'
import * as moment from 'moment';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    resultUpload: any[] = [];
    header: boolean = true;
    findEmployeeTable:any[] =[]

    constructor(private ngxCsvParser: NgxCsvParser) {}

    @ViewChild('fileImportInput') fileImportInput: any;

    fileUploadListener($event: any): void {
        const files = $event.srcElement.files;
        this.header =
            (this.header as unknown as string) === 'true' ||
            this.header === true;

        this.ngxCsvParser.parse(files[0], { header: this.header,delimiter: ',' ,})
            .pipe()
            .subscribe(
                (result: Array<any>) => {
                    
                    this.resultUpload = result;
                result.forEach(el => {
                    if(el.DateTo === 'null'){
                        el.DateTo = moment().format('Y-MM-DD')
                    }
                })
                    
                    this.findEmployeeTable = findTeams(result);
                    console.log(result)
                },
                (error: NgxCSVParserError) => {
                    console.log('Error', error);
                }
            );
    }
}

