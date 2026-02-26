=== Boostify Blocks ===
Contributors: duongancol
Donate link: https://woostify.com/contact/
Tags: gutenberg, blocks, gutenberg blocks, editor, block
Requires at least: 5.8
Requires PHP: 7.3
Tested up to: 6.9
Stable tag: 1.1.13
License: GPLv2 or later
License URI: http://www.gnu.org/licenses/gpl-2.0.html

Power-up Gutenberg with advanced blocks for faster website creation. Build your WordPress website effortlessly using powerful building blocks!

== Description ==

<strong>BOOSTIFY BLOCKS PLUGIN TO EXTEND THE WORDPRESS BLOCK EDITOR WITH PAGE EDITING FEATURES, 40+ FREE CUSTOMIZABLE BLOCKS</strong>

<strong>SOME POWERFUL FEATURES OF BOOSTIFY BLOCKS</strong>

<ol>
	<li><strong>Container</strong> - Create stunning layouts using the Container block, powered by flexbox technology.</li>
	<li><strong>Animations</strong> - Add a touch of life and interactivity to your website with Boostify Blocks wide range of animations. Choose from fade, slide, zoom, flip, zoom in, zoom out, and more. Free users have access to a selection of animations that can be easily applied to any block.</li>
</ol>

<strong>INCLUDES ESSENTIAL BLOCKS</strong>

<ol>
	<li><strong>Core Blocks</strong> - Boostify Blocks offers essential blocks that every website and landing page needs. You'll find blocks like Container, Heading, Image, Icon, Buttons, Info Box, Call To Action, and Countdown, which are crucial for crafting your pages.</li>
	<li><strong>Creative Blocks</strong> - Unleash your creativity with Boostify Blocks creative blocks. These include Countdown, Marketing Button, and Icon List. Let your imagination run wild and make your designs truly stand out.</li>
	<li><strong>Content Blocks</strong> - Showcase your content beautifully with Boostify Blocks content blocks. From Sliders, Image blocks, Google Maps, Tabs, and more.</li>
	<li><strong>Post Blocks</strong> - Enhance your blog posts with Boostify Blocks Post Blocks. Add a Post Carousel and Post Grid to make your blog visually appealing and user-friendly.</li>
	<li><strong>Social Blocks</strong> - Boostify Blocks provides blocks that help you showcase your social status. You'll find blocks Team and Testimonials, which allow you to highlight social proof and engage with your audience effectively.</li>
	<li><strong>Form Blocks</strong> - Create interactive forms easily with Boostify Blocks Form Blocks. Whether it's a contact form, newsletter signup, or suggestion form, you can collect valuable leads. You can even enable reCAPTCHA to ensure form security. </li>
</ol>


<strong>SUPPORT THAT CARES!</strong>

We understand the need for a quality product backed by dedicated support that cares. We are here to listen to all your queries and help you make the most out of our plugin.

<a href="https://woostify.com/contact/" target="_blank" rel="">Need help? We are just a click away!</a>


== External services ==

= Google reCAPTCHA =

This plugin can optionally connect to the Google reCAPTCHA API, it's needed to protect form submissions from spam in the included form block.

It sends the visitor's IP address, browser/device info, and referrer URL to https://www.google.com/recaptcha/api.js every time a page containing a form block is loaded (If reCAPTCHA is explicitly enabled and configured by the site owner in the plugin settings). This data is handled solely by Google and not stored by this plugin.
This service is provided by "Google LLC": [Terms of Service](https://policies.google.com/terms), [Privacy Policy](https://policies.google.com/privacy).

= Woostify Templates =

This plugin connects to the Woostify GraphQL API to obtain pre-built block templates, it's needed to show a library of ready-to-use layouts in the included Gutenberg editor toolbar.

It sends a GraphQL query to https://woostifyblocks.com/graphql every time the templates modal is loaded in the WordPress admin to retrieve available blocks. No personal user data or site content is sent. This feature can be disabled via the "Enable Templates Button" option in the plugin settings.
This service is provided by "Woostify": [Terms of Service](https://woostify.com/terms/), [Privacy Policy](https://woostify.com/privacy-policy/).

= Google Fonts =

This plugin connects to the Google Fonts API, it's needed to show and use customized web typography inside the included blocks.

It sends requests to https://fonts.googleapis.com to download font stylesheets every time a page containing a block with custom typography is loaded. (If no custom Google Fonts are selected, no requests are made).
This service is provided by "Google LLC": [Terms of Service](https://policies.google.com/terms), [Privacy Policy](https://policies.google.com/privacy).

== Frequently Asked Questions ==

= Who should use Boostify Blocks? =

Boostify Blocks is a comprehensive collection of unique and creative blocks designed to help you build stunning websites. It is an essential toolkit for anyone looking to enhance the Gutenberg editor.


== Changelog ==

= 1.1.13 =
* Updated comments, slug, and prefix for compliance

= 1.1.12 =
* Fixed form submission handling

= 1.1.11 =
* Fixed display issue on Settings page

= 1.1.10 =
* Fixed block enable/disable toggle on dashboard

= 1.1.9 =
* Fixed dashboard bug

= 1.1.8 =
* Fixed form block error

= 1.1.7 =
* Fixed error on form submission

= 1.1.6 =
* Code cleanup and optimization

= 1.1.5 =
* Fixed product pagination issue

= 1.1.4 =
* Fixed prefix naming conflicts

= 1.1.3 =
* Fixed all debug mode errors and warnings

= 1.1.2 =
* Passed plugin check validation
* Fixed fatal error on activation

= 1.1.1 =
* Fixed file path references
* Fixed generic function and class names to use unique prefix
* Improved data sanitization, escaping, and validation
* Added nonce verification and user permission checks
* Documented use of third-party services
* Fixed remote file loading issues

= 1.0.0 =
* First publish

== License ==

GNU GPL v2.0.
