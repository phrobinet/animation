import { Component } from '@angular/core';
import { ToastController, AlertController, ModalController } from '@ionic/angular';
import { ModalPage } from '../modal/modal.page';
import { myLeaveAnimation } from '../modal/leaveAnimation';
import { myEnterAnimation } from '../modal/enterAnimation';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(
    private alert: AlertController,
    private modalCtrl: ModalController
  ) {}

  async showAlert() {
    const alert = await this.alert.create({
      message: 'My awesome alert message',
      header: 'Alert Header',
      buttons: ['OK']
    });
    alert.present();
  }

  launchModal() {
    this.modalCtrl.create({
      component: ModalPage,
      enterAnimation: myEnterAnimation,
      leaveAnimation: myLeaveAnimation
    }).then((modal) => {
      modal.present();
    });
  }

}
