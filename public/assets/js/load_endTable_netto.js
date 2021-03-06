const { create, all} = require('mathjs')
const Store = require('electron-store');

const store = new Store({accessPropertiesByDotNotation: true});

const config = { }
const math = create(all, config)

//...

let nameVal_object = store.get('name_val')

//...

let name_object = store.get('el_list')

//...

let meters_object = store.get('meters')

//...

let price_object = store.get('price')

//...

let namejm = store.get('jm')

//...


let name_el = document.getElementById('name_val')


name_el.append(nameVal_object)

    for (let i = 0; i < name_object.length; i++) {
        let table = document.getElementById('table_')

    
        const t_r = document.createElement('tr')
        const t_d1 = document.createElement('td')
        const t_d2 = document.createElement('td')
        const t_d3 = document.createElement('td')
        const t_d4 = document.createElement('td')

        //...

        const ip2 = document.createElement('p')
        const ip3 = document.createElement('p')

        //...

        const p1 = document.createElement('p')
        const p2 = document.createElement('p')
        const p3 = document.createElement('p')

        //...

        const sum_element = document.createElement('p')

        /**********************/

        table.appendChild(t_r)

        t_d1.classList.add('name_')
        t_d2.classList.add('meters_')
        t_d3.classList.add('price_')
        t_d4.classList.add('sum_')


        p1.classList.add('p1')
        p2.classList.add('p2')
        p3.classList.add('p1')

        sum_element.classList.add('sum_element')
        sum_element.classList.add('sum_element' + [i])


        /**********************/

        table.appendChild(t_r)

        t_r.appendChild(t_d1)
        t_r.appendChild(t_d2)
        t_r.appendChild(t_d3)
        t_r.appendChild(t_d4)

        //...

        t_d1.append(name_object[i])
        t_d2.appendChild(ip2)
        t_d3.appendChild(ip3)
        t_d4.appendChild(sum_element)

        //...

        t_d2.appendChild(p1)
        t_d3.appendChild(p2)
        t_d4.appendChild(p3)

        p1.append('zł')
        p2.append(namejm[i])
        p3.append('zł')

        let element_netto = meters_object[i] * price_object[i]

        let rounded_netto = math.round(element_netto, 2)

        sum_element.append(rounded_netto)


        //...

        ip2.append(meters_object[i])
        ip2.classList.add('inp2')
        ip3.append(price_object[i])
        ip3.classList.add('inp3')

        //...
 
    }


        let table_ = document.getElementById('table_')

        const t_r_ = document.createElement('tr')
        const t_d1_ = document.createElement('td')
        const t_d2_ = document.createElement('td')
        const t_d3_ = document.createElement('td')
        const t_d4_ = document.createElement('td')

        const p = document.createElement('p')
        const p_ = document.createElement('p')

        table_.appendChild(t_r_)

        t_d1_.classList.add('empty_td')
        t_d2_.classList.add('empty_td')

        t_r_.appendChild(t_d1_)
        t_r_.appendChild(t_d2_)
        t_r_.appendChild(t_d3_)
        t_r_.appendChild(t_d4_)


        t_d3_.classList.add('txt')
        t_d4_.classList.add('suma')

        p.classList.add('pp')
        p_.classList.add('cena')

        t_d3_.append('SUMA:')
        t_d4_.appendChild(p)
        t_d4_.appendChild(p_)

        
        let arr = []
        let sum = 0

        for (let i = 0; i < price_object.length; i++) {

            let el = document.getElementsByClassName('sum_element')

            el[i].setAttribute("id", el[i].innerHTML);
            let inp3_ = document.getElementsByClassName('sum_element')[i].id

            arr.push(parseFloat(inp3_))
            
        }


        for (var i = 0; i < arr.length; i++) {
            sum += arr[i]
        }

        let sum_netto = math.round(sum, 2)
        p.append(sum_netto)
        p_.append('zł')

