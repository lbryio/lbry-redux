import babel from 'rollup-plugin-babel';
import flow from 'rollup-plugin-flow';
import includePaths from 'rollup-plugin-includepaths';
import copy from 'rollup-plugin-copy';

let includePathOptions = {
  include: {},
  paths: ['src'],
  external: [],
  extensions: ['.js'],
};

export default {
  input: 'src/index.js',
  output: {
    file: 'dist/bundle.es.js',
    format: 'cjs',
  },
  plugins: [
    flow({ all: true }),
    includePaths(includePathOptions),
    babel({
      babelrc: false,
      presets: ['stage-2'],
    }),
    copy({ targets: ['flow-typed'] }),
  ],
};
