var questions = ['what is your name?', 'what is your fav hobby?', 'what is your language?'];
var answers = [];

function ask(i) {
    
    process.stdout.write(`\n\n\n${questions[i]}\n`);
    process.stdout.write('Enter your answer >>>');
    
}

process.stdin.on('data', function(data) {
    
    //process.stdout.write('\n' + data.toString().trim() + '\n');
    answers.push(data.toString().trim());
    
    if(answers.length < questions.length) {
        ask(answers.length);
    }else{
        process.exit();
    }
    
});

process.on('exit', function() {
    
    console.log('program exited')
    
})

ask(0);