import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createApp } from 'vue'
import App from './App.vue'

/**
 * O Vue.js na versão 2 tinha algo chamado 'Event Bus' que basicamente gerenciava a comunicação entre os componentes, sem ter a necessidade de passar parametros para eles.
 * Porém isso foi descontinuado na versão 3, portanto instalamos uma biblioteca chamada 'mitt' e nessa biblioteca vamos fazer o gerenciamento de barramento de evento global.
 * Ou de maneira mais clara, vamos fazer o gerenciamento de disparo de eventos entre componentes sem um relacionamento direto entre eles.
 */

import mitt from 'mitt'; //Importando o mitt,

const emitter = mitt(); //Instanciando o mitt e associando o mitt ao emitter conforme a documentação do mitt.

const app = createApp(App); //Instancia da aplicação vue
app.config.globalProperties.emitter = emitter; //Configurando a instancia do mitt, como sendo uma propriedade global, para esta disponivel para todas as instancias dos componentes dentro do app.

app.mount('#app'); //Associa a instancia do vue com o elemento HTML.
