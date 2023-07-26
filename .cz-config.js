module.exports = {
  // 可选类型
  types: [
    { value: 'feature', name: 'feature: ✨ 新功能', emoji: '✨' },
    { value: 'bug', name: 'bug: 测试反馈bug列表中的bug号', emoji: '🐞' },
    { value: 'fix', name: 'fix: 🐛 修复', emoji: '🐛' },
    { value: 'ui', name: 'ui: 💎 更新UI', emoji: '💎' },
    { value: 'docs', name: 'docs: 📚 文档变更', emoji: '📚' },
    {
      value: 'style',
      name: 'style: 🎨 代码格式(不影响代码运行的变动)',
      emoji: '🎨',
    },
    { value: 'perf', name: 'perf: ⚡️ 性能优化', emoji: '⚡️' },
    {
      value: 'refactor',
      name: 'refactor: ♻️ 重构(既不是增加feature，也不是修复bug)',
      emoji: '♻️',
    },
    { value: 'release', name: 'release: 🚀 发布版本', emoji: '🚀' },
    { value: 'deploy', name: 'deploy: 🔨 部署', emoji: '🔨' },
    { value: 'test', name: 'test: 🚨 增加测试', emoji: '🚨' },
    {
      value: 'chore',
      name: 'chore: 🔧 构建过程或辅助工具的变动(更改配置文件)',
      emoji: '🔧',
    },
    { value: 'revert', name: 'revert: ⏪️ 回退', emoji: '⏪️' },
    { value: 'build', name: 'build: 📦️ 打包', emoji: '📦️' },
  ],
  // 消息步骤
  messages: {
    type: '请选择提交类型:',
    customScope: '请输入您修改的范围(可选):',
    subject: '请简要描述提交 message (必填):',
    body: '请输入详细描述(可选，待优化去除，跳过即可):',
    footer: '请输入要关闭的issue(待优化去除，跳过即可):',
    confirmCommit: '确认使用以上信息提交？(y/n/e/h)',
  },
  skipQuestions: ['body', 'footer'],
  useEmoji: true,
  subjectLimit: 72,
}
