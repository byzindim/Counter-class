
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
        console.log(res.Valute.USD)
        return {
            nameValuteAMD: res.Valute.AMD.Name,
            valueValuteAMD: res.Valute.AMD.Value
        };
    }

    getBaseValute = async () => {
        const res = await this.getResource('https://www.cbr-xml-daily.ru/daily_json.js');
        console.log(res.Valute.RUB)
        return {
            nameValuteRub: res.Valute.RUB.Name,
            valueValuteRub: res.Valute.RUB.Value
        };
    }

    // getCharacter = async (id) => {
    //     const res = await this.getResource(`${this._apiBase}characters/${id}?apikey=${this._apiKey}`);
    //     return this._transformCharacter(res.data.results[0]);
    // }
    // _transformCharacter = (char) => {
    //         return {
    //             id: char.id,
    //             name: char.name,
    //             description: (char.description === null || char.description === '') ? 'Not description' : char.description.slice(0,15),
    //             thumbnail: char.thumbnail.path + '.' + char.thumbnail.extension,
    //             homepage: char.urls[0].url,
    //             wiki: char.urls[1].url,
    //             comics: char.comics.items,
    //         } 
            
        
        
    // }
}

export default CourseMoney;