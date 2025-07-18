import { axios } from "@pipedream/platform";

export default {
  type: "app",
  app: "speechace",
  propDefinitions: {
    dialect: {
      type: "string",
      label: "Dialect",
      description: "The dialect to use for scoring",
      options: [
        {
          label: "US English",
          value: "en-us",
        },
        {
          label: "UK English",
          value: "en-gb",
        },
      ],
      optional: true,
      default: "en-us",
    },
    filePath: {
      type: "string",
      label: "File Path or URL",
      description: "Provide either a file URL or a path to a file in the /tmp directory (for example, /tmp/myFile.pdf).",
    },
    userId: {
      type: "string",
      label: "User ID",
      description: "A unique anonymized identifier for the end-user who spoke the audio",
      optional: true,
    },
  },
  methods: {
    _baseUrl() {
      return "https://api.speechace.co/api";
    },
    _makeRequest(opts = {}) {
      const {
        $ = this,
        method = "POST",
        path,
        headers,
        params,
        ...otherOpts
      } = opts;
      return axios($, {
        ...otherOpts,
        method,
        url: `${this._baseUrl()}${path}`,
        headers,
        params: {
          ...params,
          key: `${this.$auth.product_key}`,
        },
      });
    },
    transcribeAndScore(opts = {}) {
      return this._makeRequest({
        path: "/scoring/speech/v9/json",
        ...opts,
      });
    },
    scoreScript(opts = {}) {
      return this._makeRequest({
        path: "/scoring/text/v9/json",
        ...opts,
      });
    },
  },
};
