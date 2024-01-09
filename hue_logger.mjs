import chalk from "chalk";

class HueLogger {
  static log(message, color = "white", style = "reset") {
    const coloredMessage = chalk[color][style](message);
    console.log(coloredMessage);
  }

  static info(message) {
    HueLogger.log(message, "blue");
  }

  static success(message) {
    HueLogger.log(message, "green");
  }

  static warn(message) {
    HueLogger.log(message, "yellow");
  }

  static error(message) {
    HueLogger.log(message, "red", "bold");
  }
}

export default HueLogger;
