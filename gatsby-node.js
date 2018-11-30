const path = require('path')

//adds locales for i18 locatization
const fs = require("fs-extra");

exports.onPostBuild = () => {
    console.log("Copying locales");
    fs.copySync(
      path.join(__dirname, "/src/locales"),
      path.join(__dirname, "/public/locales")
    );
    fs.copySync(
      path.join(__dirname, "/src/assets/fonts"),
      path.join(__dirname, "/public/static")
    );
  };

exports.modifyWebpackConfig = ({config, stage}) => {
  const timestamp = Date.now()
  switch (stage) {
    case 'build-javascript':
      config.merge({
        output: {
          filename: `[name]-${timestamp}-[chunkhash].js`,
          chunkFilename: `[name]-${timestamp}-[chunkhash].js`
        }
      })

      break
  }

  // config.loader('svg-inline-loader', {
  //   test: /\.svg$/,
  //   loader: 'svg-inline-loader',
  // });

  config.loader('desvg/react', {
    test: /\.svg$/,
    loader: 'desvg/react!svg',
  });

  return config
}