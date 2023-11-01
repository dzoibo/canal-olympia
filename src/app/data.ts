import { scheduled } from "rxjs"

export class TestData{
    static slideMovies=[{
        id:1,
        url:'../../assets/images/movies/01paw Patrol.png',
        name:'Paw Patrol',
        language: 'Français',
        category: 'Animé',
        type:'Enquête',
        resolution:'10.2k'
    },
    {
        id:2,
        url:'../../assets/images/movies/trolls',
        name:'Les trolls 3',
        language: 'Français',
        category: 'Enquête',
        type:'Peur',
        resolution:'10.2k'
    },
    {
        id:3,
        url:'../../assets/images/movies/sira',
        name:'SIRA',
        language: 'Français',
        category: 'Comédie',
        type:'Peur',
        resolution:'10.2k'
    },
    {
        id:4,
        url:'../../assets/images/movies/Imagefive night.png',
        name:'Five Nights',
        language: 'Français',
        category: 'Drame',
        type:'Peur',
        resolution:'10.2k'
    }
    ]

    static scheduledMovies=[{
        id:1,
        name:'Paw patrol',
        time:'02h08',
        type:'Science-fiction',
        url:'../../assets/images/movies/01paw Patrol.png',
    },{
        id:2,
        name:'Expendables 4',
        time:'02h08',
        type:'Adventure',
        url:'../../assets/images/movies/Imageexpandables.png',
    },{
        id:3,
        name:'Aya de Youpougon',
        time:'12h00',
        type:'Animation',
        url:'../../assets/images/movies/ImageAya de You.png',
    },{
        id:4,
        name:'Wish, Ashia et la bonne étoile',
        time:'18h10',
        type:'Action',
        url:'../../assets/images/movies/Imagewish.png',
    },{
        id:5,
        name:'Wish, Ashia et la bonne étoile',
        time:'20h00',
        type:'Wonka',
        url:'../../assets/images/movies/wonka',
    },{

        id:6,
        name:'Five Nights',
        time:'12h10',
        type:'Action',
        url:'../../assets/images/movies/Imagefive night.png',
    }
    ]
    static locations=[
        {
            id: 2,
            name: 'REBERO, Kigali Rwanda'
        },
        {
            id: 10,
            name: 'Yaoundé 1, Yaoundé Cameroun'
        },
        {
            id: 1,
            name: 'Bessengue, Douala Cameroun'
        },
        {
            id: 4,
            name: 'WOLOGUEDE, Cotonou BENIN'
        },
        {
            id: 5,
            name: 'POPO, Braazaville Congo'
        },
        {
            id: 6,
            name: 'KALOUM, Conakry Guinée'
        },
        {
            id:7,
            name:'GOGOPE, Lomé Togo'
        },
        {
            id:8,
            name: 'MIDE, Lomé Togo'
        },
        {
            id:9,
            name:'Teranga, Dakar Sénégal'
        }

        
    ]

    static planningList=[
    {
        day: 'Oct, 17',
        sessions:[
            {
                id:1,
                time: '11:00',
                language: 'VF',
                locationId:1,
                price:{
                    pre_first: 7000,
                    prev:0,
                    stand:0,
                    child:0,

                } 
            },
            {
                id:2,
                time: '13:00',
                language: 'VOSTFR',
                locationId:10,
                price:{
                    pre_first: 7000,
                    prev:0,
                    stand:0,
                    child:0,

                } 
            },
            {
                id:3,
                time: '15:00',
                language: 'VOSTFR',
                locationId:4,
                price:{
                    pre_first: 0,
                    prev:5000,
                    stand:0,
                    child:0,

                } 
            },
            {
                id:4,
                time: '16:50',
                language: '2',
                locationId:1,
                price:{
                    pre_first: 1900,
                    prev:0,
                    stand:2000,
                    child:0,

                } 
            },
            {
                id:5,
                time: '18:00',
                language: 'VF',
                locationId:6,
                price:{
                    pre_first: 0,
                    prev:0,
                    stand:2000,
                    child:1000,

                } 
            },
            {
                id:7,
                time: '18:00',
                language: 'VF',
                locationId:6,
                price:{
                    pre_first: 0,
                    prev:0,
                    stand:2000,
                    child:1000,

                } 
            },
            {
                id:8,
                time: '20:00',
                language: 'VF',
                locationId:8,
                price:{
                    pre_first: 0,
                    prev:0,
                    stand:2000,
                    child:1000,

                } 
            },
            {
                id:9,
                time: '20:00',
                language: 'VF',
                locationId:8,
                price:{
                    pre_first: 0,
                    prev:0,
                    stand:2000,
                    child:1000,

                } 
            },
            {
                id:10,
                time: '20:00',
                language: 'VF',
                locationId:8,
                price:{
                    pre_first: 0,
                    prev:0,
                    stand:2000,
                    child:1000,

                } 
            },
            {
                id:11,
                time: '20:00',
                language: 'VF',
                locationId:8,
                price:{
                    pre_first: 0,
                    prev:0,
                    stand:2000,
                    child:1000,

                } 
            }


            
        ]
    }
    ]
}
