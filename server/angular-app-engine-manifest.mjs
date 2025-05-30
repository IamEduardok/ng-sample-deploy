
export default {
  basePath: 'C:/Program Files/Git/ng-sample-deploy',
  supportedLocales: {
  "en-US": ""
},
  entryPoints: {
    '': () => import('./main.server.mjs')
  },
};
