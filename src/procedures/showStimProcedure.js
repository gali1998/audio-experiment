import * as stimTrial from "../components/imageKeyComponent";
import * as stats from 'simple-statistics';
import audioMatchingComponent from "../components/audioComponent";

export class showStimProcedure {
    constructor(assetPaths) {
        this.assetPaths = assetPaths;
    }

    getProcedure() {
        let procedure = {
            timeline: this.getTimeline(),
            randomize_order: true
        }

        return procedure;
    }

    fetchIdentityNames(basePath) {
        let relevantPaths = this.assetPaths.filter(path => path.includes(basePath));
        let rawIds = relevantPaths.map(path => path.split("/").at(-1));
        let ids = rawIds.map(id => id.split(".")[0]);
        ids = ids.map(id => id.split("_")[0])

        return [...new Set(ids)];
    }

    getTimeline(assetPaths) {
        let timelineVariables = [];
        let path  = "media/audio/";
        let ids = this.fetchIdentityNames(path);

        for (let i = 0; i < ids.length; i++) { 
            let relevantPaths = this.assetPaths.filter(path => path.includes(path));
            let paths = relevantPaths.filter(path => path.includes(ids[i]));

            let chosenAudios = stats.sample(paths, 2);
            timelineVariables.push(audioMatchingComponent.getTrial(chosenAudios[0], chosenAudios[1]));
        }

        let pairs = stats.combinations(ids, 2);

        for (let i = 0; i < pairs.length; i++){
            let pair = pairs[i];
            let relevantPaths = this.assetPaths.filter(path => path.includes(path));
            let paths = relevantPaths.filter(path => path.includes(pair[0]));

            let audio1 = stats.sample(paths, 1);

            paths = relevantPaths.filter(path => path.includes(pair[1]));

            let audio2 = stats.sample(paths, 1);
            console.log(pair)
            console.log(audio1 + "    " + audio2)

            timelineVariables.push(audioMatchingComponent.getTrial(audio1, audio2));
   
        }

        stats.shuffleInPlace(timelineVariables);
        return timelineVariables;
    }

    getTimelineVariables() {
        let timelineVariables = [];

        for (let i = 1; i <= this.numOfStims; i++) {
            let path = "media/images/" + this.stimFolder + "/" + this.stimImageName + i + "." + this.fileExtension;
            let pathObject = {path: path};

            timelineVariables.push(pathObject);
        }

        return timelineVariables;
    }
}