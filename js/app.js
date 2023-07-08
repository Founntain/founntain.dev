"use strict";

(function () {
    var title = document.title,
        animSeq = ["/", "$", "\\", "|", "$"],
        animIndex = 0,
        titleIndex = 0;

    function doInverseSpinZeroPitch() {
        var loadTitle = title.substring(0, titleIndex);

        if (titleIndex > title.length) {
            animIndex = 0;
            titleIndex = 0;
        }

        if (animIndex > 3) {
            titleIndex++;

            animIndex = 0;
        }

        document.title = loadTitle + animSeq[animIndex];

        animIndex++;
    }

    window.setInterval(doInverseSpinZeroPitch, 50);
})();

var isAudioPlaying = false;

const qS = (q) => document.querySelector(q);

const video = qS("video");
const audio = qS("#audioSource");

audio.volume = 0.15;

video.playbackRate = 4;

document.body.addEventListener("click", async (_) => {
  audio.volume = 0.25;

  if (isAudioPlaying) {
    isAudioPlaying = false;

    audio.pause();
  } else {
    isAudioPlaying = true;

    audio.play();
  }

  qS(".hint").style.display = "none";
});