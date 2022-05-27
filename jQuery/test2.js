$(document).ready(function() {
  // $(function(){product(); 
  //   function product(){
  //     var options;
  //     for(var no = 9876543210 ; no <=9876543212; no++){
  //       options += "<option value="+no+">"+ no +"</option>";
  //     }
  //     $("#a1").html(options);
  //   }
  // });
  $('#delete').attr('disabled',true);
  var counter = 1;
  $("#add").on("click", function (event) {
    event.preventDefault();

    var newRow = $("<tr>");
    var cols = '';
    // Table columns
    cols += '<td><select class="a12" id="a1" name="a01"><option value="9876543210" id="s1">9876543210</option><option value="9876543211" id="s2">9876543211</option><option value="9876543212" id="s3">9876543212</option></td>'
    cols += '<td><input type="button" class="delete" id="delete" name="delete" value="X"></td>';

    // Insert the columns inside a row
    newRow.append(cols);

    // Insert the row inside a table
    $("#table1").append(newRow);
    counter++;
    if(counter>2){
      $('#add').attr('disabled','disabled');
    }
    else{
      $('#add').removeAttr('disabled');
    }
    if(counter==1){
      $('#delete').attr('disabled','disabled');
    }
    else{
      $('#delete').removeAttr('disabled');
    }
  });

  // Remove row when delete btn is clicked
  $("#table1").on("click", "#delete", function (event) {
    $(this).closest("tr").remove();
    counter -= 1;
    if(counter>2){
      $('#add').attr('disabled','disabled');
    }
    else{
      $('#add').removeAttr('disabled');
    }
    if(counter==1){
      $('#delete').attr('disabled','disabled');
    }
    else{
      $('#delete').removeAttr('disabled');
    }
  });

// $(".a12").select2()
// $('.a12').change(function(){
//  let value = $(this).val()
// $(this).siblings('.a12').children('option').attr('disabled', false)

// $('.a12').each(function(){
//      $(this).siblings('.a12').children('option[value='+ $(this).val()+']').attr('disabled', 'disabled') 
//  })
// })

// var $selects = $('select');
// $selects.on('change', function() {
//     var $select = $(this), 
//     $options = $selects.not($select).find('option'),
//     selectedText = $select.children('option:selected').text();

//     var $optionsToDisable = $options.filter(function() {
//         return $(this).text() == selectedText;
//     });

//     $optionsToDisable.prop('disabled', true);
// });

// //to apply initial selection
// $selects.eq(0).trigger('change');

$("select").change(function()
 {
        $("select option").attr("disabled",""); //enable everything
     //collect the values from selected;
     var  arr = $.map
     (
        $("select option:selected"), function(n)
         {
              return n.value;
          }
      );
    

    $("select option").filter(function()
    {
             
        return $.inArray($(this).val(),arr)>-1;
     }).attr("disabled","disabled");   

});
});