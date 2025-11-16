AOS.init(
    { duration: 1000, once: true });

    //  Hide loading animation and show content
    window.addEventListener('load', function() {
      setTimeout(function() {
        document.getElementById('loadingOverlay').classList.add('hide');
        document.body.classList.add('loaded');
      }, 4000); 
    });

