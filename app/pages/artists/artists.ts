import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {HomePage} from "../home/home";

@Component({
    templateUrl: 'build/pages/artists/artists.html'
})
export class ArtistsPage {
    constructor(private navController: NavController) {

    }
}
