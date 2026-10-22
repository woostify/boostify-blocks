<?php
/**
 * Frontend CSS for Accordion Block.
 *
 * Mirrors src/block-accordion/GlobalCss.tsx so every style rendered by the
 * emotion <Global> component in the editor is also present in the
 * generated per-post CSS files (asset generation).
 *
 * @package Boostify_Blocks
 */

/**
 * @var mixed[] $attr Block attributes.
 * @var string $unique_id Block unique ID.
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

$css = array(
	'desktop' => array(),
	'tablet'  => array(),
	'mobile'  => array(),
);

$wrap_sel       = '.' . $unique_id . '[data-uniqueid="' . $unique_id . '"]';
$inner_sel      = $wrap_sel . ' .wcb-accordion__inner';
$item_wrap      = $wrap_sel . ' .wcb-accordion-item__wrap';
$item_trigger   = $wrap_sel . ' .wcb-accordion-item__trigger';
$item_title     = $wrap_sel . ' .wcb-accordion-item__title';
$item_panel     = $wrap_sel . ' .wcb-accordion-item__panel';
$item_content   = $wrap_sel . ' .wcb-accordion-item__content';
$item_icon      = $wrap_sel . ' .wcb-accordion-item__icon';
$item_separator = $wrap_sel . ' .wcb-accordion-item__separator';
$item_title_wrap = $wrap_sel . ' .wcb-accordion-item__title-wrap';
$item_title_icon = $wrap_sel . ' .wcb-accordion-item__title-icon';

// =====================================================================
// 1. WRAP (padding & margin)
// =====================================================================
$sdm = $attr['style_dimension'] ?? array();
if ( ! empty( $sdm['margin'] ) ) {
	WCB_Block_Helper::add_dimension_css( $css, $wrap_sel, 'margin', $sdm['margin'] );
}
if ( ! empty( $sdm['padding'] ) ) {
	WCB_Block_Helper::add_dimension_css( $css, $wrap_sel, 'padding', $sdm['padding'] );
}

// =====================================================================
// 2. INNER (.wcb-accordion__inner)
// =====================================================================
$sc = $attr['style_container'] ?? array();
$gg = $attr['general_general'] ?? array();

if ( ! empty( $sc['rowGap'] ) ) {
	WCB_Block_Helper::add_responsive_css( $css, $inner_sel, 'row-gap', $sc['rowGap'] );
}
if ( ! empty( $sc['colunmGap'] ) ) {
	WCB_Block_Helper::add_responsive_css( $css, $inner_sel, 'column-gap', $sc['colunmGap'] );
}
if ( ! empty( $gg['textAlignment'] ) ) {
	WCB_Block_Helper::add_responsive_css( $css, $inner_sel, 'text-align', $gg['textAlignment'] );
}

// Columns responsive layout (CSS Grid)
$cols  = $gg['columns'] ?? array();
$d_col = (int) ( is_array( $cols ) ? ( $cols['Desktop'] ?? 1 ) : ( $cols ?: 1 ) );
$t_col = (int) ( is_array( $cols ) ? ( $cols['Tablet'] ?? $d_col ) : $d_col );
$m_col = (int) ( is_array( $cols ) ? ( $cols['Mobile'] ?? 1 ) : 1 );

$css['desktop'][ $inner_sel ]['align-items'] = 'start';
if ( $d_col > 1 ) {
	$css['desktop'][ $inner_sel ]['grid-template-columns'] = 'repeat(' . $d_col . ', minmax(0, 1fr))';
	$css['desktop'][ $item_wrap ]['height'] = 'fit-content';
}
if ( $t_col !== $d_col ) {
	$css['tablet'][ $inner_sel ]['grid-template-columns']  = 'repeat(' . $t_col . ', minmax(0, 1fr))';
	if ( $t_col > 1 ) {
		$css['tablet'][ $item_wrap ]['height'] = 'fit-content';
	}
}
if ( $m_col !== $t_col ) {
	$css['mobile'][ $inner_sel ]['grid-template-columns']  = 'repeat(' . $m_col . ', minmax(0, 1fr))';
	if ( $m_col > 1 ) {
		$css['mobile'][ $item_wrap ]['height'] = 'fit-content';
	}
}

// =====================================================================
// 3. ACCORDION ITEM WRAP (.wcb-accordion-item__wrap)
// =====================================================================
if ( ! empty( $sc['background'] ) ) {
	$bg      = $sc['background'];
	$bg_type = $bg['bgType'] ?? 'color';
	if ( 'color' === $bg_type && ! empty( $bg['color'] ) ) {
		WCB_Block_Helper::add_responsive_css( $css, $item_wrap, 'background-color', $bg['color'] );
	} elseif ( 'gradient' === $bg_type && ! empty( $bg['gradient'] ) ) {
		WCB_Block_Helper::add_responsive_css( $css, $item_wrap, 'background-image', $bg['gradient'] );
	}
}

$sq = $attr['style_question'] ?? array();
$border = ! empty( $sq['border'] ) ? $sq['border'] : ( $sc['border'] ?? array() );

if ( ! empty( $border ) ) {
	WCB_Block_Helper::add_border_css( $css, $item_wrap, $border, true, true, true );
	WCB_Block_Helper::add_border_css( $css, $item_separator, $border, true, true, true );
}

// =====================================================================
// 4. HEADER / TRIGGER (.wcb-accordion-item__trigger)
// =====================================================================

if ( ! empty( $sq['typography'] ) ) {
	WCB_Block_Helper::add_typography_css( $css, $item_trigger, $sq['typography'] );
}
if ( ! empty( $sq['padding'] ) ) {
	WCB_Block_Helper::add_dimension_css( $css, $item_trigger, 'padding', $sq['padding'] );
}

$si = $attr['style_icon'] ?? array();
if ( ! empty( $si['colGap'] ) ) {
	$capped_gap = $si['colGap'];
	if ( is_array( $capped_gap ) ) {
		foreach ( array( 'Desktop', 'desktop', 'Tablet', 'tablet', 'Mobile', 'mobile' ) as $dev ) {
			if ( isset( $capped_gap[ $dev ] ) ) {
				$val = (float) $capped_gap[ $dev ];
				if ( $val > 80 ) {
					$unit = preg_replace( '/^[0-9.]+/', '', (string) $capped_gap[ $dev ] ) ?: 'px';
					$capped_gap[ $dev ] = ( 'px' === $unit || empty( $unit ) ) ? '80px' : $capped_gap[ $dev ];
				}
			}
		}
	} elseif ( (float) $capped_gap > 80 ) {
		$unit = preg_replace( '/^[0-9.]+/', '', (string) $capped_gap ) ?: 'px';
		$capped_gap = ( 'px' === $unit || empty( $unit ) ) ? '80px' : $capped_gap;
	}
	WCB_Block_Helper::add_responsive_css( $css, $item_trigger, 'gap', $capped_gap );
}

if ( ! empty( $sq['color'] ) ) {
	WCB_Block_Helper::add_responsive_css( $css, $item_trigger, 'color', $sq['color'] );
}
if ( ! empty( $sq['backgroundColor'] ) ) {
	WCB_Block_Helper::add_responsive_css( $css, $item_trigger, 'background-color', $sq['backgroundColor'] );
}
if ( ! empty( $sq['colorHover'] ) ) {
	WCB_Block_Helper::add_responsive_css( $css, $item_trigger . ':hover', 'color', $sq['colorHover'] );
}
if ( ! empty( $sq['backgroundColorHover'] ) ) {
	WCB_Block_Helper::add_responsive_css( $css, $item_trigger . ':hover', 'background-color', $sq['backgroundColorHover'] );
}

$active_color = ( ! empty( $sq['colorActive'] ) && '#111827' !== $sq['colorActive'] ) ? $sq['colorActive'] : '#ffffff';
$active_bg    = ( ! empty( $sq['backgroundColorActive'] ) && '#f3f4f6' !== $sq['backgroundColorActive'] ) ? $sq['backgroundColorActive'] : '#4a5568';

if ( ! empty( $active_color ) ) {
	WCB_Block_Helper::add_responsive_css( $css, $item_wrap . '.is-open .wcb-accordion-item__trigger', 'color', $active_color );
}
if ( ! empty( $active_bg ) ) {
	WCB_Block_Helper::add_responsive_css( $css, $item_wrap . '.is-open .wcb-accordion-item__trigger', 'background-color', $active_bg );
}

// =====================================================================
// 5. ICON (.wcb-accordion-item__icon)
// =====================================================================
if ( ! empty( $si['size'] ) ) {
	$item_icon_font = $item_icon . ', ' . $item_icon . ':before';
	$item_icon_box  = $item_icon . ', ' . $item_icon . ' svg';
	WCB_Block_Helper::add_responsive_css( $css, $item_icon_font, 'font-size', $si['size'], 'px' );
	WCB_Block_Helper::add_responsive_css( $css, $item_icon_box, 'height', $si['size'], 'px' );
	WCB_Block_Helper::add_responsive_css( $css, $item_icon_box, 'width', $si['size'], 'px' );
}
if ( ! empty( $si['color'] ) ) {
	WCB_Block_Helper::add_responsive_css( $css, $item_icon, 'color', $si['color'] );
}
if ( ! empty( $si['colorHover'] ) ) {
	WCB_Block_Helper::add_responsive_css( $css, $item_trigger . ':hover .wcb-accordion-item__icon', 'color', $si['colorHover'] );
}
$icon_active_color = ! empty( $si['activeColor'] ) ? $si['activeColor'] : $active_color;
WCB_Block_Helper::add_responsive_css( $css, $item_wrap . '.is-open .wcb-accordion-item__icon', 'color', $icon_active_color );

// =====================================================================
// 6. CONTENT (.wcb-accordion-item__content)
// =====================================================================
$sa = $attr['style_answer'] ?? array();
if ( ! empty( $sa['typography'] ) ) {
	WCB_Block_Helper::add_typography_css( $css, $item_content, $sa['typography'] );

	// Headings carry their own typography (editor/theme h1-h6 rules), so inheriting is not
	// enough. Specificity (0,2,0) beats the global h1-h6 rules but stays below the Heading
	// block's own selectors (0,3,0).
	$item_content_headings = '.' . $unique_id . ' .wcb-accordion-item__content :where(h1, h2, h3, h4, h5, h6)';
	foreach ( array( 'desktop', 'tablet', 'mobile' ) as $device ) {
		$rules = WCB_Block_Helper::get_typography_css( $sa['typography'], null, $device );
		foreach ( $rules as $prop => $value ) {
			$css[ $device ][ $item_content_headings ][ $prop ] = $value;
		}
	}
}
if ( ! empty( $sa['padding'] ) ) {
	WCB_Block_Helper::add_dimension_css( $css, $item_content, 'padding', $sa['padding'] );
}
if ( ! empty( $sa['color'] ) ) {
	WCB_Block_Helper::add_responsive_css( $css, $item_content, 'color', $sa['color'] );
	// Headings carry their own colour (editor/theme h1-h6 rule), so inheriting is not enough.
	// Specificity (0,2,0) beats the global h1-h6 rule but stays below the Heading block's
	// own colour selector (0,3,0), so a colour set on the Heading block still wins.
	WCB_Block_Helper::add_responsive_css( $css, '.' . $unique_id . ' .wcb-accordion-item__content :where(h1, h2, h3, h4, h5, h6)', 'color', $sa['color'] );
}
if ( ! empty( $sa['backgroundColor'] ) ) {
	// Panel keeps the colour for the open/close animation; content sits on top of it
	// and has its own default background, so it must be set there too.
	WCB_Block_Helper::add_responsive_css( $css, $item_panel, 'background-color', $sa['backgroundColor'] );
	WCB_Block_Helper::add_responsive_css( $css, $item_content, 'background-color', $sa['backgroundColor'] );
}

// =====================================================================
// 7. ADVANCE (responsive condition + motion effect + z-index)
// =====================================================================
WCB_Block_Helper::add_advance_css( $css, $wrap_sel, $attr );

return WCB_Block_Helper::generate_all_css( $css, '' );
