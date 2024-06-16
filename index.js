const fs = require("fs");
const path = require("path");

const logosDir = path.join(__dirname, "logos");

function getLogo(logoName) {
    const filePath = path.join(logosDir, `${logoName.toLowerCase()}.svg`);
    if (fs.existsSync(filePath)) {
        return fs.readFileSync(filePath, "utf-8");
    } else {
        throw new Error(`Logo for ${logoName} not found.`);
    }
}

module.exports = {
    getLogo,
};
