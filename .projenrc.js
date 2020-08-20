const { JsiiProject, Semver } = require('projen');

const cdktf = Semver.caret('0.0.15')
const constructs = Semver.caret('3.0.0')
const awsProvider = Semver.caret('0.0.16')
const nullProvider = Semver.caret('0.0.3')
const hashdirectory = Semver.caret('0.1.0')
const project = new JsiiProject({
  name: "cdktf-aws-ecr-asset",
  authorName: "Sebastian Korfmann",
  authorEmail: "sebastian@korfmann.net",
  repository: "https://github.com/skorfmann/cdktf-aws-ecr-asset.git",
  dependencies: {
    hashdirectory
  },
  devDependencies: {
    cdktf,
    constructs,
    '@cdktf/provider-aws': awsProvider,
    '@cdktf/provider-null': nullProvider
  },
  peerDependencies: {
    cdktf,
    constructs,
    '@cdktf/provider-aws': awsProvider,
    '@cdktf/provider-null': nullProvider
  },
  bundledDependencies: ['hashdirectory']
});

project.synth();
