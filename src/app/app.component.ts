import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
// tslint:disable-next-line:label-position

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'WaterhackerTest';
  @ViewChild('mapContainer', {static: false}) gmap: ElementRef;
  map: google.maps.Map;

  latitude = 49.611622;
  longitude = 6.131935;
  image = 'https://icon-icons.com/icons2/567/PNG/32/drop_icon-icons.com_54400.png';


markers = [
    {
      position: new google.maps.LatLng(49.685824,  5.914218),
      map: this.map,
      title: 'Hobscheid' +
      'http://water-hackers.lu\n' +
          'Date:.....\n' +
        'Watersource:.....\n',
      icon: this.image
    },
    {
      position: new google.maps.LatLng(49.607616, 6.403719),
      map: this.map,

      title: 'Wormeldingen \n' +
        'http://water-hackers.lu\n' +
        'Date:.....\n' +
        'Watersource:.....\n',
icon: this.image

    },

  ];

  coordinates = new google.maps.LatLng(this.latitude, this.longitude);
  mapOptions: google.maps.MapOptions = {
    center: this.coordinates,
    zoom: 11,
  };

  marker = new google.maps.Marker({
    position: this.coordinates,
    map: this.map,
    icon: this.image

  });

  ngAfterViewInit() {
    this.mapInitializer();
  }

  mapInitializer() {
    this.map = new google.maps.Map(this.gmap.nativeElement,
      this.mapOptions);
    const myloc = new google.maps.Marker({
      clickable: false,
        icon: 'https://sheengroup.com.au/assets/Uploads/misc/current-location.png',


      zIndex: 999,
      map: this.map
    });

    if (navigator.geolocation) {
      // tslint:disable-next-line:only-arrow-functions
      navigator.geolocation.getCurrentPosition(function(pos) {
        const me = new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude);
        myloc.setPosition(me);
        this.latitude = me.lat();
        this.longitutde =  me.lng();



        // tslint:disable-next-line:only-arrow-functions
      }, function(error) {
        // ...
      });
    }


    this.marker.addListener('click', () => {
      const infoWindow = new google.maps.InfoWindow({
        content: this.marker.getTitle()
      });
      infoWindow.open(this.marker.getMap(), this.marker);
    });
    this.marker.setMap(this.map);
   // this.loadAllMarkers();
  }
/*
  loadAllMarkers(): void {
    this.markers.forEach(markerInfo => {

        const marker = new google.maps.Marker({
          ...markerInfo
        });
        const infoWindow = new google.maps.InfoWindow({
          content: marker.getTitle()
        });
        marker.addListener('click', () => {
          infoWindow.open(marker.getMap(), marker);
        });
        marker.setMap(this.map);
      }
    );
  }*/
}
