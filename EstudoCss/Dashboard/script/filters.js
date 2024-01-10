//serch bar & datapickers code

const checkboxes = document.querySelectorAll('.checkbox');
const meuBotao = document.getElementById('btn');


function contarItensVisiveis() {
  var itensVisiveis = $("input.checkbox:visible").length;
  return itensVisiveis;
}

$(document).ready(function () {
  function formatarData(data) {
    var partes = data.split('-');
    return partes[2] + '/' + partes[1] + '/' + partes[0];
  }

  // Filtrar tabela com base nas datas
  $("#startDate, #endDate").on("change", function () {
    var startDate = $("#startDate").val();
    var endDate = $("#endDate").val();

    if (startDate !== "" && endDate !== "") {
      var startDateFormatted = formatarData(startDate);
      var endDateFormatted = formatarData(endDate);

      if (startDate >= endDate) {
        var meuModal = document.getElementById('exampleModal3');

        // Cria uma instância do Modal do Bootstrap
        var modal = new bootstrap.Modal(meuModal);

        // Mostra o modal
        modal.show();
        $("#startDate").val("");
        $("#endDate").val("");
        return;
      }

      $("td.date-column").each(function () {
        var currentDate = $(this).text();
        if (currentDate >= startDateFormatted && currentDate <= endDateFormatted) {
          $(this).parent().show();
        } else {
          $(this).parent().hide();
        }
      });

      var quantidadeItens = contarItensVisiveis();
      document.getElementById('itenstotais').innerHTML = 'Itens Encotrados: ' + quantidadeItens
    }
  });

  // Limpar filtros
  $("#clearFilters").on("click", function () {
    $("#startDate").val("");
    $("#endDate").val("");
    $(".checkbox").prop("checked", false);
    const algumSelecionado = [...checkboxes].some(checkbox => checkbox.checked);
    meuBotao.disabled = !algumSelecionado;
    $("td.date-column").parent().show();
    var quantidadeItens = contarItensVisiveis();
    document.getElementById('itenstotais').innerHTML = 'Itens Encotrados: ' + quantidadeItens
  });
});
//Serach Bar
$(document).ready(function () {
  $("#myInput").on("keyup", function () {
    var value = $(this).val().toLowerCase();
    $("#myTable tr").filter(function () {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
      var quantidadeItens = contarItensVisiveis();
      document.getElementById('itenstotais').innerHTML = 'Itens Encotrados: ' + quantidadeItens
    });
  });
});

var quantidadeItens = contarItensVisiveis();
document.getElementById('itenstotais').innerHTML = 'Itens Encotrados: ' + quantidadeItens




//buttons


checkboxes.forEach(checkbox => {
  checkbox.addEventListener('change', function () {
    const algumSelecionado = [...checkboxes].some(checkbox => checkbox.checked);
    meuBotao.disabled = !algumSelecionado;
  });
});



$(document).ready(function () {
  function ajustarClasses() {
    if ($(window).width() <= 1006) {
      $('.sidenav').addClass('offcanvas');
      $('.sidenav').addClass('offcanvas-start');
    } else {
      $('.sidenav').removeClass('offcanvas-start');
      $('.sidenav').removeClass('offcanvas');
    }
  }

  // Chama a função quando a página é carregada mema coisa do dom content load
  ajustarClasses();

  // Chama a função quando a janela é redimensionada
  $(window).on('resize', ajustarClasses);
});

