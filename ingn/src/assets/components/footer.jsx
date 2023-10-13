import style from "./footer.module.scss"
export const Footer = () => {
return(
    <div className={style.fGrid}>
        <div><h4>Adresse:</h4>
        <p>Intet nyt - Godt nyt ApS</p>
        <p>Tulipanvej 232</p>
        <p>7320 </p>
        <p>Valby Øster</p>
        </div>
        <div><h4>Links</h4>
        <p>vikanweb.dk</p>
        <p>overpådenandenside.dk</p>
        <p>retsinformation.dk</p>
        <p>nogetmednews.dk</p>
        </div>
        <div><h4>Politik</h4>
        <p>Privatlivspolitik</p>
        <p>Cookiepolitik</p>
        <p>Købsinformation</p>
        <p>Delingspolitik</p>
        </div>
        <div><h4>Kontakt</h4>
        <p>ingn@nyhed.dk</p>
        <p>teletfon: 23232323</p>
        <p>fax: 123123-333</p>
        </div>
        
    </div>

)


}
