import app from "./app.js";
import chalk from "chalk";

const startServer = (port: number): void => {
  app.listen(port, () => {
    /* eslint-disable */
    console.log(
      chalk.bold.green(" *** Server listening on: => ") +
        chalk.bold.underline.white(port),
      /* eslint-enable */
    );
  });
};

export default startServer;
