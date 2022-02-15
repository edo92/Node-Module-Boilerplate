const config = {
    clearMocks: true,
    moduleFileExtensions: ['js', 'ts'],
    roots: ['../test'],
    testEnvironment: 'node',
    transform: {
        '^.+\\.tsx?$': 'ts-jest',
    },
}

export default config
