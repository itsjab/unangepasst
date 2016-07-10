/**
 * Created by jan on 10.07.16.
 */
import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {ArtistListPage} from "../artistList/artistList";

export class ProgramItem {
    title: string;
    image: string;
    date: string;
    description: string;
}

const PROGRAM: ProgramItem[] =
    [
        {
            title: "Vernisage, Münchner Galerie",
            image: "../../img/info-macht.png",
            date: "Freitag, 07. Oktober 18 Uhr",
            description: "Neben Trash Art und Aktionskunst stellen Kunst und Multimedia Studenten der Ludwig" +
                         "Maximilians Universität den Katalog und die DVD zum Festival vor."
        },
        {
            title: "Austellung Partizipation",
            image: "../../img/info-demokratie.png",
            date: "Sa. u. So. , 14 - 18 Uhr",
            description: "Zahlreiche namhafte Künstler wie Adler A.F stellen ihre neue Werke in der Galerie Luxese " +
                         "zur Schau. Kommen Sie vorbei und genißen einen wunderlichen Tag voll von Kunst und " +
                         "und Performance."
        }
    ];



@Component({
    templateUrl: 'build/pages/programPartizipation/programPartizipation.html'
})

export class ProgramPartizipationPage {
    constructor(private navController: NavController) {

    }

    openArtistList() {
        this.navController.push(ArtistListPage)
    }

    programItems = PROGRAM;
}