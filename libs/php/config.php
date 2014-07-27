<?php

define('DS'            , DIRECTORY_SEPARATOR);
define('SITE_ROOT'     , 'F:' .DS. 'xampp'.DS.'htdocs'.DS);
define('LIB_PHP'       , SITE_ROOT.'libs'.DS.'php'.DS);
define('LIB_JS_HEAD'   , SITE_ROOT.'libs'.DS.'js'.DS.'head'.DS);
define('LIB_JS_BOTTOM' , SITE_ROOT.'libs'.DS.'js'.DS.'bottom'.DS);
define('LIB_CSS'       , SITE_ROOT.'libs'.DS.'css'.DS);
define('PAGES'         , SITE_ROOT.'pages'.DS);
define('LAYOUTS'       , PAGES.'zlayouts'.DS);
define('HEADER'        , LAYOUTS.'header'.DS.'header.php');
define('FOOTER'        , LAYOUTS.'footer'.DS.'footer.php');

define('STYLE_GENERATOR_PATH'        , '../../libs/php/get_style.php?page=');
define('HEAD_SCRIPT_GENERATOR_PATH'  , '../../libs/php/get_script_head.php?page=');
define('BOTTOM_SCRIPT_GENERATOR_PATH', '../../libs/php/get_script_bottom.php?page=');

define('DB_SERVER', 'localhost'          , true);
define('DB_USER'  , 'PC-Fantasy'         , true);
define('DB_PASS'  , 'php1020315106016php', true);
define('DB_NAME'  , 'p'                  , true);

$PAGES_LIST = ['home', 'shop', 'product', 'register'];
?>