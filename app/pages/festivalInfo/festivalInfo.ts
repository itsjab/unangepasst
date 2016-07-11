/**
 * Created by jan on 27.06.16.
 */
import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {ProgramDemokratiePage} from "../programDemokratie/programDemokratie";
import {ProgramMachtPage} from "../programMacht/programMacht";
import {ProgramPartizipationPage} from "../programPartizipation/programPartizipation";

export class Tab {
    name: string;
    date: string;
    address: string;
    title: string;
    info: string;
    place: string;
    image: string;
}

const TABS: Tab[] =
    [
        {   name: "Demokratie",
            date: "6. - 8. Mai",
            address: "Burggrafenstraße 5",
            title: "Wählen oder nicht wählen?",
            info: "Das Demokratie Wochenende des Festivals für unangepasste Kunst befasst sich" +
                  " mit der Pflicht des Bürgers die politische Landschaft in Deutschland mitzugestalten." +
                  " Und zwar durch Wählen!",
            place: "Galerie Luxese",
            image: "img/info-demokratie.png"},

        {   name: "Macht",
            date: "15. - 17. Juli",
            address: "Unterführung Botanischer Garten/Nymphenburger Schloss",
            title: "Uns gehört die Stadt! Wer ist das Volk?",
            info: "Das Macht Wochenende des Festivals für unangepasste Kunst befasst sich mit der Macht der Bürger" +
                  "in München und des Volks in der Demokratie an sich. ",
            place: "Unterführung Botanischer Garten/Nymphenburger Schloss",
            image: "img/info-macht.png"
        },

        {   name: "Partizipation",
            date: "7. - 9. Oktober",
            address: "Irgendwo in München",
            title: "Wer ist drin und wer bleibt draußen?",
            info: "Das Partizipation Wochenende des Festivals für unangepasste Kunst befasst sich" +
                  " mit der Pflicht des Bürgers die politische Landschaft in Deutschland mitzugestalten." +
                  " Und zwar durch Wählen!",
            place: "Münchner Galerie",
            image: "img/info-partizipation.png"}
    ];

@Component({
    templateUrl: 'build/pages/festivalInfo/festivalInfo.html',
})
export class FestivalInfoPage {
    constructor(private navController: NavController) {
        
    }

    openProgram(page) {
        this.navController.push(page)
    }

    tabs = TABS;
    selectedTab: Tab;
    
    onSelect(tab: Tab) {
        this.selectedTab = tab;
    }
    
    checkTab() {
        let page;
        if (this.selectedTab === this.tabs[0]) {
            page = ProgramDemokratiePage;
        } else if (this.selectedTab === this.tabs[1]) {
            page = ProgramMachtPage;
        } else {
            page = ProgramPartizipationPage;
        }
        
        return page;
    }


}