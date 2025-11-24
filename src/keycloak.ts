import Keycloak from "keycloak-js";

const keycloak = new Keycloak({
    url: "http://localhost:8082/",
    realm: "zarish-sphere",
    clientId: "zarish-frontend",
});

export default keycloak;
