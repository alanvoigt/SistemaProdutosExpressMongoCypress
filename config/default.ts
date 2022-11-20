export default {
 port: 3000,
 dbUri: `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.pfpdxmc.mongodb.net/?retryWrites=true&w=majority`,
 env: "development",
};
