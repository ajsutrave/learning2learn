


/**
 * Generates a random, base 16 key used to track anonymous user sessions
 *
 * @class UUID
 * @memberof L2L.Generator
 *
 *
 */

 export default class UUID {

   constructor() {
     this.uuid = '';
     let i, random;
     for (i = 0; i < 32; i++) {
       random = Math.random() * 16 | 0;

       if (i == 8 || i == 12 || i == 16 || i == 20) {
           this.uuid += "-"
       }
       this.uuid += (i == 12 ? 4 : (i == 16 ? (random & 3 | 8) : random)).toString(16);
     }
   }

 }
