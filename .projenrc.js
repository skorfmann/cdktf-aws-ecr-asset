const { JsiiProject, Semver } = require('projen');

const cdktfVersion = Semver.caret('0.0.15')
const constructsVersion = Semver.caret('3.0.0')
const awsProviderVersion = Semver.caret('0.0.3')
const nullProviderVersion = Semver.caret('0.0.3')

const project = new JsiiProject({
  name: "cdktf-aws-ecr-asset",
  authorName: "Sebastian Korfmann",
  authorEmail: "sebastian@korfmann.net",
  repository: "https://github.com/skorfmann/cdktf-aws-ecr-asset.git",
  devDependencies: {
    'cdktf': cdktfVersion,
    'constructs': constructsVersion,
    '@cdktf/provider-aws': awsProviderVersion,
    '@cdktf/provider-null': nullProviderVersion
  },
  peerDependencies: {
    'cdktf': cdktfVersion,
    'constructs': constructsVersion,
    '@cdktf/provider-aws': awsProviderVersion,
    '@cdktf/provider-null': nullProviderVersion
  }
});

project.synth();
