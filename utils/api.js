/**
 * API 接口封装 - 统一请求入口
 */

const app = getApp();

function request(options) {
  const { url, method = 'GET', data = {}, header = {} } = options;

  return new Promise((resolve, reject) => {
    wx.request({
      url: `${app.globalData.baseUrl}${url}`,
      method,
      data,
      header: {
        'Content-Type': 'application/json',
        ...header
      },
      success(res) {
        if (res.statusCode === 200) {
          resolve(res.data);
        } else {
          reject(res);
        }
      },
      fail(err) {
        wx.showToast({
          title: '网络异常，请稍后重试',
          icon: 'none'
        });
        reject(err);
      }
    });
  });
}

function get(url, data) {
  return request({ url, method: 'GET', data });
}

function post(url, data) {
  return request({ url, method: 'POST', data });
}

function put(url, data) {
  return request({ url, method: 'PUT', data });
}

function del(url, data) {
  return request({ url, method: 'DELETE', data });
}

module.exports = {
  request,
  get,
  post,
  put,
  del
};
