/**
 * 友链数据
 *
 * 友链说明：
 * - 网站名称：简洁明了的网站标题
 * - 网站描述：一句话描述网站内容
 * - 网站链接：完整的 URL（包含 https://）
 * - 头像链接：可选，网站 logo 或头像图片 URL
 */

export interface FriendLink {
	name: string;
	description: string;
	url: string;
	avatar?: string;
}

// 友链列表
export const friendLinks: FriendLink[] = [
	{
		name: "Astro",
		description: "现代化的静态网站构建框架",
		url: "https://astro.build",
		avatar: "https://astro.build/favicon.svg"
	},
	{
		name: "MDN Web Docs",
		description: "Web 开发技术文档",
		url: "https://developer.mozilla.org",
		avatar: "https://developer.mozilla.org/favicon-48x48.png"
	},
	// 添加更多友链...
];

// 按字母排序的友链
export const sortedLinks = friendLinks.sort((a, b) =>
	a.name.localeCompare(b.name, 'zh-CN')
);
