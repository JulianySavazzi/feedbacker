# feedbacker

Aplicação web de dashboard com autenticação e instalador do web component de envio e recebimento de feedbacks para sites.

- ### Sobre a aplicação:
	- a pasta laravel-feedbacker, contém o projeto criado com o framework Laravel para o backend (API);
	- a pasta nuxt-feedbacker contém o projeto nuxt usando vue3 para o front-end da dashboard;
	- a pasta widget contém o projeto da interface para envio de feedbacks e configurações do iframe do widget;
    - a pasta try-widget contém uma página html para testar o funcionamento do iframe de widget;

	- o projeto conta com alguns testes unitários e testes de integração;

	- o deploy da API será no Vercel, e do dashboard na Netlify;

- ### Observações:
	- a pasta feedbacker-dashboard contém um projeto Vue3 CLI criado no treinamento gratuido da Vue.js Brasil;
	- ele foi criado para estudos e será usado de base (componentes e algumas regras de negócio) para os projetos com nuxt e laravel;
	- ele não está com a dashboard completa, o front-end completo utilizado para o dashboard da aplicação foi feito em nuxt.

## Tecnologias utilizadas:
	- Laravel Framework v10
	- Nuxt3
	- Vue3
	- TailwindCSS

### Executar aplicação:
desativar o prevent tracking no navegador;

servidor backend na pasta laravel-feedbacker pelo terminal:
```bash
#laravel
php artisan serve
```

servidor web via node na pasta nuxt-feedbacker e widget pelo terminal:
```bash
#npm
npm run dev
```
servidor web via node na pasta try-widget e widget pelo terminal:
```bash
#serve
serve -p 3003
```

se aparecer um erro de pacotes do pinia ao executar o servidor nuxt, verificar se o pinia foi instalado e fazer o seguinte comando na pasta nuxt-feedbacker:
```bash
#npm
npm i pinia -f
```

## Executar testes:
### Testes unitários usando jest:
- instalar jest no nuxt:
```bash
npm i --save-dev @nuxt/test-utils jest @vue/test-utils happy-dom playwright-core
npm install --save-dev @jest/globals
npm install --save-dev ts-jest
npm i ts-node
npm init jest@latest
```
- no package.json -> scripts -> tests: "node --experimental-vm-modules node_modules/jest/bin/jest.js"
```bash
npm run test
```
### Testes end 2 end usando cypress:
- Instalar e abrir cypress no nuxt:
```bash
npm install cypress --save-dev
#npx cypress open
npm run cy:open
```
- para o ultimo comando funcionar no package.json -> scripts -> "cy:open": "cypress open", se não precisa executar pelo comando npx

- para executar o cypress em segundo plano salvando os outputs dos testes em uma pasta:

## Links uteis e documentações utilizadas:
- [Treinamento gratuito Vue Brasil](https://igorhalfeld.teachable.com/p/treinamento-completo-e-gratuito-de-vue-js-3-do-iniciante-ao-avancado)
- [Fluxograma Feedbacker](https://excalidraw.com/#json=bWN6rG6zKQvykHkgT11gQ,_MKf8w1q6Wzav2hVTuSWvA)
- [Exemplo do widget de feedbacks](https://feedback.fish/get-started/)
	- [Tailwind CSS](https://tailwindcss.com/docs/guides/vite#vue)
	- [Vue JS Quick Start](https://pt.vuejs.org/guide/quick-start.html)
	- [Laravel 10](https://laravel.com/docs/10.x#why-laravel)
	- [Laravel Migrations](https://laravel.com/docs/10.x/migrations#main-content)
	- [Animate Css](https://animate.style/)
	- [Vue Toastification](https://github.com/Maronato/vue-toastification)
	- [Vee Validate](https://github.com/logaretm/vee-validate)
	- [Nuxt Geting Started](https://nuxt.com/docs/getting-started/installation)
	- [Tyni Emitter](https://www.npmjs.com/package/tiny-emitter)
	- [Nuxt Auth Sanctum](https://nuxt.com/modules/nuxt-auth-sanctum)
	- [Laravel Fortify](https://laravel.com/docs/10.x/fortify)
	- [Data fetching in Nuxt 3](https://mokkapps.de/blog/a-comprehensive-guide-to-data-fetching-in-nuxt-3)
	- [POST request in Nuxt 3](https://codingoblin.com/post-request-in-nuxt-3/)
	- [Pinia](https://pinia.vuejs.org/)
	- [Vue Reactivy Core](https://pt.vuejs.org/api/reactivity-core.html)
	- [Vue State Management](https://pt.vuejs.org/guide/scaling-up/state-management.html)
	- [Pinia Plugin Persisted State](https://prazdevs.github.io/pinia-plugin-persistedstate/frameworks/nuxt-3.html)
	- [Vue Use Global State](https://vueuse.org/shared/createGlobalState/)
	- [Fortify Logout](https://laravel.com/docs/11.x/fortify#customizing-authentication-redirects)
	- [Logging Out Laravel](https://laravel.com/docs/10.x/authentication#invalidating-sessions-on-other-devices)
	- [Session Laravel](https://laravel.com/docs/10.x/session#implementing-the-driver)
	- [Sanctum token expiration](https://laravel.com/docs/10.x/sanctum#token-expiration)
	- [Fortify Registration](https://laravel.com/docs/11.x/fortify#registration)
	- [Migrations comandos artisan](https://laravel.com/docs/10.x/migrations#roll-back-migrate-using-a-single-command)
	- [Nuxt Tests Config](https://nuxt.com/docs/getting-started/testing)
	- [Jest Getting Start](https://jestjs.io/docs/getting-started#using-typescript)
	- [Jest ECMAScript](https://jestjs.io/pt-BR/docs/ecmascript-modules)
	- [Jest Mock Fetch](https://jestjs.io/pt-BR/docs/next/bypassing-module-mocks)
	- [Jext Expect](https://jestjs.io/docs/expect)
	- [Pinia Testing](https://pinia-docs-pt.netlify.app/cookbook/testing.html)
	- [Unit Test with Pinia](https://fadamakis.com/unit-testing-a-pinia-component-37d045582aed)
	- [Cypress](https://docs.cypress.io/guides/overview/why-cypress#Setting-up-tests)
	- [Install Vercel CLI](https://vercel.com/docs/cli#installing-vercel-cli)
	- [Vecel API REST](https://vercel.com/docs/rest-api)
	- [Vercel Configuration](https://vercel.com/docs/projects/project-configuration)
	- [Composer Laravel Vercel](https://packagist.org/packages/revolution/laravel-vercel-installer)
	- [Deploy Laravel Project in Vercel](https://rzamandala.medium.com/how-to-deploy-laravel-project-to-vercel-7b3c2800e974)
	- [PHP Runtime For Vercel](https://github.com/vercel-community/php)
	- [PHP DEPLOY APP FOR VERCEL](https://php.vercel.app/)





