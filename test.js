'use strict';

function debug(str) {
  dump(' -*- ServiceWorkers -*-: ' + str + '\n');
}

(function() {

  // Check service workers availability
  if (!('serviceWorker' in navigator)) {
    debug('ServiceWorker NOT found in navigator');
  }

  // Register action
  var register_1_btn = document.querySelector('#register_worker_1_btn');
  register_1_btn.addEventListener('click', function(e) {
    navigator.serviceWorker.register('service-worker1.js').then(function(registration) {
      debug('Service-worker 1 register success');
    }).catch(function(error) {
      debug('Error during registration: ' + error);
    });
  });

  // Register action
  var register_2_btn = document.querySelector('#register_worker_2_btn');
  register_2_btn.addEventListener('click', function(e) {
    navigator.serviceWorker.register('service-worker2.js').then(function(registration) {
      debug('Service-worker 2 register success');
    }).catch(function(error) {
      debug('Error during registration: ' + error);
    });
  });


  // Get registrations action
  var get_registrations_btn = document.querySelector('#get_registrations_btn');
  get_registrations_btn.addEventListener('click', function(e) {
    navigator.serviceWorker.getRegistrations().then(function(registrations) {
      debug(registrations.length + ' registration/s found');
      registrations.forEach(function (registration) {
        debug('Scope: ' + registration.scope);
        var sw = registration.installing || registration.waiting || registration.active;
        if (sw) {
          debug('Script URL: ' + sw.scriptURL);
        }
      });
    });
  });
}());
