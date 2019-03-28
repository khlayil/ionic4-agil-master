import { Component, OnInit } from '@angular/core';
import {AlertController, MenuController, ModalController, NavController, PopoverController, ToastController} from '@ionic/angular';
import {SearchFilterPage} from '../pages/modal/search-filter/search-filter.page';
import {ImagePage} from '../pages/modal/image/image.page';
import {NotificationsComponent} from '../components/notifications/notifications.component';

@Component({
  selector: 'app-pre-home',
  templateUrl: './pre-home.page.html',
  styleUrls: ['./pre-home.page.scss'],
})
export class PreHomePage implements OnInit {
  searchKey = '';
  yourLocation = '';
  carburant = 'assets/img/commande1.jpeg';
  themeCover = 'assets/img/suivie1.jpeg';
  constructor(
      public navCtrl: NavController,
      public menuCtrl: MenuController,
      public popoverCtrl: PopoverController,
      public alertCtrl: AlertController,
      public modalCtrl: ModalController,
      public toastCtrl: ToastController
  ) {

  }

  ionViewWillEnter() {
    this.menuCtrl.enable(true);
  }

  settings() {
    this.navCtrl.navigateForward('settings');
  }

  async alertLocation() {
    const changeLocation = await this.alertCtrl.create({
      header: 'Change Location',
      message: 'Type your Address.',
      inputs: [
        {
          name: 'location',
          placeholder: 'Enter your new Location',
          type: 'text'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Change',
          handler: async (data) => {
            console.log('Change clicked', data);
            this.yourLocation = data.location;
            const toast = await this.toastCtrl.create({
              message: 'Location was change successfully',
              duration: 3000,
              position: 'top',
              closeButtonText: 'OK',
              showCloseButton: true
            });

            toast.present();
          }
        }
      ]
    });
    changeLocation.present();
  }

  async searchFilter () {
    const modal = await this.modalCtrl.create({
      component: SearchFilterPage
    });
    return await modal.present();
  }

  async passerCommande() {
    this.navCtrl.navigateRoot('/home-results');

  }
  async suivieCommande() {
    this.navCtrl.navigateRoot('/geo-localisation');

  }

  async presentImage(image: any) {
    const modal = await this.modalCtrl.create({
      component: ImagePage,
      componentProps: { value: image }
    });
    return await modal.present();
  }

  async notifications(ev: any) {
    const popover = await this.popoverCtrl.create({
      component: NotificationsComponent,
      event: ev,
      animated: true,
      showBackdrop: true
    });
    return await popover.present();
  }
  ngOnInit() {
  }

}
