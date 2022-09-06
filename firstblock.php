<?php

/**
 * Plugin Name:       First block
 * Plugin URI:        https://boomdevs.com
 * Description:       Handle the basics with this plugin.
 * Version:           1.0.0
 * Author:            Rubel Ahmed
 * Author URI:        https: //boomdevs.com
 * License:           GPL v2 or later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       firstblock
 * Domain Path:       /languages
 */


 function register_firstblock_init() {
    register_block_type( __DIR__ );
}

add_action( 'init', 'register_firstblock_init' );