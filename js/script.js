$(document).ready(function() {
  $('.question').on('click', function() {
    var qaContainer = $(this).parent();
    qaContainer.css({margin: '0.5em 0em'});

    var answer = qaContainer.find('.answer');
    var height = $(this).height() + 'px';

    answer.css({
      minHeight: height
    });

    $(this).hide();
    answer.show().addClass("expand-0-5");
  });
});
