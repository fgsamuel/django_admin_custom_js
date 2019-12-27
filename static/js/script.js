$(document).ready(function() {
    //ao finalizar o carregamento, adiciona as duas funcoes.

    //cria uma funcao chamada quando acontece alteracao no campo
    $('#id_cpf').change(function(){
        cnpj = $('#id_cnpj');
        //se o cpf nao estiver vazio, desabilita o cnpj. Se estiver vazio habilita o cnpj
        if ($(this).val() != ''){
            cnpj.val('');
            cnpj.prop('disabled', true);
        } else {
            cnpj.prop('disabled', false);
        }
    });

    //cria uma funcao chamada quando acontece alteracao no campo
    $('#id_cnpj').change(function(){
        cpf = $('#id_cpf');
        //se o cnpj nao estiver vazio, desabilita o cpf. Se estiver vazio habilita o cpf
        if ($(this).val() != ''){
            cpf.val('');
            cpf.prop('disabled', true);
        } else {
            cpf.prop('disabled', false);
        }
    });
})