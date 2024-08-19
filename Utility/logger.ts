import Bugsnag from "@bugsnag/expo";

// log error to console and bugsnag
const log = (error: string) => {
  Bugsnag.notify(error);
  console.error(error);
};

// start bugsnag
const start = () => {
  Bugsnag.start();
};

export default { log, start };
