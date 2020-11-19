import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';
import { rollupPluginTreat } from 'rollup-plugin-treat';
import pkg from './package.json';

const extensions = ['.js', '.jsx'];
const peerDeps = Object.keys(pkg.peerDependencies);
const deps = Object.keys(pkg.dependencies);
const externals = [...peerDeps, ...deps];

export default {
  input: ['components/red-index', 'components/green-index', 'components/index'],
  preserveModules: true,
  output: [
    {
      dir: 'lib',
      format: 'cjs',
      exports: 'named',
    },
    {
      dir: 'lib-esm',
      format: 'es',
      exports: 'named',
    },
  ],
  external: id => externals.some(extPackage => id.startsWith(extPackage)),
  plugins: [
    commonjs(),
    resolve({ extensions, modulesOnly: true }),
    babel({
      skipPreflightCheck: true,
      babelHelpers: 'runtime',
      exclude: ['node_modules/**'],
      extensions,
    }),
    rollupPluginTreat({
      outputCSS: 'treat.css',
    }),
  ],
};

