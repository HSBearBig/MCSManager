(function () {
	// 菜单 数据
	MCSERVER.meumObject = {};

	//非管理员
	MCSERVER.meumObject.notMasterMeum = [{
		class: 'glyphicon-home', //html元素 类
		name: '帳戶設定', //菜单名
		link: './template/gen_home.html', //单击时跳转目的
		api: 'genuser/home' //通过 Webscoket 后端请求的API,null为不请求
	}, {
		class: 'glyphicon-equalizer',
		name: '技術支援',
		link: './template/gen_about.html',
		api: null
	}, ]

	//管理员的
	//注意，这些页面只能管理员访问，普通用户就算访问，也得不到任何数据
	MCSERVER.meumObject.masterMeum = [{
		class: 'glyphicon-equalizer',
		name: '數據監控',
		link: './template/center.html',
		api: 'center/show'
	}, {
		class: 'glyphicon-tasks',
		name: '伺服器管理',
		link: './template/server.html',
		api: 'server/view'
	}, {
		class: 'glyphicon-th-large',
		name: '帳戶權限設定',
		link: './template/userset.html',
		api: 'userset/update'
	}, {
		class: 'glyphicon-floppy-open',
		name: '服務與支援',
		link: './template/feelback.html',
		api: null
	}]

})();
