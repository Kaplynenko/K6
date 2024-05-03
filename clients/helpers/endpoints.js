export const getUrl = {
  login: "/api/id/login",
  getCads: "/api/ier/cad",
  cadIntegrations: "/api/integrations/cad",
  getCallsign: "/api/callsigns/",
};
export const permCategories = [
  {
    name: "PermissionCategories.Read",
    entity: "permissionCategories",
    description: "Read permission categories by id",
    method: "GET",
    path: "api/id/categories/[a-zA-Z0-9]{24}",
  },
  {
    name: "PermissionCategories.Read.All",
    entity: "permissionCategories",
    description: "Read all permission categories",
    method: "GET",
    path: "api/id/categories",
  },
];
