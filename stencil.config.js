exports.config = {
  namespace: 'madnesscast',
  outputTargets: [
    { type: 'dist' },
    { type: 'www' }
  ]
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
}
