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
            title: "Vernisage, Botanischer Garten",
            image: "../../img/info-macht.png",
            date: "Freitag, 15. Julil 18 Uhr",
            description: "Tauchen Sie ein in die Welt der Trash Art und Aktionskunst. Die abwechslungsreichen Stücke" +
            " haben für jeden Besucher etwas zu bieten."
        },
        {
            title: "Austellung Macht",
            image: "../../img/info-demokratie.png",
            date: "Sa. u. So. 14 - 18 Uhr",
            description: "Zahlreiche namhafte Künstler wie Adler A.F stellen ihre neue Werke in der Unterführung zwischen " +
            " Nymphenbuger Schloss und botanischen Gartenzur Schau. Kommen Sie vorbei und genißen einen wunderlichen Tag" +
            " voll von Kunst und und Performance."
        }
    ]



@Component({
    templateUrl: 'build/pages/programMacht/programMacht.html'
})
export class ProgramMachtPage {
    constructor(private navController: NavController) {

    }

    openArtistList() {
        this.navController.push(ArtistListPage)
    }

    programItems = PROGRAM;
}