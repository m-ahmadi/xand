<?php

defined('DS')        ? null :  define('DS'       , DIRECTORY_SEPARATOR);
defined('SITE_ROOT') ? null :  define('SITE_ROOT', 'F:' .DS. 'xampp'.DS.'htdocs'.DS);
defined('LIBRARY')   ? null :  define('LIBRARY'  , SITE_ROOT.'libs'.DS.'php'.DS);
defined('LAYOUTS')   ? null :  define('LAYOUTS'  , SITE_ROOT.'pages'.DS.'zlayouts'.DS);
defined('PAGES')     ? null :  define('PAGES'    , SITE_ROOT.'pages'.DS);

defined('SCRIPT_GENERATOR_PATH') ? null : define('SCRIPT_GENERATOR_PATH', '../../libs/php/get_js.php?page=');
defined('STYLE_GENERATOR_PATH')  ? null : define('STYLE_GENERATOR_PATH' , '../../libs/php/get_css.php?page=');


defined('DB_SERVER') ? null :  define('DB_SERVER', 'localhost'          , true);
defined('DB_USER')   ? null :  define('DB_USER'  , 'PC-Fantasy'         , true);
defined('DB_PASS')   ? null :  define('DB_PASS'  , 'php1020315106016php', true);
defined('DB_NAME')   ? null :  define('DB_NAME'  , 'p'                  , true);

$PAGES_LIST = ['home', 'shop', 'product', 'register'];
?>