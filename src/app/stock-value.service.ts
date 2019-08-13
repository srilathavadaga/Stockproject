import { Injectable } from '@angular/core';
import {StockValue} from './stock-value/stock';
import { STOCK } from './stock-value/stock-data';

@Injectable()
export class StockValueService {

  private StockValueData: StockValue [] = STOCK;

  constructor() { }
  
  getStockValue (companyName: String): StockValue{
  
   for(var i=0;i<this.StockValueData.length;i++)
   {
   
    if(this.StockValueData[i].companyName == companyName)
          return this.StockValueData[i];
   }
  }
}