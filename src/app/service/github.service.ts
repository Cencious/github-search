import { Injectable } from '@angular/core';
import{Httpclient} from '@angular/common/http';
import { observable } from 'rxjs'


@Injectable({
  providedIn: 'root'
})
export class GithubService {
  private username: string
  constructor(private http:Httpclient) { 
    this.username='Cencious'
  }
  
}
