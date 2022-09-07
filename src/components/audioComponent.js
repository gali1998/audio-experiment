import HtmlButtonResponsePlugin from '@jspsych/plugin-html-button-response';
class audioMatchingComponent {
    static getTrial(audio1, audio2) {

        let imageHeight = Math.round(window.screen.availHeight / 2);
        let trial = {
            type: HtmlButtonResponsePlugin,
            stimulus: this.getStimulus(audio1, audio2),
            prompt: '<p class="prompt"> עד כמה הקולות דומים?</p>',
            maintain_aspect_ratio: true,
            post_trial_gap: 500,
            choices: ["1- מאוד שונים", "2- שונים", "3- קצת שונים", "4- קצת דומים", "5- דומים", "6- דומים מאוד"],
            response_ends_trial: true,
            stimulus_height: imageHeight,
            step: 0.5,
            slider_start: 3.5,  
            min: 1,
            max: 6,
            on_finish: function (data) {
                data.audio1 = audio1;
                data.audio2 = audio2;
            },
            on_trial_start: function() {
                let player1 = document.getElementById("aud1");
                let player2 = document.getElementById("aud2");

                let player = document.querySelector('audio')
                player.addEventListener('playing', () => {
                    alert("hi")
                })

                player1.onplay = function() {
                    alert("hi")
                    player2.pause();
                }

                player2.onplay = function() {
                    player1.pause();
                }
            }
        };

        return trial;
    }

    static getStimulus(audio1, audio2) {
        return (
            ' <div class="audio-matching-trial">' +
            this.getaudio(audio1, "aud1") + this.getaudio(audio2, "aud2") +
            '</div>'
        );
    }

    static getaudio(source, id) {

        jsPsych.onPlayFunc = (id) => {            
            if (document.getElementById("aud2") == null || document.getElementById("aud1") == null){
                return;
            }
            if (id == "aud1") {
                document.getElementById("aud2").pause();
            } else {
                document.getElementById("aud1").pause();
            }
        }

        return (
            '<div class="audio">' +
            '<audio onplay="jsPsych.onPlayFunc(id)"' + 'id = ' + id + ' controls>' +
            '<source src="' + source + '" type="audio/ogg">' +
            '<source src="' + source + 'type="audio/mpeg"></source> ' +
            '</audio>' +
            '</div>'
        );
    }
}

export default audioMatchingComponent;