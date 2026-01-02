import { projects } from './src/data/projects';
import fs from 'fs';
import path from 'path';

const GITHUB_RAW_BASE = "https://raw.githubusercontent.com/rulloa1/constructiondesignnew-e33525f5/main/src/assets/projects";

console.log('Checking for missing images...\n');

let totalImages = 0;
let localImages = 0;
let githubImages = 0;
let missingLocal = [];

projects.forEach(project => {
    console.log(`\n📁 ${project.title}`);

    project.gallery.forEach((imagePath, index) => {
        totalImages++;

        if (imagePath.startsWith(GITHUB_RAW_BASE)) {
            githubImages++;
            console.log(`  ✓ [GitHub] ${imagePath.replace(GITHUB_RAW_BASE, '...')}`);
        } else if (imagePath.startsWith('/projects/')) {
            localImages++;
            const localPath = path.join('public', imagePath);
            if (fs.existsSync(localPath)) {
                console.log(`  ✓ [Local] ${imagePath}`);
            } else {
                console.log(`  ✗ [MISSING] ${imagePath}`);
                missingLocal.push({ project: project.title, path: imagePath });
            }
        } else if (imagePath.startsWith('@/assets/')) {
            localImages++;
            console.log(`  ✓ [Asset Import] ${imagePath}`);
        } else {
            localImages++;
            const localPath = path.join('public', imagePath);
            if (fs.existsSync(localPath)) {
                console.log(`  ✓ [Local] ${imagePath}`);
            } else {
                console.log(`  ✗ [MISSING] ${imagePath}`);
                missingLocal.push({ project: project.title, path: imagePath });
            }
        }
    });
});

console.log('\n\n📊 Summary:');
console.log(`Total images: ${totalImages}`);
console.log(`GitHub-hosted: ${githubImages}`);
console.log(`Local files: ${localImages}`);
console.log(`Missing local files: ${missingLocal.length}`);

if (missingLocal.length > 0) {
    console.log('\n\n❌ Missing Files:');
    missingLocal.forEach(item => {
        console.log(`  ${item.project}: ${item.path}`);
    });
}
