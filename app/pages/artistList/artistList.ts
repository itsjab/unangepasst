/**
 * Created by jan on 04.07.16.
 */
import {Component} from '@angular/core';
import {NavController, Platform} from 'ionic-angular';

export class Artist {
    name: string;
    image: string;
    description: string;
}

const ARTISTS: Artist[] =
    [
        {
            name:   "Adler A.F.",
            image:    "../../img/adler-af.png",
            description: "Die in Bayern geborene Trash Queen funngiert als Schirmherrin des diesjährigen Festivals" +
                         " für unangepasste. Sie stellt aber auch eigene Werke an den Wochenenden Demokratie, Macht" +
                         " und Partizipation zur Schau."

         },

        {
            name:   "Franziska Agrawal",
            image:    "../../img/franziska-agrawal.png",
            description: "Die weitgereiste Künstlerin zeigt auf dem diesjährigen Festival für unangepasste Kunst einige" +
                         " ihrer ausgefallenen Stücke."

        },
        {
            name:   "annanatascha",
            image:    "../../img/annatascha.png",
            description: "Diese zwei pfeffrigen Medienkünstlerinnen haben bereits während des Studiums an der LMU Kunst" +
            " & Multimedia die Öffentlichkeit mit ihren provokanten und gesellschaftskritischen Projekten zum Staunen gebracht."

        },
        {
            name:   "anra (Andreas und Ralf Hilbert",
            image:    "../../img/anra.png",
            description: "Die 1976 in Waldshut / Baden Württemberg geborenen Zwillingsbrüder Andreas und Ralph Hilbert" +
            " arbeiten unter dem Namen A N R A und sind seit 1996 künstlerisch aktiv."

        },
        {
            name:   "Marc Avrel",
            image:    "../../img/marc-avrel.png",
            description: "Der in Bonn geborene und an der Akademie für Kunst München tätige Künstler stellt seine" +
            "vielseitigen Werke beim diesjährigen Festival für unangepasste Kunst zur Schau."

        },
    ];

@Component({
    templateUrl: 'build/pages/artistList/artistList.html'
})
export class ArtistListPage {

    constructor(private navController: NavController) {
    }

    openProgram() {
        this.navController.pop();
    }
    
    artists = ARTISTS;
}