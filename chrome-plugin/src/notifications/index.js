/*
 * @namespace L2L.Notifications
 */


import * as jQuery from '../includes/jquery-3.3.1.min.js';
import * as notifyJS from '../includes/notify.js';

class Notification {
  constructor(config) {
    config.options = config.options ? config.options : {}; // create options if undefined
    config.options.clickToHide = false;
    config.options.autoHide = false;

    // Have to create a unique identifier for this notification, so we can target it individually (ie. in destroy)
    this.notificationID = parseInt(Math.random()*9999999);

    if (config.attachTo == 'global')
      this.element = $.notify('<div id="notification'+this.notificationID+'">'+config.content+'</div>', config.options);
    else
      this.element = $(config.attachTo).notify('<div id="notification'+this.notificationID+'">'+config.content+'</div>', config.options);
  }

  destroy() {
    $('#notification'+this.notificationID).trigger('notify-hide');
  }
}

class Success extends Notification {
  constructor(config) {
    config.options = config.options ? config.options : {}; // create options if undefined
    config.options.className = 'success';
    super(config);
  }
}

class Info extends Notification {
  constructor(config) {
    config.options = config.options ? config.options : {}; // create options if undefined
    config.options.className = 'info';
    super(config);
  }
}

class Warning extends Notification {
  constructor(config) {
    config.options = config.options ? config.options : {}; // create options if undefined
    config.options.className = 'warning';
    super(config);
  }
}

class Error extends Notification {
  constructor(config) {
    config.options = config.options ? config.options : {}; // create options if undefined
    config.options.className = 'error';
    super(config);
  }
}


var Notifications = {
  Success: Success,
  Info: Info,
  Warning: Warning,
  Error: Error
};

export default Notifications;
