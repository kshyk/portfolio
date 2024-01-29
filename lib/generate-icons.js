const fs = require('fs');
const path = require('path');

const skillsData = require('../data/skills.json');
const projectsData = require('../data/projects.json');
const extraIcons = require('../data/extra-icons');
const tsxFilesPath = path.join(__dirname, '../components');

const allIcons = new Set();

function getTsxFilesRecursively(dir) {
    return new Promise((resolve, reject) => {
        fs.readdir(dir, { withFileTypes: true }, (err, dirents) => {
            if (err) {
                reject(err);
                return;
            }

            const files = [];

            (async function processDirents() {
                for (const dirent of dirents) {
                    const res = path.resolve(dir, dirent.name);
                    if (dirent.isDirectory()) {
                        files.push(...await getTsxFilesRecursively(res));
                    } else if (dirent.isFile() && dirent.name.endsWith('.tsx')) {
                        files.push(res);
                    }
                }

                resolve(files);
            })();
        });
    });
}

async function checkSimpleIconUsage(tsxFilePath) {
    try {
        const content = fs.readFileSync(tsxFilePath, 'utf-8');
        const matches = content.match(/<SimpleIcon[^>]*\s+icon={"([^"}]+)"[^>]*\s*\/>/g);

        if (matches) {
            matches.forEach((match) => {
                const iconName = match.match(/<SimpleIcon[^>]*\s+icon={"([^"}]+)"[^>]*\s*\/>/)[1];
                console.log(`Found <SimpleIcon> usage in file: ${tsxFilePath} - icon: ${iconName}`);
                allIcons.add(iconName);
            });
        }
    } catch (error) {
        console.error(`Error reading file ${tsxFilePath}:`, error);
    }
}

getTsxFilesRecursively(tsxFilesPath)
    .then(async (tsxFiles) => {
        for (const tsxFile of tsxFiles) {
            await checkSimpleIconUsage(tsxFile);
        }

        const extractIcons = (data) => {
            for (const category of Object.values(data)) {
                for (const item of category) {
                    allIcons.add(item.icon);
                }
            }
        };

        extractIcons(skillsData);
        projectsData.forEach((project) => extractIcons({ technologies: project.technologies }));

        Object.values(extraIcons).forEach((extraIcon) => {
            allIcons.add(extraIcon.slug);
        });

        const timestamp = new Date().toLocaleString();
        const comment = `// Auto-generated file - ${timestamp}\n// Do not update this file as it will be overwritten during build.\n\n`;

        const jsFileContent = comment + Array.from(allIcons)
            .sort()
            .map((icon) => {
                const iconName = `si${icon.charAt(0).toUpperCase() + icon.slice(1)}`;
                if (iconName in extraIcons) {
                    console.log(`Found extra icon in extra-icons.js - ${iconName}`);
                    return `export { ${iconName} } from '../data/extra-icons'; // Extra icon`;
                }
                return `export { ${iconName} } from 'simple-icons';`;
            })
            .join('\n');

        const outputFilePath = path.join(__dirname, '../data/icon-exports.js');

        fs.writeFileSync(outputFilePath, jsFileContent);
        console.log('Successfully generated icon-exports file.')
    })
    .catch((error) => {
        console.error('Error:', error);
    });
