function response(res, status, data) {
    return (
        res.status(status).json({
            status: 'Success',
            length: data.length,
            data
        })
    )
}

export default response;