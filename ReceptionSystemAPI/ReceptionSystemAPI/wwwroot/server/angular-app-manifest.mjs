
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  }
],
  assets: new Map([
['index.csr.html', {size: 512, hash: '3fa7213d41025c01f711bdbf714834e435393139192c608ed7a14b2fbf4060f8', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)}], 
['index.server.html', {size: 1025, hash: 'f92743e2cfdb30a61781a36325d65e5650e2802106d44e24ea93fcc9192b3f5b', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)}], 
['index.html', {size: 933, hash: '2f69d1ac7d331d6d8647569dc4d8d5cd1191b6784162c14c3bbc10a012e8bd6c', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)}], 
['styles-5INURTSO.css', {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}]
]),
  locale: undefined,
};
