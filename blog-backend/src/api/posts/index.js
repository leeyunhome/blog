// const Router = require('koa-router');
import Router from 'koa-router';
// const postsCtrl = require('./posts.ctrl');
import * as postsCtrl from './posts.ctrl';

const posts = new Router();


posts.get('/', postsCtrl.list);
posts.post('/', postsCtrl.write);
posts.get('/:id', postsCtrl.read);
posts.delete('/:id', postsCtrl.remove);
posts.patch('/:id', postsCtrl.update);

// module.exports = posts;
export default posts;