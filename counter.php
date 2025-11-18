<?php
// Simple counter API for Ivory Castle
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST');

$counterFile = 'game_counter.txt';

// Initialize counter file if it doesn't exist
if (!file_exists($counterFile)) {
    file_put_contents($counterFile, '10'); // Start at 10
}

if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    // Return current count
    $count = (int)file_get_contents($counterFile);
    echo json_encode(['count' => $count]);
    
} elseif ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Increment counter
    $count = (int)file_get_contents($counterFile);
    $count++;
    file_put_contents($counterFile, $count);
    echo json_encode(['count' => $count]);
}
?>
