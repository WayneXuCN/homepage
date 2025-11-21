/**
 * 在新标签页中打开指定的 URL
 * @param {string} url - 要打开的 URL
 * @returns {boolean} - 是否成功打开
 */
export const openInNewTab = url => {
  // 参数验证
  if (!url || typeof url !== 'string') {
    console.warn('openInNewTab: 无效的 URL 参数', url);
    return false;
  }

  try {
    // 验证 URL 格式
    const urlObj = new URL(url, window.location.origin);

    // 打开新标签页，使用安全参数
    const newWindow = window.open(urlObj.toString(), '_blank', 'noopener,noreferrer');

    // 检查是否成功打开（可能被浏览器阻止）
    if (!newWindow) {
      console.warn('openInNewTab: 弹窗被浏览器阻止，请允许弹窗');
      return false;
    }

    return true;
  } catch (error) {
    console.error('openInNewTab: 打开 URL 时出错', error);
    return false;
  }
};
