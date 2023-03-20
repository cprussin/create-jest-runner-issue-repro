const nextJest = require("next/jest");

const createJestConfig = nextJest({ dir: "./" });

module.exports = async () => ({
    projects: [
        await createJestConfig({
            displayName: "unit-test"
        })(),
        {
            displayName: "lint",
            runner: "jest-runner-eslint",
            testMatch: ["<rootDir>/pages/**/*.tsx"]
        }
    ]
});
