import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from "rxjs/operators";
import { Observable } from 'rxjs';
import { DataService } from "./data.service";
import { Curso_Conductor, ApiResponse } from "./models/conductor.model";
import { KeyValueService } from './keyvalue.service';
import { KeyValueResponse } from './models/keyvalue.model';
import { SbxService } from './sbx.service';
import { SbxResponse, Entity } from './models/sbx.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  url = `http://echo.jsontest.com/key/value/one/two`;
  jsonPath = "./assets/keyvalue.json";
  items: any[] = [];
  jsonContent: any;
  curso_conductores$: Observable<Array<Curso_Conductor>> | undefined;
  keyValue$: Observable<String> | undefined;
  sbxEntities$: Observable<Array<Entity>> | undefined 

  constructor(private http: HttpClient, private dataService: DataService, private keyValueService : KeyValueService, private sbxService : SbxService) {
  }

  ngOnInit() {
    this.httpClientCallJsonTest();
    this.httpClientCallCurso();
    this.httpClientCallKeyValue();
    this.httpClientCallSbxEntites();
  }

  private httpClientCallSbxEntites(): void {
    this.sbxEntities$ = this.sbxService.getSbxEntities()
      .pipe(
        map((sbxResponse: SbxResponse) => sbxResponse.value)
      );
  }
  private httpClientCallKeyValue(): void{
    this.keyValue$ = this.keyValueService.getKeyValue()
    .pipe(
      map((kvResponse: KeyValueResponse) => kvResponse.one)
    );
    console.log("keyValue: " + this.keyValue$);
    console.log("kv: " + this.keyValueService.getKeyValue().pipe(map((kvResponse: KeyValueResponse) => kvResponse)));
  }
  private httpClientCallCurso(): void {
    this.curso_conductores$ = this.dataService.getCursoConductor()
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
