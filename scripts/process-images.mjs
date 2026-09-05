import sharp from 'sharp';
import { readdir, mkdir } from 'fs/promises';
import { existsSync } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const INPUT_DIR = path.join(__dirname, '../src/images');
const OUTPUT_DIR = path.join(__dirname, '../src/images/processed');

// Images that already have a watermark (skip adding watermark)
const ALREADY_WATERMARKED = [
  'product_image_1.png',  // has "BHURA INDUSTRIES / Bhura Industries" text watermark
  'product_image_2.png',  // has circular logo watermark
  'product_image_4.jpeg', // has Bhura Industries logo watermark
  'product_image_5.jpeg',
];

// Mapping: input filename -> output name + product info
const IMAGE_MAP = [
  // Existing images
  { input: 'product_image_1.png',        output: 'rusk_tray_4pocket',         watermark: false },
  { input: 'product_image_2.png',        output: 'bun_tray',                  watermark: false },
  { input: 'product_image_4.jpeg',       output: 'bread_mould',               watermark: false },
  { input: 'product_image_5.jpeg',       output: 'flat_baking_tray',          watermark: false },
  { input: 'product_image_6.jpeg',       output: 'donut_tray',                watermark: true  },
  { input: 'BTY544.png',                 output: 'baguette_tray',             watermark: true  },
  { input: 'burgerring.jpeg',            output: 'burger_ring',               watermark: true  },
  { input: 'cream roll cones.JPG.jpeg',  output: 'cream_roll_cones',          watermark: true  },
  { input: 'perforated tary.JPG.jpeg',   output: 'perforated_tray',           watermark: true  },
  { input: '400 gm breads pocket.jpg.jpeg', output: 'bread_mould_400g',       watermark: true  },
  { input: 'DSC_6699 copy.jpg.jpeg',     output: 'rolling_belan',             watermark: true  },
  // New WhatsApp images
  { input: 'WhatsApp Image 2026-09-04 at 10.44.12 AM.jpeg', output: 'bread_mould_4cavity',  watermark: true },
  { input: 'WhatsApp Image 2026-09-04 at 10.44.18 AM.jpeg', output: 'muffin_tray_nonstick', watermark: false }, // already has "BHURA INDUSTRIES" embossed
  { input: 'WhatsApp Image 2026-09-04 at 10.44.20 AM 2.jpeg', output: 'donut_tray_raw',      watermark: true },
  { input: 'WhatsApp Image 2026-09-04 at 10.44.20 AM.jpeg',   output: 'muffin_tray_large',  watermark: true },
  { input: 'WhatsApp Image 2026-09-04 at 10.44.22 AM.jpeg',   output: 'bread_tin_lid',      watermark: true },
  { input: 'WhatsApp Image 2026-09-04 at 12.49.10 PM.jpeg',   output: 'toast_mould_4slot',  watermark: true },
];

// Watermark SVG - subtle diagonal text
function makeWatermarkSVG(width, height) {
  const fontSize = Math.max(20, Math.round(width * 0.04));
  const opacity = 0.22;
  const color = 'rgba(180,60,40,1)';
  const lines = [];
  const stepX = Math.round(width * 0.35);
  const stepY = Math.round(height * 0.18);

  for (let y = -stepY; y < height + stepY; y += stepY) {
    for (let x = -stepX; x < width + stepX; x += stepX) {
      lines.push(`
        <text
          x="${x}"
          y="${y}"
          font-family="Arial, sans-serif"
          font-size="${fontSize}"
          font-weight="bold"
          fill="${color}"
          opacity="${opacity}"
          transform="rotate(-30, ${x}, ${y})"
          letter-spacing="2"
        >Bhura Industries</text>
      `);
    }
  }

  return Buffer.from(`
    <svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}">
      ${lines.join('')}
    </svg>
  `);
}

async function processImage({ input, output, watermark }) {
  const inputPath = path.join(INPUT_DIR, input);
  if (!existsSync(inputPath)) {
    console.warn(`⚠️  Skipping (not found): ${input}`);
    return null;
  }

  const outputPath = path.join(OUTPUT_DIR, `${output}.webp`);

  try {
    let pipeline = sharp(inputPath).rotate(); // auto-rotate from EXIF

    // Resize: max 1000px on longest side, keep aspect ratio
    pipeline = pipeline.resize(1000, 1000, { fit: 'inside', withoutEnlargement: true });

    if (watermark) {
      // Get actual output dimensions after resize
      const resized = await pipeline.clone().toBuffer({ resolveWithObject: true });
      const { width: rw, height: rh } = resized.info;
      const wm = makeWatermarkSVG(rw, rh);
      pipeline = sharp(resized.data).composite([{ input: wm, blend: 'over' }]);
    }

    await pipeline.webp({ quality: 78, effort: 4 }).toFile(outputPath);

    const { size } = await import('fs').then(m => m.promises.stat(outputPath));
    console.log(`✅ ${output}.webp — ${(size / 1024).toFixed(0)} KB ${watermark ? '(+ watermark)' : ''}`);
    return `${output}.webp`;
  } catch (err) {
    console.error(`❌ Failed: ${input} → ${err.message}`);
    return null;
  }
}

async function main() {
  await mkdir(OUTPUT_DIR, { recursive: true });
  console.log('🔄 Processing images...\n');

  const results = [];
  for (const item of IMAGE_MAP) {
    const result = await processImage(item);
    if (result) results.push({ ...item, file: result });
  }

  console.log(`\n✨ Done! ${results.length}/${IMAGE_MAP.length} images processed.`);
  console.log(`📁 Output: ${OUTPUT_DIR}`);
}

main().catch(console.error);
