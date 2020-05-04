import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PopUpService {

  constructor() { }


 makePopup(data: any): string {

      const  imagelink = data.properties.link;

      // tslint:disable-next-line:max-line-length
     return  ' \<a href="http://water-hackers.lu/">   <img src=' + imagelink + ' style="width:140px"></a><br>' +
   'Watersource:   ' + data.properties.source + '<br>' +
      // tslint:disable-next-line:align
      'Date:  ' + data.properties.date;
 }


}
