export const homeQuery = `{
  "home": *[_type == "home"][0]{
    title,
    heroText,
    heroImage {
      asset-> {
        ...
      },
      caption,
      alt,
      hotspot {
        x,
        y
      },
    },
    overviewHeading,
    overviewImage {
      asset-> {
        ...
      },
      caption,
      alt,
      hotspot {
        x,
        y
      },
    },
    overviewText,
    missionHeading,
    missionItems[]{
      title,
      text
    },
    footerImage {
      asset-> {
        ...
      },
      caption,
      alt,
      hotspot {
        x,
        y
      },
    },
    seo {
      ...,
      shareGraphic {
        asset->
      }
    },
  }
}`

export const studioQuery = `{
  "studio": *[_type == "studio"][0]{
    title,
    heroHeading,
    theTeamText,
    team[] {
      name,
      text,
      image {
        asset-> {
          ...
        },
        caption,
        alt,
        hotspot {
          x,
          y
        },
      }
    },
    theSpaceHeading,
    theSpaceText,
    theSpaceImage {
      asset-> {
        ...
      },
      caption,
      alt,
      hotspot {
        x,
        y
      },
    },
    seo {
      ...,
      shareGraphic {
        asset->
      }
    },
  }
}`

export const processQuery = `{
  "process": *[_type == "process"][0]{
    title,
    heroHeading,
    ourViewImagee {
      asset-> {
        ...
      },
      caption,
      alt,
      hotspot {
        x,
        y
      },
    },
    ourViewText,
    theNetworkHeading,
    theNetworkText,
    theNetworkListItems[] {
      title,
      department
    },
    theResponseHeading,
    theResponseItems[] {
      image {
        asset-> {
          ...
        },
        caption,
        alt,
        hotspot {
          x,
          y
        },
      },
      title,
      text
    },
    footerImage {
      asset-> {
        ...
      },
      caption,
      alt,
      hotspot {
        x,
        y
      },
    },
    seo {
      ...,
      shareGraphic {
        asset->
      }
    },
  }
}`

export const privacyQuery = `{
  "privacy": *[_type == "privacy"][0]{
    title,
    content,
    image {
      asset-> {
        ...
      },
      caption,
      alt,
      hotspot {
        x,
        y
      },
    },
    seo {
      ...,
      shareGraphic {
        asset->
      }
    },
  }
}`