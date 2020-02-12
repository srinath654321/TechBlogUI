import { Util } from './../Util';
export class Certification{

    public name: string;
    public yearIssued: string;
    public yearExpired: string;
    public link : string;

    constructor(name: string, yearIssued: string, yearExpired: string, link: string){
        this.name = name;
        this.yearIssued = this.convertStringToDate(yearIssued);
        this.yearExpired = this.convertStringToDate(yearExpired);
        this.link = link;
    }

    dateValue: string;

    convertStringToDate(date: any) : string {
        if(date  == undefined) {
            return "";
        }
        if(date.toString().length > 0) {
            console.log("date value ", date)
            this.dateValue = new Date(date).toLocaleDateString();
            return this.dateValue
        }else {
            console.log("date value in else", date)
            return "";
        }
    }
}
