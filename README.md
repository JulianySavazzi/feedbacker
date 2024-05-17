# feedbacker

Aplicação web de dashboard com autenticação e instalador do web component de envio e recebimento de feedbacks para sites.

- ### Sobre a aplicação:
	- a pasta laravel-feedbacker, contém o projeto criado com o framework Laravel para o backend (API);
	- a pasta nuxt-feedbacker contém o projeto nuxt usando vue3 para o front-end da dashboard;
	- a pasta widget ;

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

## Desafios
### Problemas com o Jest:
- Como o nuxt por padrão utiliza o vitest, foi trabalhoso instalar o jest e faze-lo funcionar para os testes unitários.
- Ainda não consegui fazer testes na store com o Jest, mesmo após pesquisar sobre testes unitarios em stores que usam o Pinia.
- Talvez eu mude para o vitest para tentar refazer os testes unitários também na store e nos componentes.
### Dificuldades com o cypress:
- Ainda não consegui executar o cypress em segundo plano salvando os outputs dos testes em uma pasta.
- Porém consegui fazer vários testes end2end, a documentação dele me ajudou bastante.
### Implantação do projeto nuxt no netlify:
- Fazer o deploy do projeto nuxt de front-end no netlify foi algo novo para mim, eu nunca tinha usado a plataforma e a documentação do nuxt deixou um pouco a desejar nessa parte, pois fiz o deploy seguindo as instruções de lá e o site simplesmente carregava uma página de status 404.
- Estou usando o plano gratuíto. Após pesquisar em forums, e revisitar a documentação do nuxt e netlify, descobri que para funcionar corretamente, eu precisava adicionar uma variável ENV nas configurações da implantação no netlify chamada de SERVER_PRESET, habilitando as edge functions (isso não estava explícito, na documentação do nuxt dizia que era opicional, porém sem essa ENV, o site simplesmente não funcionava, qualquer página que você tentava acessar retornava 404).
- Mas esse de longe foi o menor dos problemas que encontrei.
### Implantação da API laravel no vercel:
- Até agora meu maior desafio está sendo em tentar fazer meu backend funcionar corretamente depois de fazer o deploy no vercel.
- Primeiramente, fui surpreendida pela documentação do vercel, quando oferecia apenas templates para frameworks de front-end e backend com NodeJs (e pelo que entendi e pesquisei, só garantem 100% de compatibilizade no plano gratuíto para essas plataformas mencionadas na doc).
- Após pesquisar em muitos foruns e tutoriais, consegui fazer o deploy da API laravel, utilizando o pacote laravel-vercel para composer e o PHP Runtime for Vercel (deixei os links na seção de links úteis).
- O primeiro grande problema que consegui contornar foi o problema de CORS, o qual me fez pesquisar muito sobre headers e allow origins. Como eu não tinha um único domínio, pois eu estou usando o dominio fornecido no meu deploy do netlify para o front-end e o do vercel para o backend, tive que implantar um proxy no projeto nuxt, o que deu um pouco de trabalho mas funcionou corretamente, após eu fazer todas as configurações ENV no backend implantado no vercel (SESSION_DOMAIN, APP_URL, SANCTUM_STATEFUL_DOMAIN etc).
- Sofri muito testando várias configurações do vercel.json, até que consegui deixar o arquivo clean (apenas com o necessário para funcionar), já que a maioria dos guias da documentação que eu tentava seguir quando implementados me davam alguns problemas (simplesmente não conseguia fazer o build da aplicação impedindo e deploy e dando um erro nada específico que falava que o meu vercel.json tinha conflitos, o que me fazia voltar a estaca zero). Porém ainda estou com um grande problema.
- As rotas da API funcionam como esperado quando faço requisições usando o ThunderClient: status 200 para rotas sem autenticação, 204 para a rota get sanctum/crsf-token (utilizado para autenticação do SPA), e para as rotas do tipo POST que eu preciso do cookie XSRF-TOKEN respondem 419 (pois no thunderclient, não passo o cookie na hora de testar a requisição).
- No meu servidor local, a autenticação utilizando Sanctum e as rotas de login e registro de uruário usando Fortify funcionam perfeitamente.
- Porém no meu deploy estou tendo o seguinte problema: todas as rotas que utilizam o midleware do sanctum (rotas que precisam da autenticação) retornam um status 302 (não estão conseguindo ser redirecionadas corretamente).
- A requisição sanctum/crsf-token funciona, os cookies são salvos e passados corretamente nos cabeçalhos de request e response, a rota register salva os usuarios novos no banco de dados, porém não é redirecionada corretamente retornando um status 302 e depois um 404. As rotas que dependem de login também retornam um 302 e depois um 404, e até agora não achei nada que me ajudasse a resolver esse problema.

### Observação:
Localmente, tanto o projeto laravel que desenvolvi para fazer minha API no backend, quanto o projeto nuxt que desenvolvi para fazer o front-end da minha aplicação, funcionam corretamente (todas as rotas e funcionalidades).

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
	- [CORS in Laravel](https://laravel-news.com/diving-into-cross-origin-resource-sharing)





