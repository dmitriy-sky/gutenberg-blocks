<?php
/**
 * Number Control.
 *
 * @package lazyblocks
 */

if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

/**
 * LazyBlocks_Control_Number class.
 */
class LazyBlocks_Control_Number extends LazyBlocks_Control {
    /**
     * Constructor
     */
    public function __construct() {
        $this->name       = 'number';
        $this->icon       = '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.632 14.394C7.962 14.394 8.204 14.46 8.358 14.592C8.512 14.724 8.589 14.922 8.589 15.186C8.589 15.7287 8.27 16 7.632 16H3.815C3.177 16 2.858 15.7287 2.858 15.186C2.858 14.922 2.935 14.724 3.089 14.592C3.243 14.46 3.485 14.394 3.815 14.394H4.706V10.423L3.826 10.94C3.70133 11.0133 3.573 11.05 3.441 11.05C3.23567 11.05 3.05967 10.962 2.913 10.786C2.76633 10.6027 2.693 10.401 2.693 10.181C2.693 9.88033 2.82133 9.653 3.078 9.499L4.838 8.476C5.16067 8.29267 5.465 8.201 5.751 8.201C6.04433 8.201 6.279 8.289 6.455 8.465C6.63833 8.641 6.73 8.87933 6.73 9.18V14.394H7.632ZM13.9357 14.394C14.2584 14.394 14.4967 14.46 14.6507 14.592C14.812 14.7167 14.8927 14.9147 14.8927 15.186C14.8927 15.4647 14.812 15.67 14.6507 15.802C14.4967 15.934 14.2584 16 13.9357 16H9.9207C9.6567 16 9.4477 15.923 9.2937 15.769C9.1397 15.6077 9.0627 15.406 9.0627 15.164C9.0627 14.8487 9.18737 14.5627 9.4367 14.306L11.7687 11.875C12.2527 11.369 12.4947 10.9033 12.4947 10.478C12.4947 10.2287 12.4214 10.038 12.2747 9.906C12.1354 9.774 11.9337 9.708 11.6697 9.708C11.457 9.708 11.259 9.741 11.0757 9.807C10.8997 9.86567 10.6944 9.95367 10.4597 10.071L10.2397 10.181C10.2104 10.1957 10.1517 10.2287 10.0637 10.28C9.98304 10.324 9.9097 10.357 9.8437 10.379C9.7777 10.401 9.70804 10.412 9.6347 10.412C9.45137 10.412 9.29737 10.3313 9.1727 10.17C9.04804 10.0013 8.9857 9.80333 8.9857 9.576C8.9857 9.41467 9.0077 9.28267 9.0517 9.18C9.10304 9.07733 9.1947 8.982 9.3267 8.894C9.67137 8.65933 10.0564 8.476 10.4817 8.344C10.9144 8.212 11.3397 8.146 11.7577 8.146C12.3004 8.146 12.777 8.23767 13.1877 8.421C13.5984 8.597 13.9137 8.85367 14.1337 9.191C14.361 9.521 14.4747 9.90233 14.4747 10.335C14.4747 10.7823 14.383 11.193 14.1997 11.567C14.0237 11.9337 13.7194 12.3443 13.2867 12.799L11.7247 14.394H13.9357ZM19.8871 12.007C20.3198 12.1317 20.6571 12.359 20.8991 12.689C21.1485 13.019 21.2731 13.4187 21.2731 13.888C21.2731 14.3353 21.1521 14.724 20.9101 15.054C20.6681 15.384 20.3235 15.6407 19.8761 15.824C19.4361 16 18.9191 16.088 18.3251 16.088C17.8485 16.088 17.3901 16.0257 16.9501 15.901C16.5101 15.769 16.1288 15.582 15.8061 15.34C15.6815 15.2447 15.5935 15.1457 15.5421 15.043C15.4908 14.933 15.4651 14.8047 15.4651 14.658C15.4651 14.4307 15.5275 14.24 15.6521 14.086C15.7768 13.9247 15.9308 13.844 16.1141 13.844C16.2168 13.844 16.3085 13.8623 16.3891 13.899C16.4698 13.9283 16.5798 13.9797 16.7191 14.053C16.7485 14.0677 16.7815 14.086 16.8181 14.108C16.8621 14.1227 16.9098 14.141 16.9611 14.163C17.1958 14.2803 17.4048 14.372 17.5881 14.438C17.7788 14.4967 17.9915 14.526 18.2261 14.526C18.6368 14.526 18.9301 14.46 19.1061 14.328C19.2895 14.196 19.3811 13.976 19.3811 13.668C19.3811 13.382 19.2895 13.1767 19.1061 13.052C18.9228 12.9273 18.6221 12.865 18.2041 12.865H17.5221C17.3021 12.865 17.1298 12.788 17.0051 12.634C16.8805 12.48 16.8181 12.2967 16.8181 12.084C16.8181 11.8713 16.8805 11.688 17.0051 11.534C17.1298 11.38 17.3021 11.303 17.5221 11.303H18.0061C18.4095 11.303 18.7028 11.2443 18.8861 11.127C19.0695 11.0097 19.1611 10.8227 19.1611 10.566C19.1611 10.2947 19.0805 10.0857 18.9191 9.939C18.7578 9.785 18.5341 9.708 18.2481 9.708C18.0428 9.708 17.8485 9.741 17.6651 9.807C17.4891 9.873 17.2911 9.961 17.0711 10.071L16.8401 10.181C16.7008 10.2543 16.5908 10.3093 16.5101 10.346C16.4295 10.3753 16.3378 10.39 16.2351 10.39C16.0518 10.39 15.8978 10.313 15.7731 10.159C15.6485 9.99767 15.5861 9.80333 15.5861 9.576C15.5861 9.422 15.6118 9.29367 15.6631 9.191C15.7145 9.08833 15.8025 8.98933 15.9271 8.894C16.2425 8.65933 16.6128 8.476 17.0381 8.344C17.4708 8.212 17.9071 8.146 18.3471 8.146C18.8898 8.146 19.3665 8.234 19.7771 8.41C20.1951 8.586 20.5141 8.83533 20.7341 9.158C20.9615 9.48067 21.0751 9.85467 21.0751 10.28C21.0751 10.6833 20.9688 11.039 20.7561 11.347C20.5508 11.6477 20.2611 11.8677 19.8871 12.007Z" fill="currentColor"/></svg>';
        $this->type       = 'number';
        $this->label      = __( 'Number', 'lazy-blocks' );
        $this->attributes = array(
            'min'         => '',
            'max'         => '',
            'step'        => '',
            'placeholder' => '',
        );

        parent::__construct();
    }

    /**
     * Register assets action.
     */
    public function register_assets() {
        wp_register_script(
            'lazyblocks-control-number',
            lazyblocks()->plugin_url() . 'controls/number/script.min.js',
            array( 'wp-blocks', 'wp-i18n', 'wp-element', 'wp-components' ),
            '2.2.0',
            true
        );
    }

    /**
     * Get script dependencies.
     *
     * @return array script dependencies.
     */
    public function get_script_depends() {
        return array( 'lazyblocks-control-number' );
    }
}

new LazyBlocks_Control_Number();
