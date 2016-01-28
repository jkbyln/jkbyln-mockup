
(function () {
  
  /**
   * jkbyln Animation
   */

  svg_logo = document.getElementById('jkbyln-svg-logo');

  function logoAnimLoop() {

    durTime = 10000;
    totalTime = durTime * 4;

    Velocity( svg_logo, { stroke: '#c96969' }, { duration: durTime });
    Velocity( svg_logo, { stroke: '#0095ff' }, { duration: durTime });
    Velocity( svg_logo, { stroke: '#69b927' }, { duration: durTime });
    Velocity( svg_logo, { stroke: '#4C4441' }, { duration: durTime });

    // go, and go, and go...
    setTimeout(logoAnimLoop, totalTime);
  }

  logoAnimLoop();
  
})();
