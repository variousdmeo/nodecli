const readline = require('readline');
const chalk = require('chalk');
const question = [
  {
    name: '请输入您的姓名:',
    type: 'name',
    alias: '姓名：'
  },
  {
    name: '请输入您的年龄:',
    type: 'age',
    alias: '年龄：',
    color: 'red'
  },
  {
    name: '是否确认[Y/N]:',
    type: 'confirm',
    alias: '选择：'
  }]
const result = []
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: `${chalk.green(question[0].name)}`
});
rl.prompt();

rl.on('line', (line) => {
  console.log('');
  const max = result.length + 1 ;
  if (max === question.length ) {
    result.push(line.trim());
    rl.close()
  }
  if (question[max - 1].type == 'confirm') {
    if (line.trim().toUpperCase() != 'Y' && line.trim().toUpperCase() != 'YES') {
      rl.close()
    }
  }
  if (question[max - 1].type == 'confirm') {
    if (line.trim().toUpperCase() != 'Y' && line.trim().toUpperCase() != 'YES') {
      rl.close()
    }
  }

  if (question[max - 1].type == 'age') {
    if (isNaN(line.trim())) {
      console.log(chalk.red('请输入正确的年龄'))
      rl.close()
    }
  }

  result.push(line.trim());
  rl.setPrompt(chalk[question[max].color || 'green'](`${question[max].name}`));
  rl.prompt();

}).on('close', () => {
  console.log('');
  console.log('输入 *** ');
  for (let i = 0; i < result.length; i++) {
    console.log(`${question[i].alias}: ${result[i]} `);
  }
  process.exit(0);
});
