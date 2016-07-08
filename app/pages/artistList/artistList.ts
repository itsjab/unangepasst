/**
 * Created by jan on 04.07.16.
 */
import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';

export class Artist {
    name: string;
    img: string;
}

export class Program {
    title: string;
    date: string;
    coverImg: string;
    description: string;
}

export class Tab {
    title: string;
}

const TABS: Tab[] = 
    [
        {
            title: "Programm"
        },
        
        {
            title: "Künstler"
        }
    ];

const ARTISTS: Artist[] =
    [
        {
            name:   "Adler A.F.",
            img:    "../../"

         },

        {
            name:   "Adler A.F.",
            img:    "../../"

        },
    ];

const PROGRAM: Program[] =
    [
        {
            title: "Vernisage, Galerie Luxese",
            date:  "Freitag, 6. Mai 20 Uhr",
            coverImg:  "../../",
            description:    "Das ist die beste Vernisage, die es gibt. Kommen Sie vorbei und tauchen Sie ein in die" +
                            "aufregende Welt der unangepassten Kunst. Namhafte Künstler wie Adler A.F und Viktoria Gurke" +
                            "stellen ihre Werke vor."
        },

        {   title: "Ausstellung Demokratie",
            date:  "Samstag und Sonntag, 9 - 18 Uhr",
            coverImg:  "../../",
            description:    "Das ist die beste Vernisage, die es gibt. Kommen Sie vorbei und tauchen Sie ein in die" +
                            "aufregende Welt der unangepassten Kunst. Namhafte Künstler wie Adler A.F und Viktoria Gurke" +
                            "stellen ihre Werke vor."
        }
    ];



@Component({
    templateUrl: 'build/pages/artistList/artistList.html'
})
export class ArtistListPage {
    constructor(private navController: NavController) {

    }
    
    tabs = TABS;
    selectedTab: Tab;

    onSelect(tab: Tab) {
        this.selectedTab = tab;
    }

}