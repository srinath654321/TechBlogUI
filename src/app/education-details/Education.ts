export class Education{

    public schoolName: string;
    public yearStarted: Date;
    public yearEnded: Date;
    public typeOfDegree: string;
    public courseName: string;
    public gpa : number;
    public stillStudying: boolean;


    constructor(schoolName: string, yearStarted: Date, yearEnded: Date, typeOfDegree: string, courseName: string, gpa: number, stillStudying: boolean){
        this.schoolName = schoolName;
        this.yearStarted = yearStarted;
        this.yearEnded = yearEnded;
        this.typeOfDegree = typeOfDegree;
        this.courseName = courseName;
        this.gpa = gpa;
        this.stillStudying = stillStudying;
    }
}