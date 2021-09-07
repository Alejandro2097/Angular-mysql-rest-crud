

import express, { Router } from 'express';


class PersonRoutes {

    public router: Router = Router();

    constructor() {
        this.config();
    }

    config() {
        this.router.get('/', (req, res)=> res.send('People'));
    }

}

export default new PersonRoutes().router;