/**
 * 计算文章的字数统计和阅读时间
 * 本小姐专门为你编写的工具函数！(￣▽￣)／
 */

export interface ReadingTimeStats {
	/** 字数 */
	words: number;
	/** 阅读时间（分钟） */
	minutes: number;
	/** 格式化的阅读时间字符串 */
	text: string;
}

/**
 * 计算文章的阅读时间
 * @param content - Markdown 文章内容
 * @returns 阅读时间统计信息
 */
export function getReadingTime(content: string): ReadingTimeStats {
	// 移除 Markdown 语法标记，只保留纯文本
	const text = content
		// 移除代码块
		.replace(/```[\s\S]*?```/g, '')
		// 移除行内代码
		.replace(/`[^`]+`/g, '')
		// 移除链接
		.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
		// 移除图片
		.replace(/!\[([^\]]*)\]\([^)]+\)/g, '')
		// 移除标题标记
		.replace(/^#+\s+/gm, '')
		// 移除加粗和斜体
		.replace(/(\*\*|__)(.*?)\1/g, '$2')
		.replace(/(\*|_)(.*?)\1/g, '$2')
		// 移除列表标记
		.replace(/^\s*[-*+]\s+/gm, '')
		.replace(/^\s*\d+\.\s+/gm, '')
		// 移除引用标记
		.replace(/^>\s+/gm, '')
		// 移除水平线
		.replace(/^[-*_]{3,}\s*$/gm, '')
		.trim();

	// 统计中文字符和英文单词
	const chineseChars = (text.match(/[\u4e00-\u9fa5]/g) || []).length;
	const englishWords = (text.match(/[a-zA-Z]+/g) || []).length;

	// 总字数 = 中文字符 + 英文单词数
	const words = chineseChars + englishWords;

	// 阅读时间计算：
	// 中文按 400 字/分钟，英文按 200 词/分钟
	const readingTimeMinutes = Math.ceil(chineseChars / 400 + englishWords / 200);

	// 格式化输出
	const minutes = readingTimeMinutes < 1 ? 1 : readingTimeMinutes;

	return {
		words,
		minutes,
		text: `${minutes} min read`,
	};
}

/**
 * 格式化字数显示
 * @param words - 字数
 * @returns 格式化的字数字符串（如 "4.2k"）
 */
export function formatWordCount(words: number): string {
	if (words < 1000) {
		return `${words}`;
	}
	return `${(words / 1000).toFixed(1)}k`;
}
