import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  url = `http://echo.jsontest.com/key/value/one/two`;
  jsonPath = "./assets/test.json";
  items: any[] = [];
  jsonContent: any;
  constructor(private http: HttpClient) {
    this.httpClientCall();
  }

  private httpClientCall(): void{
    this.http.get(this.url).toPromise().then(
      (data: any) => {
        console.log("after jsontest call");
        console.log("data to json: " + JSON.stringify(data));
        this.jsonContent = JSON.stringify(data);
        
        for (let fieldName in data)
          if (data.hasOwnProperty(fieldName))
            this.items.push(data[fieldName]);
      }
    ).catch(error=>console.error("err catched: " + error));
  
  }
}
