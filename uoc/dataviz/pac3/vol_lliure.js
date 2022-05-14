SVG.on(document, 'DOMContentLoaded', function() {
    // Fons
    var draw = SVG().addTo('body').size(1024, 768)
    draw.rect('100%', '100%').attr({ fill: '#e9fafb' })

    // Torre i marcadors d'altura
    var torre = draw.image('torre.svg')
    torre.size(170,170).move(50, 140)

    var alt_713m = draw.text('713 m').move(30, 125).fill({ color: 'black' })
    alt_713m.font({ family: 'Verdana', weight: 'lighter', size: 20 })

    var alt_0m = draw.text('0 m').move(55, 600).fill({ color: 'black' })
    alt_0m.font({ family: 'Verdana', weight: 'lighter', size: 20 })

    var torre_line = draw.line(0, 0, 0, 305).move(137, 325)
    torre_line.stroke({ color: 'black', width: 1, linecap: 'butt' })
    torre_line.css('stroke-dasharray', '2 15')

    var torre_text = draw.text(function(add) {
        add.tspan('Torre')
        add.tspan('Collserola').dy(20).dx(-45)
    }).move(105, 630).fill({ color: 'black' })
    torre_text.font({ family: 'Verdana', weight: 'lighter', size: 12 })

    // Paracaigudista
    var paraca_line = draw.line(0, 0, 55, 475).move(160, 142)
    paraca_line.stroke({ color: '#ababab', width: 1.5, linecap: 'round' })
    paraca_line.css('stroke-dasharray', '4 10')

    var ronda_text = draw.text(function(add) {
        add.tspan('Rda. Dalt')
        add.tspan('1 Km').dy(20).dx(-45)
    }).move(185, 630).fill({ color: 'black' })
    ronda_text.font({ family: 'Verdana', weight: 'lighter', size: 12 })

    var paraca = draw.image('paraca.svg')
    paraca.size(5,5).opacity(0).move(160, 142)
    paraca
        .animate(1000, 2000, 'now').move(215, 495)
        .animate(1000, 2000, 'now').opacity(1)
        .animate(1000, 2000, 'now').size(80,80)

    var huma_text = draw.text("Humà").move(250, 570).fill({ color: 'black' })
    huma_text.font({ family: 'Verdana', weight: 'lighter', size: 14 })
    huma_text.opacity(0)
    huma_text.animate(100, 3000, 'now').opacity(1)

    // Parapent
    var parapent_line = draw.line(0, 0, 200, 478).move(160, 142)
    parapent_line.stroke({ color: '#ababab', width: 1.5, linecap: 'round' })
    parapent_line.css('stroke-dasharray', '4 10')

    var santaco_text = draw.text(function(add) {
        add.tspan('Sta. Coloma')
        add.tspan('8 Km').dy(20).dx(-50)
    }).move(325, 630).fill({ color: 'black' })
    santaco_text.font({ family: 'Verdana', weight: 'lighter', size: 12 })

    var parapent = draw.image('parapent.svg')
    parapent.size(5,5).opacity(0).move(160, 142)
    parapent
        .animate(1000, 1500, 'now').move(315, 440)
        .animate(1000, 1500, 'now').opacity(1)
        .animate(1000, 1500, 'now').size(90, 90)

    var parapent_text = draw.text("Parapent").move(365, 535).fill({ color: 'black' })
    parapent_text.font({ family: 'Verdana', weight: 'lighter', size: 14 })
    parapent_text.opacity(0)
    parapent_text.animate(100, 2500, 'now').opacity(1)

    // Albatros
    var albatros_line = draw.line(0, 0, 420, 475).move(160, 142)
    albatros_line.stroke({ color: '#ababab', width: 1.5, linecap: 'round' })
    albatros_line.css('stroke-dasharray', '4 10')

    var montgat_text = draw.text(function(add) {
        add.tspan('Montgat')
        add.tspan('16 Km').dy(20).dx(-43)
    }).move(560, 630).fill({ color: 'black' })
    montgat_text.font({ family: 'Verdana', weight: 'lighter', size: 12 })

    var albatros = draw.image('albatros.svg')
    albatros.size(5,5).opacity(0).move(160, 142)
    albatros
        .animate(1000, 1000, 'now').move(455, 385)
        .animate(1000, 1000, 'now').opacity(1)
        .animate(1000, 1000, 'now').size(95, 95)

    var albatros_text = draw.text("Albatros").move(510, 470).fill({ color: 'black' })
    albatros_text.font({ family: 'Verdana', weight: 'lighter', size: 14 })
    albatros_text.opacity(0)
    albatros_text.animate(100, 2000, 'now').opacity(1)

    // Planador
    var planador_line = draw.line(0, 0, 800, 475).move(160, 142)
    planador_line.stroke({ color: '#ababab', width: 1.5, linecap: 'round' })
    planador_line.css('stroke-dasharray', '4 10')

    var igualada_text = draw.text(function(add) {
        add.tspan('Igualada')
        add.tspan('50 Km').dy(20).dx(-43)
    }).move(935, 630).fill({ color: 'black' })
    igualada_text.font({ family: 'Verdana', weight: 'lighter', size: 12 })

    var planador = draw.image('planador.svg')
    planador.size(5,5).opacity(0).move(160, 142)
    planador
        .animate(1000, 500, 'now').move(555, 265)
        .animate(1000, 500, 'now').opacity(1)
        .animate(1000, 500, 'now').size(115, 115)

    var planador_text = draw.text("Planador").move(615, 370).fill({ color: 'black' })
    planador_text.font({ family: 'Verdana', weight: 'lighter', size: 14 })
    planador_text.opacity(0)
    planador_text.animate(100, 1500, 'now').opacity(1)

    // Títol i quadre explicatiu
    var titol = draw.text("Fins a on s'arriba volant sense motor?").move(390, 15).fill({ color: '#023e8a' })
    titol.font({ family: 'Georgia', weight: 'lighter', size: 35 })

    var quadre_text = draw.text("Els planadors , o avions a vela , poden arribar a\navançar  70 metres per cada metre que baixen .\nVeim com s'hi comparen els altres objectes aeris.")
    .move(525, 90).fill({ color: '#ababab' })
    quadre_text.font({ family: 'Verdana', weight: 'lighter', size: 18 })
})