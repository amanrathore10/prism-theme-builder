goog.provide("prism.theme.builder.ui.Event");

goog.require("goog.events.Event");

/**
 * @constructor
 * @author Sandra https://github.com/SandraShklyaeva
 * 
 * @param {String|null}
 *            themeName
 * @param {String|null}
 *            theme
 * @param {prism.theme.builder.ui.EventType}
 *            type
 * @param {Object}
 *            opt_target
 * @extends {goog.events.Event}
 */
prism.theme.builder.ui.Event = function(themeName, theme, type, opt_target) {
	goog.events.Event.call(this, type, opt_target);
	this.themeName = themeName;
	this.theme = theme;
}
goog.inherits(prism.theme.builder.ui.Event, goog.events.Event);

/**
 * @return {String|null} the theme
 */
prism.theme.builder.ui.Event.prototype.getTheme = function() {
	return this.theme;
};

/**
 * @return {String|null} the themeName
 */
prism.theme.builder.ui.Event.prototype.getThemeName = function() {
	return this.themeName;
};

/**
 * @param {String|null}
 *            themeName the themeName to set
 */
prism.theme.builder.ui.Event.prototype.setThemeName = function(themeName) {
	this.themeName = themeName;
};

/**
 * @param {String|null}
 *            theme the theme to set
 */
prism.theme.builder.ui.Event.prototype.setTheme = function(theme) {
	this.theme = theme;
};