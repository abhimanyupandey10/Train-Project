import { Response } from "express";

class ResponseUtil {
  sendRecord(data: any, res: Response) {
    let response: any = {
      data: data,
    };

    res.status(200).json(response);
  }

  sendRecords(data: any, count: number, res: Response) {
    let response: any = {
      data: data,
    };

    if (count) {
      response.count = count;
    }

    res.status(200).json(response);
  }

  sendError(err: any, res: Response) {
    res.status(500).json({
      error: true,
      message: err.toString(),
    });
  }
}

export default ResponseUtil;
