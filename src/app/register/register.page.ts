import { Component } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage {
  fullName: string = '';
  phoneNumber: string = '';
  email: string = '';
  password: string = '';
  confirmPassword: string = '';
  location: string = '';
  paymentMethod: string = '';

  constructor(private navCtrl: NavController, private alertController: AlertController) {}

  async onRegister() {
    // Validar que las contraseñas coincidan
    if (this.password !== this.confirmPassword) {
      const alert = await this.alertController.create({
        header: 'Error',
        message: 'Las contraseñas no coinciden.',
        buttons: ['OK'],
      });
      await alert.present();
      return;
    }

    // Validar condiciones de la contraseña
    const passwordValid = this.validatePassword(this.password);
    if (!passwordValid) {
      const alert = await this.alertController.create({
        header: 'Error',
        message: 'La contraseña debe tener al menos 8 caracteres, una letra mayúscula y un número.',
        buttons: ['OK'],
      });
      await alert.present();
      return;
    }

    console.log('Nombre completo:', this.fullName);
    console.log('Número de teléfono:', this.phoneNumber);
    console.log('Correo electrónico:', this.email);
    console.log('Método de pago:', this.paymentMethod);

    // Aquí puedes agregar la lógica para almacenar el nuevo usuario en tu backend o en localStorage

    const alert = await this.alertController.create({
      header: 'Registro Exitoso',
      message: 'Ahora puedes iniciar sesión.',
      buttons: ['OK'],
    });

    await alert.present();

    alert.onDidDismiss().then(() => {
      this.navCtrl.navigateForward('/login'); // Redirigir a la página de inicio de sesión
    });
  }

  validatePassword(password: string): boolean {
    const hasUpperCase = /[A-Z]/.test(password);
    const hasNumber = /\d/.test(password);
    const hasMinLength = password.length >= 8;
    return hasUpperCase && hasNumber && hasMinLength;
  }
}
