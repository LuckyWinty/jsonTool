[
	{"name":"数据源","nick":"dataSource","type":"hidden","value":"mart"},
	{"name":"展示开始时间" ,"nick":"begin","type":"date" },
	{"name":"展示结束时间" ,"nick":"end","type":"date" },
	{"name":"活动Id","nick":"actId","type":"id","require":"require","ps":"活动Id"},
	{"name":"区域Id","nick":"areaId","type":"id","require":"require","ps":"区域Id"},
	{"name":"拉取数量","nick":"pc","type":"number","require":"require"},
	{"name":"默认展示数量","nick":"shownum","type":"number"},
	{"name":"ptag","nick":"ptag","type":"ptag"}
]

[
	{"name":"数据源","nick":"dataSource","type":"hidden","value":"cpc"},
	{"name": "焦点数据" ,"nick":"mpmData","type":"level","dataFormat":[
		{"name":"广告组ID" ,"nick":"gid","type":"id","require":"require" },
		{"name":"广告位ID" ,"nick":"locationId","type":"id","require":"require" },
		{"name":"素材拉取数量" ,"nick":"pc","type":"number","require":"require"},
		{"name":"默认展示数量","nick":"shownum","type":"number"}
	]},
	{"name":"开始时间" ,"nick":"begin","type":"date" },
	{"name":"结束时间" ,"nick":"end","type":"date" },
	{"name":"ptag-domain","nick":"ptagdomain","type":"ptagDomain"}
]

[
	{"name":"是否透明背景","nick":"type","type":"radio","value":"0","data":[
		{"name":"否","value":"0"},
  		{"name":"是","value":"1"}
	]},
	{"name":"设置高度","nick":"height","type":"number","require":"require","value":"30"},
	{"name":"设置背景颜色","nick":"color","type":"color","value":"#ffffff"}
]

[
	{"name":"主标题","nick":"title","type":"text","require":"require"},
	{"name":"副标题","nick":"subTitle","type":"text"},
	{"name":"字体颜色","nick":"color","type":"color"},
	{"name":"跳转链接","nick":"tourl","type":"url"},
	{"name":"ptag","nick":"ptag","type":"ptag"},
	{"name":"icon地址","nick":"iconimg","type":"img"},
	{"name":"展示环境","nick":"showEnv","type":"radio","value":"0","data":[
		{"name":"都展示","value":"0"},
		{"name":"只在微信","value":"1"},
		{"name":"只在手q","value":"2"}
	]}
]

[
	{"name":"图片","nick":"list","type":"level","dataFormat":[
			{"name":"展示开始时间","nick":"begin","type":"date"},
			{"name":"展示结束时间","nick":"end","type":"date"},
			{"name":"图片链接","nick":"img","type":"img","require":"require"},
			{"name":"跳转链接","nick":"url","type":"url"},
			{"name":"标题","nick":"title","type":"text"},
			{"name":"描述","nick":"desc","type":"text"},
			{"name":"ptag","nick":"ptag","type":"ptag"},
			{"name":"背景颜色","nick":"color","type":"color"},
			{"name":"logo","nick":"ext1","type":"img"}
	]},
	{"name":"使用模板","nick":"tpl","type":"input","dataType":"tpl","tplType":"imagelist"}
]

[
	{"name":"配置方式","nick":"source","type":"radio","value":"0","data":[
	  	{"name":"模块ID","value":"1"},
	  	{"name":"推荐位ID","value":"0"}
	]},
	{"name":"分组一","nick":"rule","referer":"source","expect":"1","type":"group","dataFormat":[
		{"name":"模块ID","nick":"mid","type":"id","require":"require"},
		{"name":"ptag","nick":"ptag","type":"ptag"}
    ]},
	{"name":"分组二","nick":"manual","referer":"source","expect":"0","type":"group","dataFormat":[
		{"name":"推荐位ID","nick":"p","type":"id","require":"require"},
		{"name":"ptag","nick":"ptag","type":"ptag"},
		{"name":"拉取数量","nick":"limit","type":"number","value":"20"}
    ]}

]


[
	{"name":"数据源","nick":"dataSource","type":"hidden","value":"sku"},
	{"name":"sku列表","nick":"skuIdList","type":"text","mode":"textarea","require":"require","ps":"多个sku用英文逗号分隔"},
	{"name":"ptag","nick":"skuPtag","type":"ptag"}
]

[
	{"name":"抢宝ID","nick":"qiangbaoId","type":"id","require":"require"},
	{"name":"区域ID","nick":"sec","type":"id","require":"require"},
	{"name":"抢宝Key","nick":"qiangbaoKey","type":"text","require":"require"},
	{"name":"拉取数量","nick":"pageSize","type":"number"},
	{"name":"ptag","nick":"ptag","type":"ptag"},
	{"name":"更多链接","nick":"moreurl","type":"url"}
]


[
	{"name":"数据源","nick":"dataSource","type":"hidden","value":"keyword"},
	{"name":"配置方式","nick":"type","type":"radio","value":"0","data":[
  	{"name":"ruleID","value":"0"},
  	{"name":"手动配置","value":"1"}
  ],"require":"require"},
	{"name":"分组一","nick":"rule","referer":"type","expect":"0","type":"group","dataFormat":[
		{"name":"ruleId","nick":"ruleId","type":"id","require":"require"},
		{"name":"拉取数量","nick":"pc","type":"number"},
		{"name":"展示数量","nick":"showNum","type":"number"},
		{"name":"ptag","nick":"ptag","type":"ptag"}
  ]},
	{"name":"分组二","nick":"manual","referer":"type","expect":"1","type":"group","dataFormat":[
		{"name":"关键词","nick":"list","type":"level","dataFormat":[
			{"name":"关键词","nick":"keyname","type":"text","require":"require"},
			{"name":"跳转链接","nick":"keyurl","type":"url","require":"require"},
			{"name":"ptag","nick":"ptag","type":"ptag"}
		]}
	]}
]

[
		{"name":"tab","nick":"tabs","type":"level","selectField":"isCur","childField":"sub","biField":"shall","dataFormat":[
			{"name":"导航名称","nick":"tabTitle","type":"text"},
			{"name":"hot角标","nick":"hot","type":"check"},
			{"name":"ptag","nick":"ptag","type":"ptag"},
			{"name":"bi设置","nick":"floorid","type":"id"},
			{"name":"流量设置","nick":"rate","type":"text"},
			{"name":"选中态图片","nick":"highlightImg","type":"img"},
			{"name":"常规态图片","nick":"img","type":"img"}
		]}
]

[
	{"name":"数据源","nick":"dataSource","type":"hidden","value":"shoppingenter"},
	{"name":"店铺ID","nick":"venderid","type":"id","require":"require"},
	{"name":"店铺标语","nick":"venderSlogan","type":"text"},
	{"name":"ptag","nick":"ptag","type":"ptag"}
]


[
	{"name":"视频地址","nick":"videoUrl","type":"url","require":"require"},
	{"name":"预览图片","nick":"videoPreviewImg","type":"img","require":"require"},
	{"name":"ptag","nick":"ptag","type":"ptag"}
]

[
	{"name":"数据源","nick":"dataSource","type":"hidden","value":"mpmcollection"},
	{"name":"搭配ID","nick":"tagid","type":"id","value":"10410","require":"require"},
	{"name":"拉取个数","nick":"num","type":"number","value":"2","require":"require"},
	{"name":"ptag","nick":"ptag","type":"ptag"}
]

[
	{"name":"数据源","nick":"dataSource","type":"hidden","value":"mpmauctionlist"},
	{"name":"配置方式","nick":"type","type":"radio","value":"0","data":[
  	{"name":"专场","value":"0"},
  	{"name":"单品","value":"1"}
  ],"require":"require"},
	{"name":"分组一","nick":"rule","referer":"type","expect":"0","type":"group","dataFormat":[
		{"name":"专场ID","nick":"albnum","type":"id","require":"require"}
  ]},
	{"name":"分组二","nick":"manual","referer":"type","expect":"1","type":"group","dataFormat":[
		{"name":"单品ID","nick":"paimaiid","type":"id","require":"require"}
	]}
]

[
	{"name":"数据源","nick":"dataSource","type":"hidden","value":"mpmcpcthree"},
	{"name":"广告组ID","nick":"grids","type":"id","require":"require"},
	{"name":"广告位ID","nick":"locationid","type":"id","require":"require"},
	{"name":"拉取数量","nick":"cpcnum","type":"number","require":"require"},
	{"name":"ptag","nick":"ptag","type":"ptag"}
]

[
	{"name":"图片地址","nick":"imgsrc","type":"img","require":"require"},
	{"name":"展示开始时间","nick":"begin","type":"date"},
	{"name":"展示结束时间","nick":"end","type":"date"},
	{"name":"可见用户","nick":"isnewusershow","type":"radio","value":"1","data":[
			{"name":"全部可见","value":"1"},
			{"name":"仅新用户可见","value":"0"},
			{"name":"仅老用户可见","value":"2"}
	]},
	{"name":"全图链接","nick":"fullmap","type":"input","dataType":"mpmfullmap"},
	{"name":"图片热区","nick":"heatarea","type":"level","selectField":"isCur","dataType":"mpmimg","dataFormat":[
		{"name":"操作","nick":"action","type":"select","value":"link","data":[
				{"name":"链接","value":"link"},
				{"name":"领券","value":"activecoupon"},
				{"name":"自营券","value":"shopcoupon"},
				{"name":"页内导航","value":"anchor"},
				{"name":"活动预约","value":"appoint"},
				{"name":"商品价格","value":"skuprice"},
				{"name":"sku预约","value":"skuyuyue"},
				{"name":"文字","value":"customfont"}
		]},
		{"name":"链接组","nick":"g1","referer":"action","expect":"link","type":"group","dataFormat":[
				{"name":"链接地址","nick":"linkurl","type":"url","dataType":"sku-url"}
		]},
		{"name":"领券组","nick":"g2","referer":"action","expect":"activecoupon","type":"group","dataFormat":[
				{"name":"活动标识","nick":"activeId","type":"text"},
				{"name":"领券等级","nick":"activeLevel","type":"text"}
		]},
		{"name":"自营券组","nick":"g3","referer":"action","expect":"shopcoupon","type":"group","dataFormat":[
				{"name":"自营券url","nick":"shopcoupon","type":"url"}
		]},
		{"name":"页内导航组","nick":"g4","referer":"action","expect":"anchor","type":"group","dataFormat":[
				{"name":"选取模块","nick":"anchordes","type":"anchor"}
		]},
		{"name":"活动预约","nick":"g5","referer":"action","expect":"appoint","type":"group","dataFormat":[
				{"name":"预约id","nick":"appoint","type":"id"},
				{"name":"预约成功文案","nick":"appointDes","type":"text"},
				{"name":"ptag","nick":"ptag","type":"ptag"}
		]},
		{"name":"商品价格组","nick":"g6","referer":"action","expect":"skuprice","type":"group","dataFormat":[
				{"name":"SKU","nick":"skuid","type":"text","dataType":"mpmimgprice"},
				{"name":"样式","nick":"priceType","type":"select","value":"0","data":[
						{"name":"9,99","value":"0"},
						{"name":"￥9.99","value":"1"},
						{"name":"9.99RMB","value":"2"},
						{"name":"RMB:9.99","value":"3"}
				]},
				{"name":"字体大小","nick":"fontsize","type":"text"},
				{"name":"颜色","nick":"color","type":"color"},
				{"name":"是否展示小数点","nick":"showdotflag","type":"radio","value":"1","data":[
						{"name":"展示","value":"1"},
						{"name":"不展示","value":"2"}
				]}
		]},
		{"name":"商品预约组","nick":"g7","referer":"action","expect":"skuyuyue","type":"group","dataFormat":[
				{"name":"skuId","nick":"yuyueskuid","type":"id"}
		]},
		{"name":"文字组","nick":"g7","referer":"action","expect":"customfont","type":"group","dataFormat":[
				{"name":"文字内容","nick":"content","type":"text","mode":"textarea"},
				{"name":"字体粗细","nick":"fontbold","type":"select","value":"100","data":[
						{"name":"细体","value":"100"},
						{"name":"中体","value":"500"},
						{"name":"粗体","value":"900"}
				]},
				{"name":"字体选择","nick":"fontfamily","type":"select","value":"Microsoft YaHei","data":[
						{"name":"微软雅黑","value":"Microsoft YaHei"},
						{"name":"黑体","value":"SimHei"},
						{"name":"宋体","value":"SimSun"}
				]},
				{"name":"字体大小","nick":"contentfontsize","type":"text"},
				{"name":"颜色","nick":"contentcolor","type":"color"}
		]}
	]}
]

[
	{"name":"导航位置","nick":"position","type":"radio","value":"1","data":[
		{"name":"吸顶","value":"1"},
		{"name":"吸底","value":"2"}
	]},
	{"name":"锚点类型","nick":"anchortype","type":"radio","value":"1","data":[
		{"name":"内部锚点","value":"1"},
		{"name":"外链跳转","value":"2"}
	]},
	{"name":"内部锚点组","nick":"x","referer":"anchortype","expect":"1","type":"group","dataFormat":[
		{"name":"tab","nick":"tabs","type":"level","selectField":"isCur","dataFormat":[
			{"name":"导航名称","nick":"tabTitle","type":"text"},
			{"name":"hot角标","nick":"hot","type":"check"},
			{"name":"ptag","nick":"ptag","type":"ptag"},
			{"name":"定位位置","nick":"uid","type":"anchor"},
			{"name":"选中态图片","nick":"highlightImg","type":"img"},
			{"name":"常规态图片","nick":"img","type":"img"}
		]}
	]},
	{"name":"外链组","nick":"y","referer":"anchortype","expect":"2","type":"group","dataFormat":[
		{"name":"tab","nick":"tabs","type":"level","selectField":"isCur","dataFormat":[
			{"name":"导航名称","nick":"tabTitle","type":"text"},
			{"name":"hot角标","nick":"hot","type":"check"},
			{"name":"ptag","nick":"ptag","type":"ptag"},
			{"name":"外链地址","nick":"tabOuturl","type":"url"},
			{"name":"选中态图片","nick":"highlightImg","type":"img"},
			{"name":"常规态图片","nick":"img","type":"img"}
		]}
	]}
]

[
	{"name":"优惠券","nick":"list","type":"level","dataFormat":[
			{"name":"展示开始时间","nick":"begin","type":"date"},
			{"name":"展示结束时间","nick":"end","type":"date"},
			{"name":"面额","nick":"price","type":"text"},
			{"name":"使用门槛","nick":"gate","type":"text"},
			{"name":"券名称","nick":"name","type":"text"},
			{"name":"自定义描述","nick":"fetchdesc","type":"text"},
			{"name":"ptag","nick":"ptag","type":"ptag","auto":"click"},

			{"name":"配置方式","nick":"type","type":"radio","value":"1","data":[
			  	{"name":"营销活动","value":"1"},
			  	{"name":"免费领券活动","value":"shop"},
			  	{"name":"白条券","value":"baitiao"},
			  	{"name":"券包","value":"quanbao"},
			  	{"name":"京豆换券","value":"jingdou"}
			]},
			{"name":"营销活动配置组","nick":"cp1","referer":"type","expect":"1","type":"group","dataFormat":[

					{"name":"活动标识","nick":"key","type":"text","dataType":"marketCoupon"},
					{"name":"等级","nick":"level","type":"text"},
					{"name":"实名统计id","nick":"authnameid","type":"text"},
					{"name":"是否显示浮层","nick":"showTips","type":"radio","value":"0","data":[
					  	{"name":"否","value":"0"},
					  	{"name":"是","value":"1"}
					]},
					{"name":"浮层配置组","nick":"rule","referer":"showTips","expect":"1","type":"group","dataFormat":[
							{"name":"浮层跳转链接","nick":"successUrl","type":"url"}
					]}
			]},
			{"name":"免费活动配置组","nick":"cp2","referer":"type","expect":"shop","type":"group","dataFormat":[
					{"name":"优惠券链接","nick":"link","type":"url","dataType":"freecoupon"},
					{"name":"是否显示浮层","nick":"showTips","type":"radio","value":"0","data":[
					  	{"name":"否","value":"0"},
					  	{"name":"是","value":"1"}
					]},
					{"name":"浮层配置组","nick":"rule","referer":"showTips","expect":"1","type":"group","dataFormat":[
							{"name":"浮层跳转链接","nick":"successUrl","type":"url"}
					]}
			]},
			{"name":"白条配置组","nick":"cp3","referer":"type","expect":"baitiao","type":"group","dataFormat":[
					{"name":"白条券链接","nick":"link","type":"url"}
			]},
			{"name":"京豆配置组","nick":"cp4","referer":"type","expect":"jingdou","type":"group","dataFormat":[
					{"name":"项目ID","nick":"jditemId","type":"text","dataType":"jingdou"},
					{"name":"消耗京豆数量","nick":"jdnum","type":"text"}
			]}
		]}

]


[
	{"name":"配置方式","nick":"showType","type":"radio","value":"topic","data":[
		{"name":"话题","value":"topic"},
		{"name":"类目","value":"category"},
		{"name":"文章","value":"article"}
	]},
	{"name":"话题","nick":"g","referer":"showType","expect":"topic","type":"group","dataFormat":[
			{"name":"话题ID","nick":"tagId","type":"id"},
			{"name":"拉取数量","nick":"pageSize","type":"number"},
			{"name":"置顶文章ID","nick":"topShareId","type":"text"}
	]},
	{"name":"类目","nick":"l","referer":"showType","expect":"category","type":"group","dataFormat":[
		{"name":"类目ID","nick":"categoryId","type":"id"},
		{"name":"拉取数量","nick":"pageSize","type":"number"},
		{"name":"置顶文章ID","nick":"topShareId","type":"text"}
	]},
	{"name":"文章","nick":"a","referer":"showType","expect":"article","type":"group","dataFormat":[
		{"name":"文章ID","nick":"shareIds","type":"text","mode":"textarea","ps":"多篇文章id以英文逗号分隔"}
	]},
	{"name":"ptag","nick":"ptag","type":"ptag"}
]

[
	{"name":"ptag","nick":"ptag","type":"ptag"},
	{"name":"抽奖活动标识","nick":"activeId","type":"text","dataType":"nine","require":"require"},
	{"name":"活动信息标识","nick":"bizType","type":"text","require":"require"},
	{"name":"可见用户","nick":"isnewusershow","type":"radio","value":"1","data":[
			{"name":"全部可见","value":"1"},
			{"name":"仅新用户可见","value":"0"},
			{"name":"仅老用户可见","value":"2"}
	]},
	{"name":"抽奖限制","nick":"xianzhi","type":"radio","value":"0","data":[
			{"name":"无限制","value":"0"},
			{"name":"每天仅限1次","value":"1"},
			{"name":"每天仅限2次","value":"2"},
			{"name":"每天仅限3次","value":"3"}
	]},
	{"name":"宫格颜色","nick":"ggbgcolor","type":"color","value":"#ffe00d"},
	{"name":"按钮颜色","nick":"btnbgcolor","type":"color","value":"#ff689d"},
	{"name":"按钮边框颜色","nick":"btnbordercolor","type":"color","value":"#ec234f"},
	{"name":"奖品信息","nick":"prizes","type":"input","dataType":"nine-prize"}
]

[
	{"name":"自定义代码","nick":"code","type":"text","mode":"textarea"}
]


[
	{"name":"跳转链接","nick":"floatingurl","type":"url","require":"require"},
	{"name":"ptag","nick":"ptag","type":"ptag"},
	{"name":"素材图地址","nick":"iconimg","type":"img","require":"require"}
]

[
	{"name":"场次","nick":"tabs","type":"level","selectField":"isCur","dataFormat":[
		{"name":"tab标题","nick":"tabtitle","type":"text"},
		{"name":"开始时间","nick":"begin","type":"date"},
		{"name":"结束时间","nick":"end","type":"date"},
		{"name":"活动id","nick":"actId","type":"id"},
		{"name":"区域id","nick":"areaId","type":"id"},
		{"name":"拉取数量","nick":"pc","type":"number"},
		{"name":"默认展示数量","nick":"shownum","type":"number"},
		{"name":"预约id","nick":"yuyueid","type":"id"},
		{"name":"tab点击ptag","nick":"tabptag","type":"ptag"},
		{"name":"商品PTAG","nick":"ptag","type":"ptag"}
	]},
	{"name":"使用模板","nick":"tpl","type":"input","dataType":"tpl","tplType":"miaosha"}
]

[

	// {"name":"tab导航","nick":"tabs","type":"switchTab","dataFormat":[
	// 	{"name":"Tab名称","nick":"tabTitle","type":"text"},
	// 	{"name":"hot角标","nick":"hot","type":"check"},
	// 	{"name":"Tab ptag","nick":"ptag","type":"ptag"},
	// 	{"name":"流量比例","nick":"rate","type":"text"},
	// 	{"name":"导航","nick":"floor","type":"level","biField":"shallid","selectField":"isCur","childField":"sub","dataFormat":[
	// 		{"name":"导航名称","nick":"floorTitle","type":"text"},
	// 		{"name":"导航ptag","nick":"ptag","type":"ptag"},
	// 		{"name":"主楼层id","nick":"floorid","type":"text"}
	// 	]}
	// ]}

]

[
  {"name":"排行榜ID","nick":"rankid","type":"id","require":"require"},
  {"name":"拉取商品数量","nick":"getnum","type":"number","require":"require"},
  {"name":"商品排序方式","nick":"ranktype","require":"require","type":"radio","value":"0","data":[
    {"name":"按销量排序","value":"0"},
    {"name":"按折扣排序","value":"1"}
  ]},
  {"name":"ptag","nick":"ptag","type":"ptag"}
]

[
	{"name":"头图","nick":"hdimgsrc","type":"img"},
	{"name":"利益点","nick":"interestpoint","type":"level","dataFormat":[
			{"name":"开始时间","nick":"begin","type":"date"},
			{"name":"结束时间","nick":"end","type":"date"},
			{"name":"利益点文案","nick":"interestdes","type":"text"}
	]},
	{"name":"时间轴背景色","nick":"timeaxiscolor","type":"color"},
	{"name":"时间轴","nick":"timeaxis","type":"level","dataFormat":[
			{"name":"开始时间","nick":"begin","type":"date"},
			{"name":"结束时间","nick":"end","type":"date"},
			{"name":"第一行文案","nick":"timeaxisone","type":"text"},
			{"name":"第二行文案","nick":"timeaxistwo","type":"text"},
			{"name":"第三行文案","nick":"timeaxisthree","type":"text"}
	]},
	{"name":"一键预约背景色(微信可不选):","nick":"appointcolor","type":"color"},
	{"name":"预约","nick":"appointarr","type":"level","dataFormat":[
			{"name":"开始时间","nick":"begin","type":"date"},
			{"name":"结束时间","nick":"end","type":"date"},
			{"name":"预约ID","nick":"appointids","type":"id"},
			{"name":"预约前文案","nick":"appointdes","type":"text"},
			{"name":"已经预约文案","nick":"appointeddes","type":"text"},
			{"name":"ptag","nick":"ptag","type":"ptag"}
	]},
	{"name":"倒计时时间","nick":"daojitime","type":"date"}
]

[
	{"name":"搭配key","nick":"dapeikey","type":"text","require":"require"},
	{"name":"ptag","nick":"ptag","type":"ptag"},
	{"name":"拉取个数","nick":"num","type":"number","require":"require"}
]

[
	{"name":"数据源","nick":"dataSource","type":"hidden","value":"shoppingcartyh"},
	{"name":"ptag","nick":"ptag","type":"ptag"}
]

[
	{"name":"数据源","nick":"dataSource","type":"hidden","value":"contentline"},
	{"name":"配置方式","nick":"fetchtype","type":"radio","value":"0","data":[
  	{"name":"批量文章id","value":"0"},
  	{"name":"文章id","value":"1"}
  ]},
	{"name":"分组一","nick":"g1","referer":"fetchtype","expect":"0","type":"group","dataFormat":[
		{"name":"批量文章id","nick":"shareIds","type":"text","mode":"textarea"}
  ]},
	{"name":"分组二","nick":"g2","referer":"fetchtype","expect":"1","type":"group","dataFormat":[
		{"name":"文章","nick":"singleList","type":"level","dataFormat":[
			{"name":"文章id","nick":"shareId","type":"text"},
			{"name":"标题","nick":"title","type":"text"},
			{"name":"封面图","nick":"cover","type":"img"},
			{"name":"标签","nick":"tags","type":"text"},
			{"name":"ptag","nick":"ptag","type":"ptag"}
		]},
		{"name":"标签图","nick":"tagImg","type":"img"}
	]},
	{"name":"ptag","nick":"ptag","type":"ptag"}
]

[
	{"name":"数据源","nick":"dataSource","type":"hidden","value":"searchpr"},
	{"name":"促销ID","nick":"activityId","type":"id","require":"require"},
	{"name":"商品数量","nick":"pc","type":"number","require":"require"},
	{"name":"三级类目id","nick":"catid","type":"id"},
	{"name":"按销量排序","nick":"sorttype","type":"radio","value":"0","data":[
  	{"name":"否","value":"0"},
  	{"name":"是","value":"1"}
  ]},
	{"name":"价格下限","nick":"minprice","type":"text"},
	{"name":"价格上限","nick":"maxprice","type":"text"},
	{"name":"ptag","nick":"ptag","type":"ptag"},
	{"name":"角标","nick":"sign","type":"text"}
]

[
	{"name":"数据源","nick":"dataSource","type":"hidden","value":"mart"},
	{"name":"展示开始时间","nick":"begin","type":"date"},
	{"name":"展示结束时间","nick":"end","type":"date"},
	{"name":"活动id","nick":"actId","type":"id","require":"require"},
	{"name":"区域id","nick":"areaId","type":"id","require":"require"},
	{"name":"商品数量","nick":"pc","type":"number","require":"require"},
	{"name":"ptag","nick":"ptag","type":"ptag"}
]

[
	{"name":"数据源","nick":"dataSource","type":"hidden","value":"mart"},
	{"name":"展示开始时间","nick":"begin","type":"date"},
	{"name":"展示结束时间","nick":"end","type":"date"},
	{"name":"活动id","nick":"actId","type":"id","require":"require"},
	{"name":"区域id","nick":"areaId","type":"id","require":"require"},
	{"name":"商品数量","nick":"pc","type":"number","require":"require"},
	{"name":"ptag","nick":"ptag","type":"ptag"}
]

[
	{"name":"直播id","nick":"liveId","type":"text","require":"require"},
	{"name":"直播背景图","nick":"liveimg","type":"img","require":"require"},
	{"name":"ptag","nick":"ptag","type":"ptag"}
]

[
	{"name":"图片链接","nick":"img","type":"img"},
	{"name":"ptag","nick":"ptag","type":"ptag"},
	{"name":"绑定场景ID","nick":"sceneid","type":"text"},
	{"name":"活动标识","nick":"activeid","type":"text"},
	{"name":"等级","nick":"level","type":"text"},
	{"name":"活动规则","nick":"textone","type":"level","dataFormat":[
		{"name":"规则内容","nick":"text","type":"text"}
	]},
	{"name":"规则说明-标题","nick":"title","type":"text"},
	{"name":"规则说明","nick":"texttwo","type":"level","dataFormat":[
		{"name":"规则内容","nick":"text","type":"text"}
	]},
	{"name":"奖池活动id","nick":"giftactiveId","type":"text"},
	{"name":"120礼包等级","nick":"level120","type":"text"},
	{"name":"68礼包等级","nick":"level68","type":"text"},
	{"name":"券包","nick":"quanbaoList","type":"level","dataFormat":[
		{"name":"有效期","nick":"couponTime","type":"text"},
		{"name":"面额","nick":"price","type":"text"},
		{"name":"券名称","nick":"price","type":"text"},
		{"name":"自定义描述","nick":"fetchdesc","type":"text"},
		{"name":"限制级别","nick":"type","type":"radio","value":"1","data":[
			{"name":"铜牌","value":"1"},
			{"name":"银牌","value":"2"},
			{"name":"金牌","value":"3"},
			{"name":"钻石","value":"4"}
		]},
		{"name":"活动标识","nick":"key","type":"text"},
		{"name":"等级","nick":"level","type":"text"},
		{"name":"PTAG","nick":"ptag","type":"ptag"}
	]}
]

[
	{"name":"数据源","nick":"dataSource","type":"hidden","value":"mart"},
	{"name":"展示开始时间","nick":"begin","type":"date"},
	{"name":"展示结束时间","nick":"end","type":"date"},
	{"name":"卖场id","nick":"actId","type":"id","require":"require"},
	{"name":"商品数量","nick":"pc","type":"number","require":"require"},
	{"name":"默认展示数量","nick":"shownum","type":"number"},
	{"name":"ptag","nick":"ptag","type":"ptag"}
]

[
	{"name":"展示开始时间","nick":"begin","type":"date"},
	{"name":"展示结束时间","nick":"end","type":"date"},
	{"name":"商品组ID","nick":"groupids","type":"id","require":"require"},
	{"name":"商品数量","nick":"skulisttotals","type":"number","require":"require"},
	{"name":"默认展示数量","nick":"shownum","type":"number"},
	{"name":"预览时间","nick":"pretime","type":"date","ps":"仅在编辑和预览时有效"},
	{"name":"ptag","nick":"ptag","type":"ptag"},
	{"name":"查看所有分期","nick":"getMCPASing","type":"input","dataType":"mcp"},
	{"name":"分期列表","nick":"stages","type":"input","dataType":"mcplist"}
]

[{"name":"ptag","nick":"ptag","type":"ptag"}]

[
	{"name":"用户","nick":"list","type":"level","dataFormat":[
		{"name":"用户openID","nick":"userId","type":"text","require":"require"},
		{"name":"利益点","nick":"desc","type":"text"},
		{"name":"底图素材","nick":"bgImg","type":"img"},
		{"name":"logo素材","nick":"logoImg","type":"img"},
		{"name":"按钮文案","nick":"btnDesc","type":"text"},
		{"name":"跳转链接","nick":"jumpUrl","type":"url"},
		{"name":"ptag","nick":"ptag","type":"ptag"}
	]}

]

[
	{"name":"馆区id","nick":"mid","type":"id","require":"require"},
	{"name":"拉取数量","nick":"pc","type":"number","require":"require"},
	{"name":"拉取第几页","nick":"no","type":"number","value":"1","require":"require"},
	{"name":"类型过滤","nick":"filter","type":"radio","value":"1","data":[
	  	{"name":"晒单","value":"1"},
	  	{"name":"资讯","value":"2"}
	]},
	{"name":"拉取相似好货","nick":"needSimilar","type":"radio","value":"1","data":[
	  	{"name":"是","value":"1"},
	  	{"name":"否","value":"0"}
	]},
	{"name":"拉取用户标签","nick":"needUserMark","type":"radio","value":"1","data":[
	  	{"name":"是","value":"1"},
	  	{"name":"否","value":"0"}
	]},
	{"name":"ptag","nick":"ptag","type":"ptag"}
]

[
	{"name":"模块底色","nick":"modelbg","type":"color"},
	{"name":"标题底色","nick":"titlebg","type":"color"},
	{"name":"品类组合名称","nick":"title","type":"text","require":"require"},
	{"name":"利益点描述","nick":"desc","type":"text"},
	{"name":"图片","nick":"pic","type":"img"},
	{"name":"跳转链接","nick":"link","type":"url"},
	{"name":"ptag-domain","nick":"ptagdomain","type":"ptagDomain"},
	{"name":"焦点活动-广告组id","nick":"gids","type":"id"},
	{"name":"焦点活动-广告位id","nick":"locationid","type":"id"},
	{"name":"焦点活动-拉取数量","nick":"cpcnum","type":"number"},
	{"name":"卖块-活动id","nick":"actId","type":"id"},
	{"name":"卖块-区域id","nick":"areaId","type":"id"},
	{"name":"卖块-拉取数量","nick":"pc","type":"number"},
	{"name":"品牌-广告组id","nick":"brandgids","type":"id"},
	{"name":"品牌-广告位id","nick":"brandlocationid","type":"id"},
	{"name":"品牌-拉取数量","nick":"brandcpcnum","type":"number"},
	{"name":"关键词-ruleid","nick":"ruleid","type":"id"},
	{"name":"关键词-拉取数量","nick":"keywordnum","type":"number"},
	{"name":"展示数量","nick":"shownum","type":"number"}
]

[
	{"name":"ptag","nick":"ptag","type":"ptag"},
	{"name":"馆区ID","nick":"mid","type":"id","require":"require"}
]

[
	{"name":"拉取馆区Tab名称","nick":"guanqu","type":"text","require":"require"},
	{"name":"拉取数量","nick":"number","type":"number","require":"require"},
	{"name":"ptag","nick":"ptag","type":"ptag"},
	{"name":"组件标题","nick":"title","type":"text"},
	{"name":"二级页描述","nick":"secondDesc","type":"text"},
	{"name":"二级页链接","nick":"secondLink","type":"url"},
	{"name":"二级页ptag","nick":"secondPtag","type":"ptag"}
]

[
  {"name":"开始时间" ,"nick":"begin","type":"date" },
	{"name":"结束时间" ,"nick":"end","type":"date" },
  {"name":"活动ID" ,"nick":"actId","type":"id","require":"require" },
  {"name":"ptag","nick":"ptag","type":"ptag"},
	{"name": "数据" ,"nick":"mpmData","type":"level","dataFormat":[
		{"name":"类目ID" ,"nick":"cId","type":"id","require":"require" },
		{"name":"数量" ,"nick":"pc","type":"number" }
	]}
]
