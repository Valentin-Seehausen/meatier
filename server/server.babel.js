//if (process.env.NODE_ENV !== 'production') {
//  if (!require('piping')({
//      hook: true,
//      ignore: /(\/\.|~$|\.json$)/i
//    })) {
//    return;
//  }
//}
require('babel-core/register');
require('./server');