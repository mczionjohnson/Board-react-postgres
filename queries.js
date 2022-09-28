const Pool = require("pg").Pool;

const pool = new Pool({
    user: 'mczionjohnson',
    host: 'localhost',
    database: 'comboard',
    password: 'abc',
    port: 5432,
})

const getPosts = (req, res) => {
    pool.query('SELECT * FROM artposts', (err, results) => {
        if (err) {
            throw err
        }
        // res.status(200).json(results.rows)
        // res.send("Hello Insomnia 2");

        const objects = results.rows;
        // const testid = 1;

        // const { team, event } = objects.find(object => object.id === testid);

        // console.log(team, event);
        // return;
        res.status(200).json(objects);
        console.log(objects);
        return;

    });

    // res.send("Hello Insomnia 2");
}

module.exports = {
    getPosts,
};