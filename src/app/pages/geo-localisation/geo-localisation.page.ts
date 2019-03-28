import { Component, OnInit } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import L from 'leaflet';
import {RestService} from '../../rest.service';
import {LoadingController} from '@ionic/angular';

@Component({
  selector: 'app-geo-localisation',
  templateUrl: './geo-localisation.page.html',
  styleUrls: ['./geo-localisation.page.scss'],
})
export class GeoLocalisationPage implements OnInit {
  classrooms: any;

  map: L.Map;
  center: L.PointTuple;
  constructor(public api: RestService, public loadingController: LoadingController) {}

  ngOnInit() {
  this.getClassrooms();
    this.ionViewDidLoad();
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad MapPage');
    this.center = [28.644800, 77.216721];
    this.leafletMap();
  }

  leafletMap() {

    this.map = L.map('mapId').setView(this.center, 13);
    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
      attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://mapbox.com">Mapbox</a>',
      maxZoom: 18,
      id: 'mapbox.streets',
      accessToken: 'pk.eyJ1IjoiYmJyb29rMTU0IiwiYSI6ImNpcXN3dnJrdDAwMGNmd250bjhvZXpnbWsifQ.Nf9Zkfchos577IanoKMoYQ'
    }).addTo(this.map);


   // console.log('dadaz');
    const marker = new L.Marker(this.center);
    this.map.addLayer(marker);

    marker.bindPopup('<p>Tashi Delek.<p>Delhi</p>');
  }
  async getClassrooms() {
    const loading = await this.loadingController.create({
    });
    await loading.present();
    await this.api.getClassroom()
        .subscribe(res => {
          console.log(res);
          this.classrooms = res;
          loading.dismiss();
        }, err => {
          console.log(err);
          loading.dismiss();
        });
  }
}
