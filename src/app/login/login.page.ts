import { Component } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  username: string = '';
  password: string = '';

  constructor(private navCtrl: NavController, private alertController: AlertController) {}

  async onLogin() {
    console.log('Usuario:', this.username);
    console.log('Contraseña:', this.password);

    // Almacenar el nombre de usuario en localStorage
    localStorage.setItem('username', this.username);

    // Mostrar un mensaje de alerta
    const alert = await this.alertController.create({
      header: 'Éxito',
      message: 'Redirigiendo a la página de inicio...',
      buttons: ['OK'],
    });

    await alert.present();

    // Redirigir a la página de inicio después de que se cierre el alerta
    alert.onDidDismiss().then(() => {
      this.navCtrl.navigateForward('/home');
    });
  }
}
