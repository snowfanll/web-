// 导航栏 将密码框转为文本框
function ShowText(){
    var eye=document.getElementById("eye");
    var input=document.getElementsByTagName
    ('input')[1];
    // 未定义过 
    if(eye.f==undefined) eye.f=true;
    // eye.onclick=function(){   
        if(eye.f){
            eye.src="../images/open.png";
            input.type="text";
            eye.f=false;
        }else{
            eye.src="../images/close.png";
            input.type="password";
            eye.f=true;
        }
        
    // }
}
// 头部ul li变色
function ChangeLogoColor(){
    var li=document.getElementById('nav_center').getElementsByTagName('li');
    // var a=document.getElementById('nav_center').getElementsByTagName('a');
    for(var i=0;i<li.length;i++){
        li[i].onmouseover=function(){
            this.style.backgroundImage='url(../images/江苏门户_36.gif)';/*补图 */
            this.style.backgroundRepeat="repeat";
            this.getElementsByTagName('a')[0].style.color='#0227d9';
            // this.style.z-index='1';
            // console.log( this.style.backgroundColor);

        }
        li[i].onmouseout=function(){
            this.style.backgroundImage='';
            this.style.backgroundRepeat="";
            this.getElementsByTagName('a')[0].style.color='';
        }
    }
    
}
// 显示
//将父元素的li设为class=l1
// 设置下线图片class=bline1
// 根据添加的li的个数修改l1的高度  bline1的top
// 子元素的li的高度为20px
function ShowChild(id){
    // 得到父元素li
    var li=document.getElementById(id).getElementsByClassName('left1_center')[0].getElementsByClassName('l');
    // 得到li元素的子元素 
    // 点击li 图片转换 显示子元素
    for(var i=0;i<li.length;i++){
        // li[i].f=1;
        li[i].onmouseover=function(){
            // 得到子元素li0
            var li0=this.getElementsByTagName('li');
            // 如果不为0 则执行
            if(li0!='undefined'){
                this.f=0;
                // 设置class=l1
                this.className="l1";
                // 得到图片转换
                var lt=this.getElementsByClassName('lt')[0]; 
                // 得到图片bline
                var bline=this.getElementsByClassName('bline')[0];
                // 图片转换
                lt.src='../images/江苏门户_29.gif';
                lt.style.width='10px';
                // var li0=this.getElementsByTagName('li');
                // console.log(li0.length);
                bline.style.top=li0.length*20+20+'px';
                this.style.height=li0.length*20+28+'px'; 
            }
            }
            li[i].onmouseout=function(){
                // 设置class=""
                this.className="l";
                // 得到图片转换
                var lt=this.getElementsByClassName('lt')[0]; 
                // 得到图片bline
                var bline=this.getElementsByClassName('bline')[0];
                // 图片转换
                lt.src='../images/江苏门户_65.gif';
                lt.style.width='4px';
                // 得到子元素li0
                bline.style.top='20px';
                // console.log(1);
                // 设置父元素ul的高度
                this.style.height='28px';
                this.f=1;
            }
    }
}

// 中间部分center1换内容
function ChangeCenter1(){
    var span=document.getElementById('center1').getElementsByClassName('box2_top')[0].getElementsByTagName('span');
    var box_text=document.getElementById('center1').getElementsByClassName('box_text')[0];
    var box_text1=document.getElementById('center1').getElementsByClassName('box_text1')[0];
    // console.log(a);
    for(var i=0;i<span.length;i++){
        span[i].onclick=function(){
            if(this==span[0]){
                box_text.style.display='block';
                box_text1.style.display='none';
                console.log(1);
            }else{
                if(this==span[1]){
                    box_text.style.display='none';
                    box_text1.style.display='block';
                }
            }
        }
    }

} 


// 轮播
function hotChange(){
    // 得到图片和按钮
    var li=document.getElementById('center1_center').getElementsByClassName('ptbox')[0].getElementsByTagName('ul')[0].getElementsByTagName('li');
    var btn=document.getElementById('center1_center').getElementsByClassName('ptbox')[0].getElementsByTagName('ul')[1].getElementsByTagName('li');
    var current_index=0;  //代表当前的索引数
    // 设置定时器
    var timer=window.setInterval(autoChange,1000);
    // 当鼠标指向按钮时 清除定时器
    for(var i=0;i<btn.length;i++){
        btn[i].onmouseover=function(){
            // 清除定时器
            if(timer) clearInterval(timer);
            // 将其他按钮的class清为but 再将当前按钮设为current_btn
            for(var j=0;j<btn.length;j++){
                if(btn[j]==this){
                    current_index=j;
                    btn[j].className='current_btn';
                    li[j].className='current';
                }
                else{
                    btn[j].className='but';
                    li[j].className='pic';
                }
            } 
        }
        btn[i].onmouseout=function(){
            timer=setInterval(autoChange,1000);
        }
    }
    // 自动轮播
    function autoChange(){
        ++current_index;
        if(current_index==li.length){
            current_index=0;
        }
        for(var i=0;i<li.length;i++){
            if(current_index==i){
                btn[i].className='current_btn';
                li[i].className='current';
            }else{
                btn[i].className='but';
                li[i].className='pic';
            }
        }
    }
}
// 中间部分换内容
function ChangeContent(){
    var box_l1=document.getElementById('center2').getElementsByClassName('box_l1')[0];
    var box_r1=document.getElementById('center2').getElementsByClassName('box_r1')[0];
    var ul=document.getElementById('center2').getElementsByClassName('bottom')[1].getElementsByTagName('ul');
    // box_l1.onmouseover=function(){
    //     ul[0].className='bottom_u0';
    //     ul[1].className='bottom_u1';
    // }
    box_l1.onclick=function(){
        ul[0].className='bottom_u0';
        ul[1].className='bottom_u1';
    }
    box_r1.onclick=function(){
        ul[0].className='bottom_u1';
        ul[1].className='bottom_u0';
    }
}

// 
function ImgBox(){
    var speed=100; //定义滚动速度
    var center3=document.getElementById('center3');
    var imgbox=center3.getElementsByClassName('imgbox')[0];
    var span=imgbox.getElementsByTagName('span');
    imgbox.innerHTML+=imgbox.innerHTML;
    // var imgl=document.getElementById('center3').getElementsByClassName('c3_c1');
    // var imgr=document.getElementById('center3').getElementsByClassName('c3_c1');
    var time1=setInterval(Imgmove,speed);
    function Imgmove(){
        if(span[0].offsetWidth-imgbox.scrollLeft<0){
            imgbox.scrollLeft=0;
        }else{
            ++imgbox.scrollLeft;
        } 
    }
}

//尾部更换内容
function ChangeFooter(){
    var footer1=document.getElementById('footer1');
    var h4=footer1.getElementsByTagName('h4');
    // 控制高度
    var f_con=footer1.getElementsByClassName('f_con')[0];
    var div=f_con.getElementsByTagName('div');
    // var f_con_p=footer1.getElementsByClassName('f_con_p')[0];
    // var f_con_p1=footer1.getElementsByClassName('f_con_p1')[0];
    // var f_con_p2=footer1.getElementsByClassName('f_con_p2')[0];
    // console.log(h4);
    for(var i=0;i<h4.length;i++){
        h4[i].onclick=function(){
            for(var j=0;j<h4.length;j++){
                if(this==h4[j]){
                    h4[j].className='b1';
                    div[j].style.display='block';
                    if(j==0){
                        f_con.style.height='180px';
                    }else if(j==1){
                        f_con.style.height='50px';
                    }else{
                        f_con.style.height="190px";
                    }
                }else{
                    h4[j].className="";
                    div[j].style.display='none';
                }
            }
        }
    }
}
window.onload=function(){
    fontSize = ()=>{
        const clientWidth = document.documentElement.clientWidth;
        const  n = 20*(clientWidth/380) > 40?40:20*(clientWidth/380);
        document.documentElement.style.fontSize = n + 'px';
    }
    window.addEventListener('load',fontSize);
    window.addEventListener('resize',fontSize);
    hotChange();
    ChangeLogoColor();
    ImgBox();
    ChangeCenter1()
    ChangeFooter();
}