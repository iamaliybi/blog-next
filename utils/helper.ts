export const userAgentIsBot = (userAgent?: string): boolean => {
	if (!userAgent) return false;
	return /Googlebot|YandexAccessibilityBot/ig.test(userAgent);
};