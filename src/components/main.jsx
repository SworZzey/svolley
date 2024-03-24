import React from "react";
import Card from "./clubCard";
import lokoNsk from "../img/lokoNsk.png"
import belgorod from "../img/logoBelogor.png"
import dinamoLo from "../img/logoDinamo.png"
import dinamoMsk from "../img/logoDinamoMsk.png"
import zenitSpb from "../img/zenitSpb.png"
import zenitKaz from "../img/zenitKaz.png"
import minsk from "../img/minsk.png"
import nova from "../img/nova.png"
import proton from "../img/proton.png"
import ygra from "../img/ygra.png"
import altay from "../img/altay.png"
import tiger from "../img/amurTiger.png"
import apsni from "../img/apsni.png"
import ask from "../img/ask.png"
import atom from "../img/atom.png"
import bryansk from "../img/bryansk.png"
import volzanochka from "../img/volzanochka.png"
import voronezh from "../img/voronezh.png"
import gazpromUgra from "../img/gazpromUgra.png"
import grozny from "../img/grozny.png"
import dagestan from "../img/gagestan.png"
import dinamoKras from "../img/dinamoKras.png"
import dinamoMsk2 from "../img/dinamoMsk.png"
import dinamoChel from "../img/dinamoChel.png"
import dinamoAkBars from "../img/dinamoAkBArs.png"
import dinamoAnapa from "../img/dinamoAnapa.png"
import dinamoVlad from "../img/dinamoVlad.png"
import dinamoMgtu from "../img/dinamoMGTU.png"
import dinamoMetar from "../img/dinamoMetar.png"
import enisey from "../img/enisey.png"
import zabaycalka from "../img/zabaycalka.png"
import zareche from "../img/zareche.png"
import izGtu from "../img/izgtu.png"
import italmas from "../img/italmas.png"
import kama from "../img/kama.png"
import kolos from "../img/kolos.png"
import karabelka from "../img/korabelka.png"
import redFlu from "../img/kraluRed.png"
import krystal from "../img/krystall.png"
import kyzbass from "../img/kyzbass.png"
import leningradka from "../img/leningradka.png"
import lipetsk from "../img/lipetsk.png"
import lokoKalinin from "../img/lokoKalinin.png"
import lokoAnkara from "../img/lokoAngara.png"
import lokoEcb from "../img/lokoEkb.jpg"
import magnitka from "../img/magnitka.png"
import mba from "../img/mba.png"
import mgtu from "../img/mgtuMsk.png"
import michanka from "../img/minchanka.jpg"
import murom from "../img/murom.png"
import neftyanic from "../img/neftyn.png"
import obninsk from "../img/obninsk.png"
import olinp from "../img/olimpNsk.png"
import omninsk from "../img/omOmsk.png"
import vodoley from "../img/rostovVodoley.png"
import rcsp from "../img/rcspVolley.png" 
import ryzan from "../img/ryzanRgu.png"
import sahalin from "../img/sahalin.png"
import severyanks from "../img/severanka.png"
import sparta from "../img/sparnaNN.png"
import tarhan from "../img/tarhan.png"
import tekstilshic from "../img/tekstilshik.png"
import tulica from "../img/tulica.png"
import tumen from "../img/tumen.png"
import univerBar from "../img/univerBarn.png"
import univerVIsit from "../img/univerVisit.png"
import ural from "../img/uralUfa.png"
import uralochka from "../img/uralochkantmk.png"
import ufimochka from "../img/ufimochkaYgntu.png"
import facel from "../img/facel.png"
import cska from "../img/cska.png"
import shahter from "../img/shahter.png"
import yaroslavich from "../img/yaroslavich.png"
import bryanskayaObl from "../img/bryanskayaObl.png"
import veterany from "../img/veterany.png"
import doneck from "../img/doneck.png"
import ivanovo from "../img/ivanovo.png"
import lipeckObl from "../img/lipeckObl.png"
import kostroma from "../img/kostroma.png"
import kazan from "../img/kazan.png"
import nnogorog from "../img/nnovgorod.png"
import chelyaba from "../img/chelayba.png"
import tver from "../img/tver.png"
import sverdlov from "../img/sverdlov.png"
import staratov from "../img/saratov.png"
import rostovObl from "../img/rostovObl.png"
import orenbrg from "../img/orenburg.png"
import bask from "../img/bashkiriy.png"
import pfo from "../img/pfo.png"
import rzfo from "../img/rzfo.png"
import sfo from "../img/sfo.png"
import ufo from "../img/ufo.png"
import cfo from "../img/cfo.png"
import yfo from "../img/yfo.png"
let namesTeams = ["Белогорье, Белгород", "Динамо-ЛО, Сосновый Бор","Динамо, Москва","Зениит, Санкт-Петербург","Зенит-Казань, Казань","Минск, Беларусь","Нова, Новокуйбышевск","Протон, Саратов","Самотлор, Нижневартовск",
"Алтай-АГАУ, Барнаул","Амурские Тигрицы, Хабаровск","Апсны, Республика Абхазия","ACK, Нижний Новгород","Атом-Курск, Курская обл.","Брянск, Брянск","Брянская область","Ветераны","Волжаночка-ГРАСС, Волгоград","Воронеж, Воронеж","Газпром-Югра, Сургут",
"Грозный, Грозный","Дагестан, Махачкала","Динамо, Краснодар","Динамо, Москва","Динамо, Челябинск","Динамо-Ак Барс, Казань","Динамо-Анапа, Анапа","Динамо-Владивосток, Владивосток","Динамо-МГТУ, Майкоп","Динамо-Метар, Челябинск","Донецкая область","Енисей, Красноярск","Забайкалка, Чита","Заречье-Одинцово, Московская обл.","Ивановская область","ИжГТУ-Динамо, Ижевск","Казань","Кама, Пермь","Костромская область","Кристалл-Черкизово, Воронеж","Кузбасс, Кемерово","Ленинградкка","Липецк, Липецкая обл.","Липецкая область","Локомотив, Калининградская обл.",
"Локомотив, Новосибирск","Локомотив-Ангара, Иркутск","Локомотив-Изумруд, Екатиринбург","Магнитка, Магнитогорск","МВА, Москва","МГТУ, Москва","Минчанка","Муром, Владимирская обл.","Нефтяник, Оренбург","Нижнегородская обл.","Обнинск, Обнинск","Олимп, Новосибирская обл.","Омь, Омск","Оренбургская область","ПФО","Республика Башкортостан","Ростов-Водолей, Ростов-на-Дону", "Ростовская область","РЦСП по волейболу, Краснодар","Рязань-РГУ, Рязань","Саратовская область","Сахалин, Южно-Сахалинск","Свердловская обл.","Северянка, Череповец","СЗФО",
"Спарта, Нижний Новгород","СФО","Тархан, Стерлитамак","Тверская область","Текстильщик, Иваново","Тулица, Тульская обл.","Тюмень, Тюменская обл.","Универститет, Барнаул","Университет-Визит, Пенза","Урал, Уфа","Уралочка-НТМК, Свердловская обл.","Уфимочка-УГНТУ, Уфа","УФО","Факел, Новый Уренгой","ЦСКА, Московская обл.","ЦФО","Челябинская область","Шахтер Солиногорск, Беларусь","ЮФО","Ярославич, Ярославль"]


function Main() {
    return (
        <div className="main">
            <div className="container_main">
                <Card img={belgorod} name={namesTeams[0]} vk="https://vk.com/belogorievolley" tg="https://t.me/belogorievolleyball" yt="https://www.youtube.com/user/Belogorievolley" linkSite="https://belogorievolley.ru/" site="belogorievolley.ru"/>
                <Card img={dinamoLo} name={namesTeams[1]} vk="https://vk.com/vcdynamolo" tg="https://t.me/vcdynamolo" yt="https://www.youtube.com/c/ДинамоЛОВК" linkSite="https://vc-dynamo.ru/" site="vc-dynamo.ru"/>
                <Card img={dinamoMsk} name={namesTeams[2]} vk="#" tg="#" yt="#" linkSite="https://vldinamo.ru/" site="vldinamo.ru"/>
                <Card img={zenitSpb} name={namesTeams[3]} vk="#" tg="#" yt="#" linkSite="https://vczenit-spb.ru/" site="vczenit-spb.ru"/>
                <Card img={zenitKaz} name={namesTeams[4]} vk="https://vk.com/volleyzenit" tg="#" yt="https://www.youtube.com/volleyzenit" linkSite="https://zenit-kazan.com/" site="zenit-kazan.com"/>
                <Card img={minsk} name={namesTeams[5]} vk="#" tg="#" yt="#" linkSite="https://vcminsk.com/" site="vcminsk.com"/>
                <Card img={nova} name={namesTeams[6]} vk="#" tg="#" yt="#" linkSite="https://nova-volley.ru/" site="nova-volley.ru"/>
                <Card img={proton} name={namesTeams[7]} vk="#" tg="#" yt="#" linkSite="https://proton-saratov.ru/" site="proton-saratov.ru"/>
                <Card img={ygra} name={namesTeams[8]} vk="https://vk.com/ugra_samotlor" tg="https://t.me/ugrasamotlor" yt="https://www.youtube.com/@UgraSamotlorTV" linkSite="https://www.ugra-samotlor.ru/" site="ugra-samotlor.ru"/>
                <Card img={altay} name={namesTeams[9]} vk="https://vk.com/vc_altai" tg="#" yt="#" linkSite="https://www.vcaltai.com/" site="vcaltai.com"/>
                <Card img={tiger} name={namesTeams[10]} vk="https://vk.com/amurtigreses" tg="https://t.me/amurtigreses" yt="https://www.youtube.com/@amurtigreses" linkSite="" site=""/>
                <Card img={apsni} name={namesTeams[11]} vk="#" tg="#" yt="#" linkSite="" site=""/>
                <Card img={ask} name={namesTeams[12]} vk="https://vk.com/nn_volley" tg="https://t.me/nn_volley" yt="https://www.youtube.com/channel/UCTpYBVrPophe8FSjt1x__WQ" linkSite="https://www.nn-volley.ru/" site="nn-volley.ru"/>
                <Card img={atom} name={namesTeams[13]} vk="#" tg="#" yt="#" linkSite="https://vcatomkursk.ru/" site="vcatomkursk.ru"/>
                <Card img={bryansk} name={namesTeams[14]} vk="" tg="" yt="" linkSite="" site=""/>
                <Card img={bryanskayaObl} name={namesTeams[15]} vk="" tg="" yt="" linkSite="" site=""/>
                <Card img={veterany} name={namesTeams[16]} vk="" tg="" yt="" linkSite="" site=""/>
                <Card img={volzanochka} name={namesTeams[17]} vk="" tg="" yt="" linkSite="" site=""/>
                <Card img={voronezh} name={namesTeams[18]} vk="" tg="" yt="" linkSite="" site=""/>
                <Card img={gazpromUgra} name={namesTeams[19]} vk="https://vk.com/gazprom_ugra" tg="https://t.me/gazprom_ugra" linkSite="http://gazprom-ugra.ru/club/gazpromugra/" site="gazprom-ugra.ru"/>
                <Card img={grozny} name={namesTeams[20]} vk="" tg="" yt="" linkSite="" site=""/>
                <Card img={dagestan} name={namesTeams[21]} vk="" tg="" yt="" linkSite="" site=""/>
                <Card img={dinamoKras} name={namesTeams[22]} vk="https://vk.com/vc_dinamo_krd" tg="https://t.me/dinamo_krd" yt="" linkSite="http://dinamokrasnodar.ru/" site="dinamokrasnodar.ru"/>
                <Card img={dinamoMsk2} name={namesTeams[23]} vk="https://vk.com/vcdynamomoscow" tg="https://t.me/vcdynamomoscow" yt="" linkSite="https://vcdynamo.ru/" site="vcdynamo.ru"/>
                <Card img={dinamoChel} name={namesTeams[24]} vk="" tg="" yt="" linkSite="" site=""/>
                <Card img={dinamoAkBars} name={namesTeams[25]} vk="https://vk.com/vcdinamoakbars" tg="https://t.me/vcdinamoakbars" yt="" linkSite="https://dinamo-kazan.com/" site="dinamo-kazan.com"/>
                <Card img={dinamoAnapa} name={namesTeams[26]} vk="" tg="" yt="" linkSite="" site=""/>
                <Card img={dinamoVlad} name={namesTeams[27]} vk="" tg="" yt="" linkSite="" site=""/>
                <Card img={dinamoMgtu} name={namesTeams[28]} vk="" tg="" yt="" linkSite="" site=""/>
                <Card img={dinamoMetar} name={namesTeams[29]} vk="" tg="" yt="" linkSite="https://dinamo-metar.ru/" site="dinamo-metar.ru"/>
                <Card img={doneck} name={namesTeams[30]} vk="" tg="" yt="" linkSite="" site=""/>
                <Card img={enisey} name={namesTeams[31]} vk="" tg="" yt="" linkSite="https://www.vc-enisey.ru/" site="vc-enisey.ru"/>
                <Card img={zabaycalka} name={namesTeams[32]} vk="" tg="" yt="" linkSite="" site=""/>
                <Card img={zareche} name={namesTeams[33]} vk="https://vk.com/vkzarechieodintcovo" tg="https://t.me/zarechie_odincovo" yt="https://www.youtube.com/channel/UC2xc5cf4HR6iZL539j98LrA" linkSite="http://www.vcmo.ru/" site="vcmo.ru"/>
                <Card img={ivanovo} name={namesTeams[34]} vk="" tg="" yt="" linkSite="" site=""/>
                <Card img={izGtu} name={namesTeams[35]} vk="" tg="" yt="" linkSite="" site=""/>
                <Card img={kazan} name={namesTeams[36]} vk="" tg="" yt="" linkSite="" site=""/>
                <Card img={kama} name={namesTeams[37]} vk="" tg="" yt="" linkSite="" site=""/>
                <Card img={kostroma} name={namesTeams[38]} vk="" tg="" yt="" linkSite="" site=""/>
                <Card img={krystal} name={namesTeams[39]} vk="" tg="" yt="" linkSite="" site=""/>
                <Card img={kyzbass} name={namesTeams[40]} vk="https://vk.com/kuzbassvolley" tg="https://t.me/vkkuzbass" yt="https://www.youtube.com/channel/UCP_7JuI1JbOTZdNTZOmaEPg" linkSite="https://kuzbass-volley.ru/" site="kuzbass-volley.ru"/>
                <Card img={leningradka} name={namesTeams[41]} vk="https://vk.com/leningradkaspb" tg="" yt="" linkSite="http://leningradka.spb.ru/" site="leningradka.spb.ru"/>
                <Card img={lipetsk} name={namesTeams[42]} vk="https://vk.com/vclipetsk" tg="https://t.me/vc_lipetsk" yt="https://www.youtube.com/@vclipetsk9591" linkSite="https://vclipetsk.ru/" site="vclipetsk.ru"/>
                <Card img={lipeckObl} name={namesTeams[43]} vk="" tg="" yt="" linkSite="" site=""/>
                <Card img={lokoKalinin} name={namesTeams[44]} vk="https://vk.com/vc.loko" tg="https://t.me/vc_loko" yt="https://www.youtube.com/vcloko" linkSite="http://www.vc-lokomotiv.ru/" site="vc-lokomotiv.ru"/>
                <Card img={lokoNsk} name={namesTeams[45]} vk="https://vk.com/lokovolleynsk" tg="https://t.me/lokovolleynsk" yt="https://www.youtube.com/channel/UCpjFdeg0m54wvnFdji4kWSQ" linkSite="https://www.lokovolley.com/" site="lokovolley.com"/>
                <Card img={lokoAnkara} name={namesTeams[46]} vk="" tg="" yt="" linkSite="" site=""/>
                <Card img={lokoEcb} name={namesTeams[47]} vk="" tg="" yt="" linkSite="" site=""/>
                <Card img={magnitka} name={namesTeams[48]} vk="" tg="" yt="" linkSite="" site=""/>
                <Card img={mba} name={namesTeams[49]} vk="" tg="" yt="" linkSite="https://mva.mossport.ru/" site="mva.mossport.ru"/>
                <Card img={mgtu} name={namesTeams[50]} vk="" tg="" yt="" linkSite="http://www.mgtu-volley.ru/" site="mgtu-volley.ru"/>
                <Card img={michanka} name={namesTeams[51]} vk="" tg="" yt="" linkSite="https://vcminsk.com/" site="vcminsk.com"/>
                <Card img={murom} name={namesTeams[52]} vk="" tg="" yt="" linkSite="" site=""/>
                <Card img={neftyanic} name={namesTeams[53]} vk="https://vk.com/vk_neftyanik" tg="" yt="https://www.youtube.com/channel/UCkwnCHzf7jXIVYfD75lXi7A" linkSite="https://orenvolley.com/" site="orenvolley.com"/>
                <Card img={nnogorog} name={namesTeams[54]} vk="" tg="" yt="" linkSite="" site=""/>
                <Card img={obninsk} name={namesTeams[55]} vk="" tg="" yt="" linkSite="" site=""/>
                <Card img={olinp} name={namesTeams[56]} vk="" tg="" yt="" linkSite="" site=""/>
                <Card img={omninsk} name={namesTeams[57]} vk="https://vk.com/volley_om" tg="" yt="" linkSite="" site=""/>
                <Card img={orenbrg} name={namesTeams[58]} vk="" tg="" yt="" linkSite="" site=""/>
                <Card img={pfo} name={namesTeams[59]} vk="" tg="" yt="" linkSite="" site=""/>
                <Card img={bask} name={namesTeams[60]} vk="" tg="" yt="" linkSite="" site=""/>
                <Card img={vodoley} name={namesTeams[61]} vk="" tg="" yt="" linkSite="" site=""/>
                <Card img={rostovObl} name={namesTeams[62]} vk="" tg="" yt="" linkSite="" site=""/>
                <Card img={rcsp} name={namesTeams[63]} vk="" tg="" yt="" linkSite="" site=""/>
                <Card img={ryzan} name={namesTeams[64]} vk="" tg="" yt="" linkSite="" site=""/>
                <Card img={staratov} name={namesTeams[65]} vk="" tg="" yt="" linkSite="" site=""/>
                <Card img={sahalin} name={namesTeams[66]} vk="" tg="" yt="" linkSite="https://oneteamsakhalin.com/" site="oneteamsakhalin.com"/>
                <Card img={sverdlov} name={namesTeams[67]} vk="" tg="" yt="" linkSite="" site=""/>
                <Card img={severyanks} name={namesTeams[68]} vk="" tg="" yt="" linkSite="" site=""/>
                <Card img={rzfo} name={namesTeams[69]} vk="" tg="" yt="" linkSite="" site=""/>
                <Card img={sparta} name={namesTeams[70]} vk="" tg="" yt="" linkSite="https://sparta-nn.ru/" site="sparta-nn.ru"/>
                <Card img={sfo} name={namesTeams[71]} vk="" tg="" yt="" linkSite="" site=""/>
                <Card img={tarhan} name={namesTeams[72]} vk="" tg="" yt="" linkSite="" site=""/>
                <Card img={tver} name={namesTeams[73]} vk="" tg="" yt="" linkSite="" site=""/>
                <Card img={tekstilshic} name={namesTeams[74]} vk="" tg="" yt="" linkSite="" site=""/>
                <Card img={tulica} name={namesTeams[75]} vk="" tg="" yt="" linkSite="https://tulitsa.com/" site="tulitsa.com"/>
                <Card img={tumen} name={namesTeams[76]} vk="" tg="" yt="" linkSite="" site=""/>
                <Card img={univerBar} name={namesTeams[77]} vk="" tg="" yt="" linkSite="" site=""/>
                <Card img={univerVIsit} name={namesTeams[78]} vk="" tg="" yt="" linkSite="" site=""/>
                <Card img={ural} name={namesTeams[79]} vk="https://vk.com/volleyufa" tg="" yt="" linkSite="https://volleyufa.com/" site="volleyufa.com"/>
                <Card img={uralochka} name={namesTeams[80]} vk="" tg="" yt="" linkSite="https://www.uralochka-vc.com/" site="uralochka-vc.com"/>
                <Card img={ufimochka} name={namesTeams[81]} vk="https://vk.com/vcufimochka" tg="" yt="" linkSite="" site=""/>
                <Card img={ufo} name={namesTeams[82]} vk="" tg="" yt="" linkSite="" site=""/>
                <Card img={facel} name={namesTeams[83]} vk="https://vk.com/fakelvolley" tg="https://t.me/fakelvolley" yt="https://www.youtube.com/user/fakelvolley" linkSite="https://fakelvolley.ru/" site="fakelvolley.ru"/>
                <Card img={cska} name={namesTeams[84]} vk="" tg="" yt="" linkSite="" site=""/>
                <Card img={cfo} name={namesTeams[85]} vk="" tg="" yt="" linkSite="" site=""/>
                <Card img={chelyaba} name={namesTeams[86]} vk="" tg="" yt="" linkSite="" site=""/>
                <Card img={shahter} name={namesTeams[87]} vk="https://vk.com/vcshahter" tg="https://t.me/vcshahter" yt="https://www.youtube.com/channel/UCgafsw_Gs0yqZB-elfs_u7Q" linkSite="https://vcshahter.by/" site="vcshahter.by"/>
                <Card img={yfo} name={namesTeams[88]} vk="" tg="" yt="" linkSite="" site=""/>
                <Card img={yaroslavich} name={namesTeams[89]} vk="" tg="" yt="" linkSite="" site=""/>
            </div>
        </div>
    )
}

export default Main;