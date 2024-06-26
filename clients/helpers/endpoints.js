export const getUrl = {
  login: "/api/id/login",
  getCads: "/api/ier/cad",
  cadIntegrations: "/api/integrations/cad",
  getCallsign: "/api/callsigns/",
  getIncidents: "/api/events/",
  getPlaybacks: "/api/utility/playbacks/",
  getNotes: "/api/mq/messages/",
  logOut: "/api/id/logout",
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
