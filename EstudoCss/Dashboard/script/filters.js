//serch bar code
$(document).ready(function(){
    $("#myInput").on("keyup", function() {
      var value = $(this).val().toLowerCase();
      $("#myTable tr").filter(function() {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
      });
    });
  });

//buttons

    const checkboxes = document.querySelectorAll('.checkbox');
    const meuBotao = document.getElementById('btn');

    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            const algumSelecionado = [...checkboxes].some(checkbox => checkbox.checked);
            meuBotao.disabled = !algumSelecionado;
        });
    });