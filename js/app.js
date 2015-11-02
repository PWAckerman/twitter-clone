Parse.initialize("bBUh43xDIZWLF6a8TgrYwCwRu11pIvIUJnoxu3lt", "w9XPjTNpZluYKY0hsiqPiE6OTfhAM3mBMA5PRKLw");
$(document).ready(function(){
  var datas = new Parse.Query('Teet');
  var teet = datas.get('kCUYSnMeOL', {
  success: function(data) {
    return data;
  },
  error: function(object, error) {
    // The object was not retrieved successfully.
    // error is a Parse.Error with an error code and message.
    console.log('wtf man');
  }
});
console.log(teet);
  var chars = 140,
      user = $('#theusername').text() + ' ',
      useravatar = $('#useravatar').attr('src'),
      username = '@' + $('#theusername').text().split('').reverse().join(''),
      template = $('#hiddenTemplate').html();
  console.log(template);
  if(localStorage.tweets){
  var tweets = JSON.parse(localStorage.tweets);
} else {
  tweets = [];
}
  for(i = 0; i < tweets.length; i++){
    $('#stream').prepend("<div id='x" + i + "'>" + template + "</div>");
    $('#stream').find('#x' + i).find('.avatar').prop('src', tweets[i].useravatar);
    $('#stream').find('#x' + i).find('.fullname').html(tweets[i].user);
    $('#stream').find('#x' + i).find('.username').html(tweets[i].username);
    $('#stream').find('#x' + i).find('.tweet-text').html(tweets[i].text);
    $('#stream').find('#x' + i).find('.time').html(tweets[i].date);
  }

  $('#tweet-content').on('focusin mouseenter', function(){
    $('.tweet-compose').css('height','5em');
    $('#tweet-controls').css('visibility','visible');
  })
  $('#tweet-content').on('focusout mouseleave', function(){
    $('.tweet-compose').css('height','2.5em');
    $('#tweet-controls').css('visibility','hidden');
  })
  $('.tweet-compose').on('keyup', function(){
    var content = $(this).val().length;
      var readout = chars - content;
      $('#char-count').text(readout);
      if(readout <= 0){
        $('#tweet-submit').prop("disabled",true);
        $('#char-count').css('color','red');
      } else {
        $('#tweet-submit').prop("disabled",false);
        $('#char-count').css('color','lightgreen');
      }
  });
  $('#tweet-submit').on('click', function(){
    console.log('clicked');
    var tweettext = $('.tweet-compose').val();
    var date = new Date();
    var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
    date = (date.getHours() > 12? date.getHours() - 12 : date.getHours()) + ":" + date.getMinutes() + " " + (date.getHours() > 12 ? 'PM' : 'AM') + ' - ' + date.getDate() + ' ' + months[(date.getMonth())] + ' ' + date.getFullYear();

    $('#stream').prepend("<div id='x" + i + "'>" + template + "</div>");
    $('#stream').find('#x' + i).find('.avatar').prop('src', useravatar);
    $('#stream').find('#x' + i).find('.fullname').html(user);
    $('#stream').find('#x' + i).find('.username').html(username);
    $('#stream').find('#x' + i).find('.tweet-text').html(tweettext);
    $('#stream').find('#x' + i).find('.time').html(date);
    $('.tweet-compose').val('');
    $('#char-count').text(chars);
    var tweetObj = {
      user: user,
      useravatar: useravatar,
      username: username,
      text: tweettext,
      date: date
    }
    tweets.push(tweetObj);
    console.log(tweets);
    localStorage.tweets = JSON.stringify(tweets);
    console.log(JSON.parse(localStorage.tweets));
  });

  $('body').on('mouseover', '.tweet', function(){
    $(this).find('.tweet-actions').slideDown(2000).css('display','block');
  });
  $('body').on('mouseleave', '.tweet', function(){
    $(this).find('.tweet-actions').slideUp(2000).css('display','none');
  });
  });
