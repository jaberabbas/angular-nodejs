import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Curso_Conductor, ApiResponse } from "./models/conductor.model";
import { map } from "rxjs/operators";
import { Observable } from 'rxjs';
import { DataService } from "./data.service";

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
  curso_conductores$: Observable<Array<Curso_Conductor>> | undefined;

  constructor(private http: HttpClient, private service: DataService) {
  }

  ngOnInit() {

    this.httpClientCallJsonTest();
    this.httpClientCallCurso();
  }
  private httpClientCallCurso(): void {
    this.curso_conductores$ = this.service.getCursoConductor()
      .pipe(
        map((apiResponse: ApiResponse) => apiResponse.dato)
      );
  }
  private httpClientCallJsonTest(): void {
    this.http.get(this.url).toPromise().then(
      (data: any) => {
        console.log("after jsontest call.");
        console.log("data to json: " + JSON.stringify(data));
        this.jsonContent = JSON.stringify(data);

        for (let fieldName in data)
          if (data.hasOwnProperty(fieldName))
            this.items.push(data[fieldName]);
      }
    ).catch(error => console.error("err catched: " + error));
  }
}
