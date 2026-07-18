import puppeteer from 'puppeteer';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const sites = [
  { url: 'https://p-413.vercel.app/', name: 'p413.png' },
  { url: 'https://sync-org.vercel.app/', name: 'lexissync.png' },
  { url: 'https://www.c2squaredmedia.com/', name: 'c2squared.png' },
  { url: 'https://stock-smart.stocksmart.workers.dev/', name: 'stockwise.png' },
  { url: 'https://throw-pillow.vercel.app/', name: 'velvetmeridian.png' },
];

const outputDir = path.join(__dirname, 'src', 'assets');

(async () => {
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  for (const site of sites) {
    const page = await browser.newPage();
    await page.setViewport({ width: 1440, height: 900 });

    try {
      console.log(`Navigating to ${site.url}...`);
      await page.goto(site.url, { waitUntil: 'networkidle2', timeout: 30000 });
      await new Promise(r => setTimeout(r, 2000));

      const outputPath = path.join(outputDir, site.name);
      await page.screenshot({ path: outputPath, clip: { x: 0, y: 0, width: 1440, height: 900 } });
      console.log(`✅ Saved: ${site.name}`);
    } catch (err) {
      console.error(`❌ Failed ${site.name}: ${err.message}`);
    }

    await page.close();
  }

  await browser.close();
  console.log('\nAll screenshots captured!');
})();
