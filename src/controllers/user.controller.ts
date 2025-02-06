import { Request, Response } from "express";
import { asyncHandler } from "../middlewares/asyncHandler.middleware";
import { getCurrentUser } from "../services/user.service";
import { HTTPSTATUS } from "../config/http.config";

export const getCurrentUserController = asyncHandler(
  async (req: Request, res: Response) => {
    const userId = req.user?._id;
    const { user } = await getCurrentUser(userId);
    return res
      .status(HTTPSTATUS.OK)
      .json({ message: "User fetched successfully", user });
  }
);
