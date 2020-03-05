module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": [
        'plugin:react/recommended',
        "airbnb-typescript/base"
    ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "@typescript-eslint",
        "import"
    ],
    "rules": {
        "import/prefer-default-export": "off",
        "no-underscore-dangle": "off",
        "class-methods-use-this": "off",
        "no-restricted-syntax": "off",
        "react/jsx-uses-react": "off",
        "react/prop-types": "off"
    },
    "settings": {
        "import/parsers": {
            "@typescript-eslint/parser": [".ts", ".tsx"]
        },
        "import/resolver": {
            "typescript": {
                "directory": [
                    "./tsconfig.paths.json",
                    "./tsconfig.json"
                ]
            },
        }
    },
};