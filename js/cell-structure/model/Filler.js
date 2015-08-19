define( function( require ) {
  'use strict';

  var inherit = require( 'PHET_CORE/inherit' );
  var PropertySet = require( 'AXON/PropertySet' );
  var Apparatus = require( 'CELL_STRUCTURE/cell-structure/model/Apparatus');
  var Dimension2 = require( 'DOT/Dimension2' );
  var Vector2 = require( 'DOT/Vector2' );

  var fillerImage = require( 'image!CELL_STRUCTURE/filler.svg' );

  function Filler( location, size ) {
    Apparatus.call( this, { location: null, size: new Dimension2( 50, 80 ), visibility: true, liquid: null} );
    this.image = this.kitImage = fillerImage;
    this.onDragEnd = function() {
      CS.model.apparatusKit.removeChild(this);
      CS.addDroppable(this);
      CS.onDrop(this);
    };

    this.onReceiveDrop = function(model) {
      if(model.type !== "liquid") return;
      this.liquidProperty.set(model);
    };
    this.onRemove = function() {
      this.liquidProperty.set(null);
    };
  }

  return inherit( Apparatus, Filler );
} );