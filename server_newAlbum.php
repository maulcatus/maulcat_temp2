<html>
<body>
<?php 
// grab URI params
$url_components = parse_url($_SERVER['REQUEST_URI']);
parse_str($url_components['query'], $params);

// write JSON
$jsonfile = fopen("albums/{$params['albumID']}.json", 'w');

fwrite($jsonfile, json_encode(array( )));
fclose($jsonfile);

// echo important info 2 HTML, exit
echo $params;

?>
</body>
</html>