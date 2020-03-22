exports.onCreatePage = async ({ actions, page }) => {
  const { createPage, deletePage } = actions

  return new Promise((resolve, reject) => {
    const oldPage = { ...page }

    if (/home/.test(page.path)) {
      page.path = '/'

      deletePage(oldPage)
      createPage(page)
    }

    resolve()
  })
}