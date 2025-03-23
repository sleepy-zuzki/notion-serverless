const notion = require('@notionhq/client');
const env = require('./env.config');

class NotionClient {
    client;

    constructor() {
        this.client = new notion.Client({
            auth: env.notion_token
        });
    }

    async getOverlays(database_id) {
        const overlays = await this.client.databases.query({database_id});
        const response = [];

        for (const overlay of overlays.results) {
            const prop = overlay.properties;
            response.push({
                page_id: overlay.id,
                name: prop.name.rich_text[0].text.content,
                status: prop.status.rich_text[0].text.content,
                url: prop.preview.rich_text[0].text.content
            });
        }

        return response;
    }
}

module.exports = NotionClient;
