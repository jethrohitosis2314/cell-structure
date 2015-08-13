/**
 *
 * @author Srujan Kumar Bojjam <srujan@swecha.net>
 */
define( function( require ) {
  'use strict';

  // modules
  var Cell = require( 'CELL_STRUCTURE/cell-structure/model/Cell' );
  var MagnifiedImage = require( 'CELL_STRUCTURE/cell-structure/model/MagnifiedImage' );
  var Microscope = require( 'CELL_STRUCTURE/cell-structure/model/Microscope' );
  var Beaker = require( 'CELL_STRUCTURE/cell-structure/model/Beaker' );
  var Filler = require( 'CELL_STRUCTURE/cell-structure/model/Filler' );
  var ExperimentArea = require( 'CELL_STRUCTURE/cell-structure/model/ExperimentArea' );
  var Liquid = require( 'CELL_STRUCTURE/cell-structure/model/Liquid' );
  var Overlay = require( 'CELL_STRUCTURE/cell-structure/model/Overlay' );
  var Dimension2 = require( 'DOT/Dimension2' );
  var Vector2 = require( 'DOT/Vector2' );
  var inherit = require( 'PHET_CORE/inherit' );
  var Kit = require( 'CELL_STRUCTURE/cell-structure/model/Kit');

  /**
   * @constructor
   */
  function CellStructureModel() {
    var animalCellIcon = require( 'image!CELL_STRUCTURE/meat.svg' );
    var plantCellIcon = require( 'image!CELL_STRUCTURE/leaf.svg' );
    var animalCellImage = require( 'image!CELL_STRUCTURE/animal-cell-big.png' );
    var plantCellImage = require( 'image!CELL_STRUCTURE/plant-cell-big.png' );
    var roughEndoplasmicReticulumImage = require( 'image!CELL_STRUCTURE/rough-endoplasmic-reticulum.jpg' );
    var golgiApparatusImage = require( 'image!CELL_STRUCTURE/golgi-apparatus.png' );

    //models
    var animalCellMagnifiedImage = new MagnifiedImage(animalCellImage, [new Overlay(10, new Vector2(0,0), undefined, this)]);
    var roughERMagnifiedImage = new MagnifiedImage(roughEndoplasmicReticulumImage, []);
    var golgiApparatusMagnifiedImage = new MagnifiedImage(golgiApparatusImage, []);

    var plantCellMagnifiedImage = new MagnifiedImage(plantCellImage, [new Overlay(20, new Vector2(522,490), roughERMagnifiedImage, "Rough ER Magnified Image is rough. <br/>Second line"), new Overlay(30, new Vector2(449,478), golgiApparatusMagnifiedImage)]);

    var animalCell = new Cell( { location: new Vector2( 810, 120 ), size: new Dimension2( 80, 80 ), image: animalCellIcon, magnifiedImage: animalCellMagnifiedImage, parentModel: this } );
    var plantCell = new Cell( { location: new Vector2( 910, 120 ), size: new Dimension2( 80, 80 ), image: plantCellIcon, magnifiedImage: plantCellMagnifiedImage, parentModel: this } );
    this.objectKit = new Kit({ location: new Vector2(810,120), size: new Dimension2(200,100), children: [ animalCell, plantCell]});

    var microscope = new Microscope();
    var beaker = new Beaker();
    var filler = new Filler();
    this.apparatusKit = new Kit({ location: new Vector2(810,230), size: new Dimension2(200,200), children: [ microscope, beaker, filler ]});
    var ammoniaBottle = new Liquid({ location: new Vector2(810,10), text: "Ammonia", color: '#ffff00'});
    var iodineBottle = new Liquid({ location: new Vector2(910,10), text: "Iodine", color: "brown"});
    this.liquidKit = new Kit({ location: new Vector2(810,10), size: new Dimension2(200,100), children: [ ammoniaBottle, iodineBottle ]});
    this.experimentArea = new ExperimentArea({location: new Vector2(0,0), size: new Dimension2(800,768)});
  }

  return inherit( Object, CellStructureModel, {

    //TODO Called by the animation loop. Optional, so if your model has no animation, please delete this.
    step: function( dt ) {
      //TODO Handle model animation here.
    },
    // Resets all model elements
    reset: function() {
      //this.microscope.reset();
      //this.animalCell.reset();
      // this.plantCell.reset();
      //this.magnifierView.reset();
    }
  } );
} );
