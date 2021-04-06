<?php
/**
 * Plugin Name: Homepage Section Block
 * Plugin URI: https://myhomepagesection.example
 * Description: Homepage sections for Wordpress
 * Version: 1.0
 */

function hmSectionBlock(){
  $buildAssets = include(plugin_dir_path(__FILE__)).'build/index.asset.php';
  /**
   * Editor Script
   */
  wp_register_script(
      'hmsb-editor-script',
      plugins_url('build/index.js',__FILE__),
      $buildAssets['dependencies'],
      $buildAssets['version']
  );

  /**
   * Editor Style
   */
  wp_register_style(
      'hmsb-editor-style',
      plugins_url('build/css/hmsection-block-style.css',__FILE__),'',
      $buildAssets['version']
  );

  /**
   * Register block
   */
  register_block_type('bshelling/hm-section-block',array(
      'editor_script' => 'hmsb-editor-script',
      'editor_style' => 'hmsb-editor-style'
  ));
}

add_action('init','hmSectionBlock');