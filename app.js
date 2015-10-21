document.getElementById("start").addEventListener("click", function(e){
    chrome.desktopCapture.chooseDesktopMedia(
        ["screen", "window"], function(streamId) {
            navigator.webkitGetUserMedia(
                {
                    audio: false,
                    video: { mandatory: {
                        chromeMediaSource: "desktop",
                        chromeMediaSourceId: streamId
                        }
                    }
                },
                function(stream){
                    document.getElementById("video").src = URL.createObjectURL(stream);
                },
                function(){alert("error")}
            );
        }
    );
});
