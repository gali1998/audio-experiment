import * as stats from 'simple-statistics';
import familiarityComponent from '../components/familiarityComponent';

export class familiarityProcedure {
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
            let chosenAudios = stats.sample(paths, 1);

            timelineVariables.push(familiarityComponent.getTrial(chosenAudios[0]));
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