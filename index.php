<?php
$get = isset($_GET['pagina'])? $_GET['pagina']:'';
require 'lib/funcs.php';
require 'templates/header.php';
require 'templates/nav.php';
?>

<div class="container">
    
 <?php
rotas($get);
?>   
    
</div>



<?php
require 'templates/rodape.php';
?>
