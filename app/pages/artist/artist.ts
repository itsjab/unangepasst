import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {HomePage} from "../home/home";

@Component({
    templateUrl: 'build/pages/artist/artist.html'
})
export class ArtistPage {
    constructor(private navController: NavController) {

    }
}
