
import https from 'https';

const GITHUB_RAW_BASE = "https://raw.githubusercontent.com/rulloa1/constructiondesignnew-e33525f5/main/src/assets/projects";

const imagesToCheck = [
    `${GITHUB_RAW_BASE}/miami-beach-cover.webp`,
    `${GITHUB_RAW_BASE}/alpine-ranch-cover.webp`,
    `${GITHUB_RAW_BASE}/montana-cover.webp`, // If this one is still used remotely
    `${GITHUB_RAW_BASE}/non-existent-image-check.webp` // Control
];

const checkUrl = (url: string) => {
    return new Promise((resolve) => {
        https.get(url, (res) => {
            console.log(`${res.statusCode} : ${url}`);
            resolve(res.statusCode);
        }).on('error', (e) => {
            console.error(`Error: ${url}`, e);
            resolve('ERROR');
        });
    });
};

async function run() {
    console.log("Checking remote images...");
    for (const url of imagesToCheck) {
        await checkUrl(url);
    }
}

run();
