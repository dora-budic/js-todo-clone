// Al click su add appare input
var input = $('.container #list-item');

$('.container .add').click(function () {
  input.addClass('active');
});

// Al invio/enter prendo il testo inserito
input.keyup(function (e) {
  if (e.which == 13) {
    var listItem = input.val();
    input.val('');
    input.removeClass('active');

    // Coppio li di template e inserisco il valore del input
    var template = $('#template li').clone();
    template.children('span.item').text(listItem);

    // Al click sul icona rimuovo li
    template.children('i').click(function () {
      $(this).parent().remove();
    });

    // Al click su edit salvo il contenuto/testo e lo nascondo
    template.children('span.edit').click(function () {
      var content = $(this).siblings('span.item').text();
      $(this).siblings('span.item').hide();

      // Faccio aparire input per cambiare il testo
      $(this).siblings('input').val(content).css('display', 'inline-block');

      // Al invio/enter salvo il nuovo valore di input, nascondo input
      template.children('input').keyup(function (e) {
        if (e.which == 13) {
          var newText = $(this).val();
          $(this).hide();

          // Faccio vedere il nuovo valore/testo come list item
          $(this).siblings('span.item').text(newText).show();
        }
      });
    });

    $('.container #todos').append(template);
  }
});
