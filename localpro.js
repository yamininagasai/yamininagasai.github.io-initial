function totalCalc(){			//calculating the product price depending on quantity
	var q = document.getElementById("quant").value;
	var price=document.getElementById("price").value;
	if (q>5){
		alert ("you can only add 5 quantities");
		document.getElementById("quant").value="";
		document.getElementById("total").value="";
		}
	else{
		var rupees=(q*price);
		cost=rupees.toFixed(2);
		document.getElementById("total").value = cost;
		document.getElementById("total").disabled=true;
		}
	}
	
function cook(){			//saving the product details in the localStorage
	var rupees = document.getElementById("total").value;
	var tit= document.title;
	var id=document.getElementById("demo").value;
	var quant=document.getElementById("quant").value;
	if(quant.length==0){
		alert("Please enter quantity of products");
		window.location.href("#");
	}
	else if(localStorage.length>=16){   //if customer try to add 5 products
		alert("You can add only 4 products to the cart");
		window.location.replace("localcart.html");
	}
	else{
		window.location.replace("localcart.html");
		if(localStorage.length>12){
			var id3=localStorage.getItem("id2");
			var quant3=localStorage.getItem("quant2");
			var rupees3=localStorage.getItem("rupees2");	//tit=butterfly
			var title3=localStorage.getItem("title2");		//title3=butterfly
			var title2=localStorage.getItem("title1");		//title2=owl
			var title1=localStorage.getItem("title0");		//title1=doll
			if(title3==tit){								
				localStorage.setItem("title2",tit);			//"title2"=butterfly			
				localStorage.setItem("id2",id);
				localStorage.setItem("quant2",quant);
				localStorage.setItem("rupees2",rupees);
				}
			else if((title2!=tit)&&(title1!=tit)){
				localStorage.setItem("id3",id3);
				localStorage.setItem("quant3", quant3);
				localStorage.setItem("rupees3", rupees3);
				localStorage.setItem("title3", title3);
				}
			}
		if(localStorage.length>8){
			var id2=localStorage.getItem("id1");
			var quant2=localStorage.getItem("quant1");
			var rupees2= localStorage.getItem("rupees1");	//tit=butterfly
			var title2=localStorage.getItem("title1");		//title2=owl
			var title1=localStorage.getItem("title0");		//title1=doll		
			if(title2==tit){				
				localStorage.setItem("title1",tit);		
				localStorage.setItem("id1",id);				
				localStorage.setItem("quant1",quant);
				localStorage.setItem("rupees1",rupees);
				}
			else if(title1==tit){			//yes
				localStorage.setItem("id1",id2);		
				localStorage.setItem("quant1",quant2);
				localStorage.setItem("rupees1",rupees2);
				localStorage.setItem("title1",title2);		
				}
			else{
				localStorage.setItem("id2",id2);
				localStorage.setItem("quant2",quant2);		//"title2"=owl
				localStorage.setItem("rupees2",rupees2);
				localStorage.setItem("title2",title2);
				}				
			}
		if(localStorage.length>4){
			var id1=localStorage.getItem("id");
			var quant1 = localStorage.getItem("quant");
			var rupees1 =localStorage.getItem("cost");					//tit=butterfly
			var title1 = localStorage.getItem("title0");				//title1=doll
			if(title1!=tit){		
				localStorage.setItem("id1",id1);
				localStorage.setItem("quant1", quant1); //"title1"=doll
				localStorage.setItem("rupees1", rupees1);
				localStorage.setItem("title1",title1);
				}
			}		
		localStorage.setItem("quant", quant);		
		localStorage.setItem("id", id);
		localStorage.setItem("title0", tit);
		localStorage.setItem("cost", rupees);
		}
	}	
	


