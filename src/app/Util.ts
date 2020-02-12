export class Util{
    
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