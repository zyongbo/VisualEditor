/*!
 * VisualEditor UserInterface SurfaceWindowSet class.
 *
 * @copyright 2011-2013 VisualEditor Team and others; see AUTHORS.txt
 * @license The MIT License (MIT); see LICENSE.txt
 */

/**
 * UserInterface surface window set.
 *
 * @class
 * @extends OO.ui.WindowSet
 *
 * @constructor
 * @param {ve.ui.Surface} surface
 * @param {OO.Factory} factory Window factory
 * @param {Object} [config] Configuration options
 */
ve.ui.SurfaceWindowSet = function VeUiSurfaceWindowSet( surface, factory, config ) {
	// Parent constructor
	OO.ui.WindowSet.call( this, factory, config );

	// Properties
	this.surface = surface;

	// Initialization
	this.$element.addClass( 've-ui-surfaceWindowSet' );
};

/* Inheritance */

OO.inheritClass( ve.ui.SurfaceWindowSet, OO.ui.WindowSet );

/* Methods */

/**
 * @inheritdoc
 */
ve.ui.SurfaceWindowSet.prototype.onWindowClose = function ( win, accept ) {
	this.surface.getView().focus();
	OO.ui.WindowSet.prototype.onWindowClose.call( this, win, accept );
};

/**
 * Get the surface.
 *
 * @method
 * @returns {ve.ui.Surface} Surface
 */
ve.ui.SurfaceWindowSet.prototype.getSurface = function () {
	return this.surface;
};
