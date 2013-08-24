<?php
require_once('library/initialize.php');


define('KEY', '2937');
//fsockopen('localhost', 9090);
$client = stream_socket_client("tcp://localhost:9090");
$send = "New Comment!";
fwrite($client, $send);
stream_socket_sendto($client, KEY."something happend" );


/*
class PropertyTest {
	private $data = array();
	public function __set($name, $value) {
		echo "Setting '$name' to '$value'\n";
		$this->data[$name] = $value;
	}
	public function __get($name) {
		echo "Getting '$name'\n";
		if (array_key_exists($name, $this->data)) {
			return $this->data[$name];
		}
	}
}
echo "<pre>\n";
$obj = new PropertyTest;
$obj->a = 1;
echo $obj->a . "\n\n";
echo "</pre>\n";
*/
/*
$string = ''
.	"GET /websocket_server.php HTTP/1.1\r\n"
.	"Upgrade: websocket\r\n"
.	"Connection: Upgrade\r\n"
.	"Host: localhost:9090\r\n"
.	"Origin: http://localhost:1337\r\n"
.	"Pragma: no-cache\r\n"
.	"Cache-Control: no-cache\r\n"
.	"Sec-WebSocket-Key: zCehVlfhrMrTfashWAmXtA==\r\n"
.	"Sec-WebSocket-Version: 13\r\n"
.	"Sec-WebSocket-Extensions: permessage-deflate; client_max_window_bits, x-webkit-deflate-frame\r\n"
.	"User-Agent: Mozilla/5.0 (Windows NT 5.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/33.0.1750.117 Safari/537.36\r\n";

$arr = [];
$lines = preg_split("/\r\n/", $string);
foreach($lines as $line) {
	$line = rtrim($line);
	if ( preg_match('/\A(\S+): (.*)\z/', $line, $matches) ) {
		$arr[$matches[1]] = $matches[2];
	}
}
echo '<pre>';
print_r($string);
echo '</pre>';

echo '<pre>';
print_r($lines);
echo '</pre>';

echo '<pre>';
print_r($arr);
echo '</pre>';
*/
?>
