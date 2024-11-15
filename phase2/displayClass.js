export function displayClass(data) {
    console.log(data.proficiency_choices[0].desc);

    let table =
        `<h1 id='name'>Name : ${data.name}</h1>`
        if (data.hit_die) table+=`<h4 id='hit_die'>Hit die : ${data.hit_die}</h4>`;
        if(data.desc) table+=`<p>${data.desc}</p>`;
        if(data.proficiency_choices[0].desc) table+= `<p>${dat.proficiency_choices[0].desc}</p>`


    document.body.innerHTML = table

}