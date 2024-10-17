import { Component } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-recover-password',
  templateUrl: './recover-password.page.html',
  styleUrls: ['./recover-password.page.scss'],
})
export class RecoverPasswordPage {
  email: string = '';

  constructor(private navCtrl: NavController, private alertController: AlertController) {}

  async onRecoverPassword() {
    console.log('Correo electrónico:', this.email);

    // Aquí iría la lógica para enviar el correo de recuperación

    const alert = await this.alertController.create({
      header: 'Éxito',
      message: 'Se ha enviado un enlace de recuperación a tu correo.',
      buttons: ['OK'],
    });

    await alert.present();

    // Redirigir a la página de inicio después de que se cierre el alerta
    alert.onDidDismiss().then(() => {
      this.navCtrl.navigateForward('/login'); // Redirigir a la página de inicio
    });
  }
}
