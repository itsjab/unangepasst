import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {FestivalInfoPage} from "../festivalInfo/festivalInfo";
import {CameraPage} from "../camera/camera";

@Component({
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage {
  constructor(private navController: NavController) {

  }

  openFestivalInfo(festivalInfo) {
    this.navController.push(FestivalInfoPage, {
      festivalInfo: festivalInfo
    })
  }

  openCamera(camera) {
    this.navController.push(Camera, {
      camera: camera
    })
  }

}
