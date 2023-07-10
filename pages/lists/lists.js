// pages/lists/lists.js
Page({
  onShareAppMessage() {
    return {

    }
  },
  /**
   * 页面的初始数据
   */
  data: {
    tabs: [],//分类数据
    vtabs: [],//商品数据
    activeTab: 0,//滚动高度
    height: 0,//滚动高度
    zuan: false,
    show: false,
    gouwuche: [],
    sum: 0,
    gomaisum: 0,
    xiaoheight: 0,
    gouwus: [],
    shanpdata: {},
    qvdigao: 0,
    shangpingpingjia: [],
    shipwupingjia:true,
    dianpupingjia: [{
      riqi: '2016-07-07',
      shijian: '12:34',
      pingjia: '油条凉了，而且没有酱。75分钟才到。很慢。送餐员态',
      xiai: 4,
      shi: 61,
      aa: true,
      bb: ['大王香菇卤', '大王香'],
      yonghu: '3xxxxxxx2',
      touxiang: 'https://static.galileo.xiaojukeji.com/static/tms/default_header.png'
    }, {
      riqi: '2016-07-07',
      shijian: '12:44',
      pingjia: '这次太慢了，下次希望能直接和客户沟通而不是我一次次打电话问，但快递师傅态度很好。',
      xiai: 4,
      shi: 60,
      aa: false,
      bb: ['大王香菇卤', '大王香菇卤', '大王香菇卤'],
      yonghu: 'jxxxxxxxl',
      touxiang: 'https://static.galileo.xiaojukeji.com/static/tms/default_header.png'
    }, {
      riqi: '2016-07-07',
      shijian: '12:44',
      pingjia: '我要求18点45送达，结果提前了45分钟，家里没人。',
      xiai: 1,
      shi: 41,
      aa: false,
      bb: ['大王香菇卤'],
      yonghu: 'jxxxxxxxl',
      touxiang: 'https://static.galileo.xiaojukeji.com/static/tms/default_header.png'
    }],
    mmonn: [{
      img:'../../image/goods/decrease_3@2x.png',
      text:'在线支付满28减5，满50减10'
    },{
      img:'../../image/goods/discount_3@2x.png',
      text:'单人精彩赛'
    },{
      img:'../../image/goods/discount_3@2x.png',
      text:'清肺雪梨汤8折抢购'
    },{
      img:'../../image/goods/special_3@2x.png',
      text:'特价饮品八折抢购'
    },{
      img:'../../image/goods/special_3@2x.png',
      text:'单人特色套餐'
    },{
      img:'../../image/goods/invoice_3@2x.png',
      text:'该商家支持开发票，请在下单时填写好发票抬头'
    },{
      img:'../../image/goods/guarantee_3@2x.png',
      text:'已加入外卖保”计划，食品安全保障'
    }],
    imge:['http://fuss10.elemecdn.com/8/71/c5cf5715740998d5040dda6e66abfjpeg.jpeg?imageView2/1/w/180/h/180','http://fuss10.elemecdn.com/b/6c/75bd250e5ba69868f3b1178afbda3jpeg.jpeg?imageView2/1/w/180/h/180','http://fuss10.elemecdn.com/f/96/3d608c5811bc2d902fc9ab9a5baa7jpeg.jpeg?imageView2/1/w/180/h/180'],
    shanjiaxx:['该商家支持开发票，请在下单时填写好发票抬头','品类：其他菜系、包子粥店','地址：北京市昌平区回龙观西大街龙观置业大厦底商B座102单元1340','营业时间：1000-2030']
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {
    const tabs = [{
        title: '商品',
        title2: '小程序开发进阶',
        img: 'http://mmbiz.qpic.cn/sz_mmbiz_jpg/GEWVeJPFkSEV5QjxLDJaL6ibHLSZ02TIcve0ocPXrdTVqGGbqAmh5Mw9V7504dlEiatSvnyibibHCrVQO2GEYsJicPA/0?wx_fmt=jpeg',
        desc: '本视频系列课程，由腾讯课堂NEXT学院与微信团队联合出品，通过实战案例，深入浅出地进行讲解。',
      },
      {
        title: '评价',
        title2: '微信小程序直播',
        img: 'http://mmbiz.qpic.cn/sz_mmbiz_png/GEWVeJPFkSHALb0g5rCc4Jf5IqDfdwhWJ43I1IvriaV5uFr9fLAuv3uxHR7DQstbIxhNXFoQEcxGzWwzQUDBd6Q/0?wx_fmt=png',
        desc: '微信小程序直播系列课程持续更新中，帮助大家更好地理解、应用微信小程序直播功能。',
      },
      {
        title: '商家',
        title2: '常见问题和解决方案',
        img: 'http://mmbiz.qpic.cn/sz_mmbiz_jpg/GEWVeJPFkSGqys4ibO2a8L9nnIgH0ibjNXfbicNbZQQYfxxUpmicQglAEYQ2btVXjOhY9gRtSTCxKvAlKFek7sRUFA/0?wx_fmt=jpeg',
        desc: '提高审核质量',
      }
    ]
    this.setData({
      tabs
    })


    // {
    //   name: '单人特色套餐',               名字
    //   lists: [{                          子元素
    //     name: '皮蛋瘦肉粥',                名字
    //     classification:'咸粥',               分类
    //     img: 'https://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/114/h/114',       图片
    //     sales:229,                     卖出
    //     evaluation:100,                  好评比（%）
    //     OriginalPrice:10,                现价（￥）
    //     presentPrice:12                    原价（￥）
    //   }]
    // }

    const vtabs = [{
        title: '热销榜',
        lists: [{
          // name: ''
        }]
      },
      {
        title: '单人特色套餐',
        lists: [{
            name: '皮蛋瘦肉粥',
            classification: '咸粥',
            img: 'http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/114/h/114',
            gomai: 0,
            sales: 229,
            evaluation: 100,
            OriginalPrice: 10,
            presentPrice: 12
          },
          {
            name: '扁豆焖面',
            // classification: '',
            img: 'http://fuss10.elemecdn.com/c/6b/29e3d29b0db63d36f7c500bca31d8jpeg.jpeg?imageView2/1/w/114/h/114',
            gomai: 0,
            sales: 1135,
            evaluation: 100,
            OriginalPrice: 10
            // presentPrice: 
          },
          {
            name: '葱花饼',
            // classification: '',
            img: 'http://fuss10.elemecdn.com/f/28/a51e7b18751bcdf871648a23fd3b4jpeg.jpeg?imageView2/1/w/114/h/114',
            gomai: 0,
            sales: 1505,
            evaluation: 100,
            OriginalPrice: 10
            // presentPrice: 
          },
          {
            name: '南瓜粥',
            // classification: '',
            img: 'https://tse3-mm.cn.bing.net/th/id/OIP-C.4a5PqgWaUunWw9CL7yreoQHaFj?w=251&h=188&c=7&r=0&o=5&pid=1.7',
            gomai: 0,
            sales: 1132,
            evaluation: 100,
            OriginalPrice: 24,
            // presentPrice: 
          }
        ]
      },
      {
        title: '特色粥品',
        lists: [{
            name: '皮蛋瘦肉粥',
            classification: '咸粥',
            img: 'http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/114/h/114',
            gomai: 0,
            sales: 229,
            evaluation: 100,
            OriginalPrice: 10,
            presentPrice: 12
          },
          {
            name: '链子核桃黑米粥',
            // classification: '',
            img: 'https://img.meishij.net/imgs/uploads/hu_4dd0c1ce4fadbbff0ab1d4ba296a712f.jpg',
            gomai: 0,
            sales: 1132,
            evaluation: 100,
            OriginalPrice: 10
            // presentPrice: 
          },
          {
            name: '雪梨银耳百合粥',
            // classification: '',
            img: 'https://i3.meishichina.com/atta/recipe/2015/12/11/20151211aytlr3s284ddl9xu.jpg?x-oss-process=style/p800',
            gomai: 0,
            sales: 1505,
            evaluation: 100,
            OriginalPrice: 24
            // presentPrice: 
          },
          {
            name: '南瓜粥',
            // classification: '',
            img: 'https://tse3-mm.cn.bing.net/th/id/OIP-C.4a5PqgWaUunWw9CL7yreoQHaFj?w=251&h=188&c=7&r=0&o=5&pid=1.7',
            gomai: 0,
            sales: 1132,
            evaluation: 100,
            OriginalPrice: 24,
            // presentPrice: 
          }
        ]
      },
      {
        title: '精选热菜',
        lists: [{
          // name: ''
        }]
      },
      {
        title: '爽口凉菜',
        lists: [{
          // name: ''
        }]
      },
      {
        title: '半成品',
        lists: [{
          // name: ''
        }]
      },
      {
        title: '饭类',
        lists: [{
          // name: ''
        }]
      },
      {
        title: '面类',
        lists: [{
          // name: ''
        }]
      }
    ]

    this.setData({
      vtabs,
    })

    let screenHeight = wx.getSystemInfoSync().windowHeight;
    this.setData({
      height: screenHeight - 230,
    });
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

  },
  aa() {
    console.log('测试');
  },

  onTabCLick(e) {
    const index = e.detail.index
    console.log('tabClick', index)
  },

  onChange(e) {
    let index = e.detail.index
    console.log('change', index)
  },
  burtton(e) {
    let outerIndex = e.currentTarget.dataset.outerIndex;
    let innerIndex = e.currentTarget.dataset.innerIndex;
    let aa = this.data.vtabs[innerIndex].lists[outerIndex].gomai;
    aa++;
    this.data.gomaisum++;
    console.log(innerIndex, outerIndex);
    this.data.vtabs[innerIndex].lists[outerIndex].innerIndex = innerIndex;
    this.data.vtabs[innerIndex].lists[outerIndex].outerIndex = outerIndex;
    let path = 'vtabs[' + innerIndex + '].lists[' + outerIndex + '].gomai';
    this.setData({
      [path]: aa
    });
    // 获取按钮的索引值
    this.sumaa();
    // console.log(this.data.vtabs[innerIndex].lists);
    return false;
  },
  burttonyi(e) {
    let outerIndex = e.currentTarget.dataset.outerIndex;
    let innerIndex = e.currentTarget.dataset.innerIndex;
    let aa = this.data.vtabs[innerIndex].lists[outerIndex].gomai;
    aa--;
    this.data.gomaisum--;
    console.log(innerIndex, outerIndex);

    let path = 'vtabs[' + innerIndex + '].lists[' + outerIndex + '].gomai';
    // this.data.vtabs[innerIndex].lists[outerIndex].innerIndex=innerIndex;
    // this.data.vtabs[innerIndex].lists[outerIndex].outerIndex=outerIndex;

    this.setData({
      [path]: aa,
    })
    this.sumaa();
    // console.log(this.data.vtabs[innerIndex].lists);
  },
  sumaa: function () {
    let sum = 0,
      gouwus = new Array(),
      gouwusdata = {};

    for (let tab of this.data.vtabs) {
      for (let item of tab.lists) {
        if (item.OriginalPrice != undefined && item.gomai != undefined) {
          if (item.gomai != 0) {
            // console.log(item.name);
            // console.log(item.OriginalPrice); // 打印每个列表项的名称
            // console.log(item.gomai); // 打印每个列表项的 gomai 值
            sum += item.OriginalPrice * item.gomai; //总价格
            gouwusdata = {
              name: item.name,
              OriginalPrice: item.OriginalPrice,
              gomai: item.gomai,
              innerIndex: item.innerIndex,
              outerIndex: item.outerIndex
            }
            gouwus.push(gouwusdata)
          }
        }
      }
    }
    // console.log(this.data.gomaisum);
    this.setData({
      sum: sum,
      gouwus: gouwus,
      gomaisum: this.data.gomaisum
    })
  },
  jiaxiao(e) {
    let innerIndex = e.currentTarget.dataset.innerIndex,
      aa = this.data.gouwus[innerIndex].gomai,
      index = this.data.gouwus[innerIndex].innerIndex,
      oudex = this.data.gouwus[innerIndex].outerIndex;
    aa++;
    this.data.gomaisum++;
    // console.log(aa);
    let path = 'vtabs[' + index + '].lists[' + oudex + '].gomai';
    this.setData({
      ['gouwus[' + innerIndex + '].gomai']: aa,
      [path]: aa
    })
    this.sumaa()
  },
  jianXiao(e) {
    let innerIndex = e.currentTarget.dataset.innerIndex,
      aa = this.data.gouwus[innerIndex].gomai,
      index = this.data.gouwus[innerIndex].innerIndex,
      oudex = this.data.gouwus[innerIndex].outerIndex;
    aa--;
    this.data.gomaisum--;
    let path = 'vtabs[' + index + '].lists[' + oudex + '].gomai';
    // console.log(aa);
    this.setData({
      ['gouwus[' + innerIndex + '].gomai']: aa,
      [path]: aa
    })
    this.sumaa()
  },
  qinkuo() {
    console.log(this.data.vtabs);
    for (let tab of this.data.vtabs) {
      for (let item of tab.lists) {
        item.gomai = 0;

      }
    }
    this.setData({
      vtabs: this.data.vtabs
    })
    this.sumaa();
    console.log(this.data.vtabs[1].lists);
  },
  // 1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
  anaa(e) {
    let outerIndex = e.currentTarget.dataset.outerIndex;
    let innerIndex = e.currentTarget.dataset.innerIndex;
    console.log(innerIndex, outerIndex);
    let aa = this.data.vtabs[innerIndex].lists[outerIndex];
    aa.jieshao = '一碗' + aa.name + '，总是我到粥店时的不二之选。香浓软滑，饱腹暖心，皮蛋的Q弹与瘦肉的滑嫩伴着粥香溢于满口，让人喝这样的一碗粥也觉得心满意足。';
    console.log(aa);
    let pingjia = [{
      riqi: '2016-07-07',
      shijian: '12:34',
      pingjia: '太少了，不够一个人吃！！',
      xiai: false,
      yonghu: '3xxxxxxx2',
      touxiang: 'https://static.galileo.xiaojukeji.com/static/tms/default_header.png'
    }, {
      riqi: '2016-07-07',
      shijian: '12:44',
      pingjia: '味道不错，就是有点儿咸，有待进一步优化',
      xiai: true,
      yonghu: 'jxxxxxxxl',
      touxiang: 'https://static.galileo.xiaojukeji.com/static/tms/default_header.png'
    }]
    this.setData({
      shanpdata: aa,
      shangpingpingjia: pingjia
    })
    // console.log(this.data.shangpingpingjia);
    let a = 0,
      i = 0,
      s = 0
    for (let tab of this.data.shangpingpingjia) {
      console.log(tab.xiai);
      if (tab.xiai == true || tab.xiai == false) {
        a += 1;
        if (tab.xiai == true) {
          i += 1;
        } else {
          s += 1;
        }
      }
    }
    console.log(a);
    wx.navigateTo({
      url: `/pages/ison/ison?id=${encodeURIComponent(JSON.stringify(aa))}&pinjia=${encodeURIComponent(JSON.stringify(pingjia))}
        &pingjiasum=${a}&haopingsum=${i}&chapingsum=${s}&gomaisum=${this.data.gomaisum}&sum=${this.data.sum}`
    });


  },
  guanbi() {
    this.setData({
      zuan: false
    })
  },
  tai() {
    this.setData({
      zuan: true
    })
  },
  open: function () {
    console.log(11);
    this.setData({
      show: true
    })
    let query = wx.createSelectorQuery(),
      xiaoheight;
    if (this.data.show == true) {
      query.select('.gouwuche').boundingClientRect(rect => {
        xiaoheight = rect.height - 70 - 40;
        console.log(xiaoheight);
      }).exec();
      this.setData({
        xiaoheight: xiaoheight
      })
    }
  },
  opan: function () {
    this.setData({
      show: false
    })
  },
  buttontap(e) {
    console.log(e.detail)
  },
  buttontap(e) {
    console.log(e.detail)
  }
})