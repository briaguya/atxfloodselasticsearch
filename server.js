var elasticsearch = require('elasticsearch');
var client = new elasticsearch.Client({
  host: 'search-elasticpoc-zgii736e6gma6qie4b7smyk7hi.us-east-1.es.amazonaws.com',
  log: 'trace'
});

client.search({
  q: 'blarg'
}).then(function (body) {
  var hits = body.hits.hits;
}, function (error) {
  console.trace(error.message);
});