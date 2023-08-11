const paginate = <A>(array: A[], page: number) => {
  const itemsPerPage = 20

  return array.slice((page - 1) * itemsPerPage, page * itemsPerPage)
}

export default paginate
