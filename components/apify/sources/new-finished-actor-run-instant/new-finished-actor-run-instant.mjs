import common from "../common/base.mjs";
import sampleEmit from "./test-event.mjs";

export default {
  ...common,
  key: "apify-new-finished-actor-run-instant",
  name: "New Finished Actor Run (Instant)",
  description: "Emit new event when a selected Actor is run and finishes.",
  version: "0.0.4",
  type: "source",
  dedupe: "unique",
  props: {
    ...common.props,
    db: "$.service.db",
    actorId: {
      propDefinition: [
        common.props.apify,
        "userActorId",
      ],
    },
  },
  methods: {
    ...common.methods,
    getCondition() {
      return {
        actorId: this.actorId,
      };
    },
    getSummary(body) {
      return `A new Actor run ${body.eventData.actorRunId} has finished`;
    },
  },
  sampleEmit,
};
