import fs from "fs";

export function readPage(path) {
  return fs.readFileSync(path).toString();
}

// Nullish coalesce operator ??
// const value = true;
// console.log(value ?? "some other value"); // only returns other value if null / undefined true or false
// console.log(value || "some other value"); // returns other value if false. This type coerces... takes falsy values and coerces them

const footer = fs.readFileSync("./public/components/footer/footer.html").toString();

export function renderPage(page, config = {}) {
  const header = fs.readFileSync("./public/components/header/header.html").toString();

  return (
    header
      .replace("$TAB_TITLE$", config.tabTitle ?? "DogInder")
      .replace("$CSS_LINKS$", config.CSSLinks ?? "") +
    page +
    footer
  );
}
