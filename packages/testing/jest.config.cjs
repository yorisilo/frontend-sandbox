module.exports = {
  roots: ["./src"],
  transform: {
    "^.+\\.ts$": "ts-jest"
  },
  moduleFileExtensions: ["ts", "js"],
  moduleNameMapper: {
    "^@/(.*)$": "./src/$1"
  },
  testMatch: ["**/*.test.(ts|js)"]
};
