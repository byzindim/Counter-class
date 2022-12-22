
class CourseMoney {
   getResource = async (url) => {
    let res = await fetch(url);
    if(!res.ok) {
        throw new Error(`${url}, ${res.status}`)
    }
    return await res.json();
   }

   getValutes = async () => {
        const res = await this.getResource('https://www.cbr-xml-daily.ru/daily_json.js');
    
        const valuteValue = res.Valute.AMD.Value;
        const valuteCode =  res.Valute.AMD.CharCode;
        return {valuteValue, valuteCode};

        
    }

}

export default CourseMoney;