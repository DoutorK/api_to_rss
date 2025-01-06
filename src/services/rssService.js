import RSSParser from 'rss-parser';
const parser = new RSSParser();

const fetchRSSFeed = async (url) => {
    const feed = await parser.parseURL('https://rss.tecmundo.com.br/feed');

    return {
        title: feed.title,
        description: feed.description,
        items: feed.items.map(item => ({
            title: item.title,
            link: item.link,
            pubDate: item.pubDate,
            contentSnippet: item.contentSnippet,
        })),
    };
};

export default { fetchRSSFeed };
