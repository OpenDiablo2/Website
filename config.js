const config = {
  gatsby: {
    pathPrefix: "/",
    siteUrl: "https://github.com/OpenDiablo2/OpenDiablo2",
    gaTrackingId: null
  },
  header: {
    logo: "https://github.com/OpenDiablo2/OpenDiablo2/raw/master/d2logo.png",
    logoLink: "https://github.com/OpenDiablo2/OpenDiablo2",
    title: "Open Diablo II",
    githubUrl: "https://github.com/OpenDiablo2/OpenDiablo2",
    helpUrl: "https://github.com/OpenDiablo2/OpenDiablo2/issues",
    tweetText: "",
    links: [{ text: "", link: "" }],
  },
  sidebar: {
    forcedNavOrder: ["/introduction", "/configfile", "/screenshots", "/tables"],
    links: [
      { text: "Discord", link: "https://discord.gg/pRy8tdc" },
      { text: "Twitch", link: "https://www.twitch.tv/essial/" }
    ],
    frontline: false,
    ignoreIndex: true
  },
  siteMetadata: {
    title: "OpenDiablo II",
    description: "OpenDiablo II Documentation & Ressources",
    ogImage: null,
    docsLocation: "https://github.com/OpenDiablo2/Website/tree/master/content",
    favicon: "https://github.com/OpenDiablo2/OpenDiablo2/raw/master/d2logo.png"
  }
};

module.exports = config;
