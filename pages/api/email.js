import axios from 'axios';

const sendEmail = async (req, res) => {
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

  res.statusCode = 200;
  res.json({ response: result });
};

export default sendEmail;