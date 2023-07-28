import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-exercise6',
  templateUrl: './exercise6.page.html',
  styleUrls: ['./exercise6.page.scss'],
})
export class Exercise6Page implements OnInit {

  constructor(private loginAlertCtrl:AlertController) {}

  ngOnInit() {
  }
  showLoginAlert = async () => {
    const loginAlert = await this.loginAlertCtrl.create({
      header:'Login',
      inputs:[
        {
          type:'text',
          placeholder:'Enter username',
          name:'username'
        },
        {
          type:'password',
          placeholder:'Enter password',
          name:'password'
        }
        
      ],
      buttons:[
        {
          text:'Cancel',
          role:'cancel'
        },
        {
          text:'Submit',
          handler(data){
            if(!data.username||!data.password){
              console.error('Error:Please fill out all required fields.');
              return;
            }
            console.log('Login successful');
            
          }
        }
      ]
    });
    await loginAlert.present();
  }
}
