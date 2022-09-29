import { Request, Response } from "express";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) { }

  handle(request: Request, response: Response): Response {
    const { user_id } = Array.isArray(request.headers) ? request.headers[0] : request.headers

    try {
      const users = this.listAllUsersUseCase.execute({ user_id })

      return response.json(users)
    }
    catch (err) {
      return response.status(400).json({ error: `${err}` })
    }
  }
}

export { ListAllUsersController };
