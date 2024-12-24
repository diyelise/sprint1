import { registerApplication, start } from 'single-spa';

registerApplication({
  name: 'auth',
  app: () => import('auth-microfrontend/App'),
  activeWhen: ['/profile']
});

registerApplication({
  name: 'images',
  app: () => import('images-microfrontend/App'),
  activeWhen: ['/images']
});

registerApplication({
  name: 'likes',
  app: () => import('rating-microfrontend/App'),
  activeWhen: ['/likes']
});

start();