export default {
    preset: 'ts-jest',
    testEnvironment: 'jest-environment-jsdom',
    transform: {
        "^.+\\.tsx?$": "ts-jest" 
    // process `*.tsx` files with `ts-jest`
    },
    moduleNameMapper: {
        '\\.(gif|ttf|eot|svg|png)$': '<rootDir>/src/test/__mocks__/fileMock.js',
        '^@fontsource/(.*)$': '<rootDir>/src/test/__mocks__/fileMock.js',
        "^@atoms/(.*)$": "<rootDir>/src/components/atoms/$1",
        "^@molecules/(.*)$": "<rootDir>/src/components/molecules/$1",
        "^@organism/(.*)$": "<rootDir>/src/components/organism/$1",
        "^@theme/(.*)$": "<rootDir>/src/theme/$1",
        "^@assets/(.*)$": "<rootDir>/src/assets/$1",
        "^@test/(.*)$": "<rootDir>/src/test/$1"
    },

    collectCoverage: true,

    coveragePathIgnorePatterns: [
        "/node_modules/",
        "./src/theme",
        "./src/test",
        "./src/assets",
        "\\.stories\\.tsx$",
    ],

    testPathIgnorePatterns: [
        "/node_modules/",
        "./src/theme",
        "./src/assets",
        "\\.stories\\.tsx$",
    ],

    coverageThreshold: {
        global: {
            statements: 90,
            branches: 90,
            functions: 90,
            lines: 90
        }
    },

}