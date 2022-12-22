
class CourseMoney {
   getResource = async (url) => {
    let res = await fetch(url);
    if(!res.ok) {
        throw new Error(`${url}, ${res.status}`)
    }
    return await res.json();
   }

   getValutes = async () => {
    console.log(res)
        const res = await this.getResource('https://www.cbr-xml-daily.ru/daily_json.js');
        const valuteValue = res.Valute.AMD.Value;
        return valuteValue;
    }

}

export default CourseMoney;