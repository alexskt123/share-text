import axios from 'axios';

export default async function email(req, res) {
  const { to, content, title } = req.query;
  let result = 'OK';

  try {
    if (to && content) {
      const response = await axios.post(process.env.MQ_URL, null, {
        params: {
          to, content, title
        }
      });
      result = JSON.stringify(response?.data || {});
    }
  } catch (error) {
    result = error.toString();
  }

  res.statusCode = 200;
  res.json({ response: result });
};
