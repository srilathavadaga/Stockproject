import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { StockValueComponent } from './stock-value/stock-value.component';
import { StockValueService } from './stock-value.service';

@NgModule({
  declarations: [
    AppComponent,
    StockValueComponent
    ],
  imports: [
    BrowserModule
  ],
  providers: [StockValueService],
  bootstrap: [AppComponent]
})
export class AppModule { }
