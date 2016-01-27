
(function () {
  
  /**
   * jkbyln Animation
   */

  $svg_logo = $('#jkbyln-svg-logo');

  function logoAnimLoop() {

    durTime = 10000;
    totalTime = durTime * 4;

    $svg_logo.velocity({ stroke: '#c96969' }, { duration: durTime })
      .velocity({ stroke: '#0095ff' }, { duration: durTime })
      .velocity({ stroke: '#eade80' }, { duration: durTime })
      .velocity({ stroke: '#4C4441' }, { duration: durTime });

    // go, and go, and go...
    setTimeout(logoAnimLoop, totalTime);
  }

  logoAnimLoop();
  
})(jQuery);
