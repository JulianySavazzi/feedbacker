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
se aparecer um erro de pacotes do pinia ao executar o servidor nuxt verificar se o pinia foi instalado e fazer o seguinte comando na pasta nuxt-feedbacker:
```bash
#npm
npm i pinia -f
```

## Links uteis e documentações utilizadas:
- [Treinamento gratuito Vue Brasil](https://igorhalfeld.teachable.com/p/treinamento-completo-e-gratuito-de-vue-js-3-do-iniciante-ao-avancado)
	- [Tailwind CSS](https://tailwindcss.com/docs/guides/vite#vue)
	- [Vue JS Quick Start](https://pt.vuejs.org/guide/quick-start.html)
	- [Laravel 10](https://laravel.com/docs/10.x#why-laravel)
	- [Animate Css](https://animate.style/)
	- [Vue Toastification](https://github.com/Maronato/vue-toastification)
	- [Vee Validate](https://github.com/logaretm/vee-validate)
	- [uNxt Geting Started](https://nuxt.com/docs/getting-started/installation)
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





