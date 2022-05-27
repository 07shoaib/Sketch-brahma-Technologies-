import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'test';
  // users:any;

  // constructor(private _UserData: UserService){}
  // ngOnInit(){
  //   this._UserData.users().subscribe((response)=>{
  //     console.log('data', response);
  //     this.users = response
  //   });
  // }
  
  books;
  constructor(http: HttpClient){
  const path ='https://api.nytimes.com/svc/books/v3/lists/best-sellers/history.json?api-key=Qf3aGKuDvG8k5MnpsYmmH1Pe3PW7Aiqh';
  this.books = http.get<any>(path)
  .pipe(
      map(data => data.results)
  )
}

ngOnInit() {
}

}


