"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resourcesCommonPath = exports.resourcesPath = exports.subDirOfPublicDirBasename = void 0;
var path_1 = require("path");
exports.subDirOfPublicDirBasename = "keycloak_static";
exports.resourcesPath = path_1.join(exports.subDirOfPublicDirBasename, "/resources");
exports.resourcesCommonPath = path_1.join(exports.subDirOfPublicDirBasename, "/resources_common");
//# sourceMappingURL=urlResourcesPath.js.map