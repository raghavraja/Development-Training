function myFunction()
{
	var name = document.getElementById("parameters");
	var strike = name.value;
	
	if(strike <= 1)
	{
		document.getElementById("score").innerHTML="Does not Meet Expectations";
		document.getElementById("description").style.display = "none";
	}
	
	else if (strike <= 2)
	{
		document.getElementById("score").innerHTML="Mostly Meets Expectations";
		document.getElementById("description").style.display = "none";
	}
	
	else if (strike <= 3)
		
		{
			document.getElementById("score").innerHTML="Meets Expectations";
			document.getElementById("description").style.display = "none";
		}
	
	else if (strike  <= 5)
		
		{
			document.getElementById("score").innerHTML="Exceeds Expectations";
			document.getElementById("description").style.display = "block";
		}
		
	else if (strike > 5)
        
		{
			document.getElementById("score").innerHTML="Outstanding";
			document.getElementById("description").style.display = "block";
		}			
	
	else
	{
		document.getElementById("score").innerHTML="";
	}
		
}

/*first set end */

		
/* second set end */
function gama()
{
var a = document.getElementById("ark");
var b = a.value;

if(b < 97)
{
document.getElementById("ssm").innerHTML="Does not Meet Expectations";
document.getElementById("max").style.display = "none";

}

else if( b <= 99)
{
document.getElementById("ssm").innerHTML="Mostly Meets Expectations"
document.getElementById("max").style.display = "none";
}

else if (b <= 99.50)
{
document.getElementById("ssm").innerHTML="Exceeds Expectations"
document.getElementById("max").style.display = "block";

}
else if (b >99.50)
{
document.getElementById("ssm").innerHTML="Outstanding"
document.getElementById("max").style.display = "block";

}

else

{
document.getElementById("ssm").innerHTML="";
document.getElementById("max").style.display = "none";

}


}

/* third set start */
function sky()
{
var a = document.getElementById("before");
var b = a.value;

if(b == "no")
{
document.getElementById("alpha").innerHTML="Does not Meet Expectations";
document.getElementById("marks").style.display = "none";

}

else if( b == 1)
{
document.getElementById("alpha").innerHTML="Mostly Meets Expectations"
document.getElementById("marks").style.display = "none";
}

else if (b == 2)
{
document.getElementById("alpha").innerHTML="Meets Expectations"
document.getElementById("marks").style.display = "none";

}
else if (b == 3)
{
document.getElementById("alpha").innerHTML="Exceeds Expectations"
document.getElementById("marks").style.display = "block";

}

else if (b == 4)
{
document.getElementById("alpha").innerHTML="Outstanding"
document.getElementById("marks").style.display = "block";

}

else

{
document.getElementById("alpha").innerHTML="";
document.getElementById("marks").style.display = "none";

}


}
/* third set end */
/* fourth set star */
function beta()
{
var a = document.getElementById("ball");
var b = a.value;

if(b == "no")
{
document.getElementById("king").innerHTML="Does not Meet Expectations";
document.getElementById("mrc").style.display = "none";

}

else if( b == 1)
{
document.getElementById("king").innerHTML="Mostly Meets Expectations"
document.getElementById("mrc").style.display = "none";
}

else if (b == 2)
{
document.getElementById("king").innerHTML="Meets Expectations"
document.getElementById("mrc").style.display = "none";

}
else if (b == 3)
{
document.getElementById("king").innerHTML="Exceeds Expectations"
document.getElementById("mrc").style.display = "block";

}

else if (b == 4)
{
document.getElementById("king").innerHTML="Outstanding"
document.getElementById("mrc").style.display = "block";

}

else

{
document.getElementById("king").innerHTML="";
document.getElementById("mrc").style.display = "none";

}


}

/* fourth set end */
/* v section start */
function ray()
{
var a = document.getElementById("blank");
var b = a.value;

if(b <= 5)
{
document.getElementById("fit").innerHTML="Does not Meet Expectations";
document.getElementById("shine").style.display = "none";

}

else if( b <= 6)
{
document.getElementById("fit").innerHTML="Mostly Meets Expectations"
document.getElementById("shine").style.display = "none";
}

else if (b <= 8)
{
document.getElementById("fit").innerHTML="Meets Expectations"
document.getElementById("shine").style.display = "none";

}
else if (b <= 10)
{
document.getElementById("fit").innerHTML="Exceeds Expectations"
document.getElementById("shine").style.display = "block";

}

else if (b >= 11)
{
document.getElementById("fit").innerHTML="Outstanding"
document.getElementById("shine").style.display = "block";

}

else

{
document.getElementById("fit").innerHTML="";
document.getElementById("shine").style.display = "none";

}


}
/* V end */
/* sixth section start */
function micro()
{
var a = document.getElementById("rwb");
var b = a.value;

if(b == 3)
{
document.getElementById("sibe").innerHTML="Does not Meet Expectations";
document.getElementById("local").style.display = "none";

}

else if( b == 2)
{
document.getElementById("sibe").innerHTML="Mostly Meets Expectations"
document.getElementById("local").style.display = "none";
}

else if (b == 1)
{
document.getElementById("sibe").innerHTML="Meets Expectations"
document.getElementById("local").style.display = "none";

}
else if (b == 0)
{
document.getElementById("sibe").innerHTML="Outstanding"
document.getElementById("local").style.display = "none";

}

else

{
document.getElementById("sibe").innerHTML="";
document.getElementById("local").style.display = "none";

}


}








