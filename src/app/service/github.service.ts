import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import { observable } from 'rxjs'
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class GithubService {
  private username: string
  constructor(private http:HttpClient) { 
    this.username='Cencious'
  }
  getData(x: string) {
    const url="https://api.github.com/users/"+x +"?api_key="+environment;
    return this.http.get<any>(url)
  }
  getRepos(x: string){
    const url="https://api.github.com/users/"+x +"/repos?api_key="+environment;
    return this.http.get<any>(url)
  }
}
