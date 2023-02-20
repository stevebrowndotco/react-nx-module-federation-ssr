const { composePlugins, withNx } = require('@nrwl/webpack');
const { withReact } = require('@nrwl/react');
const { withModuleFederationForSSR } = require('@nrwl/react/module-federation');

const baseConfig = require('./module-federation.config');

const defaultConfig = {
  ...baseConfig,
};

// Nx plugins for webpack to build config object from Nx options and context.
module.exports = composePlugins(
  withNx(),
  withReact(),
  withModuleFederationForSSR(defaultConfig)
);
