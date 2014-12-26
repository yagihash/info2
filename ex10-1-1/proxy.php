<?php
  header("Content-Type: application/json; charset=UTF-8");
  header("X-Content-Type-Options: nosniff");
  header("Access-Control-Allow-Origin: *");
  echo file_get_contents("https://web.sfc.keio.ac.jp/~kei/info2-lib/zipcodeOfKanagawa.json");
