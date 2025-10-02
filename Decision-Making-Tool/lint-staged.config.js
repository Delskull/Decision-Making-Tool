export default {
  '*.{js,ts}': ['eslint --fix', 'prettier --write'],
  '*.{css,scss,sass,less}': ['stylelint --fix', 'prettier --write'],
  '*.{json,md,html}': ['prettier --write'],
};
