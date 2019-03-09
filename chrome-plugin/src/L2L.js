/*
 * @namespace L2L
 */

/*
 Note from Kris Gano:
 Possibly change this long list of static imports to use dynamic imports and Promise.all().
 Will mirror dynamic 'require' calls (node, webpack, etc) more closely, which is nice for when
 we switch to bundling.

 Both formats still require some extra verbosity which isn't ideal, so if a better solution
 comes around then it should be adopted. A better solution would be less verbose but still take
 into account ease of dev accessability in these early stages, while still allowing us to seamlessly
 transfer to a bundler in the future. This transition would occur either when we have enough disparate
 modules to justify it, or when the code base is moved from a chrome extension to a standalone app.
*/
import PageListeners from './page-listeners/index.js'
import Notifications from './notifications/index.js'
import Generator from './generator/index.js'


var L2L = {
  PageListeners: PageListeners,
  Notifications: Notifications,

  Generator: Generator
};




// Export module
export default L2L;
