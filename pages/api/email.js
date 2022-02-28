import axios from 'axios'
import Qs from 'qs'

export default async (req, res) => {
  const { to, content } = req.query;

  if (to && content) {
    axios.post(process.env.MQ_URL, null, {
      paramsSerializer: function (params) {
        return Qs.stringify(params, { arrayFormat: 'repeat' })
      },
      params: {
        to, content
      }
    })
  }

  res.statusCode = 200
  res.json({ response: 'OK' })
}
