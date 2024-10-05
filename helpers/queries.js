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
      shapeImage {
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
  },
  "contact": *[_type == "contact"][0]{
    companyName,
    address,
    addressMapImage {
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
    addressLondon,
    addressLononMapImage {
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
    companyNumber
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
      jobTitle,
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
    alumniText,
    alumni[] {
      name,
      jobTitle,
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
  },
  "contact": *[_type == "contact"][0]{
    companyName,
    address,
    addressMapImage {
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
    addressLondon,
    addressLononMapImage {
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
    companyNumber
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
    ourViewServices[] {
      title,
      text
    },
    theNetworkHeading,
    theNetworkText,
    theNetworkListItems[] {
      title,
      department
    },
    teamsWeWorkWithText,
    teamsWeWorkWithLogos[] {
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
    footerText,
    seo {
      ...,
      shareGraphic {
        asset->
      }
    },
  },
  "contact": *[_type == "contact"][0]{
    companyName,
    address,
    addressMapImage {
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
    addressLondon,
    addressLononMapImage {
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
    companyNumber
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
  },
  "contact": *[_type == "contact"][0]{
    companyName,
    address,
    addressMapImage {
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
    addressLondon,
    addressLononMapImage {
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
    companyNumber
  }
}`

export const projectsQuery = `{
  "projects": *[_type == "project"] | order(orderRank asc){
    orderRank,
    title,
    text,
    tags[],
    meta[],
    images[] {
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
  "contact": *[_type == "contact"][0]{
    companyName,
    address,
    addressMapImage {
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
    addressLondon,
    addressLononMapImage {
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
    companyNumber
  }
}`