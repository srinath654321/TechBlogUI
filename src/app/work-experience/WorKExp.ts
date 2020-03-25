
export class WorkExp {
    public role: string;
    public companyName: string;
    public location: string;
    public yearStarted: Date;
    public yearEnded: Date;
    public responsibilities: string
    isStillWorking :boolean;
   
    constructor(role: string, companyName: string, location: string, yearStarted: Date, yearEnded: Date, responsibilities: string, isStillWorking: boolean){
        this.role =  role;
        this.companyName = companyName,
        this.location = location;
        this.yearStarted = yearStarted,
        this.yearEnded = yearEnded,
        console.log("constructor", this.yearEnded);
        this.responsibilities = responsibilities;
        this.isStillWorking = isStillWorking;
        //console.log("constructor", this.responsibilities)
    }


    dateValue: string;

    convertStringToDate(date: any) : string {
        if(date  == undefined) {
            return "CURRENT";
        }
        if(date.toString().length > 0) {
            console.log("date value ", date)
            this.dateValue = new Date(date).toLocaleDateString();
            return this.dateValue
        }else {
            console.log("date value in else", date)
            return "CURRENT";
        }
    }

    getYeatStartedDate(date: string) : Date{
        return new Date(date);
    }

    getYearEndedDate(date: string) : Date{
        if(date == "CURRENT") {
            return new Date();
        }else {
            return new Date(date);
        }
    }

  

 

}