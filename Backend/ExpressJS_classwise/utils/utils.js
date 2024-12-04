const getOptions = (req) => {
    const search = req.query.search || "";

    const page = parseInt(req.params.page) || 1;
    const pageSize = +req.params.pageSize || 10;
    const skip = (page - 1) * pageSize;
    const { dir = "asc", sort = "name" } = req.query;
    let filter = {};
    if (search) {
        filter = {
            name: { $regex: search, $options: "i" }, //options operator ->  i = make it insensitivity
        }
    }
    return {
        filter,
        pageSize,
        skip,
        dir,
        sort
    }
}

export { getOptions }