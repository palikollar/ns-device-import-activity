const webpackConfig = require("./webpack.config");
const path = require("path");

module.exports = (env) => {
  env = env || {};
  env.appComponents = env.appComponents || [];
  env.appComponents.push(
    path.resolve(__dirname, "src/app/activity.android.ts")
  );

  env.entries = env.entries || {};
  env.entries.application = "./application.android";
  const config = webpackConfig(env);
  return config;
};
