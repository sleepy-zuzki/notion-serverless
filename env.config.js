process.loadEnvFile();

const {
    NOTION_TOKEN
} = process.env;

module.exports = {notion_token: NOTION_TOKEN};
