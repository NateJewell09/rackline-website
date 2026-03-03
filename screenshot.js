const puppeteer = require('puppeteer');
const path = require('path');

const pages = [
  { url: 'http://localhost:3000',                        name: '01-homepage' },
  { url: 'http://localhost:3000/blog',                   name: '02-blog' },
  { url: 'http://localhost:3000/blog/how-to-score-a-deer', name: '03-blog-article' },
  { url: 'http://localhost:3000/deer-score-calculator',  name: '04-calculator' },
  { url: 'http://localhost:3000/for-outfitters',         name: '05-outfitters' },
  { url: 'http://localhost:3000/download',               name: '06-download' },
];

(async () => {
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage'],
  });

  for (const page of pages) {
    const p = await browser.newPage();
    await p.setViewport({ width: 1440, height: 900, deviceScaleFactor: 1.5 });
    await p.goto(page.url, { waitUntil: 'networkidle0', timeout: 30000 });
    await p.waitForTimeout(500);
    const outPath = path.join('/sessions/clever-eager-dijkstra/mnt/outputs', `${page.name}.png`);
    await p.screenshot({ path: outPath, fullPage: false });
    console.log(`✓ ${page.name}`);
    await p.close();
  }

  await browser.close();
  console.log('All screenshots done.');
})();
