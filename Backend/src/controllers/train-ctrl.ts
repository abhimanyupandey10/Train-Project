import express, { Router, Request, Response } from "express";
import BaseController from "./base-ctrl";
import TrainService from "../services/train-serv";
import ResponseUtil from "../utils/response-util";

class TrainController implements BaseController {
  router: Router;
  responseUtil: ResponseUtil;
  trainService: TrainService;

  constructor() {
    this.router = express.Router();
    this.responseUtil = new ResponseUtil();

    this.setupRoutes();
  }

  setupRoutes() {
    this.router.get("/train/{id}", (req, res) => this.getTrain(req, res));
  }

  async getTrain(req: Request, res: Response) {
    try {
      let data = await this.trainService.getTrain(+req.params.id);
      this.responseUtil.sendRecord(data, res);
    } catch (err) {
      this.responseUtil.sendError(err, res);
    }
  }
}

export default TrainController;
