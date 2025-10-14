export type ElementParams = {
  tag: keyof HTMLElementTagNameMap;
  classNames?: string[];
  textContent?: string;
  callback?: Function;
};
