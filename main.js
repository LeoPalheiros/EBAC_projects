$(document).ready(function () {
    $('form').hide();

    $('header button').click(function () {
        $('form').slideDown(); 
    });

    $('#botao-cancelar').click(function () {
        $('#nome-nova-tarefa').val(''); 
        $('form').slideUp(); 
    });

    $('form').on('submit', function (e) {
        e.preventDefault();
        const nomeNovaTarefa = $('#nome-nova-tarefa').val().trim(); 

        const tarefasExistentes = $('ul li').map(function () {
            return $(this).text().replace('- ', '').trim();
        }).get();

        if (nomeNovaTarefa && !tarefasExistentes.includes(nomeNovaTarefa)) {
            const novaTarefa = $(`
                <li style="display: none">- ${nomeNovaTarefa}</li>
            `);

            $('ul').append(novaTarefa);
            novaTarefa.fadeIn();

            $('#nome-nova-tarefa').val('');
        } else {
            alert('Tarefa já existe!');
        }
    });

    $('ul').on('click', 'li', function () {
        $(this).css('text-decoration', function (_, value) {
            return value === 'line-through' ? 'none' : 'line-through';
        });
    });
});

