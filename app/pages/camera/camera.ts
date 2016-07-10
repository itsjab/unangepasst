import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {FestivalInfoPage} from "../festivalInfo/festivalInfo";

@Component({
  templateUrl: 'build/pages/camera/camera.html'
})
export class CameraPage {
    constructor(private navController: NavController) {
    }
}
