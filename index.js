(function() {
  'use strict';
  console.info('TradingView NoAds: Plugin loaded');
  
  const checkAd = setInterval(() => {
    const adBox    = document.querySelector("[data-role^='toast-container']");
    const backdrop = document.querySelector("[class^='backdrop']");
    const adclass = document.querySelectorAll('.ads');
    const adUnitId = document.querySelector('#adunit');
    
    if ( adBox !== null ) {
      adBox.remove();
      console.info('TradingView NoAds: Ad removed.');
    }

    if ( adUnitId !== null ) {
      adBox.remove();
      console.info('TradingView NoAds: Ad removed.');
    }
    
    if ( adclass !== null ) {
      adBox.remove();
      console.info('TradingView NoAds: Ad removed.');
    }
    
    if ( backdrop !== null ) {
      let adModal = backdrop.nextElementSibling;
      backdrop.remove();
      if ( adModal !== null ) {
        adModal.remove();
        console.info('TradingView NoAds: Modal removed.');
      }
    }
  }, 5000);
})();
