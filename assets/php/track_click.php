<?php
// track_click.php

// Récupérer les données JSON envoyées par le client
$data = json_decode(file_get_contents('php://input'), true);

// Vérifier que les données sont bien reçues
if ($data) {
    // Définir le chemin du fichier où les données seront stockées
    $filePath = 'assets/php/clicks_data.txt';

    // Récupérer les données à insérer
    $siteName = $data['siteName'];
    $buttonName = $data['buttonName'];
    $pageUrl = $data['pageUrl'];
    $timestamp = $data['timestamp'];

    // Préparer les données au format JSON
    $entry = [
        'siteName' => $siteName,
        'buttonName' => $buttonName,
        'pageUrl' => $pageUrl,
        'timestamp' => $timestamp,
    ];

    // Lire le fichier actuel s'il existe déjà (sinon créer un tableau vide)
    if (file_exists($filePath)) {
        $existingData = json_decode(file_get_contents($filePath), true);
    } else {
        $existingData = [];
    }

    // Ajouter les nouvelles données au tableau
    $existingData[] = $entry;

    // Sauvegarder les données dans le fichier texte au format JSON
    file_put_contents($filePath, json_encode($existingData, JSON_PRETTY_PRINT));

    // Répondre au client pour indiquer que le suivi est bien effectué
    echo json_encode(['status' => 'success']);
} else {
    // Si les données ne sont pas valides
    echo json_encode(['status' => 'error', 'message' => 'Invalid data']);
}
?>
