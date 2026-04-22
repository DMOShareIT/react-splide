const fs = require( 'fs-extra' );

async function copy() {
  await fs.copy( './node_modules/@splidejs/splide/dist/css', './dist/css', { overwrite: true } );
  await fs.copy( './src/css/css.d.ts', './dist/css/css.d.ts', { overwrite: true } );
}

copy().catch( console.error )