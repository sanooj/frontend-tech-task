/**
 * product list post body
 */
const bodyQuery = JSON.stringify({
    query: `{
      categories(ids: "156126", locale: de_DE) {
        name
        articleCount
        childrenCategories {
          name
          urlPath
        }
        categoryArticles(first: 50) {
          articles {
            name
            variantName
            prices {
              currency
              regular {
                value
              }
            }
            images(
              format: WEBP
              maxWidth: 200
              maxHeight: 200
              limit: 1
            ) {
              path
            }
          }
        }
      }
    }`,
  })

/**
 * Fetch Requests
 */
export const requestOptions = {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: bodyQuery
};

/**
 * Fetch asyc function
 * @returns : Product list
 */
export async function getProductList() {
    return await fetch('/graphql', requestOptions)
        .then(response => response.json())
        .then(({data}) => ({ categories: data && data.categories}))
        .catch((err) => console.error(err));
} 