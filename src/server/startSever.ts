import chalk from "chalk";
import app from "./app.js";

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
