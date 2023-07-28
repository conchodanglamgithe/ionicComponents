import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-sample-page8',
  templateUrl: './sample-page8.page.html',
  styleUrls: ['./sample-page8.page.scss'],
})
export class SamplePage8Page implements OnInit {

  constructor(private promptAlertCtrl:AlertController) { }

  ngOnInit() {
  }
  showPromptAlert =async () => {
    const promptAlert = await this.promptAlertCtrl.create({
      header:'User Info',
      subHeader:'Enter your infomation',
      inputs: [
        {
          type:'text',
          name:'firstName',
          placeholder:'Enter your first name'
        },
        {
          type:'text',
          name:'lastname',
          placeholder:'Enter your last name'
        }
      ],
      buttons:[
        {
          text:'Cancel',
          role:'cancel'
        },
        {
          text:'Save',
          handler(data){
            console.log("Fisrtname:"+data.firstName+"\nLastname:"+data.lastname)
          }
        }
      ]
    });
    await promptAlert.present();
  }

}
