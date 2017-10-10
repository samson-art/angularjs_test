require('snapsvg')

var s = Snap("#svg");
Snap.load("./src/app/partial/img/map-optimised.svg", onSVGLoaded ) ;

function onSVGLoaded( data ){
    s.append( data );
}

console.log(s);
