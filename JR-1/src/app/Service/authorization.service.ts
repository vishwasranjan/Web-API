import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Users } from '../Models/users';
import { ExamDetails } from '../Models/exam-details';


const baseURL="https://localhost:7255/Controller/"
@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {

  constructor(private http:HttpClient) { }
  
  login(username:string,password:string)
  {
    return this.http.get(baseURL+'LoginUser?username='+username+"&password="+password);
  }
  
  getAllUsers():Observable<Users[]>{
    return this.http.get<Users[]>(baseURL+"GetAllUsers");
  }

  getAllCoursesById(id: number|undefined):Observable<ExamDetails[]>{
    return this.http.get<ExamDetails[]>(baseURL+"ExamDeatilsByID?id="+id);
  }

  // getUserById(id: number) : Observable<User>{
  //   return this.http.get<User>(this.apiUrl + 'User/GetEmpById/' + id);
  // }
  
}
