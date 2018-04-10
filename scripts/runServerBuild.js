const spawn = require('react-dev-utils/crossSpawn');

const result = spawn.sync(
  'node',
  [require.resolve('./buildServer')],
  { stdio: 'inherit' }
);
if (result.signal) {
  if (result.signal === 'SIGKILL' || result.signal === 'SIGTERM') {
    console.log('The build failed because the process exited too early.');
  }
  process.exit(1);
}
process.exit(result.status);
