export type Locale = (typeof locales)[number]['key'];
export const defaultLocale: Locale = 'zh-CN';
export const locales = [
  {
    key: 'zh-CN',
    name: '简体中文',
    flag: '🇨🇳',
    alpha2Code: 'CN',
  },
  {
    key: 'zh-HK',
    name: '繁體中文 (香港)',
    flag: '🇭🇰',
    alpha2Code: 'HK',
  },
  {
    key: 'en-US',
    name: 'English',
    flag: '🇺🇸',
    alpha2Code: 'US',
  },
  {
    key: 'ja-JP',
    name: '日本語',
    flag: '🇯🇵',
    alpha2Code: 'JP',
  },
  {
    key: 'ko-KR',
    name: '한국어',
    flag: '🇰🇷',
    alpha2Code: 'KR',
  },
  {
    key: 'ru-RU',
    name: 'Русский',
    flag: '🇷🇺',
    alpha2Code: 'RU',
  },
] as const;
