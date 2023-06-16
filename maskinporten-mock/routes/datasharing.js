var express = require('express');
var router = express.Router();

// FOR KONSUMENTER:

// For å registrere ny maskinporten-integrasjon
router.post('/scope/client', function (req, res, next) {

    /**
     * BODY:
     * {
     *   "description": "Description for client",
     *   "scopes": [ "scope1", "scope2" ]
     * }
     * */

    var client = {
        "client_id": "64067a31-e9a1-48c2-b2e1-989255eaf864",
        "consumer_orgno": "00998877",
        "description": "Description for client",
        "scopes": ["scope1", "scope2"]
    }

    /**
     * Respons ved feila registrering (f.eks. ved manglende tilgang til scope):
     *
     * HTTP/1.1 401 FORBIDDEN
     * Content-Type: application/json
     *
     * {
     *   "error_id": "invalid_scope",
     *   "error_description": "scope <scope1> not found or client organization is not granted access to scope"
     * }
     */
    res.send(client);
});

// For å hente ut alle maskinporten-integrasjoner tilhøyrende innlogga bruker sin organsiasjon:
router.get('/client', function (req, res, next) {
    var clients = [{
        "client_id": "64067a31-e9a1-48c2-b2e1-989255eaf864",
        "consumer_orgno": "00998877",
        "description": "Description for client",
        "scopes": ["scope1", "scope2"]
    }, {
        "client_id": "uuid",
        "consumer_orgno": "00998877",
        "description": "Description for second client",
        "scopes": ["scope1"]
    }]
    res.send(clients);
});

// lista opp alle scopes som organisasjonen har fått tilgang til
router.get('/scope/access', function (req, res, next) {
    var scope = [{
        "name": "pilot:api",
        "active": true,
        "prefix": "pilot",
        "subscope": "api",
        "description": "Gir tilgang til et eksempelapi for å støttet tines mockapI"
        }, {
        "name": "pilot:datasett",
        "active": true,
        "prefix": "pilot",
        "subscope": "datasett",
        "description": "Gir tilgang til et eksempel-skyportenressurs for å støttet tines mockapI"
    }
    ]
    res.send(scope);
});

// FOR TILBYDER:
//
// For å registrere tilgang til scope for ny konsument:
router.put('/scope/access', function (req, res, next) {
    /**
     * BODY:
     * {
     *   "consumer_orgno": "<orgno>",
     *   "scope": "<scope>"
     * }
     * */


    // scope ikkje tilhører innlogga bruker sin organisasjon, eller bruker mangler riktig tilgang i Altinn: HTTP/1.1 401 FORBIDDEN
    res.send();
});

// GET /datasharing/scope
// kun diskutert litt - meir naturleg lista opp scopes som organisasjonen EIG sjølv


    module.exports = router;
