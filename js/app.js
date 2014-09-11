require(['jquery'], function($){
  $(function() {
    $.get('https://rws.maxcdn.com/jqueryrawlogs/v3/reporting/logs.json').done(function(d){
      console.log(d);
    });
  });
});
