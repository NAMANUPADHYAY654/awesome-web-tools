// State management
export const toolsData = [
  { id: 'password-gen', name: 'Password Generator', icon: '🔑', category: 'Generator', desc: 'Generate secure random passwords.' },
  { id: 'qrcode-gen', name: 'QR Code Generator', icon: '📱', category: 'Generator', desc: 'Create QR codes for text or URLs.' },
  { id: 'color-palette', name: 'Color Palette', icon: '🎨', category: 'Generator', desc: 'Generate harmonious color palettes.' },
  { id: 'json-format', name: 'JSON Formatter', icon: '📋', category: 'Formatter', desc: 'Format and validate JSON strings.' },
  { id: 'base64-conv', name: 'Base64 Encoder', icon: '🔄', category: 'Converter', desc: 'Encode/Decode Base64 strings.' },
  { id: 'url-short', name: 'URL Shortener', icon: '🔗', category: 'Utility', desc: 'Mock UI for shortening URLs.' },
  { id: 'text-case', name: 'Text Case Converter', icon: 'Aa', category: 'Converter', desc: 'Convert text to camel, snake, upper case.' },
  { id: 'word-count', name: 'Word Counter', icon: '📝', category: 'Utility', desc: 'Count words, characters, and sentences.' },
  { id: 'regex-test', name: 'Regex Tester', icon: '🔍', category: 'Utility', desc: 'Test regular expressions against text.' },
  { id: 'md-preview', name: 'Markdown Preview', icon: '📄', category: 'Utility', desc: 'Preview markdown in real-time.' },
  { id: 'uuid-gen', name: 'UUID Generator', icon: '🆔', category: 'Generator', desc: 'Generate v4 UUIDs.' },
  { id: 'time-conv', name: 'Timestamp Converter', icon: '⏱️', category: 'Converter', desc: 'Convert Unix timestamps to dates.' },
  { id: 'unit-conv', name: 'Unit Converter', icon: '⚖️', category: 'Converter', desc: 'Convert length, weight, temperature.' },
  { id: 'bmi-calc', name: 'BMI Calculator', icon: '🫀', category: 'Utility', desc: 'Calculate Body Mass Index.' },
  { id: 'gradient-gen', name: 'Gradient Generator', icon: '🌈', category: 'Generator', desc: 'Create beautiful CSS gradients.' },
  { id: 'meta-tags', name: 'Meta Tag Generator', icon: '🏷️', category: 'Utility', desc: 'Generate HTML meta tags for SEO.' },
  { id: 'img-base64', name: 'Image to Base64', icon: '🖼️', category: 'Converter', desc: 'Convert images to base64 data URIs.' },
  { id: 'lorem-ipsum', name: 'Lorem Ipsum', icon: '📃', category: 'Generator', desc: 'Generate placeholder text.' },
  { id: 'random-data', name: 'Random Data', icon: '🎲', category: 'Generator', desc: 'Generate random user data mock.' },
  { id: 'cron-help', name: 'Cron Helper', icon: '⏰', category: 'Utility', desc: 'Explain and generate cron expressions.' }
];

export let activeToolId = null;

export function setActiveTool(id) {
  activeToolId = id;
}
