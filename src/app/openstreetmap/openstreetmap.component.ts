import { Component, OnInit } from '@angular/core';
declare var ol: any;
@Component({
  selector: 'app-openstreetmap',
  templateUrl: './openstreetmap.component.html',
  styleUrls: ['./openstreetmap.component.css']
})
export class OpenstreetmapComponent implements OnInit {
  latitude = 49.611622;
  longitude = 6.131935;

  map: any;

  constructor() {

  }


  // @ts-ignore
  // @ts-ignore
  ngOnInit(): void {
    // tslint:disable-next-line:prefer-const
    let mousePositionControl = new ol.control.MousePosition({
      coordinateFormat: ol.coordinate.createStringXY(4),
      projection: 'EPSG:4326',
      // comment the following two lines to have the mouse position
      // be placed within the map.
      className: 'custom-mouse-position',
      target: document.getElementById('mouse-position'),
      undefinedHTML: '&nbsp;'
    });


    this.map = new ol.Map({
      target: 'map',
      controls: ol.control.defaults({
        attributionOptions: {
          collapsible: false
        }
      }).extend([mousePositionControl]),
      layers: [
        new ol.layer.Tile({
          source: new ol.source.OSM()
        })
      ],
      view: new ol.View({
        center: ol.proj.fromLonLat([6.131935, 49.611622]),
        zoom: 11
      })
    });
  }

  setCenter() {
    // tslint:disable-next-line:prefer-const
    let view = this.map.getView();
    view.setCenter(ol.proj.fromLonLat([this.longitude, this.latitude]));
    view.setZoom(8);
  }


}
