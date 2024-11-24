import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as atlas from 'azure-maps-control';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-azure-map',
  template: '<div id="map" style="width: 100%; height: 500px;"></div>',
  styles: [],
})
export class AzureMapComponent implements OnInit, AfterViewInit {
  private map: atlas.Map;

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.initializeMap();
  }

  initializeMap(): void {
    this.map = new atlas.Map('map', {
      center: [-122.33, 47.6], // Default center [longitude, latitude]
      zoom: 12,
      style: 'road', // Map style (road, aerial, etc.)
      authOptions: {
        authType: atlas.AuthenticationType.subscriptionKey,
        subscriptionKey: environment.azureMaps.subscriptionKey,
      },
    });

    this.map.events.add('ready', () => {
      console.log('Azure Map is ready!');
      this.addMarker(-122.33, 47.6); // Add a marker on the map
    });
  }

  addMarker(longitude: number, latitude: number): void {
    const marker = new atlas.HtmlMarker({
      position: [longitude, latitude],
    });
    this.map.markers.add(marker);
  }
}
