var program = require('commander');

program
  .version(require('../package').version, '-v, --version');
program
  .option('-d, --debug', 'output extra debugging')
  .option('-s, --small', 'small pizza size')
  .option('-t|-e, --test [type]', 'test');


program
  .command('init')
  .description('run the given remote command')
  .action(function () {
    require('./lib/dev.js');
  });

program
  .command('select')
  .description('run the given remote command')
  .action(function () {
    require('./lib/select.js');
  });

program
  .command('exec <cmd>')
  .alias('ex')
  .description('execute the given remote cmd')
  .option("-e, --exec_mode <mode>", "Which exec mode to use")
  .action(function(cmd, options){
    console.log('exec "%s" using %s mode', cmd, options.exec_mode);
  }).on('--help', function() {
  console.log('  Examples:');
  console.log();
  console.log('    hc exec sequential');
  console.log('    hc exec async');
  console.log();
});

program
  .command( 'list' ) //声明hi下有一个命令叫list
  .description( 'list files in current working directory' ) //给出list这个命令的描述
  .option( '-a, --all', 'Whether to display hidden files' ) //设置list这个命令的参数
  .action( function ( options ) { //list命令的实现体
    var fs = require( 'fs' );
    //获取当前运行目录下的文件信息
    fs.readdir( process.cwd(), function ( err, files ) {
      var list = files;
      if ( !options.all ) { //检查用户是否给了--all或者-a的参数，如果没有，则过滤掉那些以.开头的文件
        list = files.filter( function ( file ) {
          return file.indexOf( '.' ) !== 0;
        } );
      }
      console.log( list.join( '\n\r' ) ); //控制台将所有文件名打印出来
    } );
  } );

// program
//   .command('*')
//   .description('deploy the given env')
//   .action(function (env) {
//     console.log('deploying "%s"', env);
//   });

program.parse(process.argv); //开始解析用户输入的命令
//
if (program.small) {
  // console.log(`- ${program.small}`)
  console.log(`- small`, program.small)
}
// if (program.test) {
//   console.log(`- test`, program.test)
  // console.log(`- ${program.test}`);
// }

if(program.test === undefined){
  console.log('no  type');
}else if(program.test === true){
  console.log('add  type');
}else {
  console.log(`- test`, program.test)
}