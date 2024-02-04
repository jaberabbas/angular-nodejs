import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

import { KeyValueResponse } from "./models/keyvalue.model";

@Injectable()
export class KeyValueService {
  keyValuePath = "assets/keyvalue.json";

  constructor(private http: HttpClient) {}

  getKeyValue(): Observable<KeyValueResponse> {
    return this.http.get<KeyValueResponse>(this.keyValuePath);
  }
}
