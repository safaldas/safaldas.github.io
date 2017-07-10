$(function() {
  $.ajaxSetup({
    url: 'https://api.wit.ai/message',
    // headers: {
    //     'Authorization':'Bearer '
    // },
    dataType: 'jsonp',
    method: 'GET'
  })
  $('#target').submit(function(e) {
    e.preventDefault()
    var question = $('#question').val()
    $.ajax({
      data: {
        q: question,
        access_token: 'R56O4YAQ52JGARV5PZQIQLSZKJTEXVMP'
      },
      success: function(res) {
        $('#answer').text('')
        console.log(res.entities)
        if (Object.keys(res.entities).length) {
          for (var obj in res.entities) {
            for (var data of res.entities[obj]) {
              $('#answer').append(data.value)
              $('#answer').append(' ')
            }
          }
        } else {
          $('#answer').text(
            "SOrry I don't remember it, may be he didn't tell me about that. I'm angry"
          )
        }
      },
      error: function(){
        $('#answer').text('Some error happened')        
      }
    })
  })
})
