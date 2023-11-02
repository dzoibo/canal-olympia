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

    static column=[1,2,3,4,5,6,7,8,9,10,11,13,14,15];
    static seats = [
        {
            row: 1,
            columns: [
                { id: 1, state: "free", position: 1 },
                { id: 2, state: "occupied", position: 2 },
                { id: 3, state: "free", position: 3 },
                { id: 4, state: "occupied", position: 4 },
                { id: 5, state: "free", position: 5 },
                { id: 6, state: "free", position: 6 },
                { id: 7, state: "free", position: 7 },
                { id: 8, state: "free", position: 8 },
                { id: 9, state: "occupied", position: 9 },
                { id: 10, state: "free", position: 10 },
                { id: 11, state: "occupied", position: 11 },
                { id: 12, state: "free", position: 12 },
                { id: 13, state: "free", position: 13 },
                { id: 14, state: "free", position: 14 },
                { id: 15, state: "occupied", position: 15 }
            ]
        },
        {
            row: 2,
            columns: [
                { id: 16, state: "free", position: 1 },
                { id: 17, state: "free", position: 2 },
                { id: 18, state: "occupied", position: 3 },
                { id: 19, state: "free", position: 4 },
                { id: 20, state: "free", position: 5 },
                { id: 21, state: "occupied", position: 6 },
                { id: 22, state: "free", position: 7 },
                { id: 23, state: "free", position: 8 },
                { id: 24, state: "free", position: 9 },
                { id: 25, state: "free", position: 10 },
                { id: 26, state: "free", position: 11 },
                { id: 27, state: "occupied", position: 12 },
                { id: 28, state: "free", position: 13 },
                { id: 29, state: "free", position: 14 },
                { id: 30, state: "occupied", position: 15 }
            ]
        },
        {
            row: 3,
            columns: [
                { id: 31, state: "occupied", position: 1 },
                { id: 32, state: "free", position: 2 },
                { id: 33, state: "free", position: 3 },
                { id: 34, state: "occupied", position: 4 },
                { id: 35, state: "free", position: 5 },
                { id: 36, state: "occupied", position: 6 },
                { id: 37, state: "free", position: 7 },
                { id: 38, state: "free", position: 8 },
                { id: 39, state: "occupied", position: 9 },
                { id: 40, state: "free", position: 10 },
                { id: 41, state: "occupied", position: 11 },
                { id: 42, state: "free", position: 12 },
                { id: 43, state: "free", position: 13 },
                { id: 44, state: "occupied", position: 14 },
                { id: 45, state: "free", position: 15 }
            ]
        },
        {
            row: 4,
            columns: [
                { id: 46, state: "free", position: 1 },
                { id: 47, state: "free", position: 2 },
                { id: 48, state: "free", position: 3 },
                { id: 49, state: "free", position: 4 },
                { id: 50, state: "free", position: 5 },
                { id: 51, state: "occupied", position: 6 },
                { id: 52, state: "free", position: 7 },
                { id: 53, state: "free", position: 8 },
                { id: 54, state: "free", position: 9 },
                { id: 55, state: "occupied", position: 10 },
                { id: 56, state: "occupied", position: 11 },
                { id: 57, state: "free", position: 12 },
                { id: 58, state: "free", position: 13 },
                { id: 59, state: "free", position: 14 },
                { id: 60, state: "occupied", position: 15 }
            ]
        },
        {
            row: 5,
            columns: [
                { id: 61, state: "free", position: 1 },
                { id: 62, state: "occupied", position: 2 },
                { id: 63, state: "free", position: 3 },
                { id: 64, state: "free", position: 4 },
                { id: 65, state: "free", position: 5 },
                { id: 66, state: "free", position: 6 },
                { id: 67, state: "occupied", position: 7 },
                { id: 68, state: "occupied", position: 8 },
                { id: 69, state: "occupied", position: 9 },
                { id: 70, state: "free", position: 10 },
                { id: 71, state: "free", position: 11 },
                { id: 72, state: "occupied", position: 12 },
                { id: 73, state: "free", position: 13 },
                { id: 74, state: "free", position: 14 },
                { id: 75, state: "free", position: 15 }
            ]
        },
        {
            row: 6,
            columns: [
                { id: 76, state: "occupied", position: 1 },
                { id: 77, state: "occupied", position: 2 },
                { id: 78, state: "free", position: 3 },
                { id: 79, state: "free", position: 4 },
                { id: 80, state: "free", position: 5 },
                { id: 81, state: "free", position: 6 },
                { id: 82, state: "free", position: 7 },
                { id: 83, state: "occupied", position: 8 },
                { id: 84, state: "free", position: 9 },
                { id: 85, state: "occupied", position: 10 },
                { id: 86, state: "occupied", position: 11 },
                { id: 87, state: "free", position: 12 },
                { id: 88, state: "free", position: 13 },
                { id: 89, state: "free", position: 14 },
                { id: 90, state: "occupied", position: 15 }
            ]
        },
        {
            row: 7,
            columns: [
                { id: 91, state: "free", position: 1 },
                { id: 92, state: "free", position: 2 },
                { id: 93, state: "free", position: 3 },
                { id: 94, state: "free", position: 4 },
                { id: 95, state: "free", position: 5 },
                { id: 96, state: "free", position: 6 },
                { id: 97, state: "free", position: 7 },
                { id: 98, state: "free", position: 8 },
                { id: 99, state: "occupied", position: 9 },
                { id: 100, state: "occupied", position: 10 },
                { id: 101, state: "free", position: 11 },
                { id: 102, state: "free", position: 12 },
                { id: 103, state: "occupied", position: 13 },
                { id: 104, state: "free", position: 14 },
                { id: 105, state: "free", position: 15 }
            ]
        },
        {
            row: 8,
            columns: [
                { id: 106, state: "free", position: 1 },
                { id: 107, state: "free", position: 2 },
                { id: 108, state: "occupied", position: 3 },
                { id: 109, state: "free", position: 4 },
                { id: 110, state: "free", position: 5 },
                { id: 111, state: "free", position: 6 },
                { id: 112, state: "occupied", position: 7 },
                { id: 113, state: "free", position: 8 },
                { id: 114, state: "free", position: 9 },
                { id: 115, state: "free", position: 10 },
                { id: 116, state: "free", position: 11 },
                { id: 117, state: "occupied", position: 12 },
                { id: 118, state: "free", position: 13 },
                { id: 119, state: "free", position: 14 },
                { id: 120, state: "occupied", position: 15 }
            ]
        },
        {
            row: 9,
            columns: [
                { id: 121, state: "free", position: 1 },
                { id: 122, state: "free", position: 2 },
                { id: 123, state: "free", position: 3 },
                { id: 124, state: "free", position: 4 },
                { id: 125, state: "free", position: 5 },
                { id: 126, state: "free", position: 6 },
                { id: 127, state: "free", position: 7 },
                { id: 128, state: "free", position: 8 },
                { id: 129, state: "free", position: 9 },
                { id: 130, state: "free", position: 10 },
                { id: 131, state: "free", position: 11 },
                { id: 132, state: "free", position: 12 },
                { id: 133, state: "free", position: 13 },
                { id: 134, state: "free", position: 14 },
                { id: 135, state: "occupied", position: 15 }
            ]
        },
        {
            row: 10,
            columns: [
                { id: 136, state: "occupied", position: 1 },
                { id: 137, state: "free", position: 2 },
                { id: 138, state: "free", position: 3 },
                { id: 139, state: "free", position: 4 },
                { id: 140, state: "occupied", position: 5 },
                { id: 141, state: "free", position: 6 },
                { id: 142, state: "free", position: 7 },
                { id: 143, state: "occupied", position: 8 },
                { id: 144, state: "free", position: 9 },
                { id: 145, state: "occupied", position: 10 },
                { id: 146, state: "free", position: 11 },
                { id: 147, state: "free", position: 12 },
                { id: 148, state: "occupied", position: 13 },
                { id: 149, state: "free", position: 14 },
                { id: 150, state: "free", position: 15 }
            ]
        }
    ];
    
    
}
