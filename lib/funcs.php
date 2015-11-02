<?php
function rotas($pagina)
{
    
    switch ($pagina) {
      case 'sobre':
          require 'paginas/sobre.php';
          break;
      case 'galeria':
          require 'paginas/galeria.php';
          break;
      case 'cardapio':
          require 'paginas/cardapio.php';
          break;
       case 'contato':
          require 'paginas/contato.php';
          break;
      default :
          require 'paginas/home.php';
        
    }  
}
?>