import { gql } from "graphql-request";

export const GET_SLUGS_PUBLIC = gql`
  query GetSlugQuery {
    blog(filter: { status: { _eq: "published" }, website: { _eq: "bygnow" } }) {
      slug
    }
    best(filter: { status: { _eq: "published" } }) {
      slug
    }
    pages(filter: { status: { _eq: "published" } }) {
      slug
    }
  }
`;

export const GET_SLUGS_PRIVATE = gql`
  query GetSlugQuery {
    blog(filter: { website: { _eq: "bygnow" } }) {
      slug
    }
    best {
      slug
    }
    pages {
      slug
    }
  }
`;

export const GET_SINGLE_BEST_OF = gql`
  query GET_SINGLE_BEST_OF($slug: String) {
    best(filter: { slug: { _eq: $slug } }) {
      date_created
      date_updated
      title
      slug
      author {
        avatar {
          id
          filename_download
        }
        name
      }
      meta_title
      meta_description
      excerpt
      introduction
      products {
        best
        name
        image {
          id
          filename_download
        }
        features
        link
        body
      }
      conclusion
    }
  }
`;

export const GET_METADATA_PAGES = gql`
  query GET_METADATA_PAGES($slug: String) {
    pages(filter: { slug: { _eq: $slug } }) {
      meta_title
      meta_description
      keyword
      slug
    }
  }
`;

export const GET_SINGLE_PAGES = gql`
  query GET_SINGLE_PAGE($slug: String) {
    pages(filter: { slug: { _eq: $slug } }) {
      hero_button_link
      hero_button_name
      hero_h1
      hero_h3
      hero_image {
        id
        filename_download
        title
      }
      hero_image_height
      hero_image_width
      hero_paragraph
      services_h2
      services_paragraph
      slug
      services {
        image {
          filename_download
          id
          title
        }
        title
      }
      faq(sort: "position") {
        question
        answer
        position
      }
    }
  }
`;

export const GET_BLOGPOSTS = gql`
  query GET_BLOGPOSTS($limit: Int, $page: Int) {
    blog(
      filter: { type: { _eq: "informational" }, website: { _eq: "bygnow" } }
      sort: "-date_created"
      limit: $limit
      page: $page
    ) {
      author {
        avatar {
          filename_download
          id
        }
        name
      }
      body
      excerpt
      date_created
      image {
        filename_download
        id
      }
      slug
      title
    }
    blog_aggregated(
      filter: { type: { _eq: "informational" }, website: { _eq: "bygnow" } }
    ) {
      count {
        slug
      }
    }
  }
`;

export const GET_ALL_BLOGPOSTS = gql`
  query GET_ALL_BLOGPOSTS {
    blog(
      filter: { status: { _eq: "published" }, website: { _eq: "bygnow" } }
      sort: "-date_created"
    ) {
      author {
        avatar {
          filename_download
          id
        }
        name
      }
      body
      excerpt
      date_created
      image {
        filename_download
        id
      }
      slug
      title
    }
    blog_aggregated(filter: { type: { _eq: "informational" } }) {
      count {
        slug
      }
    }
  }
`;

export const GET_SINGLE_BLOGPOST = gql`
  query GET_SINGLE_BLOGPOST($slug: String) {
    blog(filter: { slug: { _eq: $slug } }) {
      date_created
      date_updated
      title
      slug
      author {
        avatar {
          filename_download
          id
        }
        name
      }
      meta_description
      meta_title
      image {
        filename_download
        id
      }
      body
      type
    }
  }
`;
