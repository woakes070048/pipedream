import app from "../../clio_eu.app.mjs";
import common from "@pipedream/clio/sources/new-document-instant/new-document-instant.mjs";

import { adjustPropDefinitions } from "../../common/utils.mjs";

const {
  name, description, type, ...others
} = common;
const props = adjustPropDefinitions(others.props, app);

export default {
  ...others,
  key: "clio_eu-new-document-instant",
  version: "0.0.1",
  name,
  description,
  type,
  props: {
    app,
    ...props,
  },
};
