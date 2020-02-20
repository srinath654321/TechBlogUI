export class Certification{

    public name: string;
    public yearIssued: Date;
    public yearExpired: Date;
    public link : string;
    public isNeverExpires: boolean;

    constructor(name: string, yearIssued: Date, yearExpired: Date, link: string, isNeverExpires: boolean){
        this.name = name;
        this.yearIssued = yearIssued;
        this.yearExpired = yearExpired;
        this.link = link;
        this.isNeverExpires = isNeverExpires;
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
