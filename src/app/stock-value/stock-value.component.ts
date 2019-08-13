import { Component, OnInit } from '@angular/core';
import {StockValueService} from '../stock-value.service';
import { StockValue } from '../stock-value/stock';

@Component({
  selector: 'app-stock-value',
  templateUrl: './stock-value.component.html',
  styleUrls: ['./stock-value.component.css']
})
export class StockValueComponent implements OnInit {

  private currentCompanyStockValue : StockValue;
  private pastCompanyYouSearch : StockValue[] =[];

  constructor(private stockvalueservice : StockValueService) { }

  ngOnInit() {}


  getStockValue (companyName: string): void {
    this.currentCompanyStockValue = this.stockvalueservice.getStockValue(companyName);
    this.currentCompanyStockValue.searchTime = (new Date()).toTimeString();

    const newStockValue : StockValue ={
      companyName : companyName,
      values : this.currentCompanyStockValue.values,
      searchTime : (new Date()).toTimeString()
    }
    this.pastCompanyYouSearch.push(newStockValue);
  }
}
  