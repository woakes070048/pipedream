import common from "../common/common.mjs";

export default {
  ...common,
  hooks: {
    ...common.hooks,
    deploy() {},
  },
  methods: {
    ...common.methods,
    generateMeta(video) {
      const {
        id,
        snippet,
      } = video;
      return {
        id,
        summary: snippet.title,
        ts: Date.parse(snippet.publishedAt),
      };
    },
  },
  async run() {
    const params = {
      part: "contentDetails,id,snippet,status",
      playlistId: "LL",
      maxResults: this.maxResults,
    };
    await this.paginatePlaylistItems(params);
  },
};
