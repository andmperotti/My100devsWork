module.exports = {
    getIndex: (req,res)=>{
        res.render('index.ejs')
    }
}
//this file defines one method getIndex for the home route requests which will use ejs to render html content to the user