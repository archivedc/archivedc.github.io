/** @type {import('next-sitemap').IConfig} */
const config = {
    siteUrl: process.env.SITE_URL || 'https://archivedc.com',
    generateRobotsTxt: true,
};

module.exports = config