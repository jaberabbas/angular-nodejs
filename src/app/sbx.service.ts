import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { SbxResponse } from "./models/sbx.model";

@Injectable()
export class SbxService {
  sbxEntitiesPath = "assets/sbx-entities.json";

  constructor(private http: HttpClient) {}

  getSbxEntities(): Observable<SbxResponse> {
    return this.http.get<SbxResponse>(this.sbxEntitiesPath);
  }
}
