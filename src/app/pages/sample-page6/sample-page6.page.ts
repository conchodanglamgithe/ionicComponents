import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-sample-page6',
  templateUrl: './sample-page6.page.html',
  styleUrls: ['./sample-page6.page.scss'],
})
export class SamplePage6Page implements OnInit {

  constructor(private alertCtrl:AlertController) { }

  ngOnInit() {
  }
  showBasicAlert =async () => {
    const alert = await this.alertCtrl.create({
      header:'alert',
      subHeader:'subtitle',
      message:'This is an alert message',
      buttons:['OK']
    });
    await alert.present();
    
  }

}
