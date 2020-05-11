import { Injectable } from '@angular/core';
import {DatePipe} from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class PopUpService {
  pipe = new DatePipe('en-US');
  constructor() { }

  makeSamplePopup(data: any): string {

     const imglink = data.picture;
     const urlid = 'http://localhost:4200/details/' + data.id;
    // tslint:disable-next-line:max-line-length
    return  ' \<a href=' + urlid + '>   <img src=' + imglink + ' style="width:150px; height=150px"></a><br>' +
      'Watersource:   ' + data.watersource + '<br>' +
      // tslint:disable-next-line:align
      'Date:  ' +  this.pipe.transform(data.date, 'dd/MM/yyyy');
  }
 makePopup(data: any): string {

      const  imagelink = data.properties.link;

      // tslint:disable-next-line:max-line-length
     return  ' \<a href="http://water-hackers.lu/">   <img src=' + imagelink + ' style="width:140px"></a><br>' +
   'Watersource:   ' + data.properties.source + '<br>' +
      // tslint:disable-next-line:align
      'Date:  ' + data.properties.date;
 }






}
