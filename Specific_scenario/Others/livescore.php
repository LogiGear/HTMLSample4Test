<?php
    $uri = 'http://api.football-data.org/alpha/soccerseasons/?season=2015';
    $reqPrefs['http']['method'] = 'GET';
    $reqPrefs['http']['header'] = 'X-Auth-Token: 8c5778a3d4f9483197b19e09caf18193';
    $stream_context = stream_context_create($reqPrefs);
    $response = file_get_contents($uri, false, $stream_context);
    $fixtures = json_decode($response);
    var_dump($fixtures);
?>