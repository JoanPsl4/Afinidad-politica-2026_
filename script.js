const questions = [
["Economía e impuestos","El sistema fiscal debería hacer que las personas con más ingresos paguen una proporción mayor de impuestos."],
["Economía e impuestos","Reducir los impuestos a las empresas puede ayudar a crear empleo."],
["Economía e impuestos","El Estado debería aumentar la inversión en servicios públicos aunque implique recaudar más."],
["Economía e impuestos","El gasto público debería reducirse cuando la deuda del país es elevada."],
["Economía e impuestos","Los impuestos sobre productos contaminantes deberían ser más altos."],
["Empleo y trabajo","El salario mínimo debería subir si aumenta el coste de la vida."],
["Empleo y trabajo","Las empresas deberían tener más flexibilidad para contratar y organizar el trabajo."],
["Empleo y trabajo","La semana laboral debería reducirse si se puede mantener el salario y la productividad."],
["Empleo y trabajo","Los sindicatos tienen un papel importante en la defensa de los trabajadores."],
["Vivienda","El Estado debería construir más vivienda pública de alquiler."],
["Vivienda","En zonas con alquileres muy altos, deberían limitarse las subidas del precio del alquiler."],
["Vivienda","Los propietarios deberían tener más facilidades para recuperar una vivienda cuando hay impagos."],
["Vivienda","Debería haber más impuestos o medidas contra quienes mantienen viviendas vacías durante mucho tiempo en zonas tensionadas."],
["Vivienda","Los trámites para construir nuevas viviendas deberían simplificarse."],
["Sanidad","La sanidad pública debería recibir más financiación aunque sea necesario aumentar algunos impuestos."],
["Sanidad","Se debería permitir una mayor colaboración entre centros públicos y privados para reducir las listas de espera."],
["Sanidad","La atención a la salud mental debería tener la misma prioridad que otras áreas sanitarias."],
["Sanidad","Los servicios sanitarios deberían estar gestionados principalmente por el sector público."],
["Educación","La educación pública debería recibir más recursos para reducir las diferencias entre centros."],
["Educación","Las familias deberían poder elegir libremente entre centros públicos, concertados y privados."],
["Educación","La formación profesional debería recibir tanta atención y prestigio como la universidad."],
["Educación","Deberían existir normas comunes de contenidos educativos en todo el país."],
["Inmigración","La inmigración puede beneficiar al país si existen políticas eficaces de integración."],
["Inmigración","El control de las fronteras debería reforzarse, incluso si eso reduce las llegadas."],
["Inmigración","Las personas inmigrantes que viven y trabajan legalmente en el país deberían tener vías claras para regularizar su situación."],
["Inmigración","La política de acogida debería repartirse entre las distintas regiones según su capacidad."],
["Seguridad y justicia","Debería aumentarse la presencia policial en las zonas con más delitos."],
["Seguridad y justicia","La reinserción debería ser un objetivo central del sistema penitenciario."],
["Seguridad y justicia","Las penas por delitos violentos graves deberían ser más duras."],
["Seguridad y justicia","Debería invertirse más en prevención social para reducir la delincuencia."],
["Medio ambiente y energía","El país debería acelerar la transición hacia energías renovables."],
["Medio ambiente y energía","La energía nuclear debería formar parte de la estrategia energética nacional."],
["Medio ambiente y energía","Las medidas contra el cambio climático justifican limitar algunas actividades contaminantes."],
["Medio ambiente y energía","La protección del campo y la biodiversidad debería tener prioridad frente a ciertos proyectos urbanísticos."],
["Transporte e infraestructuras","El transporte público debería ser más barato aunque necesite más subvenciones."],
["Transporte e infraestructuras","Se deberían priorizar las inversiones en trenes y autobuses frente a nuevas carreteras."],
["Pensiones y bienestar","Las pensiones públicas deberían mantener su poder adquisitivo con la inflación."],
["Pensiones y bienestar","El sistema de pensiones debería combinar la financiación pública con más opciones de ahorro individual."],
["Pensiones y bienestar","El Estado debería ampliar las ayudas para las familias con menos ingresos."],
["Igualdad y derechos","Las políticas públicas deberían dedicar más recursos a reducir la desigualdad entre hombres y mujeres."],
["Igualdad y derechos","La ley debería tratar de la misma manera a todas las personas, con independencia de su orientación sexual."],
["Igualdad y derechos","Las políticas de igualdad deberían centrarse en garantizar las mismas oportunidades para todas las personas."],
["Modelo territorial","Las comunidades autónomas deberían tener más competencias para decidir sobre sus propios asuntos."],
["Modelo territorial","El Estado debería asumir más competencias para garantizar servicios similares en todo el territorio."],
["Modelo territorial","Las comunidades que lo soliciten deberían poder celebrar consultas pactadas sobre su relación con el Estado."],
["Lengua y cultura","Las lenguas cooficiales deberían poder utilizarse en igualdad de condiciones en las instituciones estatales."],
["Lengua y cultura","La política cultural debería proteger especialmente las lenguas y tradiciones minoritarias."],
["Unión Europea y mundo","España debería colaborar estrechamente con las instituciones de la Unión Europea."],
["Unión Europea y mundo","La política exterior debería priorizar los intereses nacionales aunque haya desacuerdos con aliados."],
["Democracia e instituciones","Los partidos deberían publicar con más detalle cómo gastan el dinero público que reciben."],
["Democracia e instituciones","Deberían reforzarse las medidas para evitar conflictos de interés y corrupción política."],
["Democracia e instituciones","Los ciudadanos deberían poder participar más directamente en decisiones políticas importantes."],
["Agricultura y mundo rural","Las ayudas públicas deberían apoyar más a pequeños agricultores y explotaciones familiares."],
["Agricultura y mundo rural","Las normas medioambientales para el sector agrario deberían adaptarse al tamaño de cada explotación."],
["Tecnología y privacidad","El Estado debería regular más las grandes plataformas tecnológicas para proteger a los usuarios."],
["Tecnología y privacidad","La privacidad digital debería prevalecer sobre la recopilación de datos cuando no sea imprescindible."],
["Familia y sociedad","Las políticas públicas deberían facilitar la conciliación entre trabajo y cuidados familiares."],
["Familia y sociedad","Las decisiones personales y familiares deberían dejar el máximo espacio posible a la libertad individual."],
["Fiscalidad y servicios","Los servicios públicos esenciales deberían ser accesibles independientemente de los ingresos."],
["Defensa y seguridad exterior","España debería invertir más en defensa si el contexto internacional se vuelve más inseguro."]
];
const options=[["Muy en desacuerdo",1],["En desacuerdo",2],["Ni de acuerdo ni en desacuerdo",3],["De acuerdo",4],["Muy de acuerdo",5]];
let index=0;const responses=Array(questions.length).fill(null);
const $=id=>document.getElementById(id);
$("start").addEventListener("click",()=>{$("intro").classList.add("hidden");$("quiz").classList.remove("hidden");render()});
function render(){
 const [cat,q]=questions[index];$("category").textContent=cat;$("qnum").textContent=`PREGUNTA ${String(index+1).padStart(2,"0")}`;$("question").textContent=q;
 $("stepTitle").textContent=`Pregunta ${index+1} de ${questions.length}`;
 const count=responses.filter(v=>v!==null).length;const pct=Math.round(count/questions.length*100);
 $("answered").textContent=`${count} de ${questions.length} respuestas completadas`;$("percent").textContent=`${Math.round((index+1)/questions.length*100)}%`;$("progressBar").style.width=`${(index+1)/questions.length*100}%`;
 $("answers").innerHTML="";
 options.forEach(([label,value])=>{const b=document.createElement("button");b.className="answer"+(responses[index]===value?" selected":"");b.innerHTML=`<span class="dot"></span><span>${label}</span>`;b.setAttribute("aria-pressed",responses[index]===value?"true":"false");b.onclick=()=>{responses[index]=value;render()};$("answers").appendChild(b)});
 $("prev").disabled=index===0;$("next").classList.toggle("hidden",index===questions.length-1);$("finish").classList.toggle("hidden",index!==questions.length-1);
}
$("prev").onclick=()=>{if(index>0){index--;render()}};
$("next").onclick=()=>{if(index<questions.length-1){index++;render()}};
$("skip").onclick=()=>{if(index<questions.length-1){index++;render()}else showResults()};
$("finish").onclick=showResults;


// ---------------------------------------------------------------------------
// PARTIDOS REALES (13 formaciones con representación en el Congreso / ámbito estatal)
// Escala: 1 = muy en desacuerdo, 2 = en desacuerdo, 3 = neutral/matizado,
//         4 = de acuerdo, 5 = muy de acuerdo, 0 = sin posición clara (se ignora).
// Orden de columnas en MATRIX:
// PSOE PP VOX SUMAR PODEMOS ERC JUNTS PNV BILDU ADELANTE BNG CC SALF
// Son ESTIMACIONES propias a partir de programas electorales, votaciones
// parlamentarias y declaraciones públicas. No son posiciones oficiales: revísalas.
// ---------------------------------------------------------------------------
const PARTIES=[
 {id:"PSOE",name:"PSOE",full:"Partido Socialista Obrero Español",color:"#e30613"},
 {id:"PP",name:"PP",full:"Partido Popular",color:"#0a5eb0"},
 {id:"VOX",name:"VOX",full:"Vox",color:"#5fb41e"},
 {id:"SUMAR",name:"Sumar",full:"Sumar",color:"#e5287a"},
 {id:"PODEMOS",name:"Podemos",full:"Podemos",color:"#6b2d83"},
 {id:"ERC",name:"ERC",full:"Esquerra Republicana de Catalunya",color:"#f0a500"},
 {id:"JUNTS",name:"Junts",full:"Junts per Catalunya",color:"#00a99d"},
 {id:"PNV",name:"PNV",full:"Partido Nacionalista Vasco",color:"#3f9b3a"},
 {id:"BILDU",name:"Bildu",full:"EH Bildu",color:"#8fb51a"},
 {id:"ADELANTE",name:"Adelante Andalucía",full:"Adelante Andalucía",color:"#4c8c2b"},
 {id:"BNG",name:"BNG",full:"Bloque Nacionalista Galego",color:"#5aa9de"},
 {id:"CC",name:"CC",full:"Coalición Canaria",color:"#d9b300"},
 {id:"SALF",name:"SALF",full:"Se Acabó La Fiesta",color:"#555555"}
];

const MATRIX=[
"4 2 1 5 5 4 3 3 5 5 5 3 1", // 0  impuestos progresivos
"2 5 5 1 1 2 4 3 1 1 1 4 5", // 1  bajar impuesto sociedades
"5 3 2 5 5 4 3 4 5 5 5 3 1", // 2  más inversión pública
"2 4 5 1 1 2 3 3 1 1 1 3 5", // 3  reducir gasto con deuda alta
"4 2 1 5 4 4 3 3 4 4 4 2 1", // 4  impuestos a lo contaminante
"5 3 2 5 5 5 3 4 5 5 5 3 1", // 5  SMI ligado al coste de vida
"2 4 4 1 1 2 4 3 1 1 1 4 5", // 6  flexibilidad de contratación
"5 2 2 5 5 4 2 4 5 5 5 3 1", // 7  reducción de jornada
"5 3 1 5 5 4 3 4 5 5 5 3 1", // 8  papel de los sindicatos
"5 3 2 5 5 5 3 4 5 5 5 4 1", // 9  vivienda pública de alquiler
"4 1 1 5 5 5 2 3 5 5 5 2 1", // 10 limitar subidas de alquiler
"2 5 5 1 1 2 4 3 1 1 1 4 5", // 11 facilitar recuperar vivienda por impago
"4 2 1 5 5 5 2 4 5 5 5 2 1", // 12 medidas contra viviendas vacías
"4 5 5 2 2 3 4 4 2 2 2 5 5", // 13 simplificar trámites de construcción
"5 3 2 5 5 4 3 4 5 5 5 3 1", // 14 más financiación sanidad pública
"2 5 5 1 1 3 4 3 1 1 1 4 5", // 15 colaboración público-privada sanidad
"5 4 3 5 5 5 4 5 5 5 5 4 3", // 16 salud mental
"5 2 2 5 5 4 3 4 5 5 5 3 1", // 17 gestión principalmente pública sanidad
"5 3 2 5 5 5 4 4 5 5 5 4 2", // 18 más recursos educación pública
"2 5 5 1 1 2 3 4 1 1 1 4 5", // 19 libre elección de centro
"5 5 4 5 4 4 4 5 4 4 4 5 4", // 20 FP
"4 5 5 3 3 1 1 2 1 2 1 3 3", // 21 normas educativas comunes
"5 4 1 5 5 5 3 5 5 5 5 4 2", // 22 inmigración beneficia con integración
"3 5 5 1 1 1 4 3 1 1 1 4 5", // 23 reforzar fronteras
"4 3 1 5 5 5 3 5 5 5 5 4 2", // 24 vías de regularización
"5 2 1 5 5 3 1 3 4 5 4 5 2", // 25 reparto de acogida entre regiones
"4 5 5 2 2 3 4 4 2 2 2 4 5", // 26 más presencia policial
"5 3 2 5 5 5 3 5 5 5 5 4 2", // 27 reinserción
"3 5 5 1 1 2 4 3 1 1 1 4 4", // 28 penas más duras
"5 3 2 5 5 5 4 5 5 5 5 4 2", // 29 prevención social
"5 4 2 5 5 5 3 5 5 5 3 4 2", // 30 acelerar renovables
"2 5 5 1 1 1 4 2 1 1 1 3 5", // 31 nuclear
"4 2 1 5 5 4 3 4 4 5 4 3 1", // 32 limitar actividades contaminantes
"4 3 2 5 5 4 3 4 5 5 5 3 1", // 33 biodiversidad frente a urbanismo
"5 3 2 5 5 5 3 4 5 5 5 4 1", // 34 transporte público más barato
"4 3 2 5 5 5 3 4 5 5 5 2 2", // 35 tren y bus frente a carreteras
"5 4 4 5 5 5 4 5 5 5 5 5 2", // 36 pensiones ligadas a inflación
"3 5 4 1 1 2 3 5 1 1 1 3 5", // 37 pensiones públicas + ahorro individual
"5 3 3 5 5 5 3 4 5 5 5 4 1", // 38 ayudas a familias con menos ingresos
"5 3 1 5 5 5 4 5 5 5 5 3 1", // 39 recursos para igualdad hombres-mujeres
"5 4 3 5 5 5 4 5 5 5 5 4 4", // 40 igualdad ante la ley (orientación sexual)
"3 4 5 2 2 3 4 3 2 2 2 4 5", // 41 igualdad de oportunidades para todas las personas
"3 3 1 4 4 5 5 5 5 5 5 4 1", // 42 más competencias autonómicas
"4 4 5 3 3 1 1 1 1 2 1 2 4", // 43 más competencias del Estado
"2 1 1 4 5 5 5 4 5 5 5 1 1", // 44 consultas pactadas
"4 2 1 5 5 5 5 5 5 3 5 3 1", // 45 lenguas cooficiales en instituciones estatales
"4 3 2 5 5 5 5 5 5 4 5 4 1", // 46 proteger lenguas y tradiciones minoritarias
"5 5 1 5 3 5 4 5 3 3 3 5 2", // 47 colaboración con la UE
"2 3 5 2 3 2 3 2 3 3 3 3 4", // 48 intereses nacionales antes que aliados
"4 4 4 5 5 4 4 4 4 5 4 4 5", // 49 transparencia del gasto de partidos
"5 5 5 5 5 5 5 5 5 5 5 5 5", // 50 anticorrupción
"3 3 4 4 5 5 5 3 5 5 4 3 5", // 51 participación directa
"4 4 5 5 5 5 5 5 5 5 5 5 2", // 52 ayudas a pequeños agricultores
"3 5 5 2 2 3 4 4 3 3 3 4 5", // 53 normas ambientales agrarias según tamaño
"5 3 2 5 5 4 3 4 4 4 4 3 1", // 54 regular grandes plataformas
"4 3 4 5 5 5 4 4 5 5 5 3 5", // 55 privacidad digital
"5 4 4 5 5 5 4 5 5 5 5 4 2", // 56 conciliación
"3 4 3 3 3 4 4 3 3 3 3 4 5", // 57 libertad individual
"5 4 4 5 5 5 4 5 5 5 5 5 2", // 58 servicios esenciales para todos
"4 5 5 2 1 1 3 3 1 1 1 4 4"  // 59 más gasto en defensa
];
PARTIES.forEach((p,j)=>{p.scores=MATRIX.map(r=>{const v=parseInt(r.split("//")[0].trim().split(/\s+/)[j],10);return v>0?v:null})});

function affinity(party, filter){
  let total=0, n=0;
  responses.forEach((a,i)=>{
    const s=party.scores[i];
    if(a!==null && s!==null && (!filter||filter(i))){ total+=1-Math.abs(a-s)/4; n++; }
  });
  return {pct:n?Math.round(total/n*100):null, n};
}

function showResults(){
  $("quiz").classList.add("hidden");$("results").classList.remove("hidden");
  const answered=responses.filter(v=>v!==null).length;
  $("summary").textContent=`Has respondido ${answered} de ${questions.length} preguntas. Esta es tu coincidencia estimada con las posiciones de 13 formaciones políticas españolas.`;
  const cats=[...new Set(questions.map(q=>q[0]))];
  const ranked=PARTIES.map(p=>({...p,...affinity(p)})).filter(p=>p.pct!==null).sort((a,b)=>b.pct-a.pct);
  $("resultList").innerHTML="";
  if(!ranked.length){
    $("resultList").innerHTML='<div class="result-note">No has respondido ninguna pregunta, así que no se puede calcular la coincidencia. Vuelve a empezar y responde al menos algunas.</div>';
  }
  ranked.forEach((p,k)=>{
    const rows=cats.map(c=>{
      const a=affinity(p,i=>questions[i][0]===c);
      return a.pct===null?"":`<div class="cat-row"><span>${c}</span><span class="cat-bar"><i style="width:${a.pct}%;background:${p.color}"></i></span><b>${a.pct}%</b></div>`;
    }).join("");
    const item=document.createElement("div");item.className="result-item";
    item.innerHTML=`<div class="result-top"><span><i class="swatch" style="background:${p.color}"></i>${k+1}. ${p.name} <small class="sub">${p.full===p.name?"":p.full}</small></span><span>${p.pct}%</span></div><div class="bar"><span style="width:${p.pct}%;background:${p.color}"></span></div><div class="sub" style="margin-top:8px">Calculado con ${p.n} pregunta${p.n===1?"":"s"}</div><details class="cat-details"><summary>Ver coincidencia por temas</summary>${rows}</details>`;
    $("resultList").appendChild(item);
  });
  buildMatrix();
  window.scrollTo({top:0,behavior:"smooth"});
}

function buildMatrix(){
  const box=$("matrix");
  let h='<div class="matrix-scroll"><table class="matrix-table"><thead><tr><th>Pregunta</th><th>Tú</th>'+PARTIES.map(p=>`<th style="border-top:3px solid ${p.color}">${p.name}</th>`).join("")+'</tr></thead><tbody>';
  let lastCat="";
  questions.forEach(([cat,q],i)=>{
    if(cat!==lastCat){h+=`<tr class="cat-line"><td colspan="${PARTIES.length+2}">${cat}</td></tr>`;lastCat=cat}
    h+=`<tr><td class="q">${q}</td><td class="me">${responses[i]??"–"}</td>`+PARTIES.map(p=>{const s=p.scores[i];return `<td class="v v${s??0}">${s??"–"}</td>`}).join("")+'</tr>';
  });
  h+='</tbody></table></div><p class="sub" style="margin-top:10px">Escala: 1 = muy en desacuerdo · 3 = neutral · 5 = muy de acuerdo. «–» = sin posición clara o sin respuesta.</p>';
  box.innerHTML=h;
}

$("restart").onclick=()=>{index=0;responses.fill(null);$("results").classList.add("hidden");$("intro").classList.remove("hidden");window.scrollTo({top:0,behavior:"smooth"})};
$("print").onclick=()=>window.print();
