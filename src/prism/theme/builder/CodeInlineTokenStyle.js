goog.provide("prism.theme.builder.CodeInlineTokenStyle");

goog.require("prism.theme.builder.TokenStyle");

/**
 * @constructor
 * @author Sandra https://github.com/SandraShklyaeva
 *
 * @extends {prism.theme.builder.TokenStyle}
 */
prism.theme.builder.CodeInlineTokenStyle = function() {
	prism.theme.builder.TokenStyle.call(this, null, null, null);
}
goog.inherits(prism.theme.builder.CodeInlineTokenStyle, prism.theme.builder.TokenStyle);