import open from 'open';
import cypressCodeCoverage from '@cypress/code-coverage/middleware/express.js';

import app from './app.js'

import './routes/home.js'
import './routes/form.js'

cypressCodeCoverage(app)

const listener = app.listen(process.env.PORT, async () => {
  const {port} = listener.address();
  console.log(`Your app is listening on port ${port}`)
  if (process.argv.includes('--open')) {
    await open(`http://127.0.0.1:${port}`);
  }
})
