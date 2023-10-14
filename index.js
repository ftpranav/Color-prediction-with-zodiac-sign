const zodiac = document.getElementById("zodiac");

const body = document.body;
const changebackground=()=>
{
    switch(zodiac.value)
    {
        case "Aries":
            body.style.backgroundColor="red";
            break;
        case "Tarus":
            body.style.backgroundColor="blue";
            break;    
        case "Gemini":
         body.style.backgroundColor="purple";
            break; 
        case "Cancer":
         body.style.backgroundColor="violet";
            break; 
        case "Leo":
         body.style.backgroundColor="indigo";
            break;
            case "Virgo":
                body.style.backgroundColor="silver";
                break;    
            case "Libra":
             body.style.backgroundColor="pink";
                break; 
            case "Scorpio":
             body.style.backgroundColor="green";
                break; 
            case "Sagittarius":
             body.style.backgroundColor="cyan";
                break;
                case "Aquarius":
                    body.style.backgroundColor="brown";
                    break;    
                case "Capricon":
                 body.style.backgroundColor="gold";
                    break; 

                case "Pisces":
                 body.style.backgroundColor="wheat";
                    break;        
                default:
                    body.style.backgroundColor="white";
                    break;           
    }
};