$(document).ready(function() {
  var photo, name, precio;
  var container = $('.div-result');
  /* Evento al escribir en buscar */
  $('#search').keyup(function() {
    container.text('');
    var $seek = $(this).val().toLowerCase();
    if ($seek.length > 0) {
      $('.gallery').hide();
      /* Revisar coincidencias con lo escrito */
      $.each(data, function(index, value) {
        /* con tipo de restaurante */
        if ((data[index].type).toLowerCase().indexOf($seek) !== -1) {
          addContent(data[index].photo, data[index].name, data[index].address);
        }
      });
    } else
      $('.gallery').show();
    $('.div-result img').mouseover(function() {
      
    });
    /* Click en la imagen, mostrar modal*/
    $('.div-result img').click(function() {
      $('.img-modal').attr('src', $(this).attr('src'));
      $('.modal h3').text($('.div-result img').data('name'));
      $('.modal h4').text($('.div-result img').data('address'));
    });
  });
  /* Cierre de modal */
  $('.close').click(function() {
    $('#search').val('');
    container.text('');
    $('.gallery').show();
  })
  /* Galeria de imagenes Carrusel */
  var route = '../assets/images/';
  var arrImg = 
  [
    {url: 'tomasita-main.jpg'},
    {url: 'menfis-main.jpg'},
    {url: 'carlos-main.jpg'}
  ];
  var index = 0;
  var $imgGallery = $('#imgGallery');
  var $slider = $('.slider');
  var $divControl = $('.controles');

  // Primera imagen 
  $imgGallery.attr('src', route + arrImg[0].url);
  // Boton por cada imagen
  for (var i in arrImg) {
    $divControl.append('<button class="control"/>');
  }
  var $buttonControl = $('button.control');
  var $arrButton = $.makeArray($buttonControl);
  
  $.each($arrButton, function(i, val) {
    $buttonControl.eq(i).on('click', function() {
      $imgGallery.attr('src', route + arrImg[i].url);
    });
  });	
  $slider.on('click', '#next', function(event) {
    event.preventDefault();
    index++;
    index = (index >= arrImg.length) ? 0 : index;
    $imgGallery.attr('src', route + arrImg[index].url);
  });
  $slider.on('click', '#back', function(event) {
    event.preventDefault();
    index++;
    index = (index >= arrImg.length) ? 0 : index;
    $imgGallery.attr('src', route + arrImg[index].url);
  });
  /* Función de agregar a contenedor resultado*/
  function addContent(photo, name, address) {
    var structure = '<div class="flex-center">'+
                      '<figure>'+
                        '<img class="img-responsive" src="../assets/images/'+photo+'"'+ 
                        'data-toggle="modal" data-target="#myModal" data-name="'+name+'" data-address="'+address+'"> '+
                      '</figure>'+
                      '<div class="content">'+
                        '<h4>'+name+'</h4>'+
                      /*'<p>'+data[index].precio+'</p>'+ */
                      '</div>'+
                    '</div>';
    container.append(structure);    
  }  
});