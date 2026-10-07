<?php
/**
 * Boostify Blocks Site Visibility Template.
 *
 * Blank canvas template for Coming Soon and Maintenance pages.
 * Follows Spectra architecture.
 *
 * @package Boostify-Blocks
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}
?>
<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<?php if ( ! current_theme_supports( 'title-tag' ) ) : ?>
		<title><?php echo wp_get_document_title(); // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?></title>
	<?php endif; ?>
	<?php wp_head(); ?>
</head>
<body <?php body_class( 'boostify-blocks-visibility-canvas' ); ?>>
	<?php
	wp_body_open();

	if ( have_posts() ) :
		while ( have_posts() ) :
			the_post();
			the_content();
		endwhile;
	else :
		the_content();
	endif;

	wp_footer();
	?>
</body>
</html>
