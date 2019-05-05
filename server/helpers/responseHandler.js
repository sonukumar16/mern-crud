module.exports = {
  successWithData: (res, data, msg, token) => {
    return res.status(200).json({
      responseCode: 200,
      status: true,
      message: msg,
      ...(token && { token }),
      data
    });
  },
  noDataFound: (res, msg) => {
    return res.json({
      responseCode: 204,
      status: true,
      message: msg,
      data: null
    });
  },
  unprocessable :(res,msg)=> {
    return res.status(422).json({
      responseCode: 422,
      status: false,
      message: msg
    });
  },
  success: (res, msg,token) => {
    return res.status(200).json({
      responseCode: 200,
      status: true,
      message: msg, 
      token
    });
  },
  successWithPagination: (res, data, msg) => {
    const { docs, page, limit, offset, total, pages } = data;
    return res.status(200).json({
      responseCode: 200,
      status:true,
      message:msg,
      data: docs,
      pagination: { page, limit, offset, total, pages }
    }); 
  }
};
