let currentMessage = 'N/A'
let currentName = 'N/A'

const index = (req, res) => {
    return res.render('index', {
        currentName,
        currentMessage,
    });
};

const setMessage = (req, res) => {
    if(!req.body.name || !req.body.message){
        return res.status(400).json({error: 'Name and Message are required.'});
    }

    currentName = req.body.name;
    currentMessage = req.body.message;

    return res.redirect('/'); // Too lazy to override default form behavior
}

module.exports = {
    index,
    setMessage,
}