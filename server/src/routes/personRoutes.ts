
import express, { Router } from 'express';


class PersonRoutes {

    router: Router = Router();

    constructor() {
        this.config();
    }

    config() {
        this.router.get('/', (req, res)=> res.send('People'));
    }

}

export default new PersonRoutes().router;