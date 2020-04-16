<?php 
// Get URI Segments
$uriSegments = explode("/", parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH)); 
// Usage:
// URL = http://www.example.com/codex/foo/bar.
//echo $uriSegments[1]; //returns codex
//echo $uriSegments[2]; //returns foo
//echo $uriSegments[3]; //returns bar

// Get Last URL Segment
$lastUriSegment = array_pop($uriSegments);
// Usage:
// URL = http://www.example.com/codex/foo/bar.
//$lastUriSegment = array_pop($uriSegments);
//echo $lastUriSegment; //returns bar

?>

