#!/usr/bin/env node

const yParser = require('yargs-parser');
const chalk = require('chalk');
const osLocale = require('os-locale');

// 截取命令行参数
const args = yParser(process.argv.slice(2));
const option = args._[0];

const judeCommitResult = () => {
  // 提取commit信息
  const msgPath = process.env.GIT_PARAMS || process.env.HUSKY_GIT_PARAMS;
  const msg = require('fs').readFileSync(msgPath, 'utf-8').trim();
  const commitRE =
    /^(((\ud83c[\udf00-\udfff])|(\ud83d[\udc00-\ude4f\ude80-\udeff])|[\u2600-\u2B55]) )?(revert: )?(feat|fix|docs|UI|refactor|⚡perf|workflow|build|CI|typos|chore|tests|types|wip|release|dep|locale)(\(.+\))?: .{1,50}/;

  if (!commitRE.test(msg)) {
    osLocale().then((locale) => {
      if (locale === 'zh-CN') {
        console.error(
          `  ${chalk.bgRed.white(' ERROR ')} ${chalk.red(`提交日志不符合规范`)}\n\n${chalk.red(
            `  合法的提交日志格式如下(emoji 和 模块可选填)：\n\n`,
          )}    
      ${chalk.green(`💥 feat(模块): 添加了个很棒的功能`)}
      ${chalk.green(`🐛 fix(模块): 修复了一些 bug`)}
      ${chalk.green(`📝 docs(模块): 更新了一下文档`)}
      ${chalk.green(`🌷 UI(模块): 修改/优化了一下样式`)}
      ${chalk.green(`🔨 refactor(模块): 代码重构`)}
      ${chalk.green(`🏰 chore(模块): 对脚手架做了些更改`)}
      ${chalk.green(`🌐 locale(模块): 为国际化做了微小的贡献`)}
      ${chalk.red(`See https://github.com/MrXujiang/best-cps for more details.\n`)}`,
        );
      } else {
        console.error(
          `  ${chalk.bgRed.white(' ERROR ')} ${chalk.red(
            `invalid commit message format.`,
          )}\n\n${chalk.red(
            `  Proper commit message format is required for automated changelog generation. Examples:\n\n`,
          )}    
      ${chalk.green(`💥 feat(compiler): add 'comments' option`)}
      ${chalk.green(`🐛 fix(compiler): fix some bug`)}
      ${chalk.green(`📝 docs(compiler): add some docs`)}
      ${chalk.green(`🌷 UI(compiler): better styles`)}
      ${chalk.green(`🔨 refactor(compiler): code refactor`)}
      ${chalk.green(`🏰 chore(compiler): Made some changes to the scaffolding`)}
      ${chalk.green(`🌐 locale(compiler): Made a small contribution to internationalization`)}\n
      ${chalk.red(`See https://github.com/MrXujiang/best-cps for more details.\n`)}`,
        );
      }

      process.exit(1);
    });
  }
};

switch (option) {
  case 'verify-commit':
    // eslint-disable-next-line global-require
    judeCommitResult();
    break;

  default:
    if (args.h || args.help) {
      const details = `
        Commands:
          ${chalk.cyan('verify-commit')}    检查 commit 提交的信息
        More:
        ${chalk.red(`See https://github.com/MrXujiang/best-cps.\n`)}  
        `.trim();
      console.log(details);
    }
    break;
}
