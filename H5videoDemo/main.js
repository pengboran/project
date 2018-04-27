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
        src: 'http://wx.wushang.com/bideo/demo.mp4',
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
        setTimeout('window.location.href="http://www.baidu.com"',pt*975);
    }
  });
}());
