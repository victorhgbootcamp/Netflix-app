import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Netflix-app';

  top5 = {
    section: "TOP 5 POPULARES",
    films: [{
      imgNum: "https://res.cloudinary.com/dfgzfxscq/image/upload/v1661341794/Proyecto%20Netflix/1_sbvggi.png",
      image: "https://res.cloudinary.com/dfgzfxscq/image/upload/v1661344444/Proyecto%20Netflix/top%205/1-papel_xevzmc.webp"
    },
    {
      imgNum: "https://res.cloudinary.com/dfgzfxscq/image/upload/v1661341794/Proyecto%20Netflix/2_f9cc6r.png",
      image: "https://res.cloudinary.com/dfgzfxscq/image/upload/v1661344444/Proyecto%20Netflix/top%205/10-gooddoctor_cwmpu9.webp"
    },
    {
      imgNum: "https://res.cloudinary.com/dfgzfxscq/image/upload/v1661341794/Proyecto%20Netflix/3_egew3j.png",
      image: "https://res.cloudinary.com/dfgzfxscq/image/upload/v1661344444/Proyecto%20Netflix/top%205/6-aquinohay_qrzryd.webp"
    },
    {
      imgNum: "https://res.cloudinary.com/dfgzfxscq/image/upload/v1661341794/Proyecto%20Netflix/4_avodio.png",
      image: "https://res.cloudinary.com/dfgzfxscq/image/upload/v1661344444/Proyecto%20Netflix/top%205/9-poder_yhywk1.webp"
    },
    {
      imgNum: "https://res.cloudinary.com/dfgzfxscq/image/upload/v1661341794/Proyecto%20Netflix/5_oeyrut.png",
      image: "https://res.cloudinary.com/dfgzfxscq/image/upload/v1661344444/Proyecto%20Netflix/top%205/2-reina_egjixv.webp"
    }
    
  ]
  }


comedyFilms = {
  section: "COMEDIAS",
  films: [{
    title: "Los padres de ella",
    image: "https://res.cloudinary.com/dfgzfxscq/image/upload/v1661274309/Proyecto%20Netflix/Comedia/padresella_alawni.webp"
  },
  {
    title: "Scary Movie 3",
    image: "https://res.cloudinary.com/dfgzfxscq/image/upload/v1661274309/Proyecto%20Netflix/Comedia/scarymovie3_jcvhpj.webp"
  },
  {
    title: "Ted 2",
    image: "https://res.cloudinary.com/dfgzfxscq/image/upload/v1661274309/Proyecto%20Netflix/Comedia/ted2_ve3hpd.webp"
  },
  {
    title: "El Dictador",
    image: "https://res.cloudinary.com/dfgzfxscq/image/upload/v1661274309/Proyecto%20Netflix/Comedia/dictador_u4ufwg.webp"
  },
  {
    title: "Casi 300",
    image: "https://res.cloudinary.com/dfgzfxscq/image/upload/v1661274308/Proyecto%20Netflix/Comedia/casi300_tw1qsp.webp"
  }
]
}


dramaFilms = {
  section: "DRAMAS",
  films: [{
    title: "El club de la lucha",
    image: "https://res.cloudinary.com/dfgzfxscq/image/upload/v1661329759/Proyecto%20Netflix/Drama/clublucha_xvupkh.webp"
  },
  {
    title: "Salvar al soldado Ryan",
    image: "https://res.cloudinary.com/dfgzfxscq/image/upload/v1661329759/Proyecto%20Netflix/Drama/salvaralsoldado_n4ukwy.webp"
  },
  {
    title: "Náufrago",
    image: "https://res.cloudinary.com/dfgzfxscq/image/upload/v1661329759/Proyecto%20Netflix/Drama/naufrago_fc91sm.webp"
  },
  {
    title: "La milla verde",
    image: "https://res.cloudinary.com/dfgzfxscq/image/upload/v1661329759/Proyecto%20Netflix/Drama/millaverde_j3jfkz.webp"
  },
  {
    title: "La lista de Schindler",
    image: "https://res.cloudinary.com/dfgzfxscq/image/upload/v1661329759/Proyecto%20Netflix/Drama/schindler_fmfuqy.webp"
  }
  
]
}

accionFilms = {
  section: "PELICULAS DE ACCION",
  films: [{
    title: "Equalizer 2",
    image: "https://res.cloudinary.com/dfgzfxscq/image/upload/v1661274270/Proyecto%20Netflix/Accion/equalizer2_y841o2.webp"
  },
  {
    title: "El Renacido",
    image: "https://res.cloudinary.com/dfgzfxscq/image/upload/v1661274270/Proyecto%20Netflix/Accion/renacido_o7csfj.webp"
  },
  {
    title: "Guerra Mundial Z",
    image: "https://res.cloudinary.com/dfgzfxscq/image/upload/v1661274270/Proyecto%20Netflix/Accion/worldwarz_kdzlce.webp"
  },
  {
    title: "Terminator 2",
    image: "https://res.cloudinary.com/dfgzfxscq/image/upload/v1661274270/Proyecto%20Netflix/Accion/terminator2_jead3k.webp"
  },
  {
    title: "Kill Bill vol.2",
    image: "https://res.cloudinary.com/dfgzfxscq/image/upload/v1661274270/Proyecto%20Netflix/Accion/killbill2_skgfwp.webp"
  }
  
]
}
terrorFilms = {
  section: "PELICULAS DE TERROR",
  films: [{
    title: "Múltiple",
    image: "https://res.cloudinary.com/dfgzfxscq/image/upload/v1661274359/Proyecto%20Netflix/Terror/multiple_aeaujz.webp"
  },
  {
    title: "Insidious 2",
    image: "https://res.cloudinary.com/dfgzfxscq/image/upload/v1661274359/Proyecto%20Netflix/Terror/insidious2_iikrqa.webp"
  },
  {
    title: "El Apóstol",
    image: "https://res.cloudinary.com/dfgzfxscq/image/upload/v1661274360/Proyecto%20Netflix/Terror/apostol_rhnorh.jpg"
  },
  {
    title: "Malasaña 32",
    image: "https://res.cloudinary.com/dfgzfxscq/image/upload/v1661274359/Proyecto%20Netflix/Terror/malasana_mbrakz.webp"
  },
  {
    title: "Life",
    image: "https://res.cloudinary.com/dfgzfxscq/image/upload/v1661274359/Proyecto%20Netflix/Terror/life_kij18i.webp"
  }
  
]
}
}
