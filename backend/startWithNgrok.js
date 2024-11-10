const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');
const ngrok = require('ngrok');

const envPath = path.join(__dirname, '../frontend/.env');

function updateEnvFile(url) {
    if (!fs.existsSync(envPath)) {
        fs.writeFileSync(envPath, `VITE_BASE_URL=${url}\n`);
        console.log(`.env file created with ngrok URL: ${url}`);
    } else {
        let envContent = fs.readFileSync(envPath, 'utf-8');
        if (envContent.includes('VITE_BASE_URL=')) {
            envContent = envContent.replace(/VITE_BASE_URL=.*/g, `VITE_BASE_URL=${url}`);
        } else {
            envContent += `\nVITE_BASE_URL=${url}`;
        }
        fs.writeFileSync(envPath, envContent);
        console.log(`.env file updated with ngrok URL: ${url}`);
    }
}

(async function() {
    try {
        const url = await ngrok.connect(3002);
        console.log(`ngrok URL: ${url}`);

        updateEnvFile(url);

        const serverProcess = exec('nodemon server.js', { cwd: __dirname });
        serverProcess.stdout.pipe(process.stdout);
        serverProcess.stderr.pipe(process.stderr);
    } catch (error) {
        console.error('Error starting ngrok or server:', error);
    }
})();
