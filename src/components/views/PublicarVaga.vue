<template>
    <div class="container py-4">
        <div class="row">
            <div class="col">
                <h4>Apresente-se a sua vaga para milhares de profissionais e de graça</h4>
            </div>
        </div>

        <div class="row mt-3">
            <div class="col">
                <label for="form-label">Titulo da vaga</label>
                <input type="text" class="form-control" v-model="titulo">
                <div class="form-text">Por exemplo: Programador Js e Vue.js</div>
            </div>
        </div>

        <div class="row mt-3">
            <div class="col">
                <label for="form-label">Descrição</label>
                <textarea class="form-control" v-model="descricao"></textarea>
                <div class="form-text">Informe os detalhes da vaga</div>
            </div>
        </div>

        <div class="row mt-3">
            <div class="col">
                <label for="form-label">Salário</label>
                <input type="number" class="form-control" v-model="salario">
                <div class="form-text">Informe o salário</div>
            </div>
            <div class="col">
                <label for="form-label">Modalidade</label>
                <select class="form-select" v-model="modalidade">
                    <option value="" disabled>Selecione a modalidade</option>
                    <option value="1">Home Office</option>
                    <option value="2">Presencial</option>
                </select>
                <div class="form-text">Informe onde as atividades seram realizadas.</div>
            </div>
            <div class="col">
                <label for="form-label">Tipo da Contratação da Vaga</label>
                <select class="form-select" v-model="tipo">
                    <option value="" disabled>Selecione um tipo</option>
                    <option value="1">CLT</option>
                    <option value="2">PJ</option>
                </select>
                <div class="form-text">Informe o tipo de contratação da vaga.</div>
            </div>
        </div>

        <div class="row mt-3">
            <div class="col">
                <button type="submit" class="btn btn-primary" @click="salvarVaga()">Cadastrar</button>
            </div>
        </div>

    </div>
</template>
<script>
    export default {
        name: 'PublicarVaga',
        data: () => ({
            titulo: '',
            descricao: '',
            salario: '',
            modalidade: '',
            tipo: '',
        }),
        methods: {
            limparCamposFormulario(){
                this.titulo     = '';
                this.descricao  = '';
                this.salario    = '';
                this.modalidade = '';
                this.tipo       = '';
                this.emitter.emit('alerta', {msg: 'A vaga foi cadastrada com sucesso', class: 'alert-success'});
            },
            salvarVaga(){
                let vagas = JSON.parse(localStorage.getItem('vagas')) ?? []; //Obtendo a string e convertendo em um objeto
                let data_atual = new Date(Date.now()); //Obtendo a quantidade de segundos atual com Date.now(), instanciando o objeto date que converterar para o dia atual com a quantidade de segundos.
                // data_atual.toISOString(); //Formato de data do banco de dados UTC.
                // toLocaleDateString('pt-BR'); toLocaleTimeString('pt-BR'); //Respectivamente retorna a somente a data, retorna somente o horário.
                // data_atual.toLocaleString('pt-BR'); //Converte para o timezone pt-BR

                if (!this.titulo || !this.descricao || !this.salario || !this.tipo) {
                    this.emitter.emit('alerta', {msg: 'Todos os campos devem ser preenchidos', class: 'alert-danger'});
                    return;
                }

                vagas.push({
                    titulo: this.titulo,
                    descricao: this.descricao,
                    salario: this.salario,
                    modalidade: this.modalidade,
                    tipo: this.tipo,
                    publicacao: data_atual,
                });

                //LocalStorage é usado por aplicações front-end para armazenar informações.
                localStorage.setItem('vagas', JSON.stringify(vagas)); //O primeiro valor é a chave que estamos armazenando, O segundo valor é uma string.
                //Não podemos passar um objeto diretamente, utilizamos o JSON.stringify(); Para converter o objeto em uma string JSON.

                this.limparCamposFormulario();
            }
        }
    }
</script>
<style lang="css">
    textarea{
        resize: none;
    }
</style>