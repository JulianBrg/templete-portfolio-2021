import { useState } from "react";
import PortfolioList from "../portfolioList/PortfolioList"
import { featuredPortfolio, webPortfolio, mobilePortfolio, designPortfolio, contentPortfolio } from '../../data'
import "./Portfolio.scss"
import { useEffect } from "react";

export default function Portfolio() {

    const [selected, setSelected] = useState("featured"); //oye al stado para saber cual esta selecionado
    const [data, setData] = useState([]);

    const list = [
        {
            id: "featured",
            title: "Featured"
        },
        {
            id: "web",
            title: "Web App"
        },
        {
            id: "mobile",
            title: "Mobile App"
        },
        {
            id: "desing",
            title: "Desing"
        },
        {
            id: "content",
            title: "Content"
        },
    ];

    useEffect(() => {
        //setea la info mediante el caso seleccionado
        switch (selected) {
            case "featured":
                setData(featuredPortfolio)
                break;
            case "web":
                setData(webPortfolio)
                break;
            case "mobile":
                setData(mobilePortfolio)
                break;
            case "desing":
                setData(designPortfolio)
                break;
            case "content":
                setData(contentPortfolio)
                break;

            default:
                setData(featuredPortfolio)
        }
    }, [selected])




    return (
        <div className="portfolio" id="portfolio">
            <h1>Portafolio</h1>
            <ul>
                {list.map((item) => (
                    <PortfolioList
                        title={item.title}
                        active={selected === item.id}
                        setSelected={setSelected}
                        id={item.id}
                    />
                ))}
            </ul>
            <div className="container">
                {data.map((d) => (
                    <div className="item">
                        <img src={d.img} alt={d.title} />
                        <h3>{d.title}</h3>
                    </div>
                ))}
            </div>
        </div>
    )
}
