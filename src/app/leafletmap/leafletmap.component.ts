import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';

import { icon, Marker } from 'leaflet';
import {MarkerService} from '../marker.service';
// const iconRetinaUrl = 'assets/drop.svg';
const iconUrl = 'assets/waterdrop.svg';
// const shadowUrl = 'assets/drop.svg';
const iconDefault = L.icon({
 // iconRetinaUrl,
  iconUrl,

 // shadowUrl,
  iconSize: [35, 35],
  iconAnchor: [17, 41],
  popupAnchor: [1, -34],
  tooltipAnchor: [16, -28],
  shadowSize: [41, 41]
});
const locationmarker = L.icon({
 // iconUrl: 'https://sheengroup.com.au/assets/Uploads/misc/current-location.png',
  iconUrl: 'assets/man.svg',


  iconSize: [30, 35],
  iconAnchor: [12, 60],
  popupAnchor: [1, -34],
  tooltipAnchor: [16, -28],
  shadowSize: [41, 41]

});
L.Marker.prototype.options.icon = iconDefault;

const data = 'assets/data/map.geojson';
@Component({
  selector: 'app-leafletmap',
  templateUrl: './leafletmap.component.html',
  styleUrls: ['./leafletmap.component.css']
})
export class LeafletmapComponent implements OnInit {
  constructor(private markerService: MarkerService) { }
 private  map;


  ngOnInit(): void {
    this.initMap();
    this.markerService.getcurrentLocation(this.map, locationmarker);
    this.markerService.makeSampleMarkers(this.map);
  }


  private initMap(): void {
    this.map = L.map('map', {
      center: [49.611621, 6.1319346] ,
      zoom: 11
    });


    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });



    tiles.addTo(this.map);





  }











}
