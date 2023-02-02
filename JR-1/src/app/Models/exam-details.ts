export class ExamDetails {
    examId:number=0;
    userId:number=0;
    subject:string= "";
    subjectCode:string="";
    duration:string= "";
    examDate:string= "";

    constructor(examId:number,userId:number,subject:string,subjectCode:string,duration:string,examDate:string)
    {
        this.examId=examId;
        this.userId=userId;
        this.subject=subject;
        this.subjectCode=subjectCode;
        this.duration=duration;
        this.examDate=examDate;
    }
}
