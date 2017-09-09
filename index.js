(function(){
	var str=  '<li class="list-group-item form-inline">'+
  	  '<div class="form-group name_wrap">'+
	    // '<!-- '<label for="basic_name">'+Name:'</label>'+ -->'+
	    '<input type="text" class="form-control basic_name isrequire" placeholder="Name">'+
	  '</div>'+
	  '<div class="form-group nick_wrap">'+
	    // '<!-- '<label for="basic_nick">'+nick:'</label>'+ -->'+
	    '<input type="text" class="form-control basic_nick isrequire" placeholder="nick">'+
	  '</div>'+
	  '<div class="form-group type_wrap">'+
	    // '<!-- '<label for="type">'+type:'</label>'+ -->'+
	    '<select class="form-control dataType">'+
		  '<option value="text">text</option>'+
		  '<option value="select">select</option>'+
		  '<option value="check">check</option>'+
		  '<option value="radio">radio</option>'+
		  '<option value="anchor">anchor</option>'+
		  '<option value="level">level</option>'+
		  '<option value="group">group</option>'+
		  '<option value="id">id</option>'+
		  '<option value="img">img</option>'+
		  '<option value="url">url</option>'+
		  '<option value="number">number</option>'+
		  '<option value="ppms">ppms</option>'+
		  '<option value="ptag">ptag</option>'+
		  '<option value="ptagDomain">ptagDomain</option>'+
		  '<option value="date">date</option>'+
		  '<option value="hidden">hidden</option>'+
		  '<option value="color">color</option>'+
		'</select>'+
	  '</div>'+
	  '<div class="form-group referer_wrap" style="display: none;">'+
	    '<label for="basic_referer">referer:</label>'+
	    '<input type="text" class="form-control basic_referer" placeholder="basic_referer">'+
	  '</div>'+
	  '<div class="form-group expect_wrap" style="display: none;">'+
	    '<label for="expect_value">expect:</label>'+
	    '<input type="text" class="form-control expect_value" placeholder="expect_value">'+
	  '</div>'+
	  '<div class="form-group value_wrap">'+
	    // '<!-- '<label for="basic_value">'+value:'</label>'+ -->'+
	    '<input type="text" class="form-control basic_value" placeholder="default_value">'+
	  '</div>'+
	  '<div class="form-group regex_wrap">'+
	    '<label for="regex_wrap">regex:</label>'+
	    '<input class="form-control basic_regex">'+
	  '</div>'+
	  '<div class="form-group tips_wrap">'+
	    '<label for="tips_wrap">tips:</label>'+
	    '<input type="text" class="form-control basic_tips" placeholder="tips">'+
	  '</div>'+
	  '<div class="form-group mode_wrap">'+
	    '<label for="basic_mode">mode:</label>'+
	    '<input type="checkbox" name="mode" value="1">textarea'+
	  '</div>'+
	  '<div class="form-group data_wrap" style="display: none;">'+
	    '<label for="basic_data">data</label>'+
	    '<textarea class="form-control basic_data" style="width:300px;" placeholder="格式：{...},{...}">'+'</textarea>'+
	  '</div>'+
	  '<div class="form-group require_wrap">'+
	    '<label for="require">require:</label>'+
	    '<div class="radio">'+
			'<label>'+
			    '<input type="radio" name="UNIQUEREQ"  value="1" >'+
			    '是'+
			  '</label>'+
		'</div>'+
		'<div class="radio">'+
			  '<label>'+
			    '<input type="radio" name="UNIQUEREQ" value="0">'+
				'否'+
			  '</label>'+
		'</div>'+
	  '</div>'+
	  '<div class="form-group auto_wrap" style="display: none;">'+
	    '<label for="auto">auto:</label>'+
	    '<div class="radio">'+
			'<label>'+
			    '<input type="radio" name="UNIQUEAUTO"  value="1" >'+
			    'inner'+
			  '</label>'+
		'</div>'+
		'<div class="radio">'+
			  '<label>'+
			    '<input type="radio" name="UNIQUEAUTO" value="0">'+
				'click'+
			  '</label>'+
		'</div>'+
	  '</div>'+
	  	'<div class="form-group placehold_wrap">'+
	    '<label for="basic_placehold">ps:</label>'+
	    '<input type="email" class="form-control basic_placehold" placeholder="basic_placehold">'+
	    '</div>'+
	 '<span class="glyphicon glyphicon-plus-sign add_sibling" aria-hidden="true" style="margin-left:5px;"></span>'+
	 // '<!-- '<span class="glyphicon glyphicon-arrow-down add_child" aria-hidden="true"></span>'+ -->'+
	 '<span class="glyphicon glyphicon-minus-sign del_data" aria-hidden="true" style="margin-left:3px;"></span>'+
  '</li>';

	var jsonType = {
		'level':'{"name":"NN","nick":"NI","type":"level","dataFormat":[]}',
		'group':'{"name":"NN","nick":"NI","referer":"REF","expect":"EX","type":"group","dataFormat":[]}',
		'text':'{"name":"NN","nick":"NI","type":"text","mode":"MO","value":"VA","require":"REQ","regex":"REGE","tips":"TI","placeholder":"PS"}',
		'radio':'{"name":"NN","nick":"NI","type":"radio","data":DA,"require":"REQ"}',
		'select':'{"name":"NN","nick":"NI","type":"select","data":DA,"require":"REQ"}',
		'check':'{"name":"NN","nick":"NI","type":"check","data":DA,"require":"REQ"}',
		'anchor':'{"name":"NN","nick":"NI","type":"anchor"}',
		'color':'{"name":"NN","nick":"NI","type":"color"}',
		'hidden':'{"name":"NN","nick":"NI","type":"hidden"}',
		'id':'{"name":"NN","nick":"NI","type":"id","value":"VA","require":"REQ","regex":"REGE","tips":"TI","placeholder":"PS"}',
		'img':'{"name":"NN","nick":"NI","type":"img","value":"VA","require":"REQ","regex":"REGE","tips":"TI","placeholder":"PS"}',
		'url':'{"name":"NN","nick":"NI","type":"url","value":"VA","require":"REQ","regex":"REGE","tips":"TI","placeholder":"PS"}',
		'number':'{"name":"NN","nick":"NI","type":"number","value":"VA","require":"REQ","regex":"REGE","tips":"TI","placeholder":"PS"}',
		'ppms':'{"name":"NN","nick":"NI","type":"ppms","value":"VA","require":"REQ","regex":"REGE","tips":"TI","placeholder":"PS"}',
		'ptag':'{"name":"NN","nick":"NI","type":"ptag","auto":"AU","require":"REQ","placeholder":"PS"}',
		'ptagDomain':'{"name":"NN","nick":"NI","type":"ptagDomain","auto":"AU","require":"REQ","placeholder":"PS"}',
		'date':'{"name":"NN","nick":"NI","type":"date"}'
	};

 window.onload=function(){
 	$('.atom_data_group').append(str);
 	bindevent();
 	// parseToDom($('.atom_data_dom'),arr);
 }
  var domSelect = {
 	group: function($dom){
	  	$dom.find('>.form-group').show();
		$dom.find('>.data_wrap').hide();
		$dom.find('>.require_wrap').hide();
		$dom.find('>.placehold_wrap').hide();
		$dom.find('>.value_wrap').hide();
		$dom.find('>.mode_wrap').hide();	
		$dom.find('>.auto_wrap').hide();	
		$dom.find('>.regex_wrap').hide();
	 	$dom.find('>.tips_wrap').hide();
 	},
 	level: function($dom){
	 	$dom.find('>.form-group').show();
	 	$dom.find('>.referer_wrap').hide();
	 	$dom.find('>.regex_wrap').hide();
	 	$dom.find('>.tips_wrap').hide();
		$dom.find('>.expect_wrap').hide();
		$dom.find('>.data_wrap').hide();
		$dom.find('>.require_wrap').hide();
		$dom.find('>.placehold_wrap').hide();
		$dom.find('>.value_wrap').hide(); 
		$dom.find('>.mode_wrap').hide();
		$dom.find('>.auto_wrap').hide();			
 	},
 	options: function($dom){
	 	$dom.find('.form-group').show();
	 	$dom.find('.referer_wrap').hide();
		$dom.find('.expect_wrap').hide();
		$dom.find('.mode_wrap').hide();			
		$dom.find('.regex_wrap').hide();	
		$dom.find('.tips_wrap').hide();
		$dom.find('.auto_wrap').hide();
		$dom.find('.placehold_wrap').hide();
 	},
 	text: function($dom){
	 	$dom.find('.form-group').show();
	 	$dom.find('.referer_wrap').hide();
		$dom.find('.expect_wrap').hide();
		$dom.find('.data_wrap').hide();
		$dom.find('.auto_wrap').hide();	
 	},
 	ptag:function($dom){
	 	$dom.find('.form-group').show();
	 	$dom.find('.referer_wrap').hide();
		$dom.find('.expect_wrap').hide();
		$dom.find('.data_wrap').hide();	
		$dom.find('.mode_wrap').hide();
		$dom.find('.value_wrap').hide();
		$dom.find('.basic_regex').val('/\\d{4,8}\\.\\d{1,3}\\.\\d{1,3}/');
 	},
 	normal: function($dom){
 		$dom.find('.form-group').show();
	 	$dom.find('.referer_wrap').hide();
		$dom.find('.expect_wrap').hide();
		$dom.find('.data_wrap').hide();
		$dom.find('.mode_wrap').hide();
		$dom.find('.auto_wrap').hide();
 	},
 	hidden: function($dom){
 		$dom.find('.form-group').hide();
	 	$dom.find('.name_wrap').show();
		$dom.find('.nick_wrap').show();
		$dom.find('.type_wrap').show();
 	}
 }

// [
// 	{"name":"主标题","nick":"title","type":"text","require":"require"},
// 	{"name":"副标题","nick":"subTitle","type":"text","require":"require"},
// 	{"name":"字体颜色","nick":"color","type":"color"},
// 	{"name":"跳转链接","nick":"tourl","type":"url"},
// 	{"name":"ptag","nick":"ptag","type":"ptag"},
// 	{"name":"icon地址","nick":"iconimg","type":"img"},
// 	{"name":"展示环境","nick":"showEnv","type":"radio","value":"0","data":[
// 		{"name":"都展示","value":"0"},
// 		{"name":"只在微信","value":"1"},
// 		{"name":"只在手q","value":"2"}
// 	]}
// ]
 function bindevent(){
 	$('#js_mod_addData_btn').on('click',function(){
 		var dataObj = [];
 		evalToJson($('.atom_data_group'),dataObj);
 		$('.result').html(JSON.stringify(dataObj));
 		console.log('>>><<<',dataObj);
 	});
 	$(document).on('change','.dataType',function(){ 
 		var self = $(this);
 		var $dom = self.parent().parent();
 		var val = $(this).children('option:selected').val();
 		switch(val){
 			case 'text':domSelect.text($dom);break;
 			case 'group':domSelect.group($dom);break;
 			case 'level':domSelect.level($dom);break;
 			case 'radio':domSelect.options($dom);break;
 			case 'select':domSelect.options($dom);break;
 			case 'check':domSelect.options($dom);break;
 			case 'ptag':domSelect.ptag($dom);break;
 			case 'ptagDomain':domSelect.ptag($dom);break;
 			case 'date':domSelect.level($dom);break;
 			case 'anchor':domSelect.level($dom);break;
 			case 'hidden':domSelect.hidden($dom);break;
 			case 'id':domSelect.normal($dom);
                      setRegex($dom,'/^\\d{4,8}$/','id填写错误！');break;
            case 'number':domSelect.normal($dom);
                      setRegex($dom,'/^\\d{1,3}$/','数字格式填写错误！');break;
            case 'ppms':domSelect.normal($dom);
                      setRegex($dom,'/^\\d{4,8}$/','ppms的pageid填写错误！');break;
            case 'img':domSelect.normal($dom);
                      setRegex($dom,'/\\.(jpg|jpeg|png|gif)$/','img路径填写错误！');break;
            case 'url':domSelect.normal($dom);
                      setRegex($dom,'/^(http|https|\/\/)/','url填写错误！');break;
 			default : domSelect.normal($dom);break;
 		}
 		if(val == 'level' || val == 'group'){
 			if(self.parent().parent().find('.list-group-item').length == 0){
 				self.parent().parent().attr('data-parent','1');
 				var newstr = str;
				var dtime = Date.now();
				newstr = newstr.replace(/UNIQUEREQ/mg,'req' + dtime).replace(/UNIQUEAUTO/mg,'auto'+dtime);
				self.parent().parent().append(newstr);
 			}
 		}else{
 			self.parent().parent().attr('data-parent','0');
 			self.parent().parent().find('.list-group-item').remove();
 		}
	});
	$(document).on('click','.add_sibling',function(){
		if(!judgeFill()){
			alert('请把name、nick必填项填写完整！');
			return;
		}
		var self = $(this);
		var newstr = str;
		var dtime = Date.now();
		newstr = newstr.replace(/UNIQUEREQ/mg,'req' + dtime).replace(/UNIQUEAUTO/mg,'auto'+dtime);
		self.parent().parent().append(newstr);
	});
	$(document).on('click','.del_data',function(){
		var self = $(this);
		var parent = self.parent().attr('data-parent');
		var rootVal = self.parent().attr('data-root');

		if(rootVal){
			return;
		}

		if((parent == 1 && self.parent().parent().attr('data-root') == 1)||(self.parent().parent().find('.list-group-item').length < 2)){
			return;
		}else{
	 		self.parent().remove(); 			
		}

	});
 }
 function evalToJson($parent,dataObj){
 	var list = $parent.find('>li');
 	for(var i = 0;i < list.length;i++){
 		var dtype = $(list[i]).find('.dataType').children('option:selected').val();
 		var obj = getValue($(list[i]));
	 	var str = jsonType[dtype];

		str = str.replace('NN',obj.name).replace('NI',obj.nick).replace('REF',obj.referer);
		str = str.replace('EX',obj.expect).replace('VA',obj.value).replace('REGE',obj.regex);
		str = str.replace('TI',obj.tips).replace('DA',obj.data).replace('PS',obj.placehold);
		str = str.replace('REQ',obj.require).replace('AU',obj.auto).replace('MO',obj.mode);
		// str.replace(/\\/,'\\\\\\\\');
		str = JSON.parse(str);
		var leng = dataObj.push(str);
 		if($(list[i]).attr('data-parent') == 1){
			evalToJson($(list[i]),dataObj[leng-1].dataFormat);
 		}
 	}
 }
 function parseToDom($root,data){
 	for(var i = 0;i < data.length;i++){
 		var ty = data[i].type;
 		var newstr = str;
		var dtime = Date.now();
		newstr = newstr.replace(/UNIQUEREQ/mg,'req' + dtime).replace(/UNIQUEAUTO/mg,'auto'+dtime);
	 	$root.append(newstr);
		var leng = $root.find('>li').length;
		var $str = $root.find('>li').eq(leng - 1);
		$str.find(".dataType option[value="+ty+"]").attr("selected", true);
		$str.find(".dataType").trigger('change');
		setValue($str,data[i]);
 		if(ty == 'level' || ty == 'group'){
 			$str.find('>li').remove();
 			parseToDom($str,data[i].dataFormat);
 		}
 	}
 }
  function setRegex($dom,regex,tips){
    if(!$dom)return;
    $dom.find('.basic_regex').val(regex);
    $dom.find('.basic_tips').val(tips);
 }
 function setValue($dom,obj){
 	if(!$dom)return;
 	$dom.find('.basic_name').val(obj.name);
 	$dom.find('.basic_nick').val(obj.nick);
 	if(obj.referer){
 		$dom.find('.basic_referer').val(obj.referer);
 	}
 	if(obj.expect){
 		$dom.find('.basic_expect').val(obj.expect);
 	}
 	if(obj.referer){
 		$dom.find('.basic_referer').val(obj.referer);
 	}
 	if(obj.value){
 		$dom.find('.basic_value').val(obj.value);
 	}
 	if(obj.regex){
 		$dom.find('.basic_regex').val(obj.regex);
 	}
 	if(obj.tips){
 		$dom.find('.basic_tips').val(obj.tips);
 	}
 	if(obj.placehold){
 		$dom.find('.basic_placehold').val(obj.placehold);
 	}
 	if(obj.data){
 		console.log(JSON.stringify(obj.data).slice(1,JSON.stringify(obj.data).length-1));
 		$dom.find('.basic_data').val(JSON.stringify(obj.data).slice(1,JSON.stringify(obj.data).length-1));
 	}
 	if(obj.require == 'require'){
 		$dom.find(".require_wrap input[type ='radio']").get(0).checked=true;
 	}else if(obj.require == 'norequire'){
 		$dom.find(".require_wrap input[type ='radio']").get(1).checked=true;
 	}
 	if(obj.auto == 'inner'){
 		$dom.find(".auto_wrap input[type ='radio'").get(0).checked=true;
 	}else if(obj.require == 'click'){
 		$dom.find(".auto_wrap input[type ='radio']").get(1).checked=true;
 	}
 	if(obj.mode == 'textarea'){
 		$dom.find("input[name ='mode']").get(0).checked=true;
 	}
 }
 function getValue($dom){
 	var obj = {};
 	if(!$dom)return;
 	obj.name = $dom.find('.basic_name').val();
 	obj.nick = $dom.find('.basic_nick').val();
 	obj.referer = $dom.find('.basic_referer').val();
 	obj.expect = $dom.find('.basic_expect').val();
 	obj.value = $dom.find('.basic_value').val();
 	// obj.regex = $dom.find('.basic_regex').val();
 	var regex = $dom.find('.basic_regex').val();
 	var tempRe = regex.split('');
 	for(var i = 0;i < tempRe.length;i++){
 		if(tempRe[i] == '\\'){
 			tempRe[i] = '\\\\';
 		}
 	}
 	obj.regex = tempRe.join('') || '';
 	obj.tips = $dom.find('.basic_tips').val();
 	obj.data = '['+$dom.find('.basic_data').val()+']';
 	obj.placehold = $dom.find('.basic_placehold').val();
 	var re = $dom.find(".require_wrap input[type ='radio']:checked").val();
 	if(re == 1 ){
 		obj.require = 'require';
 	}else{
 		obj.require = 'no';
 	}
 	var au = $dom.find(".auto_wrap input[type ='radio']:checked").val();
 	if(au == 1 ){
 		obj.auto = 'inner';
 	}else{
 		obj.auto = 'click';
 	}
 	var mo = $dom.find(".auto_wrap input[type ='radio']:checked").val();
 	if(mo == 1 ){
 		obj.mode = 'textarea';
 	}else{
 		obj.mode = 'no';
 	}
 	return obj;
 }

 function judgeFill(){
 	var arrs = $('.basic_name').toArray();
 	return arrs.every(function(item,index){
 		if($(item).val() != ''){
 			return true;
 		}else{
 			return false;
 		}
 	});
 }
})()