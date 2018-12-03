(function () {

  var bv = new Bideo();
  bv.init({
    // Video element
    videoEl: document.querySelector('#background_video'),

    // Container element
    container: document.querySelector('body'),

    // Resize
    resize: true,

    // autoplay: false,

    isMobile: window.matchMedia('(max-width: 768px)').matches,

    playButton: document.querySelector('#play'),
    pauseButton: document.querySelector('#pause'),

    // Array of objects containing the src and type
    // of different video formats to add
    src: [
      {
        src: 'demo.mp4',
        type: 'video/mp4',
	muted:false,
	loop:false
      },
      {
        src: 'demo.webm',
        type: 'video/webm;codecs="vp8, vorbis"',
	muted:false,
	loop:false 
      }
    ],

    // What to do once video loads (initial frame)
    onLoad: function () {
      document.querySelector('#video_cover').style.display = 'none';
       var md= document.getElementById("background_video");
        var pt = md.duration;
        setTimeout(function(){
        	document.getElementById("play").style.display = 'inline-block'
        	document.getElementById("pause").style.display = 'inline-none'
        },pt*975);
    }
  });
}());
(function(){
        var video;
        var scale = 0.8;
        var initialize = function() {
            video = document.getElementById("background_video");
            video.addEventListener('loadeddata',captureImage);
        };

        var captureImage = function() {
            var canvas = document.createElement("canvas");
            canvas.width = video.videoWidth * scale;
            canvas.height = video.videoHeight * scale;
            canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);
           var _src = canvas.toDataURL("image/png");
           var video_coverImg = document.getElementById("video_coverImg")
           video_coverImg.setAttribute("src",_src)
        };
        initialize();
})();
