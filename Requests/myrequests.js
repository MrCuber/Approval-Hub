$(document).ready(function(){
    var leave_type = '', emp_id='', leave_date = '';
    
    $('#leave-button').click(function(){
      if ($('#leave_type').prop('selectedIndex') == 0 || $('#leave_date').val() == '' || $('input[name="rdo-leave"]').prop('checked') == false){
        $('.type-validator').show();
      }
      else {
        $('.type-validator').hide();
        leave_type = $('#leave_type').val();
        emp_id = $('span[name="emp-id"]').html();
        leave_date = $('#leave_date').val();
        $('#tbl-leaves tbody').append('<tr>' +
                                     '<td>'+ emp_id +'</td>' +
                                     '<td>'+ leave_type +'</td>' +
                                     '<td>'+ leave_date +'</td>' +
                                     '<td>'+ new Date($.now()) +'</td>' +
                                     '<td class="td-buttons"><button name="approve-btn" onclick="approveLeave()">APPROVE</button><button name="disapprove-btn" onclick="disapproveLeave()">DISAPPROVE</button><span id="approved" style="display: none;">LEAVE APPROVED!<span id="disapproved" style="display: none;">LEAVE DISAPPROVED!</span></td>' +
                                     '</tr>');
      }
    });
  });
  
  function deductLeave(span_count){
      var counter = parseInt(document.getElementsByName(span_count)[0].innerHTML);
      document.getElementsByName(span_count)[0].innerHTML = counter-1;
    }
  
  function approveLeave(){
    leave_type = document.getElementById('leave_type').value; //$('#leave_type').val();
    switch(leave_type){
          case 'Sick leave':
            deductLeave('sick-count');
            break;
          case 'Vacation leave':
            deductLeave('vacation-count');
            break;
          case 'Birthday leave':
            deductLeave('birthday-count');
            break;
          case 'Date leave':
            deductLeave('date-count');
            break;
          case 'Mental health leave':
            deductLeave('mental-count');
            break;
          default:
            break;
        }
    document.getElementsByName('approve-btn')[0].style.display = 'none';
    document.getElementsByName('disapprove-btn')[0].style.display = 'none';
    document.getElementById('approved').style.display = 'block';
    document.getElementById('leave-span').style.display = 'block';
    document.getElementById('result').innerHTML = 'APPROVED';
  }
  
  function disapproveLeave(){
    document.getElementsByName('approve-btn')[0].style.display = 'none';
    document.getElementsByName('disapprove-btn')[0].style.display = 'none';
    document.getElementById('disapproved').style.display = 'block';
    document.getElementById('leave-span').style.display = 'block';
    document.getElementById('result').innerHTML = 'REJECTED';
  }
  
  $('#btn-edit').click(function(){
    $('#span-rate').hide();
    $('.input_rate').show();
    $('#btn-save').show();
    $(this).hide();
  });
  
  $('#btn-save').click(function(){
    var new_rate = $('.input_rate').val();
    $('#span-rate').html(new_rate);
    $('.input_rate').hide();
    $(this).hide();
    $('#btn-edit').show();
    $('#span-rate').show();
  });