import { PermissionType } from "../enums/role.enum";
import { UnauthorizedException } from "./appError";
import { RolePermissions } from "./role-permission";

export const roleGuard = (
  role: keyof typeof RolePermissions,
  requiredPermissions: PermissionType[]
) => {
  const permissions = RolePermissions[role];
  // if the role does not exist or lacks required permissions, throw an exception

  const hasPermission = requiredPermissions.every((permission) =>
    permission.includes(permission)
  );

  if (!hasPermission) {
    throw new UnauthorizedException(
      "You do not have the nessary permisisons to perform this action!"
    );
  }
};
