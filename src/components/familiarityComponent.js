import HtmlButtonResponsePlugin from '@jspsych/plugin-html-button-response';

class familiarityComponent {
    static getTrial(path) {
        let imageHeight = Math.round(window.screen.availHeight / 2);
        let trial = {
            type: HtmlButtonResponsePlugin,
            stimulus: this.getStimulus(path),
            choices: ["1- בוודאות לא מוכר", "2- לא מוכר", "3- אולי לא מוכר", "4- אולי מוכר", "5- מוכר", "6- בוודאות מוכר"],
            prompt: '<p class="prompt">' + 'עד כמה הקול מוכר לך?' + "</p>    ",
            response_ends_trial: true,
            maintain_aspect_ratio: true,
            stimulus_height: imageHeight
        };

        return trial;
    }

    
    static getStimulus(audio1) {
        return (
            ' <div class="audio-matching-trial">' +
            this.getaudio(audio1, "aud1") +
            '</div>'
        );
    }

    
    static getaudio(source) {
        return (
            '<div class="audio">' +
            '<audio controls>' +
            '<source src="' + source + '" type="audio/ogg">' +
            '<source src="' + source + 'type="audio/mpeg"></source> ' +
            '</audio>' +
            '</div>'
        );
    }
}

export default familiarityComponent;