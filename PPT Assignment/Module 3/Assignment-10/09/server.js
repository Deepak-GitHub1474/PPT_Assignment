const server = require("./app");

const PORT = 3000;
const LOCAL_HOST = "localhost";

server.listen(PORT, () => {
    console.log(`Server is running on http://${LOCAL_HOST}:${PORT}`);
});