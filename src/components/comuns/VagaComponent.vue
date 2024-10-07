<template>
    <div class="card">
        <div class="card-header bg-dark text-white">{{ vaga.titulo }}</div>
        <div class="card-body">
            <p>
                {{ vaga.descricao }}
                <!-- {{kebabCase}} Vue.js recebeu ma kebab-case e ela é chamada oomo CamelCase -->
            </p>
        </div>
        <div class="card-footer">
            <small class="text-muted">Salário: R$ {{vaga.salario}} | Modalidade: {{ vaga.modalidade }} | Tipo: {{vaga.tipo}} | Publicação: {{vaga.publicacao}}</small>
        </div>
    </div>
</template>
<script>
    export default {
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
            kebabCase: {
                type: String,
                required: false,
                validator(value){ //Validator recebe o proprio valor da props que foi passada. Retorna true/false, estamos recebendo uma variavel.
                    if(value.length >= 10) return true;
                    return false;
                }
            }
        },
        created(){
            console.log(this.kebabCase);
        }
    }
</script>
<style lang="css">
</style>