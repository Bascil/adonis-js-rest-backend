export default class PaginationTrait {
  public transform({ data, meta }: any) {
    const { currentPage, lastPage, total, perPage, firstItem, lastItem } = meta

    return {
      data,
      meta: {
        from: firstItem ?? (currentPage - 1) * perPage + 1,
        to: lastItem ?? Math.min(total, currentPage * perPage),
        total,
        perPage,
        lastPage,
        prevPage: currentPage > 1 ? currentPage - 1 : 1,
        nextPage: currentPage < lastPage ? currentPage + 1 : 1,
        currentPage,
      },
    }
  }
}
