
	function conversion()
	{
		var yr; var m; var c;var mo;
		mo=document.querySelector("select[name='Month']").value;
		yr=document.getElementById("val").value;
		c=0;
		
		mo=parseFloat(mo);	
		yr=parseFloat(yr);
		var temp=yr;
		while(yr>0)
		{
			if(c<2)
			{ 	
				if(yr>10.5)
				{	
					yr=yr-10.5;
					c=c+1;
						
				}
				else if(yr<10.5)
				{		if(c==1)
					{		
						 document.getElementById("res").value="Dog age is less than 2 Years"
						break;
					}
					else{
						
						document.getElementById("res").value="Dog is less than 1 Years";
						break;
					}
				}
				else if(yr==10.5)
				{
					yr=yr-10.5;
					c=c+1;
				}
			}
			else
			{
				if(yr>4)
				{
					yr=yr-4;
					c=c+1;

				}
				else if(yr<4)
				{
					if(yr==1)
					{	 yr=yr-1;
						mo=mo+3;
					}
					 else if(yr==2)
					{	yr=yr-2;
						mo=mo+6;
					}
					 else if(yr==3)
					{	yr=yr-3;
						mo=mo+9;
					}
					
				}
				else if(yr==4)
				{	
					yr=yr-4;
					c=c+1;
				}

			}

		}
		while(mo>12)
		{	mo=mo-12;	
			c=c+1;
			
		}
		if(c>1)
		document.getElementById("res").value=c+"years"+mo+"month";

		}