import { Component, OnInit } from '@angular/core';
import { GithubService } from './service/github.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  // title = 'GitHub-Api';

  profile
  repos
      
      username: string="Cencious"
      searchText: string;
      // repos: any[]
      users: String[]

      constructor(private githubService:GithubService){}
      ngOnInit(): void {
        this.githubService.getData(this.username).subscribe((data)=>{
         
          this.profile=data
          console.log(this.profile)
        })

        this.githubService.getRepos(this.username).subscribe((data) => {
          console.log(data)
          this.repos = data
        })
      }
      searchUser(){
        this.username = this.searchText;
        this.ngOnInit()
      }
}