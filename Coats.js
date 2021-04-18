let pup=require('puppeteer');

let coat_url=[]
 coat_url=[
               ["https://www.tailorstore.co.in/suit-designer#QZsZrPEkVHGMrgpfN8E262z079YvhF24Jz5noo08f365tv2fGWvDnhNsFfNo4RJ42jU|2MgFk1"],
               ["https://www.tailorstore.co.in/suit-designer#QZsZrPEkVHGMrgpfN8E262z079YvhF24Jz5noo08f365tv2fGWvDnhNsFfNo4RJ42jU|2MgFk1||1DsWa/fabric"],
               ["https://www.tailorstore.co.in/suit-designer#QZsZrPEkVHGMrgpfO0FSF0GOUPVvu1nOVN7iFmTlNCxf59hjhy73nomDRjwN1cyXAme|2MgFjy||1DsWa/fabric"],
               ["https://www.tailorstore.co.in/suit-designer#QZsZrPEkVHGPiehzL5fmWJyD28GT3HaNmfBkibDNu5WOKzD5Uuc0q9nyjCPhmjTIsFa|2MgFAq||1DsWa/fabric"],
 
            ] 
 //let num_no=5
function check_coat(num_no)
{
   for(let l=0;l<coat_url.length;l++)
   {

    
        if(num_no<3)
        {
            console.log("Done");
            break
        }
        else
       { console.log("  @  "+coat_url[l]);}
   }

}
check_coat(5)
console.log("===========");
check_coat(2)

