const countries = {
    "us": "$",
    "america": "$",
    "united state": "$",
    "pakistan": "Rs"
}

const Currency = ({children, country="pakistan", className=null, style=null})=>{
    let cur = countries[country.toLocaleLowerCase()]

    if(!cur) cur = "unknown currency-"
    
    return (
        <span className={className} style={style}>{cur}{children}</span>            
    )
}

export default Currency;