goog.provide("prism.theme.builder.model.Language");

/**
 * @constructor
 * @author Sandra https://github.com/SandraShklyaeva
 * 
 * @param {String}
 *            name
 */
prism.theme.builder.model.Language = function(name) {
	this.name = name;
};
/**
 * @private
 * @type {Array<String>}
 */
prism.theme.builder.model.Language.prototype.qualifiedTokenNames = null;
/**
 * @param {String}
 *            tokenQualifiedName
 */
prism.theme.builder.model.Language.prototype.addToken = function(
		tokenQualifiedName) {
	if (this.qualifiedTokenNames == null) {
		this.qualifiedTokenNames = [];
	}
	this.qualifiedTokenNames.push(tokenQualifiedName);
};
/**
 * @return {String} the name
 */
prism.theme.builder.model.Language.prototype.getName = function() {
	return this.name;
};
/**
 * @return {Array} the tokens
 */
prism.theme.builder.model.Language.prototype.getTokens = function() {
	return this.qualifiedTokenNames;
};

/**
 * @return {Boolean}
 */
prism.theme.builder.model.Language.prototype.isGlobal = function() {
	return false;
};
