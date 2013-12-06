var timeout_pointer = null;

function highlight_comment(str)
{
  return '<font color=green>' + str + '</font>';
}

function highlight_keyword(str)
{
  return '<font color=blue>' + str + '</font>';
}

function highlight_string(str)
{
  return '<font color=purple>' + str + '</font>';
}

function convert() 
{
  var str_in = $('#text_in').val();

  // Comments
  var str_out = str_in.replace(/%.*?\n/g, highlight_comment);

  // Keywords
  for (var i=keywords.length-1; i>=0; i--) {
    str_out = str_out.replace(new RegExp(keywords[i], 'ig'), highlight_keyword);
  }

  // Strings
  var str_out = str_out.replace(/'.*?'/g, highlight_string);

  str_out = '<pre style="border: 1px solid #c8c8c8; padding: 5px; background: #f9f7f3;">\n' + str_out + '\n</pre>';

  $('#text_out').val(str_out);

  $('#div_preview').html($('#text_out').val());
}


$(document).ready(function() {  
  $('#text_in').on('input', function() { clearTimeout(timeout_pointer); 
                                    timeout_pointer = setTimeout(function(){convert()}, 500); 
                                  }
                      );
});
