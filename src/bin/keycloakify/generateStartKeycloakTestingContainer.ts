import * as fs from "fs";
import { join as pathJoin } from "path";
import { assert } from "tsafe/assert";
import type { BuildOptions } from "./BuildOptions";

export type BuildOptionsLike = {
    themeName: string;
    extraThemeNames: string[];
};

assert<BuildOptions extends BuildOptionsLike ? true : false>();

generateStartKeycloakTestingContainer.basename = "start_keycloak_testing_container.sh";

const containerName = "keycloak-testing-container";

/** Files for being able to run a hot reload keycloak container */
export function generateStartKeycloakTestingContainer(params: {
    keycloakVersion: string;
    keycloakThemeBuildingDirPath: string;
    buildOptions: BuildOptionsLike;
}) {
    const {
        keycloakThemeBuildingDirPath,
        keycloakVersion,
        buildOptions: { themeName, extraThemeNames }
    } = params;

    fs.writeFileSync(
        pathJoin(keycloakThemeBuildingDirPath, generateStartKeycloakTestingContainer.basename),
        Buffer.from(
            [
                "#!/usr/bin/env bash",
                "",
                `docker rm ${containerName} || true`,
                "",
                `cd "${keycloakThemeBuildingDirPath.replace(/\\/g, "/")}"`,
                "",
                "docker run \\",
                "   -p 8080:8080 \\",
                `   --name ${containerName} \\`,
                "   -e KEYCLOAK_ADMIN=admin \\",
                "   -e KEYCLOAK_ADMIN_PASSWORD=admin \\",
                ...[themeName, ...extraThemeNames].map(
                    themeName =>
                        `   -v "${pathJoin(keycloakThemeBuildingDirPath, "src", "main", "resources", "theme", themeName).replace(
                            /\\/g,
                            "/"
                        )}":"/opt/keycloak/themes/${themeName}":rw \\`
                ),
                `   -it quay.io/keycloak/keycloak:${keycloakVersion} \\`,
                `   start-dev --features=declarative-user-profile`,
                ""
            ].join("\n"),
            "utf8"
        ),
        { "mode": 0o755 }
    );
}
