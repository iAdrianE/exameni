import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
})
export class AlertPage implements OnInit {

  constructor(private alertController: AlertController) { }

  ngOnInit() {
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      backdropDismiss: false,
      header: 'Prompt!',
      buttons: ['CANCEL', 'OK'],
      inputs: [
        {
          placeholder: 'Nombres',
        },
        {
          placeholder: 'Apellidos',
        },
        {
          type: 'textarea',
          placeholder: 'Descripción Materia',
        },
        {
          type: 'url', 
          placeholder: 'https://ionicframework.com',
        },
        {
          type: 'date',
          placeholder: 'dd/mm/aa',
        },
        {
          type: 'password',
          placeholder: 'Clave'
        },
        {
          placeholder: 'Nickname (max 8 characters)',
          attributes: {
            maxlength: 8,
          },
        },
        {
          type: 'number',
          placeholder: 'Edad',
          min: 1,
          max: 200,
        },
      ],
    });

    await alert.present();
  }
}
