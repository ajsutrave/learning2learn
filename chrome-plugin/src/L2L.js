


/*
 * @namespace L2L
 */

console.log('INSIDE L2L');


var L2L = {

  PageListeners: require('./page-listeners'),
  Notifications: require('./notifications'),

  Generator: require('./generator')

};




// Export module
export default L2L;




/* Access the entire L2L system from this single global entry point */
window.L2L = L2L;
