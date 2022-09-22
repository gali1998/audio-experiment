import * as stimTrial from "../components/imageKeyComponent";
import * as stats from 'simple-statistics';
import audioMatchingComponent from "../components/audioComponent";

export class showStimProcedure {
    constructor(assetPaths) {
        this.assetPaths = assetPaths;
        this.design = [
            [
                "media/audio/Amir Peretz_8.mp3",
                "media/audio/Amir Peretz_10.mp3"
            ],
            [
                "media/audio/Asaf Zamir_15.mp3",
                "media/audio/Asaf Zamir_12.mp3"
            ],
            [
                "media/audio/Ayelet Shaked_15.mp3",
                "media/audio/Ayelet Shaked_16.mp3"
            ],
            [
                "media/audio/Bezalel Smotrich_7.mp3",
                "media/audio/Bezalel Smotrich_6.mp3"
            ],
            [
                "media/audio/Israel Katorza_23.mp3",
                "media/audio/Israel Katorza_8.mp3"
            ],
            [
                "media/audio/Naftali Bennett_1.mp3",
                "media/audio/Naftali Bennett_4.mp3"
            ],
            [
                "media/audio/Tamar Zandberg_0.mp3",
                "media/audio/Tamar Zandberg_2.mp3"
            ],
            [
                "media/audio/Uri Gottlieb_2.mp3",
                "media/audio/Uri Gottlieb_0.mp3"
            ],
            [
                "media/audio/Yair Lapid_0.mp3",
                "media/audio/Yair Lapid_4.mp3"
            ],
            [
                "media/audio/Amir Peretz_10.mp3",
                "media/audio/Asaf Zamir_11.mp3"
            ],
            [
                "media/audio/Amir Peretz_10.mp3",
                "media/audio/Ayelet Shaked_14.mp3"
            ],
            [
                "media/audio/Amir Peretz_10.mp3",
                "media/audio/Bezalel Smotrich_10.mp3"
            ],
            [
                "media/audio/Amir Peretz_10.mp3",
                "media/audio/Israel Katorza_22.mp3"
            ],
            [
                "media/audio/Amir Peretz_10.mp3",
                "media/audio/Naftali Bennett_1.mp3"
            ],
            [
                "media/audio/Amir Peretz_10.mp3",
                "media/audio/Tamar Zandberg_0.mp3"
            ],
            [
                "media/audio/Amir Peretz_10.mp3",
                "media/audio/Uri Gottlieb_0.mp3"
            ],
            [
                "media/audio/Amir Peretz_10.mp3",
                "media/audio/Yair Lapid_0.mp3"
            ],
            [
                "media/audio/Asaf Zamir_11.mp3",
                "media/audio/Ayelet Shaked_14.mp3"
            ],
            [
                "media/audio/Asaf Zamir_11.mp3",
                "media/audio/Bezalel Smotrich_10.mp3"
            ],
            [
                "media/audio/Asaf Zamir_11.mp3",
                "media/audio/Israel Katorza_22.mp3"
            ],
            [
                "media/audio/Asaf Zamir_11.mp3",
                "media/audio/Naftali Bennett_1.mp3"
            ],
            [
                "media/audio/Asaf Zamir_11.mp3",
                "media/audio/Tamar Zandberg_0.mp3"
            ],
            [
                "media/audio/Asaf Zamir_11.mp3",
                "media/audio/Uri Gottlieb_0.mp3"
            ],
            [
                "media/audio/Asaf Zamir_11.mp3",
                "media/audio/Yair Lapid_0.mp3"
            ],
            [
                "media/audio/Ayelet Shaked_14.mp3",
                "media/audio/Bezalel Smotrich_10.mp3"
            ],
            [
                "media/audio/Ayelet Shaked_14.mp3",
                "media/audio/Israel Katorza_22.mp3"
            ],
            [
                "media/audio/Ayelet Shaked_14.mp3",
                "media/audio/Naftali Bennett_1.mp3"
            ],
            [
                "media/audio/Ayelet Shaked_14.mp3",
                "media/audio/Tamar Zandberg_0.mp3"
            ],
            [
                "media/audio/Ayelet Shaked_14.mp3",
                "media/audio/Uri Gottlieb_0.mp3"
            ],
            [
                "media/audio/Ayelet Shaked_14.mp3",
                "media/audio/Yair Lapid_0.mp3"
            ],
            [
                "media/audio/Bezalel Smotrich_10.mp3",
                "media/audio/Israel Katorza_22.mp3"
            ],
            [
                "media/audio/Bezalel Smotrich_10.mp3",
                "media/audio/Naftali Bennett_1.mp3"
            ],
            [
                "media/audio/Bezalel Smotrich_10.mp3",
                "media/audio/Tamar Zandberg_0.mp3"
            ],
            [
                "media/audio/Bezalel Smotrich_10.mp3",
                "media/audio/Uri Gottlieb_0.mp3"
            ],
            [
                "media/audio/Bezalel Smotrich_10.mp3",
                "media/audio/Yair Lapid_0.mp3"
            ],
            [
                "media/audio/Israel Katorza_22.mp3",
                "media/audio/Naftali Bennett_1.mp3"
            ],
            [
                "media/audio/Israel Katorza_22.mp3",
                "media/audio/Tamar Zandberg_0.mp3"
            ],
            [
                "media/audio/Israel Katorza_22.mp3",
                "media/audio/Uri Gottlieb_0.mp3"
            ],
            [
                "media/audio/Israel Katorza_22.mp3",
                "media/audio/Yair Lapid_0.mp3"
            ],
            [
                "media/audio/Naftali Bennett_1.mp3",
                "media/audio/Tamar Zandberg_0.mp3"
            ],
            [
                "media/audio/Naftali Bennett_1.mp3",
                "media/audio/Uri Gottlieb_0.mp3"
            ],
            [
                "media/audio/Naftali Bennett_1.mp3",
                "media/audio/Yair Lapid_0.mp3"
            ],
            [
                "media/audio/Tamar Zandberg_0.mp3",
                "media/audio/Uri Gottlieb_0.mp3"
            ],
            [
                "media/audio/Tamar Zandberg_0.mp3",
                "media/audio/Yair Lapid_0.mp3"
            ],
            [
                "media/audio/Uri Gottlieb_0.mp3",
                "media/audio/Yair Lapid_0.mp3"
            ]
        ];
    }

    getProcedure() {
        let procedure = {
            timeline: this.getTimeline(),
            randomize_order: true
        }

        return procedure;
    }

    getTimeline() {
        let timelineVariables = [];

        for (let i = 0; i < this.design.length; i++) {
            let pair = this.design[i];

            let audio1 = pair[0];
            let audio2 = pair[1];

            
            timelineVariables.push(audioMatchingComponent.getTrial(audio1, audio2));
        }

        stats.shuffleInPlace(timelineVariables);
        console.log(this.design)    
        return timelineVariables;
    }

    getTimelineVariables() {
        let timelineVariables = [];

        for (let i = 1; i <= this.numOfStims; i++) {
            let path = "media/images/" + this.stimFolder + "/" + this.stimImageName + i + "." + this.fileExtension;
            let pathObject = { path: path };

            timelineVariables.push(pathObject);
        }

        return timelineVariables;
    }
}