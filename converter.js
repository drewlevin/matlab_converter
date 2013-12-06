var timeout_pointer = null;

function highlight_keyword(str)
{
  return '<font color=blue>' + str + '</font>';
}

function highlight_string(str)
{
  var out = str.replace(/<.*?>/g , '') // Clear keyword highlight tags from strings
  return '<font color=purple>' + out + '</font>';
}

function highlight_comment(str)
{
  var out = str.replace(/<.*?>/g , '') // Clear keyword and string highlight tags from comments
  return '<font color=green>' + out + '</font>';
}

function convert() 
{
  var str_out = $('#text_in').val();

  // Keywords
  for (var i=keywords.length-1; i>=0; i--) {
    str_out = str_out.replace(new RegExp('\\b'+keywords[i]+'\\b', 'ig'), highlight_keyword);
  }

  // Strings
  var str_out = str_out.replace(/'.*?'/g, highlight_string);

  // Comments
  var str_out = str_out.replace(/%.*?\n/g, highlight_comment);

  // Add border and background
  str_out = '<pre style="border: 1px solid #c8c8c8; padding: 5px; background: #f9f7f3;">\n' + str_out + '\n</pre>\n';

  // Update Output
  $('#text_out').val(str_out);

  // Update Preview
  $('#div_preview').html($('#text_out').val());
}


$(document).ready(function() {  
  $('#text_in').on('input', function() { clearTimeout(timeout_pointer); 
                                    timeout_pointer = setTimeout(function(){convert()}, 500); 
                                  }
                      );
});
