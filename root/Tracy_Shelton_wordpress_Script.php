// include custom jQuery
function lasest_version_jquery() {

	wp_deregister_script('jquery');
	wp_enqueue_script('jquery', 'https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js', array(), null, true);

}
add_action('wp_enqueue_scripts', 'lasest_version_jquery');
