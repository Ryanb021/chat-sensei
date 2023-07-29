const { Configuration, OpenAIApi } = require("openai");
const express = require('express');
const cors = require('cors');

const configuration = new Configuration({
  organization: "org-2tjpSXMjpHzwOmuknaORiEZM",
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

const app = express();
app.use(express.json());
app.use(cors({ origin: 'http://localhost:3000' }));
// const port = 4000;

app.post('/', async (req, res) => {
  const { message } = req?.body;
  console.log(message);
  // const response = await openai.createCompletion({
  //   model: "text-davinci-003",
  //   prompt: "Say this is a test",
  //   max_tokens: 7,
  //   temperature: 0,
  // });

  // console.log(response.data.choices[0].text)
  res.json({
    // data: response.data
    data: message,
  })
});
app.listen(4000, () => {
  console.log('Server is running on port 4000')
});
