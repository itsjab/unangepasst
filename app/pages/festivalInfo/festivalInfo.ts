/**
 * Created by jan on 27.06.16.
 */
import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {ArtistListPage} from '../artistList/artistList'

export class Tab {
    name: string;
    date: string;
    address: string;
    title: string;
    info: string;
    place: string;
}

const TABS: Tab[] =
    [
        {   name: "Demokratie",
            date: "26. - 28. April",
            address: "Burggrafenstraße 5",
            title: "Wählen oder nicht wählen?",
            info: "Das Demokratie Wochenende des Festivals für unangepasste Kunst befasst sich" +
                  " mit der Pflicht des Bürgers die politische Landschaft in Deutschland mitzugestalten." +
                  " Und zwar durch Wählen!",
            place: "Galerie Luxese"},

        {   name: "Macht",
            date: "26. - 28. April",
            address: "Burggrafenstraße 5",
            title: "Wählen oder nicht wählen?",
            info: "Das Demokratie Wochenende des Festivals für unangepasste Kunst befasst sich" +
                  " mit der Pflicht des Bürgers die politische Landschaft in Deutschland mitzugestalten." +
                  " Und zwar durch Wählen!",
            place: "Galerie Luxese"},

        {   name: "Partizipation",
            date: "26. - 28. April",
            address: "Burggrafenstraße 5",
            title: "Wählen oder nicht wählen?",
            info: "Das Demokratie Wochenende des Festivals für unangepasste Kunst befasst sich" +
                  " mit der Pflicht des Bürgers die politische Landschaft in Deutschland mitzugestalten." +
                  " Und zwar durch Wählen!",
            place: "Galerie Luxese"}
    ];

@Component({
    templateUrl: 'build/pages/festivalInfo/festivalInfo.html'
})
export class FestivalInfoPage {
    constructor(private navController: NavController) {
        
    }

    openArtistList(artistList) {
        this.navController.push(ArtistListPage, {
            artistList: artistList
        })
    }
    
    tabs = TABS;
    selectedTab: Tab;
    
    onSelect(tab: Tab) {
        this.selectedTab = tab;
    }


}