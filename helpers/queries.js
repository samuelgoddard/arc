export const homeQuery = `{
  "home": *[_type == "home"][0]{
    title,
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

export const studioQuery = `{
  "studio": *[_type == "studio"][0]{
    title,
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

export const processQuery = `{
  "process": *[_type == "process"][0]{
    title,
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

export const privacyQuery = `{
  "privacy": *[_type == "privacy"][0]{
    title,
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