import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';
import { Observable } from 'rxjs'

@Component({
  selector: 'app-social-main',
  templateUrl: './social-main.component.html',
  styleUrls: ['./social-main.component.css']
})
export class SocialMainComponent implements OnInit {  
  posts:any;
  constructor(private dataService:DataService) { }

  ngOnInit(): void {
    this.dataService.GetPostData().subscribe(
      dataService => {
        this.posts = dataService
        console.log(this.posts.data)
      }
      );

      

    // this.GetPostData();
  }
  // async GetPostData(){
  //   let response = await this.dataService.GetPostData();
  //   let dataService = await response.json();
  //   this.posts = dataService;
  //   console.log(dataService)
  // }

}
