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
            title: "Vernisage, Galerie Luxese",
            image: "../../img/info-macht.png",
            date: "Freitag, 6. Mai 20 Uhr",
            description: "Tauchen Sie ein in die Welt der Trash Art und Aktionskunst. Die abwechslungsreichen" +
                         " haben für jeden Besucher etwas zu bieten."
        },
        {
            title: "Austellung Demokratie",
            image: "../../img/info-demokratie.png",
            date: "Sa. u. So. 9 - 16 Uhr",
            description: "Zahlreiche namhafte Künstler wie Adler A.F stellen ihre neue Werke in der Galerie Luxese " +
                         "zur Schau. Kommen Sie vorbei und genißen einen wunderlichen Tag voll von Kunst und " +
                         "und Performance."
        }
    ]



@Component({
    templateUrl: 'build/pages/programDemokratie/programDemokratie.html'
})
export class ProgramDemokratiePage {
    constructor(private navController: NavController) {

    }

    openArtistList() {
        this.navController.push(ArtistListPage)
    }
    
    programItems = PROGRAM;
}