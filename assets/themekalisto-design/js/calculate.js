  var valueKuxniType;
  var valueKuxniLength;
  var valueKuxniFacade;
  var valueKuxniFurniture;
  
  // при отправке формы
  $(document).on('submit', '#free-coast', function() {
    // сохраняем значение селектбокса
    valueKuxniType = $('input[name="kitchen-type"]:checked').val();
    valueKuxniLength = $('input[name="kitchen-length"]:checked').val();
    valueKuxniFacade = $('input[name="kitchen-facade"]:checked').val();
    valueKuxniFurniture = $('input[name="kitchen-furniture"]:checked').val();
  });

  // при получении ответа от сервера
  $(document).on('af_complete', function(event, response) {
	 var form = response.form;
    if (response.success == true ) {
     console.log(valueKuxniType);
     console.log(valueKuxniLength);
     console.log(valueKuxniFacade);
     console.log(valueKuxniFurniture);
      //... здесь прописывайте ваши действия для второй формы
      $('<input>').attr({
         type: 'hidden',
         id: 'kitchen-type',
         name: 'kitchen-type',
         value: valueKuxniType
      }).appendTo('form#free-coast');
      $('<input>').attr({
         type: 'hidden',
         id: 'kitchen-length',
         name: 'kitchen-length',
         value: valueKuxniLength
      }).appendTo('form#free-coast');
	  $('<input>').attr({
         type: 'hidden',
         id: 'kitchen-facade',
         name: 'kitchen-facade',
         value: valueKuxniFacade
      }).appendTo('form#free-coast');
	  $('<input>').attr({
         type: 'hidden',
         id: 'kitchen-furniture',
         name: 'kitchen-furniture',
         value: valueKuxniFurniture
      }).appendTo('form#free-coast');
    }
  });
  
  //повесить обработчик, который будет устанавливать значения скрытых полей на основании выбранных опций:
  $('a[href="#free-coast"]').click(function(){
  $('#kitchenType').val($('input[name="kitchen-type"]:checked').val());
  $('#kitchenLength').val($('input[name="kitchen-length"]:checked').val());
  $('#kitchenFacade').val($('input[name="kitchen-facade"]:checked').val());
  $('#kitchenFurniture').val($('input[name="kitchen-furniture"]:checked').val());
});
