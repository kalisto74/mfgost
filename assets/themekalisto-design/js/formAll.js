$('input[name="fz152"]').change(function(){
  if(this.checked) {
    $(this).closest('form').find('[type="submit"]').prop('disabled',false);
  } else {
    $(this).closest('form').find('[type="submit"]').prop('disabled',true);
  }
});

 $(document).on('af_complete', function(event, response) {
	var form = response.form;
    if (response.success == true ) {
      $('#manufacter').modal('hide');
      //$('#zvonok').modal('hide');
	}
  });