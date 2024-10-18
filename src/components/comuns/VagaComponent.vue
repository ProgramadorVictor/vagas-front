<template>
    <div class="card">
        <div class="card-header bg-dark text-white">
            <div class="row">
                <div class="col d-flex justify-content-between">
                    <div>
                        {{ vaga.titulo }}
                    </div>
                    <div>   
                        <div class="form-check form-switch">
                            <input type="checkbox" class="form-check-input" v-model="favoritada">
                            <label class="form-check-label">Favoritar</label>
                            <!-- <button class="btn btn-danger" @click="dispararEventoComMitt()">Disparar</button> -->
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="card-body">
            <p>
                {{ vaga.descricao }}
                <!-- {{kebabCase}} Vue.js recebeu ma kebab-case e ela é chamada oomo CamelCase -->
            </p>
        </div>
        <div class="card-footer">
            <small class="text-muted">Salário: R$ {{vaga.salario}} | Modalidade: {{ getModalidade }} | Tipo: {{getTipo}} | Publicação: {{getPublicacao}}</small>
        </div>
    </div>
</template>
<script>
    export default {
        data: () => ({
            favoritada: false,
        }),
        watch:{
            favoritada(novo){
                if(novo){
                    this.emitter.emit('favoritarVaga', this.vaga.titulo);
                }else{
                    this.emitter.emit('desfavoritarVaga', this.vaga.titulo);
                }
            }
        },
        //As props são validatas antes da criação do componente.
        props: { //Fazendo a tipagem dos dados que vão ser recebidos pelo componente.
            vaga: {
                type: Object,
                required: true,
                validator (vaga){ //Recebe o valor da prop e retorna true/false dependendo da validação. Aqui estamos recebendo um objeto
                    return ( //Valida o argumento acessando os atributos retornado de validator no caso o objeto retornou.
                        typeof vaga.titulo === 'string' &&
                        typeof vaga.descricao === 'string' &&
                        typeof vaga.salario === 'number' &&
                        typeof vaga.modalidade === 'string' &&
                        typeof vaga.tipo === 'string' &&
                        typeof vaga.publicacao === 'string'
                    ); //O código abaixo é a mesma coisa que o de cima
                    // return
                    //     typeof vaga.titulo === 'string' && typeof vaga.descricao === 'string' &&
                    //     typeof vaga.salario === 'string' && typeof vaga.modalidade === 'string' &&
                    //     typeof vaga.tipo === 'string' && typeof vaga.publicacao === 'string'
                }
            },
            kebabCase: { //As props são validatas antes da criação do componente.
                type: String,
                required: false,
                default: 'A descrição da vaga não foi fornecida.',
                validator(value){ //Validator recebe o proprio valor da props que foi passada. Retorna true/false, estamos recebendo uma variavel.
                    if(value.length >= 10) return true;
                    return false;
                }
            },
            semValor:{
                type: String,
                required: false,
                default(){
                    return '#'.repeat(20);
                }
            }
        },
        computed: {
            getModalidade(){ //Simulando um relacionamento de tipo de modalidade.
                switch(this.vaga.modalidade){
                    case '1': return 'Home Office';
                    case '2': return 'Presencial';
                }
                return ''
            },
            getTipo(){
                switch(this.vaga.tipo){
                    case '1': return 'CLT';
                    case '2': return 'PJ';
                }
                return ''
            },
            getPublicacao(){
                console.log(this.vaga.publicacao);
                let dataPublicacao = new Date(this.vaga.publicacao);
                return dataPublicacao.toLocaleString('pt-BR');
            }
        },
        methods: {
            // dispararEventoComMitt(){
            //     //O primeiro parametro é o nome do evento, o segundo parametro é opcional é onde podemos passar dados.
            //     this.emitter.emit('eventoGlobal', 'Vagas favoritas esta recebendo um evento de outro componente.') //Acessando a propriedade global que foi definida/configurada em main.js
            //     //Aqui estamos disparando o evento de forma global, ainda precisamos recuperar o evento no componente que esta escutando.
            // }
        },
        created(){
            console.log(typeof this.vaga.publicacao);
            console.log(this.semValor);
            console.log(this.kebabCase);
        }
    }
</script>
<style lang="css">
</style>