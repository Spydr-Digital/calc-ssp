(()=>{$(document).ready(function(){$("#income").keyup(function(l){l.which>=37&&l.which<=40||$(this).val(function(t,a){return"\xA3"+a.replace(/\D/g,"").replace(/\B(?=(\d{3})+(?!\d))/g,",")})}),$("#monthly-saving").attr({max:150,min:10}),$("#dmGo").click(function(){let l=$("input[name='period']:checked").val(),t=Number($("#monthly-saving").val()),a=t+t*.5,e=$("#income").val().split(",").join("").replace(/\D/g,""),n=12570;$("#monthly-saving").val()<10||$("#monthly-saving").val()>150?($("#savingError").show(),$("#result").hide()):($("#savingError").hide(),$("#result").show()),e<n?$("#incomeMin").show():($("#incomeMin").hide(),$("#result").show());let v=0,c=28,o=42,s=47,p=0,r=27,m=28,f=29,h=50,u=44,x=47,g=50;l=="eng"?e>125140?taxCalc=t*(1-s/100):e>50270&&e<=125140?taxCalc=t*(1-o/100):e>12570&&e<=50270?taxCalc=t*(1-c/100):e<=12570?taxCalc=t:taxCalc="Error":l=="scot"&&(e>125139?taxCalc=t*(1-g/100):e>75e3&&e<=125139?taxCalc=t*(1-x/100):e>50270&&e<=75e3?taxCalc=t*(1-u/100):e>43662&&e<=50270?taxCalc=t*(1-h/100):e>26561&&e<=43662?taxCalc=t*(1-f/100):e>14876&&e<=26561?taxCalc=t*(1-m/100):e>12570&&e<=14876?taxCalc=t*(1-r/100):e<=12570?taxCalc=t:taxCalc="Error");let d=Math.round(taxCalc*100)/100;$("#dmShareCost").text(i(d)),$("#dmShareValue").text(i(a))});function i(l){return new Intl.NumberFormat().format(l)}});})();
//# sourceMappingURL=index.js.map
