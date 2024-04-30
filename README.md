# feedbacker

- Dashboard com login e instalador do web component de envio e recebimento de feedbacks para sites;

- A pasta laravel-feedbacker, contém o projeto criado com o frameowork Laravel para o backend; a pasta nuxt-feedbacker vai conter o projeto nuxt usando vue3 para o front-end;

- A pasta feedbacker-dashboard contém um projeto Vue3 CLI criado no treinamento gratuido da Vue.js Brasil, ele será usado de base (componentes e regras de negócio) para o projeto com nuxt e laravel;

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

servidor web via node na pasta nuxt-feedbacker pelo terminal:
```bash
#npm
npm run dev
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
- para o ultimo comdando funcionar no package.json -> scripts -> "cy:open": "cypress open", se não precisa executar pelo comando npx

- para executar o cypress em segundo plano salvado os outputs dos testes em uma pasta:

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





