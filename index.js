const { Configuration, OpenAIApi } = require("openai");
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();


const configuration = new Configuration({
  organization: "org-2tjpSXMjpHzwOmuknaORiEZM",
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

const app = express();
app.use(cors({ origin: 'http://localhost:3000' }));
app.use(bodyParser.json());
app.use(express.json());
const port = 4000;

app.post('/', async (req, res) => {
  const { message } = req.body;
  console.log(message, "message");
  const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: `${message}`,
    max_tokens: 100,
    temperature: 0.5,
  });
  console.log()
  res.json({
    message: response.data.choices[0].text,
  })
});

app.get('/models', async (req, res) => {
  const response = await openai.listEngines();
  console.log(response.data.data);
  res.json({
    models: response.data.data
  })
});

app.listen(port, () => {
  console.log(`Server is running on ${port}`)
});
