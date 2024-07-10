import { Injectable } from '@angular/core';
import { HttpClient , HttpParams} from '@angular/common/http';
import { Observable , BehaviorSubject} from 'rxjs';
import { environment } from 'src/environments/environment';
import{ tap } from 'rxjs/operators';

const NAV_URL = environment.apiURL;

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private currentUserSubject: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  public currentUser: Observable<any> = this.currentUserSubject.asObservable();

  constructor(private http: HttpClient) { }


  

  login(loginData: any): Observable<any> {
    console.log("user---service",loginData);
    return this.http.post<any>(`${NAV_URL}api/users/loginUser`, loginData);
  }

  setCurrentUser(user: any): void {
    this.currentUserSubject.next(user);
  }

  getCurrentUser(): any {
    return this.currentUserSubject.value;
  }


  saveLocation(locationData: any): Observable<any> {
    return this.http.post<any>(`${NAV_URL}api/users/saveLocation`, locationData);
  }
 

  getUserDetails(): Observable<any> {
    return this.http.get<any>(`${NAV_URL}/user-details`);
  }
  

  getAllTasksByEmail(email: string): Observable<any[]> {
    const params = new HttpParams().set('email', email);
    return this.http.get<any[]>(`${NAV_URL}api/tasks/gettaskbyemail`, { params })
      .pipe(
        tap(tasks => console.log('Fetched tasks:', tasks))
      );
  }
  
  getAllTasks(): Observable<any[]> {
    return this.http.get<any[]>(`${NAV_URL}api/projects/getAllProject`);
  }



  addTask(taskData: any): Observable<any> {
    return this.http.post<any>(`${NAV_URL}api/projects/create`, taskData);
  }


  

  getAllUsers(): Observable<any[]> {
    return this.http.get<any[]>(`${NAV_URL}api/users/getAllUser`);
  }

  logout(logoutData : any): Observable<any> {
    console.log(logoutData,"USerServiceLogOut");
    return this.http.post(`${NAV_URL}api/users/logoutUser`, logoutData); 
    }
  
  }