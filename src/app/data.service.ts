import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private postURL = 'https://dummyapi.io/data/api/post'

  Settings = {
    headers: new HttpHeaders({
      'app-id': '6011196b15fb06d4dbac676a'
    })
  }
  
  constructor(private http: HttpClient) { }

  GetPostData(){
    //return this.http.get('https://api.edamam.com/search?q=chicken&app_id=b6d2ba3f&app_key=1f0634628b6b883b38c77098974ac3ee')
    return this.http.get(this.postURL, this.Settings);
  }
}
