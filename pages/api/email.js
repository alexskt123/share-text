import axios from 'axios'

export default async (req, res) => {
  const { to, content } = req.query;
  let result = 'OK';

  try {
    if (to && content) {
      const response = await axios.post(process.env.MQ_URL, null, {
        params: {
          to, content
        }
      });
      result = JSON.stringify(response?.data || {});
    }
  } catch (error) {
    result = error.toString();
  }

  console.log(result);

  res.statusCode = 200
  res.json({ response: result });
}
