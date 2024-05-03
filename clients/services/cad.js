import { HttpClient } from "../core/http.js";
import { getUrl } from "../helpers/endpoints.js";
import { training } from "../core/config.js";
import { PremierOne } from "../helpers/cadPayload.js";

export class Cad extends HttpClient {
    constructor(token) {
        super({ host: training.baseUrl, token});
    }

    getAll() {
        return this.get(getUrl.getCads);
    }

    createPremierOne(name) {
      const data = PremierOne;
      const cadComment = `Test description ${Date.now()}`;
      const payload = Object.assign({}, data);
      payload['ext-doc-idtl:incidentdetail']['ext-idtl:payload']['ext-idtl:incident'][
        'ext-idtl:servicecall'
      ]['nc:activityidentification']['nc:identificationid'] = name;
      payload['ext-doc-idtl:incidentdetail']['ext-idtl:exchangemetadata'][
        'ext-idtl:datasubmittermetadata'
      ]['nc:organizationidentification']['nc:identificationid'] = training.account;
      payload['ext-doc-idtl:incidentdetail']['ext-idtl:exchangemetadata'][
        'ext-idtl:datasubmittermetadata'
      ]['nc:organizationname'] = training.account;
      payload['ext-doc-idtl:incidentdetail']['ext-idtl:payload']['ext-idtl:incident'][
        'ext-idtl:servicecall'
      ]['ext-idtl:servicecallaugmentation']['ext-idtl:comment']['nc:commenttext'] = cadComment;

      return this.post(getUrl.cadIntegrations, payload);
    }
}