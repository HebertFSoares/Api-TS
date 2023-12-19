const dbuser = process.env.DB_USER
const dbpass = process.env.DB_PASS

export default {
  port: 3000,
  dbUri: `mongodb+srv://${dbuser}:${dbpass}@cluster0.q2qp2io.mongodb.net/?retryWrites=true&w=majority`,
  env: "development"
};