import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { ApiResponse } from "./models/conductor.model";

@Injectable()
export class DataService {
  curso_conductores = "assets/data.json";

  constructor(private http: HttpClient) {}

  getCursoConductor(): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.curso_conductores);
  }
}
