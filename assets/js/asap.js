$(document).ready(function() {
    $('#myCarousel').carousel({
      interval: 10000
  })
});

$('#myModal').modal();

$('#myModal').on('shown.bs.modal', function() {
    $(document).off('focusin.modal');
});

$('.swal').click(function() {
	swal({title:'Test', input: 'text'});
});