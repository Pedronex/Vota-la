import 'dotenv/config'

export default {
  extra: {
    IP_SERVER: process.env.IP_SERVER || '192.168.1.1',
    PORT: process.env.PORT || '3000'
  },
};