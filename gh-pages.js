var ghpages = require('gh-pages');

ghpages.publish(
    'docs', // path to public directory
    {
        branch: 'gh-pages',
        repo: 'https://github.com/Spacekido/Web_Design22.git',
        user: {
            name: 'Spacekido',
            email: 'spacekido.kido@gmail.com'
        }
    },
    () => {
        console.log('Deploy Complete!')
    }
)