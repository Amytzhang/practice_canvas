module.exports = {
    root: true,
    env: {
        'node': true
    },
    'extends': [
        'eslint:recommended',
        'plugin:vue/essential'
    ],
    'parserOptions': {
        'ecmaVersion': 2018,
        'sourceType': "module"
    },
    'plugins': [
        'vue'
    ],
    'rules': {
        'no-console':process.env.NODE_ENV === 'production'?'error':'off',
        'no-trailing-spaces': 1,//一行结束后面不要有空格,
        'no-irregular-whitespace': 'off',
        // .vue 文件是否检查 v-for key
        'vue/require-v-for-key': 'off'
    },
  parserOptions: {
    parser: 'babel-eslint'
  }
};