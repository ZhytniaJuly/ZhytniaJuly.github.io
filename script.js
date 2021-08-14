document.addEventListener('DOMContentLoaded', function() {

    // при клике на #btn
    $('#btn').click(function() {
      // $('#modal') – модальное окно, которое нужно открыть
      $('#modal').modal('show');
    });
  
  });

  $(document).ready(function(){
    $(".btn").click(function(){
        $("#toggleSample2").collapse('toggle');
    });
});
