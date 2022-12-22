
// export default CourseMoney;

// state = {
//     nameValuteAMD: '',
//     valueValuteAMD: '',
//     convertValue: '',
//   }

// courseMoney = new CourseMoney();

// componentDidMount() {
//   this.updateNameValute()
//   this.updateConvert()
// }
// updateConvert = () => {
//   this.courseMoney.getValutes()
//   .then(this.onConvert)
// }
// updateNameValute = () => {
//   this.courseMoney.getValutes()
//   .then(this.onValute)
// }

// onValute = ({nameValuteAMD, valueValuteAMD}) => {
//   this.setState({nameValuteAMD, valueValuteAMD})
// }

// onConvert = (convertValue, valueValuteAMD) => {
//   this.setState(convertValue => {
//     convertValue = 100/valueValuteAMD
//   }) 
// }


    // getBaseValute = async () => {
    //     const res = await this.getResource('https://www.cbr-xml-daily.ru/daily_json.js');
    //     console.log(res.Valute.RUB)
    //     return {
    //         nameValuteRub: res.Valute.RUB.Name,
    //         valueValuteRub: res.Valute.RUB.Value
    //     };
    // }

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