import { readFileSync, readdirSync } from "node:fs";

const dir = "src/content";
const files = readdirSync(dir).filter((f) => f.endsWith(".ts") && f !== "types.ts");
const GEO = /[\u10D0-\u10FF]/;
const CYR = /[\u0400-\u04FF]/;
const LATIN = /[A-Za-z]/;
const STR = '"((?:[^"\\\\]|\\\\.)*)"';
const TRIPLE = new RegExp(`L\\(\\s*${STR}\\s*,\\s*${STR}\\s*,\\s*${STR}\\s*\\)`, "g");
const KEYED = new RegExp(`\\b(ka|en|ru): ${STR}`, "g");
let issues = 0;

const say = (msg) => {
  issues += 1;
  console.log("  ! " + msg);
};

const check = (file, lang, text) => {
  if (lang === "ka" && CYR.test(text)) say(`${file}: ka text has Cyrillic — ${text.slice(0, 60)}`);
  if (lang === "ru" && GEO.test(text)) say(`${file}: ru text has Georgian — ${text.slice(0, 60)}`);
  if (lang === "en" && (GEO.test(text) || CYR.test(text)))
    say(`${file}: en text has non-Latin script — ${text.slice(0, 60)}`);
};

for (const file of files) {
  const src = readFileSync(`${dir}/${file}`, "utf8");
  let count = 0;
  for (const m of src.matchAll(TRIPLE)) {
    count += 1;
    ["ka", "en", "ru"].forEach((lang, i) => check(file, lang, m[i + 1]));
  }
  const keyed = { ka: 0, en: 0, ru: 0 };
  for (const m of src.matchAll(KEYED)) {
    keyed[m[1]] += 1;
    check(file, m[1], m[2]);
  }
  count += keyed.ka;
  if (!(keyed.ka === keyed.en && keyed.en === keyed.ru))
    say(`${file}: keyed language parity — ${JSON.stringify(keyed)}`);
  for (const m of src.matchAll(new RegExp(STR, "g"))) {
    for (const token of m[1].split(/[\s\u2010-\u2023\u002D]+/)) {
      const bare = token.replace(/[()[\]{}<>.,:;!?"'“”„«»–—\s\d%°]/g, "");
      if (GEO.test(bare) && LATIN.test(bare)) say(`${file}: mixed Georgian/Latin — ${token}`);
      if (GEO.test(bare) && CYR.test(bare)) say(`${file}: mixed Georgian/Cyrillic — ${token}`);
    }
  }
  console.log(`${file}: ${count} trilingual strings checked`);
}

console.log(issues ? `${issues} issue(s)` : "react content clean");
