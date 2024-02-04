1. Instlar prettier con:

npm i -D prettier eslint-plugin-prettier eslint-config-prettier

2. Instlar y configurar eslint con:

npx eslint --init

3. Crear el archivo llamado:

.prettierrc

3. Configuración de Prettier por defecto:

{
"endOfLine": "auto",
"printWidth": 100,
"semi": true,
"singleQuote": true,
"tabwidth": 2,
"trailingComma": "none"
}

4. En `eslintrc.cjs` añadir siempre como último elemento de `extends` lo siguiente:

'plugin:prettier/recommended'

5. Añadir en `eslintrc.cjs` como `rules` lo siguiente:

{
"rules": {
"prettier/prettier": "error"
}
}
