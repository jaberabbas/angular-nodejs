import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { DataService } from './data.service';
import { KeyValueService } from './keyvalue.service';
import { SbxService } from './sbx.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [DataService, KeyValueService, SbxService],
  bootstrap: [AppComponent]
})
export class AppModule { }
