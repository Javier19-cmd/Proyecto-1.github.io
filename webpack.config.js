//Configuración del webpack
export default{
  mode: 'development',
  entry: './src/index.jsx',
  output: {
    filename: 'bundle.js',
  },
  performance: {
    hints: false,
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  //Creando configuración para el servidor.
  devServer: {
    static: {
      directory: 'dist',
    },
    compress: true,
    port: 8000
  },

  //Configurando Babel, css y aceptando imágenes.
  module: {
    rules: [{
      test: /\.jsx?$/,
      use: ['babel-loader'],
    },
    {
      test: /\.css$/,
      use: ['style-loader', 'css-loader'],
   },
    {
      type: 'asset',
      test: /\.(png|svg|jpg|jpeg|gif)$/i
    },
    ]
  }
}
