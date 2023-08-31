const dbMovie=require('../connection/connection')


getAllMovie=(req, res,next)=>{

    const getQuery= `SELECT * FROM movie`  
    dbMovie.movieClient.query(getQuery, (err, result) => {
        if (!err) {
            res.status(200).send(result.rows);
        }else{
            res.status(404).json({
                message:"Database not ghfgh"
            });
        }
    })
}

module.exports=getAllMovie