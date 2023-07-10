// pages/ison/ison.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    shanpdata: {},
    shangpingpingjia: {},
    pingjiasum: 0,
    haopingsum: 0,
    chapingsum: 0,
    qvdigao:0,
    gomaisum:0,
    sum: 0,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    let aa = JSON.parse(decodeURIComponent(options.id)),
      pinjia = JSON.parse(decodeURIComponent(options.pinjia)),
      a = options.pingjiasum,
      i = options.haopingsum,
      s = options.chapingsum;
    // console.log(options);
    let screenHeight = wx.getSystemInfoSync().windowHeight;
 
    this.setData({
      shanpdata: aa,
      shangpingpingjia: pinjia,
      pingjiasum: a,
      haopingsum: i,
      chapingsum: s,
      qvdigao: screenHeight - 70,
      gomaisum:options.gomaisum,
      sum:options.sum,
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})