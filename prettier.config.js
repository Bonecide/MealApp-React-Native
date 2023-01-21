module.exports = {
    printWidth: 80,// Single line length
    tabWidth: 5,// Indent length
    useTabs: false,// Use Spaces instead of TAB indentation
    semi: true,// Use a semicolon at the end of a sentence
    singleQuote: true,// Use single quotes
    quoteProps: 'as-needed',// Add quotes to the key of the object only when necessary
    jsxSingleQuote: true,// JSX uses single quotes
    trailingComma: 'all',
    bracketSpacing: true,// Add Spaces before and after the object -eg: {foo: bar}
    jsxBracketSameLine: true,// Multi-attribute HTML tag '' folded line placement
    arrowParens: 'always',// Use parentheses around the arguments of the single-argument arrow function -eg: (x) = x
    requirePragma: false,// Format without top comments
    insertPragma: false,// Add annotations at the top of files that have been formatted by Preitter
    proseWrap: 'preserve',// Don't know how to translate
    htmlWhitespaceSensitivity: 'ignore',// Not sensitive to HTML global whitespace
    vueIndentScriptAndStyle: false,// Do not indent script and style tags in vue
    endOfLine: 'lf',// End the line form
    embeddedLanguageFormatting: 'auto',// Format the reference code
  };