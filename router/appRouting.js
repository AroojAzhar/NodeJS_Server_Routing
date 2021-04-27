const fs = require('fs');
const path = require('path');

let mapRoutes = (request , response) => {
   let requestedURL = request.url;
    if(requestedURL === '/'){
        fs.readFile(path.join(__dirname , '..' ,'views' , 'index.html') , 'utf-8', (err, data) => {
            if(err) throw err;
            response.end(data);
        });
    }

    else if(requestedURL === '/services'){
        fs.readFile(path.join(__dirname , '..' , 'views' , 'services.html') , 'utf-8', (err , data) => {
            if(err) throw err;
            response.end(data);
        });
    }

    else if(requestedURL === '/about'){
        fs.readFile(path.join(__dirname, '..' , 'views' , 'about.html') , 'utf-8', (err , data) => {
            if(err) throw err;
            response.end(data);
        })
    }

    else if (requestedURL === '/contact'){
        fs.readFile(path.join(__dirname , '..' , 'views' , 'contact.html' ) , 'utf-8' , (err, data) => {
            if(err) throw err;
            response.end(data)
        } );
    }
    else {
        fs.readFile(path.join(__dirname, '..' , 'views',  '404.html'), 'utf-8', (err, data) => {
            if (err) throw err;
            response.end(data)
        });
    }
};

module.exports = {mapRoutes};