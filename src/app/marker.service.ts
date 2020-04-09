import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import * as L from 'leaflet';
import 'leaflet.markercluster';

import {PopUpService} from './pop-up.service';
import {mark} from '@angular/compiler-cli/src/ngtsc/perf/src/clock';

@Injectable({
  providedIn: 'root'
})
export class MarkerService {

  dataset = '/assets/data/map.geojson';

  constructor(private http: HttpClient, private popupService: PopUpService) {
  }

  makeCapitalMarkers(map: L.map): void {


    this.http.get(this.dataset).subscribe((res: any) => {
      var markers = new L.MarkerClusterGroup();
      for (const c of res.features) {
        const lat = c.geometry.coordinates[0];
        const lon = c.geometry.coordinates[1];
        const marker = L.marker([lon, lat]).addTo(map);

        marker.bindPopup(this.popupService.makePopup(c)).on('click', function(e){  map.setView(e.target.getLatLng(), map.getZoom()); });
        markers.addLayer(marker);

      }
      map.addLayer(markers);


    });

  }




   getcurrentLocation(map: L.map, iconsymbol: any) {
     map.locate({setView: true, maxZoom: 11});
     function onLocationFound(e) {


       L.marker(e.latlng, { icon: iconsymbol }).addTo(map);



     }

     map.on('locationfound', onLocationFound);
     function onLocationError(e) {
      alert(e.message);
    }


     map.on('locationerror', onLocationError);
  }


}
