(function() {
  'use strict';
  console.info('Ad-free TradingView : Plugin loaded');
  
  const checkAd = setInterval(() => {
    const adBox    = document.querySelectorAll("[data-role^='toast-container']");
    const backdrop = document.querySelectorAll("[class^='backdrop']");
    const adclass = document.querySelectorAll('.ads');
    const adUnitId = document.querySelectorAll('#adunit');
    
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
