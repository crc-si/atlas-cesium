define([
  'atlas/util/Extends',
  'atlas-cesium/model/Polygon',
  'atlas/model/Mesh',
  // Base class
  'atlas/model/Feature'
], function (extend, Polygon, Mesh, FeatureCore) {

  var Feature = function (/*Number*/ id, /*Object*/ args) {
    Feature.base.constructor.call(this, id, args);

    /**
     * The 2d {@link Polygon} footprint of this Feature.
     * @override
     * @type {Polygon}
     */
    this.footprint = null;
    if (args.vertices !== 'undefined') {
      this._footprint = new Polygon(id + 'p', args.vertices, args);
    }

    /**
     * 3D {@link Mesh} of this Feature.
     * @override
     * @type {Mesh}
     */
    this.mesh = null;
    console.debug(args);
    if (args.mesh === 'undefined') {
      this._mesh = new Mesh(id + 'p', args.mesh, args);
    }

  };
  extend(FeatureCore, Feature);

  return Feature;
});
