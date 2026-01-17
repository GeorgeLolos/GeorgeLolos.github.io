import sharp from 'sharp';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const ASSETS_DIR = path.resolve(__dirname, '../src/assets');

async function optimizeImages() {
    try {
        const files = await fs.readdir(ASSETS_DIR);
        const pngFiles = files.filter(file => file.endsWith('.png'));

        // Check images subdirectory
        const IMAGES_DIR = path.join(ASSETS_DIR, 'images');
        try {
            const imageFiles = await fs.readdir(IMAGES_DIR);
            const subFiles = imageFiles
                .filter(file => file.endsWith('.png'))
                .map(file => path.join('images', file));
            pngFiles.push(...subFiles);
        } catch (err) {
            // images dir might not exist
        }

        console.log(`Found ${pngFiles.length} PNG files to optimize.`);

        for (const file of pngFiles) {
            const inputPath = path.join(ASSETS_DIR, file);
            const outputFilename = file.replace('.png', '.webp');
            const outputPath = path.join(ASSETS_DIR, outputFilename);

            console.log(`Optimizing ${file}...`);

            await sharp(inputPath)
                .resize(800, null, { // Resize to width 800px, auto height
                    withoutEnlargement: true, // Don't scale up if smaller
                })
                .webp({ quality: 80 })
                .toFile(outputPath);

            console.log(`Saved ${outputFilename}`);

            // Get stats
            const originalStats = await fs.stat(inputPath);
            const newStats = await fs.stat(outputPath);
            const savings = ((originalStats.size - newStats.size) / originalStats.size * 100).toFixed(2);

            console.log(`Reduced size by ${savings}% (${(originalStats.size / 1024).toFixed(2)}KB -> ${(newStats.size / 1024).toFixed(2)}KB)`);
        }

        console.log('Image optimization complete!');
    } catch (error) {
        console.error('Error optimizing images:', error);
    }
}

optimizeImages();
