module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    testPathIgnorePatterns: ['/node_modules/', '/cache/'],
    roots: ['<rootDir>/src'],
    setupFilesAfterEnv: ['<rootDir>/jest/setupTests.js'],
    snapshotSerializers: ['enzyme-to-json/serializer'],
    transformIgnorePatterns: [
        'node_modules/(?!(react-grid-layout|react-resizable|react-syntax-highlighter))/',
    ],
    moduleNameMapper: {
        '@components(.*)': '<rootDir>/src/components$1',
        '@redux(.*)': '<rootDir>/src/redux$1',
        '@layouts(.*)': '<rootDir>/src/layouts$1',
        '@pages(.*)': '<rootDir>/src/pages$1',
        '@styles(.*)': '<rootDir>/src/styles$1',
        '@constants(.*)': '<rootDir>/src/constants$1',
        '@assets(.*)': '<rootDir>/src/assets$1',
        '@hocs(.*)': '<rootDir>/src/hocs$1',
        '@providers(.*)': '<rootDir>/src/providers$1',
        '@lang(.*)': '<rootDir>/src/lang$1',
        '@hooks(.*)': '<rootDir>/src/hooks$1',
    },
};