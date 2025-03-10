import { Request, Response } from "express";
import { asyncHandler } from "../middlewares/asyncHandler.middleware";
import { z } from "zod";
import { joinWorkspaceByInvite } from "../services/member.service";
import { HTTPSTATUS } from "../config/http.config";

export const joinWorkspace = asyncHandler(
  async (req: Request, res: Response) => {
    const inviteCode = z.string().parse(req.params.inviteCode);
    const userId = req.user?._id;

    const { workspaceId, role } = await joinWorkspaceByInvite(
      userId,
      inviteCode
    );
    return res
      .status(HTTPSTATUS.OK)
      .json({
        message: "Successfully joined the workspace",
        workspaceId,
        role,
      });
  }
);
