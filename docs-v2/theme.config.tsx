import React from "react";
import { useRouter } from "next/router";
import {
  DocsThemeConfig, useConfig,
} from "nextra-theme-docs";

import PipedreamLink from "./components/PipedreamLink";
import PipedreamTextLogo from "./components/PipedreamTextLogo";
import SlackLogo from "./components/SlackLogo";
import DocSearch from "./components/DocSearch";

const config: DocsThemeConfig = {
  head: function Head() {
    const router = useRouter()
    const { title } = useConfig()

    return (
      <>
        <title>{`${title} — Pipedream`}</title>
        <meta name="description" content="Workflow automation for developers" />
        {router && <link rel="canonical" href={`https://pipedream.com/docs${router.route === "/"
          ? ""
          : router.route}`} />}
        <link rel="icon" href="/docs/favicon.ico" />
        <meta property="og:title" content={`${title} — Pipedream`} />
      </>
    )
  },
  // Custom components that replace the default MDX components
  components: {
    "a": PipedreamLink,
  },
  logo: PipedreamTextLogo,
  logoLink: "https://pipedream.com",
  project: {
    link: "https://github.com/PipedreamHQ/pipedream",
  },
  chat: {
    link: "https://pipedream.com/support",
    icon: SlackLogo,
  },
  docsRepositoryBase: "https://github.com/PipedreamHQ/pipedream/blob/master/docs-v2",
  footer: {
    content: (
      <span>
        Pipedream, Inc. {new Date().getFullYear()} {" "}
      </span>
    ),
  },
  color: {
    hue: 153, // Pipedream green
    saturation: 100,
  },
  feedback: {
    content: null,  // By default this showed a Discord support icon, this was the recommended way to disable it
  },
  sidebar: {
    autoCollapse: true,
    defaultMenuCollapseLevel: 1,
  },
  search: {
    component: DocSearch,
  },
  // We can add banners to the docs for product announcements
  // banner: {
  //   key: "announcement-key", // Used for dismissible state in localStorage
  //   dismissible: true, // Makes the banner dismissible
  //   content: (
  //     <a href="https://pipedream.com/connect/demo/" target="_blank" rel="noreferrer">
  //       Check out the new Pipedream Connect SDK Playground →
  //     </a>
  //   ),
  // },
};

export default config;
