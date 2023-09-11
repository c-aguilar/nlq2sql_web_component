const chart_multiserieline ={
    "nlq2sql": {
        "result": "OK",
        "query": "select t2.estacion, date_format( t1.fecha, '%y-%m-%d %h:00' ) as fecha, avg( t1.temperatura_exterior ) as avg_temperatura_exterior from data as t1 inner join stations as t2 on t1.stations_id = t2.id where t1.fecha between adddate( now(), interval -24 hour ) and now() group by t2.estacion, date_format( t1.fecha, '%y-%m-%d %h:00' ) order by date_format( t1.fecha, '%y-%m-%d %h:00' );",
        "type": "chart_multiserieline",
        "structureStr": "data (id, fecha, temperatura_exterior, stations_id), stations (id, estacion)"
    },
    "queryExecution": {
        "result": "OK",
        "queryMapped": "select t2.nombre, date_format( t1.fecha, '%Y-%m-%d %H:00' ) as fecha, avg( t1.temp_out ) as avg_temp_out from data_fixes as t1 inner join estacion as t2 on t1.estacion_id = t2.id where t1.fecha between adddate( now(), interval -24 hour ) and now() group by t2.nombre, date_format( t1.fecha, '%Y-%m-%d %H:00' ) order by date_format( t1.fecha, '%Y-%m-%d %H:00' );",
        "data": [
            {
                "nombre": "NCG",
                "fecha": "2023-05-23 08:00",
                "avg_temp_out": "19.67500"
            },
            {
                "nombre": "Balleza",
                "fecha": "2023-05-23 08:00",
                "avg_temp_out": "18.42500"
            },
            {
                "nombre": "Témoris",
                "fecha": "2023-05-23 08:00",
                "avg_temp_out": "15.00000"
            },
            {
                "nombre": "Coyame",
                "fecha": "2023-05-23 08:00",
                "avg_temp_out": "18.60000"
            },
            {
                "nombre": "Práxedis",
                "fecha": "2023-05-23 08:00",
                "avg_temp_out": "19.00000"
            },
            {
                "nombre": "Manuel Benavides",
                "fecha": "2023-05-23 08:00",
                "avg_temp_out": "18.07500"
            },
            {
                "nombre": "Satevó",
                "fecha": "2023-05-23 08:00",
                "avg_temp_out": "17.12500"
            },
            {
                "nombre": "Cuauhtémoc",
                "fecha": "2023-05-23 08:00",
                "avg_temp_out": "16.92500"
            },
            {
                "nombre": "Ricardo F Magón",
                "fecha": "2023-05-23 08:00",
                "avg_temp_out": "14.92500"
            },
            {
                "nombre": "Juárez Conejos Médanos",
                "fecha": "2023-05-23 08:00",
                "avg_temp_out": "18.32500"
            },
            {
                "nombre": "Parral",
                "fecha": "2023-05-23 08:00",
                "avg_temp_out": "16.62500"
            },
            {
                "nombre": "Temósachi",
                "fecha": "2023-05-23 08:00",
                "avg_temp_out": "9.90000"
            },
            {
                "nombre": "Ascensión",
                "fecha": "2023-05-23 08:00",
                "avg_temp_out": "18.42500"
            },
            {
                "nombre": "UABCS CGN",
                "fecha": "2023-05-23 08:00",
                "avg_temp_out": "16.05000"
            },
            {
                "nombre": "Jiménez",
                "fecha": "2023-05-23 08:00",
                "avg_temp_out": "15.25000"
            },
            {
                "nombre": "Creel",
                "fecha": "2023-05-23 08:00",
                "avg_temp_out": "8.75000"
            },
            {
                "nombre": "Aldama",
                "fecha": "2023-05-23 08:00",
                "avg_temp_out": "21.35000"
            },
            {
                "nombre": "Juárez",
                "fecha": "2023-05-23 08:00",
                "avg_temp_out": "22.15000"
            },
            {
                "nombre": "San Fco. de Borja",
                "fecha": "2023-05-23 08:00",
                "avg_temp_out": "13.45000"
            },
            {
                "nombre": "CHIH_JCAS",
                "fecha": "2023-05-23 08:00",
                "avg_temp_out": "21.60000"
            },
            {
                "nombre": "El Terrero",
                "fecha": "2023-05-23 08:00",
                "avg_temp_out": "14.17500"
            },
            {
                "nombre": "CHIH_Potb",
                "fecha": "2023-05-23 08:00",
                "avg_temp_out": "21.30000"
            },
            {
                "nombre": "Ojinaga",
                "fecha": "2023-05-23 08:00",
                "avg_temp_out": "20.20000"
            },
            {
                "nombre": "Camargo",
                "fecha": "2023-05-23 08:00",
                "avg_temp_out": "20.55000"
            },
            {
                "nombre": "Guerrero",
                "fecha": "2023-05-23 08:00",
                "avg_temp_out": "11.22500"
            },
            {
                "nombre": "Ahumada",
                "fecha": "2023-05-23 08:00",
                "avg_temp_out": "18.02500"
            },
            {
                "nombre": "Santa Isabel",
                "fecha": "2023-05-23 08:00",
                "avg_temp_out": "16.62500"
            },
            {
                "nombre": "Valle de Zaragoza",
                "fecha": "2023-05-23 08:00",
                "avg_temp_out": "15.20000"
            },
            {
                "nombre": "Madera",
                "fecha": "2023-05-23 08:00",
                "avg_temp_out": "9.92500"
            },
            {
                "nombre": "CHIH_JCAS",
                "fecha": "2023-05-23 09:00",
                "avg_temp_out": "21.09167"
            },
            {
                "nombre": "El Terrero",
                "fecha": "2023-05-23 09:00",
                "avg_temp_out": "13.20833"
            },
            {
                "nombre": "CHIH_Potb",
                "fecha": "2023-05-23 09:00",
                "avg_temp_out": "20.58333"
            },
            {
                "nombre": "Ojinaga",
                "fecha": "2023-05-23 09:00",
                "avg_temp_out": "19.51667"
            },
            {
                "nombre": "Camargo",
                "fecha": "2023-05-23 09:00",
                "avg_temp_out": "17.90833"
            },
            {
                "nombre": "Guerrero",
                "fecha": "2023-05-23 09:00",
                "avg_temp_out": "10.25833"
            },
            {
                "nombre": "Ahumada",
                "fecha": "2023-05-23 09:00",
                "avg_temp_out": "18.09167"
            },
            {
                "nombre": "Santa Isabel",
                "fecha": "2023-05-23 09:00",
                "avg_temp_out": "16.88333"
            },
            {
                "nombre": "Valle de Zaragoza",
                "fecha": "2023-05-23 09:00",
                "avg_temp_out": "14.50833"
            },
            {
                "nombre": "Madera",
                "fecha": "2023-05-23 09:00",
                "avg_temp_out": "10.41667"
            },
            {
                "nombre": "NCG",
                "fecha": "2023-05-23 09:00",
                "avg_temp_out": "18.27500"
            },
            {
                "nombre": "Balleza",
                "fecha": "2023-05-23 09:00",
                "avg_temp_out": "16.51667"
            },
            {
                "nombre": "Témoris",
                "fecha": "2023-05-23 09:00",
                "avg_temp_out": "14.47500"
            },
            {
                "nombre": "Coyame",
                "fecha": "2023-05-23 09:00",
                "avg_temp_out": "18.29167"
            },
            {
                "nombre": "Práxedis",
                "fecha": "2023-05-23 09:00",
                "avg_temp_out": "17.77500"
            },
            {
                "nombre": "Manuel Benavides",
                "fecha": "2023-05-23 09:00",
                "avg_temp_out": "18.14167"
            },
            {
                "nombre": "Satevó",
                "fecha": "2023-05-23 09:00",
                "avg_temp_out": "17.01667"
            },
            {
                "nombre": "Cuauhtémoc",
                "fecha": "2023-05-23 09:00",
                "avg_temp_out": "15.98333"
            },
            {
                "nombre": "Ricardo F Magón",
                "fecha": "2023-05-23 09:00",
                "avg_temp_out": "13.95833"
            },
            {
                "nombre": "Juárez Conejos Médanos",
                "fecha": "2023-05-23 09:00",
                "avg_temp_out": "17.18333"
            },
            {
                "nombre": "Parral",
                "fecha": "2023-05-23 09:00",
                "avg_temp_out": "17.94167"
            },
            {
                "nombre": "Temósachi",
                "fecha": "2023-05-23 09:00",
                "avg_temp_out": "9.48333"
            },
            {
                "nombre": "Ascensión",
                "fecha": "2023-05-23 09:00",
                "avg_temp_out": "17.52500"
            },
            {
                "nombre": "UABCS CGN",
                "fecha": "2023-05-23 09:00",
                "avg_temp_out": "15.80833"
            },
            {
                "nombre": "Jiménez",
                "fecha": "2023-05-23 09:00",
                "avg_temp_out": "15.27500"
            },
            {
                "nombre": "Creel",
                "fecha": "2023-05-23 09:00",
                "avg_temp_out": "6.71667"
            },
            {
                "nombre": "Aldama",
                "fecha": "2023-05-23 09:00",
                "avg_temp_out": "19.88333"
            },
            {
                "nombre": "Juárez",
                "fecha": "2023-05-23 09:00",
                "avg_temp_out": "21.48333"
            },
            {
                "nombre": "San Fco. de Borja",
                "fecha": "2023-05-23 09:00",
                "avg_temp_out": "13.50833"
            },
            {
                "nombre": "Parral",
                "fecha": "2023-05-23 10:00",
                "avg_temp_out": "19.10833"
            },
            {
                "nombre": "Temósachi",
                "fecha": "2023-05-23 10:00",
                "avg_temp_out": "8.19167"
            },
            {
                "nombre": "UABCS CGN",
                "fecha": "2023-05-23 10:00",
                "avg_temp_out": "15.71667"
            },
            {
                "nombre": "Ascensión",
                "fecha": "2023-05-23 10:00",
                "avg_temp_out": "16.25000"
            },
            {
                "nombre": "Jiménez",
                "fecha": "2023-05-23 10:00",
                "avg_temp_out": "14.79167"
            },
            {
                "nombre": "Creel",
                "fecha": "2023-05-23 10:00",
                "avg_temp_out": "5.15000"
            },
            {
                "nombre": "Aldama",
                "fecha": "2023-05-23 10:00",
                "avg_temp_out": "19.28333"
            },
            {
                "nombre": "Juárez",
                "fecha": "2023-05-23 10:00",
                "avg_temp_out": "20.51667"
            },
            {
                "nombre": "San Fco. de Borja",
                "fecha": "2023-05-23 10:00",
                "avg_temp_out": "13.44167"
            },
            {
                "nombre": "CHIH_JCAS",
                "fecha": "2023-05-23 10:00",
                "avg_temp_out": "20.23333"
            },
            {
                "nombre": "El Terrero",
                "fecha": "2023-05-23 10:00",
                "avg_temp_out": "12.30833"
            },
            {
                "nombre": "CHIH_Potb",
                "fecha": "2023-05-23 10:00",
                "avg_temp_out": "20.13333"
            },
            {
                "nombre": "Ojinaga",
                "fecha": "2023-05-23 10:00",
                "avg_temp_out": "19.72500"
            },
            {
                "nombre": "Camargo",
                "fecha": "2023-05-23 10:00",
                "avg_temp_out": "16.80833"
            },
            {
                "nombre": "Guerrero",
                "fecha": "2023-05-23 10:00",
                "avg_temp_out": "8.72500"
            },
            {
                "nombre": "Santa Isabel",
                "fecha": "2023-05-23 10:00",
                "avg_temp_out": "15.70000"
            },
            {
                "nombre": "Ahumada",
                "fecha": "2023-05-23 10:00",
                "avg_temp_out": "17.45833"
            },
            {
                "nombre": "Valle de Zaragoza",
                "fecha": "2023-05-23 10:00",
                "avg_temp_out": "13.53333"
            },
            {
                "nombre": "Madera",
                "fecha": "2023-05-23 10:00",
                "avg_temp_out": "9.86667"
            },
            {
                "nombre": "NCG",
                "fecha": "2023-05-23 10:00",
                "avg_temp_out": "17.28333"
            },
            {
                "nombre": "Balleza",
                "fecha": "2023-05-23 10:00",
                "avg_temp_out": "14.66667"
            },
            {
                "nombre": "Témoris",
                "fecha": "2023-05-23 10:00",
                "avg_temp_out": "13.80833"
            },
            {
                "nombre": "Coyame",
                "fecha": "2023-05-23 10:00",
                "avg_temp_out": "18.07500"
            },
            {
                "nombre": "Práxedis",
                "fecha": "2023-05-23 10:00",
                "avg_temp_out": "16.39167"
            },
            {
                "nombre": "Manuel Benavides",
                "fecha": "2023-05-23 10:00",
                "avg_temp_out": "17.80000"
            },
            {
                "nombre": "Satevó",
                "fecha": "2023-05-23 10:00",
                "avg_temp_out": "18.83333"
            },
            {
                "nombre": "Cuauhtémoc",
                "fecha": "2023-05-23 10:00",
                "avg_temp_out": "13.78333"
            },
            {
                "nombre": "Ricardo F Magón",
                "fecha": "2023-05-23 10:00",
                "avg_temp_out": "12.95833"
            },
            {
                "nombre": "Juárez Conejos Médanos",
                "fecha": "2023-05-23 10:00",
                "avg_temp_out": "16.25000"
            },
            {
                "nombre": "Balleza",
                "fecha": "2023-05-23 11:00",
                "avg_temp_out": "13.09167"
            },
            {
                "nombre": "Témoris",
                "fecha": "2023-05-23 11:00",
                "avg_temp_out": "13.29167"
            },
            {
                "nombre": "Coyame",
                "fecha": "2023-05-23 11:00",
                "avg_temp_out": "17.56667"
            },
            {
                "nombre": "Práxedis",
                "fecha": "2023-05-23 11:00",
                "avg_temp_out": "15.96667"
            },
            {
                "nombre": "Manuel Benavides",
                "fecha": "2023-05-23 11:00",
                "avg_temp_out": "17.34167"
            },
            {
                "nombre": "Satevó",
                "fecha": "2023-05-23 11:00",
                "avg_temp_out": "18.55833"
            },
            {
                "nombre": "Cuauhtémoc",
                "fecha": "2023-05-23 11:00",
                "avg_temp_out": "13.35833"
            },
            {
                "nombre": "Ricardo F Magón",
                "fecha": "2023-05-23 11:00",
                "avg_temp_out": "11.76667"
            },
            {
                "nombre": "Juárez Conejos Médanos",
                "fecha": "2023-05-23 11:00",
                "avg_temp_out": "15.87500"
            },
            {
                "nombre": "Parral",
                "fecha": "2023-05-23 11:00",
                "avg_temp_out": "17.90000"
            },
            {
                "nombre": "Temósachi",
                "fecha": "2023-05-23 11:00",
                "avg_temp_out": "7.34167"
            },
            {
                "nombre": "Ascensión",
                "fecha": "2023-05-23 11:00",
                "avg_temp_out": "15.10000"
            },
            {
                "nombre": "UABCS CGN",
                "fecha": "2023-05-23 11:00",
                "avg_temp_out": "15.66667"
            },
            {
                "nombre": "Jiménez",
                "fecha": "2023-05-23 11:00",
                "avg_temp_out": "13.55000"
            },
            {
                "nombre": "Creel",
                "fecha": "2023-05-23 11:00",
                "avg_temp_out": "3.91667"
            },
            {
                "nombre": "Aldama",
                "fecha": "2023-05-23 11:00",
                "avg_temp_out": "18.41667"
            },
            {
                "nombre": "Juárez",
                "fecha": "2023-05-23 11:00",
                "avg_temp_out": "19.50833"
            },
            {
                "nombre": "San Fco. de Borja",
                "fecha": "2023-05-23 11:00",
                "avg_temp_out": "13.85000"
            },
            {
                "nombre": "CHIH_JCAS",
                "fecha": "2023-05-23 11:00",
                "avg_temp_out": "19.39167"
            },
            {
                "nombre": "El Terrero",
                "fecha": "2023-05-23 11:00",
                "avg_temp_out": "11.47500"
            },
            {
                "nombre": "CHIH_Potb",
                "fecha": "2023-05-23 11:00",
                "avg_temp_out": "18.29167"
            },
            {
                "nombre": "Ojinaga",
                "fecha": "2023-05-23 11:00",
                "avg_temp_out": "18.77500"
            },
            {
                "nombre": "Camargo",
                "fecha": "2023-05-23 11:00",
                "avg_temp_out": "17.22500"
            },
            {
                "nombre": "Guerrero",
                "fecha": "2023-05-23 11:00",
                "avg_temp_out": "7.88333"
            },
            {
                "nombre": "Ahumada",
                "fecha": "2023-05-23 11:00",
                "avg_temp_out": "16.00833"
            },
            {
                "nombre": "Santa Isabel",
                "fecha": "2023-05-23 11:00",
                "avg_temp_out": "14.90000"
            },
            {
                "nombre": "Valle de Zaragoza",
                "fecha": "2023-05-23 11:00",
                "avg_temp_out": "14.28333"
            },
            {
                "nombre": "Madera",
                "fecha": "2023-05-23 11:00",
                "avg_temp_out": "8.86667"
            },
            {
                "nombre": "NCG",
                "fecha": "2023-05-23 11:00",
                "avg_temp_out": "15.42500"
            },
            {
                "nombre": "CHIH_Potb",
                "fecha": "2023-05-23 12:00",
                "avg_temp_out": "16.81667"
            },
            {
                "nombre": "Ojinaga",
                "fecha": "2023-05-23 12:00",
                "avg_temp_out": "18.20833"
            },
            {
                "nombre": "Camargo",
                "fecha": "2023-05-23 12:00",
                "avg_temp_out": "16.45833"
            },
            {
                "nombre": "Guerrero",
                "fecha": "2023-05-23 12:00",
                "avg_temp_out": "7.95833"
            },
            {
                "nombre": "Ahumada",
                "fecha": "2023-05-23 12:00",
                "avg_temp_out": "15.55000"
            },
            {
                "nombre": "Santa Isabel",
                "fecha": "2023-05-23 12:00",
                "avg_temp_out": "13.89167"
            },
            {
                "nombre": "Valle de Zaragoza",
                "fecha": "2023-05-23 12:00",
                "avg_temp_out": "14.97500"
            },
            {
                "nombre": "Madera",
                "fecha": "2023-05-23 12:00",
                "avg_temp_out": "7.62500"
            },
            {
                "nombre": "NCG",
                "fecha": "2023-05-23 12:00",
                "avg_temp_out": "14.35000"
            },
            {
                "nombre": "Balleza",
                "fecha": "2023-05-23 12:00",
                "avg_temp_out": "12.66667"
            },
            {
                "nombre": "Témoris",
                "fecha": "2023-05-23 12:00",
                "avg_temp_out": "12.94167"
            },
            {
                "nombre": "Coyame",
                "fecha": "2023-05-23 12:00",
                "avg_temp_out": "17.90833"
            },
            {
                "nombre": "Práxedis",
                "fecha": "2023-05-23 12:00",
                "avg_temp_out": "15.55000"
            },
            {
                "nombre": "Manuel Benavides",
                "fecha": "2023-05-23 12:00",
                "avg_temp_out": "17.50000"
            },
            {
                "nombre": "Satevó",
                "fecha": "2023-05-23 12:00",
                "avg_temp_out": "17.40000"
            },
            {
                "nombre": "Cuauhtémoc",
                "fecha": "2023-05-23 12:00",
                "avg_temp_out": "12.51667"
            },
            {
                "nombre": "Ricardo F Magón",
                "fecha": "2023-05-23 12:00",
                "avg_temp_out": "11.35833"
            },
            {
                "nombre": "Juárez Conejos Médanos",
                "fecha": "2023-05-23 12:00",
                "avg_temp_out": "15.31667"
            },
            {
                "nombre": "Parral",
                "fecha": "2023-05-23 12:00",
                "avg_temp_out": "17.35000"
            },
            {
                "nombre": "Temósachi",
                "fecha": "2023-05-23 12:00",
                "avg_temp_out": "6.45833"
            },
            {
                "nombre": "Ascensión",
                "fecha": "2023-05-23 12:00",
                "avg_temp_out": "14.94167"
            },
            {
                "nombre": "UABCS CGN",
                "fecha": "2023-05-23 12:00",
                "avg_temp_out": "15.38333"
            },
            {
                "nombre": "Jiménez",
                "fecha": "2023-05-23 12:00",
                "avg_temp_out": "13.10833"
            },
            {
                "nombre": "Creel",
                "fecha": "2023-05-23 12:00",
                "avg_temp_out": "3.19167"
            },
            {
                "nombre": "Aldama",
                "fecha": "2023-05-23 12:00",
                "avg_temp_out": "18.00000"
            },
            {
                "nombre": "Juárez",
                "fecha": "2023-05-23 12:00",
                "avg_temp_out": "19.48333"
            },
            {
                "nombre": "San Fco. de Borja",
                "fecha": "2023-05-23 12:00",
                "avg_temp_out": "11.82500"
            },
            {
                "nombre": "CHIH_JCAS",
                "fecha": "2023-05-23 12:00",
                "avg_temp_out": "18.55833"
            },
            {
                "nombre": "El Terrero",
                "fecha": "2023-05-23 12:00",
                "avg_temp_out": "9.69167"
            },
            {
                "nombre": "Ascensión",
                "fecha": "2023-05-23 13:00",
                "avg_temp_out": "19.70000"
            },
            {
                "nombre": "UABCS CGN",
                "fecha": "2023-05-23 13:00",
                "avg_temp_out": "15.34167"
            },
            {
                "nombre": "Jiménez",
                "fecha": "2023-05-23 13:00",
                "avg_temp_out": "15.35833"
            },
            {
                "nombre": "Creel",
                "fecha": "2023-05-23 13:00",
                "avg_temp_out": "6.36667"
            },
            {
                "nombre": "Aldama",
                "fecha": "2023-05-23 13:00",
                "avg_temp_out": "19.20833"
            },
            {
                "nombre": "Juárez",
                "fecha": "2023-05-23 13:00",
                "avg_temp_out": "21.04167"
            },
            {
                "nombre": "San Fco. de Borja",
                "fecha": "2023-05-23 13:00",
                "avg_temp_out": "13.52500"
            },
            {
                "nombre": "CHIH_JCAS",
                "fecha": "2023-05-23 13:00",
                "avg_temp_out": "19.50833"
            },
            {
                "nombre": "El Terrero",
                "fecha": "2023-05-23 13:00",
                "avg_temp_out": "11.88333"
            },
            {
                "nombre": "CHIH_Potb",
                "fecha": "2023-05-23 13:00",
                "avg_temp_out": "18.03333"
            },
            {
                "nombre": "Ojinaga",
                "fecha": "2023-05-23 13:00",
                "avg_temp_out": "21.29167"
            },
            {
                "nombre": "Camargo",
                "fecha": "2023-05-23 13:00",
                "avg_temp_out": "18.27500"
            },
            {
                "nombre": "Guerrero",
                "fecha": "2023-05-23 13:00",
                "avg_temp_out": "10.48333"
            },
            {
                "nombre": "Ahumada",
                "fecha": "2023-05-23 13:00",
                "avg_temp_out": "17.85000"
            },
            {
                "nombre": "Santa Isabel",
                "fecha": "2023-05-23 13:00",
                "avg_temp_out": "15.20000"
            },
            {
                "nombre": "Valle de Zaragoza",
                "fecha": "2023-05-23 13:00",
                "avg_temp_out": "16.83333"
            },
            {
                "nombre": "Madera",
                "fecha": "2023-05-23 13:00",
                "avg_temp_out": "11.02500"
            },
            {
                "nombre": "NCG",
                "fecha": "2023-05-23 13:00",
                "avg_temp_out": "17.07500"
            },
            {
                "nombre": "Balleza",
                "fecha": "2023-05-23 13:00",
                "avg_temp_out": "14.80000"
            },
            {
                "nombre": "Témoris",
                "fecha": "2023-05-23 13:00",
                "avg_temp_out": "14.94167"
            },
            {
                "nombre": "Coyame",
                "fecha": "2023-05-23 13:00",
                "avg_temp_out": "20.34167"
            },
            {
                "nombre": "Práxedis",
                "fecha": "2023-05-23 13:00",
                "avg_temp_out": "18.93333"
            },
            {
                "nombre": "Manuel Benavides",
                "fecha": "2023-05-23 13:00",
                "avg_temp_out": "20.83333"
            },
            {
                "nombre": "Satevó",
                "fecha": "2023-05-23 13:00",
                "avg_temp_out": "18.10000"
            },
            {
                "nombre": "Cuauhtémoc",
                "fecha": "2023-05-23 13:00",
                "avg_temp_out": "15.40000"
            },
            {
                "nombre": "Ricardo F Magón",
                "fecha": "2023-05-23 13:00",
                "avg_temp_out": "15.69167"
            },
            {
                "nombre": "Juárez Conejos Médanos",
                "fecha": "2023-05-23 13:00",
                "avg_temp_out": "17.00833"
            },
            {
                "nombre": "Parral",
                "fecha": "2023-05-23 13:00",
                "avg_temp_out": "17.90833"
            },
            {
                "nombre": "Temósachi",
                "fecha": "2023-05-23 13:00",
                "avg_temp_out": "9.39167"
            },
            {
                "nombre": "Coyame",
                "fecha": "2023-05-23 14:00",
                "avg_temp_out": "24.24167"
            },
            {
                "nombre": "Práxedis",
                "fecha": "2023-05-23 14:00",
                "avg_temp_out": "22.84167"
            },
            {
                "nombre": "Manuel Benavides",
                "fecha": "2023-05-23 14:00",
                "avg_temp_out": "23.85000"
            },
            {
                "nombre": "Satevó",
                "fecha": "2023-05-23 14:00",
                "avg_temp_out": "21.81667"
            },
            {
                "nombre": "Cuauhtémoc",
                "fecha": "2023-05-23 14:00",
                "avg_temp_out": "19.05833"
            },
            {
                "nombre": "Ricardo F Magón",
                "fecha": "2023-05-23 14:00",
                "avg_temp_out": "20.55000"
            },
            {
                "nombre": "Juárez Conejos Médanos",
                "fecha": "2023-05-23 14:00",
                "avg_temp_out": "21.31667"
            },
            {
                "nombre": "Parral",
                "fecha": "2023-05-23 14:00",
                "avg_temp_out": "20.38333"
            },
            {
                "nombre": "Temósachi",
                "fecha": "2023-05-23 14:00",
                "avg_temp_out": "14.60000"
            },
            {
                "nombre": "Ascensión",
                "fecha": "2023-05-23 14:00",
                "avg_temp_out": "23.25833"
            },
            {
                "nombre": "UABCS CGN",
                "fecha": "2023-05-23 14:00",
                "avg_temp_out": "15.59167"
            },
            {
                "nombre": "Jiménez",
                "fecha": "2023-05-23 14:00",
                "avg_temp_out": "19.37500"
            },
            {
                "nombre": "Creel",
                "fecha": "2023-05-23 14:00",
                "avg_temp_out": "13.44167"
            },
            {
                "nombre": "Aldama",
                "fecha": "2023-05-23 14:00",
                "avg_temp_out": "21.95000"
            },
            {
                "nombre": "Juárez",
                "fecha": "2023-05-23 14:00",
                "avg_temp_out": "23.42500"
            },
            {
                "nombre": "San Fco. de Borja",
                "fecha": "2023-05-23 14:00",
                "avg_temp_out": "18.30833"
            },
            {
                "nombre": "CHIH_JCAS",
                "fecha": "2023-05-23 14:00",
                "avg_temp_out": "22.55833"
            },
            {
                "nombre": "El Terrero",
                "fecha": "2023-05-23 14:00",
                "avg_temp_out": "16.85000"
            },
            {
                "nombre": "CHIH_Potb",
                "fecha": "2023-05-23 14:00",
                "avg_temp_out": "21.42500"
            },
            {
                "nombre": "Ojinaga",
                "fecha": "2023-05-23 14:00",
                "avg_temp_out": "23.44167"
            },
            {
                "nombre": "Camargo",
                "fecha": "2023-05-23 14:00",
                "avg_temp_out": "21.45000"
            },
            {
                "nombre": "Guerrero",
                "fecha": "2023-05-23 14:00",
                "avg_temp_out": "14.50000"
            },
            {
                "nombre": "Ahumada",
                "fecha": "2023-05-23 14:00",
                "avg_temp_out": "21.84167"
            },
            {
                "nombre": "Santa Isabel",
                "fecha": "2023-05-23 14:00",
                "avg_temp_out": "21.52500"
            },
            {
                "nombre": "Valle de Zaragoza",
                "fecha": "2023-05-23 14:00",
                "avg_temp_out": "21.05833"
            },
            {
                "nombre": "Madera",
                "fecha": "2023-05-23 14:00",
                "avg_temp_out": "14.16667"
            },
            {
                "nombre": "NCG",
                "fecha": "2023-05-23 14:00",
                "avg_temp_out": "21.49167"
            },
            {
                "nombre": "Balleza",
                "fecha": "2023-05-23 14:00",
                "avg_temp_out": "19.65833"
            },
            {
                "nombre": "Témoris",
                "fecha": "2023-05-23 14:00",
                "avg_temp_out": "20.41667"
            },
            {
                "nombre": "Camargo",
                "fecha": "2023-05-23 15:00",
                "avg_temp_out": "24.99167"
            },
            {
                "nombre": "Guerrero",
                "fecha": "2023-05-23 15:00",
                "avg_temp_out": "18.72500"
            },
            {
                "nombre": "Ahumada",
                "fecha": "2023-05-23 15:00",
                "avg_temp_out": "25.46667"
            },
            {
                "nombre": "Santa Isabel",
                "fecha": "2023-05-23 15:00",
                "avg_temp_out": "24.92500"
            },
            {
                "nombre": "Valle de Zaragoza",
                "fecha": "2023-05-23 15:00",
                "avg_temp_out": "25.63333"
            },
            {
                "nombre": "Madera",
                "fecha": "2023-05-23 15:00",
                "avg_temp_out": "18.80833"
            },
            {
                "nombre": "NCG",
                "fecha": "2023-05-23 15:00",
                "avg_temp_out": "25.54167"
            },
            {
                "nombre": "Balleza",
                "fecha": "2023-05-23 15:00",
                "avg_temp_out": "23.20000"
            },
            {
                "nombre": "Témoris",
                "fecha": "2023-05-23 15:00",
                "avg_temp_out": "25.16667"
            },
            {
                "nombre": "Coyame",
                "fecha": "2023-05-23 15:00",
                "avg_temp_out": "26.62500"
            },
            {
                "nombre": "Práxedis",
                "fecha": "2023-05-23 15:00",
                "avg_temp_out": "26.29167"
            },
            {
                "nombre": "Manuel Benavides",
                "fecha": "2023-05-23 15:00",
                "avg_temp_out": "27.22500"
            },
            {
                "nombre": "Satevó",
                "fecha": "2023-05-23 15:00",
                "avg_temp_out": "25.40000"
            },
            {
                "nombre": "Cuauhtémoc",
                "fecha": "2023-05-23 15:00",
                "avg_temp_out": "21.69167"
            },
            {
                "nombre": "Ricardo F Magón",
                "fecha": "2023-05-23 15:00",
                "avg_temp_out": "24.02500"
            },
            {
                "nombre": "Juárez Conejos Médanos",
                "fecha": "2023-05-23 15:00",
                "avg_temp_out": "24.16667"
            },
            {
                "nombre": "Parral",
                "fecha": "2023-05-23 15:00",
                "avg_temp_out": "23.10000"
            },
            {
                "nombre": "Temósachi",
                "fecha": "2023-05-23 15:00",
                "avg_temp_out": "18.40000"
            },
            {
                "nombre": "Ascensión",
                "fecha": "2023-05-23 15:00",
                "avg_temp_out": "26.01667"
            },
            {
                "nombre": "UABCS CGN",
                "fecha": "2023-05-23 15:00",
                "avg_temp_out": "16.18333"
            },
            {
                "nombre": "Jiménez",
                "fecha": "2023-05-23 15:00",
                "avg_temp_out": "24.57500"
            },
            {
                "nombre": "Creel",
                "fecha": "2023-05-23 15:00",
                "avg_temp_out": "17.64167"
            },
            {
                "nombre": "Aldama",
                "fecha": "2023-05-23 15:00",
                "avg_temp_out": "24.98333"
            },
            {
                "nombre": "Juárez",
                "fecha": "2023-05-23 15:00",
                "avg_temp_out": "25.62500"
            },
            {
                "nombre": "San Fco. de Borja",
                "fecha": "2023-05-23 15:00",
                "avg_temp_out": "22.26667"
            },
            {
                "nombre": "CHIH_JCAS",
                "fecha": "2023-05-23 15:00",
                "avg_temp_out": "24.80000"
            },
            {
                "nombre": "El Terrero",
                "fecha": "2023-05-23 15:00",
                "avg_temp_out": "21.35833"
            },
            {
                "nombre": "CHIH_Potb",
                "fecha": "2023-05-23 15:00",
                "avg_temp_out": "24.05000"
            },
            {
                "nombre": "Ojinaga",
                "fecha": "2023-05-23 15:00",
                "avg_temp_out": "25.31667"
            },
            {
                "nombre": "Jiménez",
                "fecha": "2023-05-23 16:00",
                "avg_temp_out": "27.67500"
            },
            {
                "nombre": "Creel",
                "fecha": "2023-05-23 16:00",
                "avg_temp_out": "19.20833"
            },
            {
                "nombre": "Aldama",
                "fecha": "2023-05-23 16:00",
                "avg_temp_out": "27.64167"
            },
            {
                "nombre": "Juárez",
                "fecha": "2023-05-23 16:00",
                "avg_temp_out": "28.05833"
            },
            {
                "nombre": "San Fco. de Borja",
                "fecha": "2023-05-23 16:00",
                "avg_temp_out": "25.35833"
            },
            {
                "nombre": "CHIH_JCAS",
                "fecha": "2023-05-23 16:00",
                "avg_temp_out": "27.10000"
            },
            {
                "nombre": "El Terrero",
                "fecha": "2023-05-23 16:00",
                "avg_temp_out": "24.90000"
            },
            {
                "nombre": "CHIH_Potb",
                "fecha": "2023-05-23 16:00",
                "avg_temp_out": "26.20833"
            },
            {
                "nombre": "Ojinaga",
                "fecha": "2023-05-23 16:00",
                "avg_temp_out": "27.67500"
            },
            {
                "nombre": "Camargo",
                "fecha": "2023-05-23 16:00",
                "avg_temp_out": "27.30833"
            },
            {
                "nombre": "Guerrero",
                "fecha": "2023-05-23 16:00",
                "avg_temp_out": "22.35833"
            },
            {
                "nombre": "Ahumada",
                "fecha": "2023-05-23 16:00",
                "avg_temp_out": "28.19167"
            },
            {
                "nombre": "Santa Isabel",
                "fecha": "2023-05-23 16:00",
                "avg_temp_out": "28.17500"
            },
            {
                "nombre": "Valle de Zaragoza",
                "fecha": "2023-05-23 16:00",
                "avg_temp_out": "28.41667"
            },
            {
                "nombre": "Madera",
                "fecha": "2023-05-23 16:00",
                "avg_temp_out": "21.86667"
            },
            {
                "nombre": "NCG",
                "fecha": "2023-05-23 16:00",
                "avg_temp_out": "27.40833"
            },
            {
                "nombre": "Balleza",
                "fecha": "2023-05-23 16:00",
                "avg_temp_out": "26.16667"
            },
            {
                "nombre": "Témoris",
                "fecha": "2023-05-23 16:00",
                "avg_temp_out": "26.41667"
            },
            {
                "nombre": "Coyame",
                "fecha": "2023-05-23 16:00",
                "avg_temp_out": "28.46667"
            },
            {
                "nombre": "Práxedis",
                "fecha": "2023-05-23 16:00",
                "avg_temp_out": "29.27500"
            },
            {
                "nombre": "Manuel Benavides",
                "fecha": "2023-05-23 16:00",
                "avg_temp_out": "28.92500"
            },
            {
                "nombre": "Satevó",
                "fecha": "2023-05-23 16:00",
                "avg_temp_out": "27.75000"
            },
            {
                "nombre": "Cuauhtémoc",
                "fecha": "2023-05-23 16:00",
                "avg_temp_out": "23.70833"
            },
            {
                "nombre": "Ricardo F Magón",
                "fecha": "2023-05-23 16:00",
                "avg_temp_out": "26.81667"
            },
            {
                "nombre": "Juárez Conejos Médanos",
                "fecha": "2023-05-23 16:00",
                "avg_temp_out": "26.92500"
            },
            {
                "nombre": "Parral",
                "fecha": "2023-05-23 16:00",
                "avg_temp_out": "24.81667"
            },
            {
                "nombre": "Temósachi",
                "fecha": "2023-05-23 16:00",
                "avg_temp_out": "22.69167"
            },
            {
                "nombre": "Ascensión",
                "fecha": "2023-05-23 16:00",
                "avg_temp_out": "28.50833"
            },
            {
                "nombre": "UABCS CGN",
                "fecha": "2023-05-23 16:00",
                "avg_temp_out": "16.79167"
            },
            {
                "nombre": "Práxedis",
                "fecha": "2023-05-23 17:00",
                "avg_temp_out": "31.40000"
            },
            {
                "nombre": "Manuel Benavides",
                "fecha": "2023-05-23 17:00",
                "avg_temp_out": "31.25000"
            },
            {
                "nombre": "Satevó",
                "fecha": "2023-05-23 17:00",
                "avg_temp_out": "30.28333"
            },
            {
                "nombre": "Cuauhtémoc",
                "fecha": "2023-05-23 17:00",
                "avg_temp_out": "24.40000"
            },
            {
                "nombre": "Ricardo F Magón",
                "fecha": "2023-05-23 17:00",
                "avg_temp_out": "28.40000"
            },
            {
                "nombre": "Juárez Conejos Médanos",
                "fecha": "2023-05-23 17:00",
                "avg_temp_out": "30.08333"
            },
            {
                "nombre": "Parral",
                "fecha": "2023-05-23 17:00",
                "avg_temp_out": "26.31667"
            },
            {
                "nombre": "Temósachi",
                "fecha": "2023-05-23 17:00",
                "avg_temp_out": "24.73333"
            },
            {
                "nombre": "Ascensión",
                "fecha": "2023-05-23 17:00",
                "avg_temp_out": "30.00000"
            },
            {
                "nombre": "UABCS CGN",
                "fecha": "2023-05-23 17:00",
                "avg_temp_out": "17.58333"
            },
            {
                "nombre": "Jiménez",
                "fecha": "2023-05-23 17:00",
                "avg_temp_out": "28.84167"
            },
            {
                "nombre": "Creel",
                "fecha": "2023-05-23 17:00",
                "avg_temp_out": "20.41667"
            },
            {
                "nombre": "Aldama",
                "fecha": "2023-05-23 17:00",
                "avg_temp_out": "29.74167"
            },
            {
                "nombre": "Juárez",
                "fecha": "2023-05-23 17:00",
                "avg_temp_out": "29.89167"
            },
            {
                "nombre": "San Fco. de Borja",
                "fecha": "2023-05-23 17:00",
                "avg_temp_out": "27.65000"
            },
            {
                "nombre": "CHIH_JCAS",
                "fecha": "2023-05-23 17:00",
                "avg_temp_out": "28.86667"
            },
            {
                "nombre": "El Terrero",
                "fecha": "2023-05-23 17:00",
                "avg_temp_out": "27.01667"
            },
            {
                "nombre": "CHIH_Potb",
                "fecha": "2023-05-23 17:00",
                "avg_temp_out": "27.90833"
            },
            {
                "nombre": "Ojinaga",
                "fecha": "2023-05-23 17:00",
                "avg_temp_out": "29.69167"
            },
            {
                "nombre": "Camargo",
                "fecha": "2023-05-23 17:00",
                "avg_temp_out": "29.57500"
            },
            {
                "nombre": "Guerrero",
                "fecha": "2023-05-23 17:00",
                "avg_temp_out": "24.28333"
            },
            {
                "nombre": "Ahumada",
                "fecha": "2023-05-23 17:00",
                "avg_temp_out": "29.75833"
            },
            {
                "nombre": "Santa Isabel",
                "fecha": "2023-05-23 17:00",
                "avg_temp_out": "30.27500"
            },
            {
                "nombre": "Valle de Zaragoza",
                "fecha": "2023-05-23 17:00",
                "avg_temp_out": "30.55000"
            },
            {
                "nombre": "Madera",
                "fecha": "2023-05-23 17:00",
                "avg_temp_out": "23.16667"
            },
            {
                "nombre": "NCG",
                "fecha": "2023-05-23 17:00",
                "avg_temp_out": "28.51667"
            },
            {
                "nombre": "Balleza",
                "fecha": "2023-05-23 17:00",
                "avg_temp_out": "28.30000"
            },
            {
                "nombre": "Témoris",
                "fecha": "2023-05-23 17:00",
                "avg_temp_out": "27.60000"
            },
            {
                "nombre": "Coyame",
                "fecha": "2023-05-23 17:00",
                "avg_temp_out": "29.82500"
            },
            {
                "nombre": "Ahumada",
                "fecha": "2023-05-23 18:00",
                "avg_temp_out": "30.80000"
            },
            {
                "nombre": "Santa Isabel",
                "fecha": "2023-05-23 18:00",
                "avg_temp_out": "31.28333"
            },
            {
                "nombre": "Valle de Zaragoza",
                "fecha": "2023-05-23 18:00",
                "avg_temp_out": "31.79167"
            },
            {
                "nombre": "Madera",
                "fecha": "2023-05-23 18:00",
                "avg_temp_out": "23.73333"
            },
            {
                "nombre": "NCG",
                "fecha": "2023-05-23 18:00",
                "avg_temp_out": "29.69167"
            },
            {
                "nombre": "Balleza",
                "fecha": "2023-05-23 18:00",
                "avg_temp_out": "29.40833"
            },
            {
                "nombre": "Témoris",
                "fecha": "2023-05-23 18:00",
                "avg_temp_out": "28.31667"
            },
            {
                "nombre": "Coyame",
                "fecha": "2023-05-23 18:00",
                "avg_temp_out": "30.92500"
            },
            {
                "nombre": "Práxedis",
                "fecha": "2023-05-23 18:00",
                "avg_temp_out": "32.86667"
            },
            {
                "nombre": "Manuel Benavides",
                "fecha": "2023-05-23 18:00",
                "avg_temp_out": "32.64167"
            },
            {
                "nombre": "Satevó",
                "fecha": "2023-05-23 18:00",
                "avg_temp_out": "31.60000"
            },
            {
                "nombre": "Cuauhtémoc",
                "fecha": "2023-05-23 18:00",
                "avg_temp_out": "25.52500"
            },
            {
                "nombre": "Ricardo F Magón",
                "fecha": "2023-05-23 18:00",
                "avg_temp_out": "28.89167"
            },
            {
                "nombre": "Juárez Conejos Médanos",
                "fecha": "2023-05-23 18:00",
                "avg_temp_out": "31.40000"
            },
            {
                "nombre": "Parral",
                "fecha": "2023-05-23 18:00",
                "avg_temp_out": "27.07500"
            },
            {
                "nombre": "Temósachi",
                "fecha": "2023-05-23 18:00",
                "avg_temp_out": "25.95000"
            },
            {
                "nombre": "Ascensión",
                "fecha": "2023-05-23 18:00",
                "avg_temp_out": "31.34167"
            },
            {
                "nombre": "UABCS CGN",
                "fecha": "2023-05-23 18:00",
                "avg_temp_out": "18.33333"
            },
            {
                "nombre": "Jiménez",
                "fecha": "2023-05-23 18:00",
                "avg_temp_out": "29.87500"
            },
            {
                "nombre": "Creel",
                "fecha": "2023-05-23 18:00",
                "avg_temp_out": "21.57500"
            },
            {
                "nombre": "Aldama",
                "fecha": "2023-05-23 18:00",
                "avg_temp_out": "30.91667"
            },
            {
                "nombre": "Juárez",
                "fecha": "2023-05-23 18:00",
                "avg_temp_out": "31.65000"
            },
            {
                "nombre": "San Fco. de Borja",
                "fecha": "2023-05-23 18:00",
                "avg_temp_out": "29.05833"
            },
            {
                "nombre": "CHIH_JCAS",
                "fecha": "2023-05-23 18:00",
                "avg_temp_out": "31.75833"
            },
            {
                "nombre": "El Terrero",
                "fecha": "2023-05-23 18:00",
                "avg_temp_out": "28.23333"
            },
            {
                "nombre": "CHIH_Potb",
                "fecha": "2023-05-23 18:00",
                "avg_temp_out": "29.07500"
            },
            {
                "nombre": "Ojinaga",
                "fecha": "2023-05-23 18:00",
                "avg_temp_out": "31.51667"
            },
            {
                "nombre": "Camargo",
                "fecha": "2023-05-23 18:00",
                "avg_temp_out": "31.47500"
            },
            {
                "nombre": "Guerrero",
                "fecha": "2023-05-23 18:00",
                "avg_temp_out": "25.83333"
            },
            {
                "nombre": "Aldama",
                "fecha": "2023-05-23 19:00",
                "avg_temp_out": "32.02500"
            },
            {
                "nombre": "Juárez",
                "fecha": "2023-05-23 19:00",
                "avg_temp_out": "32.44167"
            },
            {
                "nombre": "San Fco. de Borja",
                "fecha": "2023-05-23 19:00",
                "avg_temp_out": "29.69167"
            },
            {
                "nombre": "CHIH_JCAS",
                "fecha": "2023-05-23 19:00",
                "avg_temp_out": "32.35000"
            },
            {
                "nombre": "El Terrero",
                "fecha": "2023-05-23 19:00",
                "avg_temp_out": "28.94167"
            },
            {
                "nombre": "CHIH_Potb",
                "fecha": "2023-05-23 19:00",
                "avg_temp_out": "29.55000"
            },
            {
                "nombre": "Ojinaga",
                "fecha": "2023-05-23 19:00",
                "avg_temp_out": "32.99167"
            },
            {
                "nombre": "Camargo",
                "fecha": "2023-05-23 19:00",
                "avg_temp_out": "32.55833"
            },
            {
                "nombre": "Guerrero",
                "fecha": "2023-05-23 19:00",
                "avg_temp_out": "27.06667"
            },
            {
                "nombre": "Ahumada",
                "fecha": "2023-05-23 19:00",
                "avg_temp_out": "31.68333"
            },
            {
                "nombre": "Santa Isabel",
                "fecha": "2023-05-23 19:00",
                "avg_temp_out": "31.50833"
            },
            {
                "nombre": "Valle de Zaragoza",
                "fecha": "2023-05-23 19:00",
                "avg_temp_out": "32.91667"
            },
            {
                "nombre": "Madera",
                "fecha": "2023-05-23 19:00",
                "avg_temp_out": "24.32500"
            },
            {
                "nombre": "NCG",
                "fecha": "2023-05-23 19:00",
                "avg_temp_out": "30.98333"
            },
            {
                "nombre": "Balleza",
                "fecha": "2023-05-23 19:00",
                "avg_temp_out": "30.97500"
            },
            {
                "nombre": "Témoris",
                "fecha": "2023-05-23 19:00",
                "avg_temp_out": "29.02500"
            },
            {
                "nombre": "Coyame",
                "fecha": "2023-05-23 19:00",
                "avg_temp_out": "31.55833"
            },
            {
                "nombre": "Práxedis",
                "fecha": "2023-05-23 19:00",
                "avg_temp_out": "33.52500"
            },
            {
                "nombre": "Manuel Benavides",
                "fecha": "2023-05-23 19:00",
                "avg_temp_out": "33.85833"
            },
            {
                "nombre": "Satevó",
                "fecha": "2023-05-23 19:00",
                "avg_temp_out": "32.55833"
            },
            {
                "nombre": "Cuauhtémoc",
                "fecha": "2023-05-23 19:00",
                "avg_temp_out": "26.11667"
            },
            {
                "nombre": "Ricardo F Magón",
                "fecha": "2023-05-23 19:00",
                "avg_temp_out": "29.88333"
            },
            {
                "nombre": "Juárez Conejos Médanos",
                "fecha": "2023-05-23 19:00",
                "avg_temp_out": "32.25000"
            },
            {
                "nombre": "Parral",
                "fecha": "2023-05-23 19:00",
                "avg_temp_out": "27.36667"
            },
            {
                "nombre": "Temósachi",
                "fecha": "2023-05-23 19:00",
                "avg_temp_out": "27.08333"
            },
            {
                "nombre": "Ascensión",
                "fecha": "2023-05-23 19:00",
                "avg_temp_out": "32.33333"
            },
            {
                "nombre": "UABCS CGN",
                "fecha": "2023-05-23 19:00",
                "avg_temp_out": "19.10833"
            },
            {
                "nombre": "Jiménez",
                "fecha": "2023-05-23 19:00",
                "avg_temp_out": "30.28333"
            },
            {
                "nombre": "Creel",
                "fecha": "2023-05-23 19:00",
                "avg_temp_out": "22.64167"
            },
            {
                "nombre": "Satevó",
                "fecha": "2023-05-23 20:00",
                "avg_temp_out": "32.71667"
            },
            {
                "nombre": "Cuauhtémoc",
                "fecha": "2023-05-23 20:00",
                "avg_temp_out": "27.15000"
            },
            {
                "nombre": "Ricardo F Magón",
                "fecha": "2023-05-23 20:00",
                "avg_temp_out": "30.49167"
            },
            {
                "nombre": "Juárez Conejos Médanos",
                "fecha": "2023-05-23 20:00",
                "avg_temp_out": "32.06667"
            },
            {
                "nombre": "Parral",
                "fecha": "2023-05-23 20:00",
                "avg_temp_out": "28.16667"
            },
            {
                "nombre": "Temósachi",
                "fecha": "2023-05-23 20:00",
                "avg_temp_out": "27.95000"
            },
            {
                "nombre": "Ascensión",
                "fecha": "2023-05-23 20:00",
                "avg_temp_out": "33.18333"
            },
            {
                "nombre": "UABCS CGN",
                "fecha": "2023-05-23 20:00",
                "avg_temp_out": "20.00833"
            },
            {
                "nombre": "Jiménez",
                "fecha": "2023-05-23 20:00",
                "avg_temp_out": "30.80000"
            },
            {
                "nombre": "Creel",
                "fecha": "2023-05-23 20:00",
                "avg_temp_out": "23.04167"
            },
            {
                "nombre": "Aldama",
                "fecha": "2023-05-23 20:00",
                "avg_temp_out": "32.59167"
            },
            {
                "nombre": "Juárez",
                "fecha": "2023-05-23 20:00",
                "avg_temp_out": "32.35833"
            },
            {
                "nombre": "San Fco. de Borja",
                "fecha": "2023-05-23 20:00",
                "avg_temp_out": "30.13333"
            },
            {
                "nombre": "CHIH_JCAS",
                "fecha": "2023-05-23 20:00",
                "avg_temp_out": "32.25833"
            },
            {
                "nombre": "El Terrero",
                "fecha": "2023-05-23 20:00",
                "avg_temp_out": "29.62500"
            },
            {
                "nombre": "CHIH_Potb",
                "fecha": "2023-05-23 20:00",
                "avg_temp_out": "30.30833"
            },
            {
                "nombre": "Ojinaga",
                "fecha": "2023-05-23 20:00",
                "avg_temp_out": "34.43333"
            },
            {
                "nombre": "Camargo",
                "fecha": "2023-05-23 20:00",
                "avg_temp_out": "33.49167"
            },
            {
                "nombre": "Guerrero",
                "fecha": "2023-05-23 20:00",
                "avg_temp_out": "27.83333"
            },
            {
                "nombre": "Ahumada",
                "fecha": "2023-05-23 20:00",
                "avg_temp_out": "32.07500"
            },
            {
                "nombre": "Santa Isabel",
                "fecha": "2023-05-23 20:00",
                "avg_temp_out": "31.47500"
            },
            {
                "nombre": "Valle de Zaragoza",
                "fecha": "2023-05-23 20:00",
                "avg_temp_out": "33.85000"
            },
            {
                "nombre": "Madera",
                "fecha": "2023-05-23 20:00",
                "avg_temp_out": "25.14167"
            },
            {
                "nombre": "NCG",
                "fecha": "2023-05-23 20:00",
                "avg_temp_out": "32.75833"
            },
            {
                "nombre": "Balleza",
                "fecha": "2023-05-23 20:00",
                "avg_temp_out": "31.70833"
            },
            {
                "nombre": "Témoris",
                "fecha": "2023-05-23 20:00",
                "avg_temp_out": "29.64167"
            },
            {
                "nombre": "Coyame",
                "fecha": "2023-05-23 20:00",
                "avg_temp_out": "32.13333"
            },
            {
                "nombre": "Práxedis",
                "fecha": "2023-05-23 20:00",
                "avg_temp_out": "34.35833"
            },
            {
                "nombre": "Manuel Benavides",
                "fecha": "2023-05-23 20:00",
                "avg_temp_out": "34.79167"
            },
            {
                "nombre": "Valle de Zaragoza",
                "fecha": "2023-05-23 21:00",
                "avg_temp_out": "33.83333"
            },
            {
                "nombre": "Madera",
                "fecha": "2023-05-23 21:00",
                "avg_temp_out": "25.25833"
            },
            {
                "nombre": "NCG",
                "fecha": "2023-05-23 21:00",
                "avg_temp_out": "32.95000"
            },
            {
                "nombre": "Balleza",
                "fecha": "2023-05-23 21:00",
                "avg_temp_out": "32.16667"
            },
            {
                "nombre": "Témoris",
                "fecha": "2023-05-23 21:00",
                "avg_temp_out": "29.84167"
            },
            {
                "nombre": "Coyame",
                "fecha": "2023-05-23 21:00",
                "avg_temp_out": "32.18333"
            },
            {
                "nombre": "Práxedis",
                "fecha": "2023-05-23 21:00",
                "avg_temp_out": "33.82500"
            },
            {
                "nombre": "Manuel Benavides",
                "fecha": "2023-05-23 21:00",
                "avg_temp_out": "35.24167"
            },
            {
                "nombre": "Satevó",
                "fecha": "2023-05-23 21:00",
                "avg_temp_out": "33.52500"
            },
            {
                "nombre": "Cuauhtémoc",
                "fecha": "2023-05-23 21:00",
                "avg_temp_out": "27.54167"
            },
            {
                "nombre": "Ricardo F Magón",
                "fecha": "2023-05-23 21:00",
                "avg_temp_out": "31.23333"
            },
            {
                "nombre": "Juárez Conejos Médanos",
                "fecha": "2023-05-23 21:00",
                "avg_temp_out": "32.61667"
            },
            {
                "nombre": "Parral",
                "fecha": "2023-05-23 21:00",
                "avg_temp_out": "28.62500"
            },
            {
                "nombre": "Temósachi",
                "fecha": "2023-05-23 21:00",
                "avg_temp_out": "28.28333"
            },
            {
                "nombre": "Ascensión",
                "fecha": "2023-05-23 21:00",
                "avg_temp_out": "33.36667"
            },
            {
                "nombre": "UABCS CGN",
                "fecha": "2023-05-23 21:00",
                "avg_temp_out": "19.90000"
            },
            {
                "nombre": "Jiménez",
                "fecha": "2023-05-23 21:00",
                "avg_temp_out": "31.88333"
            },
            {
                "nombre": "Creel",
                "fecha": "2023-05-23 21:00",
                "avg_temp_out": "23.17500"
            },
            {
                "nombre": "Aldama",
                "fecha": "2023-05-23 21:00",
                "avg_temp_out": "32.89167"
            },
            {
                "nombre": "Juárez",
                "fecha": "2023-05-23 21:00",
                "avg_temp_out": "32.52500"
            },
            {
                "nombre": "San Fco. de Borja",
                "fecha": "2023-05-23 21:00",
                "avg_temp_out": "30.67500"
            },
            {
                "nombre": "CHIH_JCAS",
                "fecha": "2023-05-23 21:00",
                "avg_temp_out": "32.94167"
            },
            {
                "nombre": "El Terrero",
                "fecha": "2023-05-23 21:00",
                "avg_temp_out": "29.76667"
            },
            {
                "nombre": "CHIH_Potb",
                "fecha": "2023-05-23 21:00",
                "avg_temp_out": "30.81667"
            },
            {
                "nombre": "Ojinaga",
                "fecha": "2023-05-23 21:00",
                "avg_temp_out": "35.15000"
            },
            {
                "nombre": "Camargo",
                "fecha": "2023-05-23 21:00",
                "avg_temp_out": "34.36667"
            },
            {
                "nombre": "Guerrero",
                "fecha": "2023-05-23 21:00",
                "avg_temp_out": "27.64167"
            },
            {
                "nombre": "Ahumada",
                "fecha": "2023-05-23 21:00",
                "avg_temp_out": "32.49167"
            },
            {
                "nombre": "Santa Isabel",
                "fecha": "2023-05-23 21:00",
                "avg_temp_out": "31.61667"
            },
            {
                "nombre": "Juárez",
                "fecha": "2023-05-23 22:00",
                "avg_temp_out": "32.77500"
            },
            {
                "nombre": "San Fco. de Borja",
                "fecha": "2023-05-23 22:00",
                "avg_temp_out": "31.65833"
            },
            {
                "nombre": "CHIH_JCAS",
                "fecha": "2023-05-23 22:00",
                "avg_temp_out": "33.56667"
            },
            {
                "nombre": "El Terrero",
                "fecha": "2023-05-23 22:00",
                "avg_temp_out": "30.15000"
            },
            {
                "nombre": "CHIH_Potb",
                "fecha": "2023-05-23 22:00",
                "avg_temp_out": "31.07500"
            },
            {
                "nombre": "Ojinaga",
                "fecha": "2023-05-23 22:00",
                "avg_temp_out": "36.07500"
            },
            {
                "nombre": "Camargo",
                "fecha": "2023-05-23 22:00",
                "avg_temp_out": "34.44167"
            },
            {
                "nombre": "Guerrero",
                "fecha": "2023-05-23 22:00",
                "avg_temp_out": "27.55000"
            },
            {
                "nombre": "Ahumada",
                "fecha": "2023-05-23 22:00",
                "avg_temp_out": "33.13333"
            },
            {
                "nombre": "Santa Isabel",
                "fecha": "2023-05-23 22:00",
                "avg_temp_out": "31.29167"
            },
            {
                "nombre": "Valle de Zaragoza",
                "fecha": "2023-05-23 22:00",
                "avg_temp_out": "34.82500"
            },
            {
                "nombre": "Madera",
                "fecha": "2023-05-23 22:00",
                "avg_temp_out": "25.25000"
            },
            {
                "nombre": "NCG",
                "fecha": "2023-05-23 22:00",
                "avg_temp_out": "33.30833"
            },
            {
                "nombre": "Balleza",
                "fecha": "2023-05-23 22:00",
                "avg_temp_out": "33.05000"
            },
            {
                "nombre": "Témoris",
                "fecha": "2023-05-23 22:00",
                "avg_temp_out": "29.63333"
            },
            {
                "nombre": "Coyame",
                "fecha": "2023-05-23 22:00",
                "avg_temp_out": "32.87500"
            },
            {
                "nombre": "Práxedis",
                "fecha": "2023-05-23 22:00",
                "avg_temp_out": "35.15833"
            },
            {
                "nombre": "Manuel Benavides",
                "fecha": "2023-05-23 22:00",
                "avg_temp_out": "35.26667"
            },
            {
                "nombre": "Satevó",
                "fecha": "2023-05-23 22:00",
                "avg_temp_out": "33.40833"
            },
            {
                "nombre": "Cuauhtémoc",
                "fecha": "2023-05-23 22:00",
                "avg_temp_out": "28.20833"
            },
            {
                "nombre": "Ricardo F Magón",
                "fecha": "2023-05-23 22:00",
                "avg_temp_out": "31.10833"
            },
            {
                "nombre": "Juárez Conejos Médanos",
                "fecha": "2023-05-23 22:00",
                "avg_temp_out": "32.75833"
            },
            {
                "nombre": "Parral",
                "fecha": "2023-05-23 22:00",
                "avg_temp_out": "28.37500"
            },
            {
                "nombre": "Temósachi",
                "fecha": "2023-05-23 22:00",
                "avg_temp_out": "28.05833"
            },
            {
                "nombre": "Ascensión",
                "fecha": "2023-05-23 22:00",
                "avg_temp_out": "34.11667"
            },
            {
                "nombre": "UABCS CGN",
                "fecha": "2023-05-23 22:00",
                "avg_temp_out": "19.75833"
            },
            {
                "nombre": "Jiménez",
                "fecha": "2023-05-23 22:00",
                "avg_temp_out": "32.07500"
            },
            {
                "nombre": "Creel",
                "fecha": "2023-05-23 22:00",
                "avg_temp_out": "23.00833"
            },
            {
                "nombre": "Aldama",
                "fecha": "2023-05-23 22:00",
                "avg_temp_out": "33.80833"
            },
            {
                "nombre": "Ricardo F Magón",
                "fecha": "2023-05-23 23:00",
                "avg_temp_out": "30.94167"
            },
            {
                "nombre": "Juárez Conejos Médanos",
                "fecha": "2023-05-23 23:00",
                "avg_temp_out": "33.20000"
            },
            {
                "nombre": "Parral",
                "fecha": "2023-05-23 23:00",
                "avg_temp_out": "28.91667"
            },
            {
                "nombre": "Temósachi",
                "fecha": "2023-05-23 23:00",
                "avg_temp_out": "27.70000"
            },
            {
                "nombre": "Ascensión",
                "fecha": "2023-05-23 23:00",
                "avg_temp_out": "33.14167"
            },
            {
                "nombre": "UABCS CGN",
                "fecha": "2023-05-23 23:00",
                "avg_temp_out": "19.15000"
            },
            {
                "nombre": "Jiménez",
                "fecha": "2023-05-23 23:00",
                "avg_temp_out": "31.63333"
            },
            {
                "nombre": "Creel",
                "fecha": "2023-05-23 23:00",
                "avg_temp_out": "22.46667"
            },
            {
                "nombre": "Aldama",
                "fecha": "2023-05-23 23:00",
                "avg_temp_out": "33.23333"
            },
            {
                "nombre": "Juárez",
                "fecha": "2023-05-23 23:00",
                "avg_temp_out": "33.32500"
            },
            {
                "nombre": "San Fco. de Borja",
                "fecha": "2023-05-23 23:00",
                "avg_temp_out": "31.51667"
            },
            {
                "nombre": "CHIH_JCAS",
                "fecha": "2023-05-23 23:00",
                "avg_temp_out": "32.55000"
            },
            {
                "nombre": "El Terrero",
                "fecha": "2023-05-23 23:00",
                "avg_temp_out": "30.30000"
            },
            {
                "nombre": "CHIH_Potb",
                "fecha": "2023-05-23 23:00",
                "avg_temp_out": "30.71667"
            },
            {
                "nombre": "Ojinaga",
                "fecha": "2023-05-23 23:00",
                "avg_temp_out": "35.79167"
            },
            {
                "nombre": "Camargo",
                "fecha": "2023-05-23 23:00",
                "avg_temp_out": "34.20000"
            },
            {
                "nombre": "Guerrero",
                "fecha": "2023-05-23 23:00",
                "avg_temp_out": "27.46667"
            },
            {
                "nombre": "Ahumada",
                "fecha": "2023-05-23 23:00",
                "avg_temp_out": "33.20000"
            },
            {
                "nombre": "Santa Isabel",
                "fecha": "2023-05-23 23:00",
                "avg_temp_out": "30.23333"
            },
            {
                "nombre": "Valle de Zaragoza",
                "fecha": "2023-05-23 23:00",
                "avg_temp_out": "34.20833"
            },
            {
                "nombre": "Madera",
                "fecha": "2023-05-23 23:00",
                "avg_temp_out": "24.93333"
            },
            {
                "nombre": "NCG",
                "fecha": "2023-05-23 23:00",
                "avg_temp_out": "32.17500"
            },
            {
                "nombre": "Balleza",
                "fecha": "2023-05-23 23:00",
                "avg_temp_out": "33.00833"
            },
            {
                "nombre": "Témoris",
                "fecha": "2023-05-23 23:00",
                "avg_temp_out": "29.57500"
            },
            {
                "nombre": "Coyame",
                "fecha": "2023-05-23 23:00",
                "avg_temp_out": "33.64167"
            },
            {
                "nombre": "Práxedis",
                "fecha": "2023-05-23 23:00",
                "avg_temp_out": "34.68333"
            },
            {
                "nombre": "Manuel Benavides",
                "fecha": "2023-05-23 23:00",
                "avg_temp_out": "35.14167"
            },
            {
                "nombre": "Satevó",
                "fecha": "2023-05-23 23:00",
                "avg_temp_out": "33.45000"
            },
            {
                "nombre": "Cuauhtémoc",
                "fecha": "2023-05-23 23:00",
                "avg_temp_out": "28.55000"
            },
            {
                "nombre": "NCG",
                "fecha": "2023-05-24 00:00",
                "avg_temp_out": "31.39167"
            },
            {
                "nombre": "Balleza",
                "fecha": "2023-05-24 00:00",
                "avg_temp_out": "32.10000"
            },
            {
                "nombre": "Témoris",
                "fecha": "2023-05-24 00:00",
                "avg_temp_out": "28.34167"
            },
            {
                "nombre": "Coyame",
                "fecha": "2023-05-24 00:00",
                "avg_temp_out": "33.50000"
            },
            {
                "nombre": "Práxedis",
                "fecha": "2023-05-24 00:00",
                "avg_temp_out": "33.83333"
            },
            {
                "nombre": "Manuel Benavides",
                "fecha": "2023-05-24 00:00",
                "avg_temp_out": "34.92500"
            },
            {
                "nombre": "Satevó",
                "fecha": "2023-05-24 00:00",
                "avg_temp_out": "33.21667"
            },
            {
                "nombre": "Cuauhtémoc",
                "fecha": "2023-05-24 00:00",
                "avg_temp_out": "27.90833"
            },
            {
                "nombre": "Ricardo F Magón",
                "fecha": "2023-05-24 00:00",
                "avg_temp_out": "30.74167"
            },
            {
                "nombre": "Juárez Conejos Médanos",
                "fecha": "2023-05-24 00:00",
                "avg_temp_out": "31.52500"
            },
            {
                "nombre": "Parral",
                "fecha": "2023-05-24 00:00",
                "avg_temp_out": "28.42500"
            },
            {
                "nombre": "Temósachi",
                "fecha": "2023-05-24 00:00",
                "avg_temp_out": "26.92500"
            },
            {
                "nombre": "Ascensión",
                "fecha": "2023-05-24 00:00",
                "avg_temp_out": "31.80833"
            },
            {
                "nombre": "UABCS CGN",
                "fecha": "2023-05-24 00:00",
                "avg_temp_out": "18.40833"
            },
            {
                "nombre": "Jiménez",
                "fecha": "2023-05-24 00:00",
                "avg_temp_out": "31.20000"
            },
            {
                "nombre": "Creel",
                "fecha": "2023-05-24 00:00",
                "avg_temp_out": "21.70000"
            },
            {
                "nombre": "Aldama",
                "fecha": "2023-05-24 00:00",
                "avg_temp_out": "32.23333"
            },
            {
                "nombre": "Juárez",
                "fecha": "2023-05-24 00:00",
                "avg_temp_out": "32.88333"
            },
            {
                "nombre": "San Fco. de Borja",
                "fecha": "2023-05-24 00:00",
                "avg_temp_out": "30.61667"
            },
            {
                "nombre": "CHIH_JCAS",
                "fecha": "2023-05-24 00:00",
                "avg_temp_out": "31.70833"
            },
            {
                "nombre": "El Terrero",
                "fecha": "2023-05-24 00:00",
                "avg_temp_out": "28.75833"
            },
            {
                "nombre": "CHIH_Potb",
                "fecha": "2023-05-24 00:00",
                "avg_temp_out": "30.51667"
            },
            {
                "nombre": "Ojinaga",
                "fecha": "2023-05-24 00:00",
                "avg_temp_out": "35.58333"
            },
            {
                "nombre": "Camargo",
                "fecha": "2023-05-24 00:00",
                "avg_temp_out": "33.93333"
            },
            {
                "nombre": "Guerrero",
                "fecha": "2023-05-24 00:00",
                "avg_temp_out": "26.63333"
            },
            {
                "nombre": "Ahumada",
                "fecha": "2023-05-24 00:00",
                "avg_temp_out": "33.47500"
            },
            {
                "nombre": "Santa Isabel",
                "fecha": "2023-05-24 00:00",
                "avg_temp_out": "30.65000"
            },
            {
                "nombre": "Valle de Zaragoza",
                "fecha": "2023-05-24 00:00",
                "avg_temp_out": "31.71667"
            },
            {
                "nombre": "Madera",
                "fecha": "2023-05-24 00:00",
                "avg_temp_out": "24.07500"
            },
            {
                "nombre": "CHIH_JCAS",
                "fecha": "2023-05-24 01:00",
                "avg_temp_out": "30.65833"
            },
            {
                "nombre": "El Terrero",
                "fecha": "2023-05-24 01:00",
                "avg_temp_out": "26.47500"
            },
            {
                "nombre": "CHIH_Potb",
                "fecha": "2023-05-24 01:00",
                "avg_temp_out": "29.87500"
            },
            {
                "nombre": "Ojinaga",
                "fecha": "2023-05-24 01:00",
                "avg_temp_out": "34.27500"
            },
            {
                "nombre": "Camargo",
                "fecha": "2023-05-24 01:00",
                "avg_temp_out": "32.19167"
            },
            {
                "nombre": "Guerrero",
                "fecha": "2023-05-24 01:00",
                "avg_temp_out": "24.60000"
            },
            {
                "nombre": "Ahumada",
                "fecha": "2023-05-24 01:00",
                "avg_temp_out": "32.10833"
            },
            {
                "nombre": "Santa Isabel",
                "fecha": "2023-05-24 01:00",
                "avg_temp_out": "27.30000"
            },
            {
                "nombre": "Valle de Zaragoza",
                "fecha": "2023-05-24 01:00",
                "avg_temp_out": "30.60000"
            },
            {
                "nombre": "Madera",
                "fecha": "2023-05-24 01:00",
                "avg_temp_out": "22.71667"
            },
            {
                "nombre": "NCG",
                "fecha": "2023-05-24 01:00",
                "avg_temp_out": "29.43333"
            },
            {
                "nombre": "Balleza",
                "fecha": "2023-05-24 01:00",
                "avg_temp_out": "30.00000"
            },
            {
                "nombre": "Témoris",
                "fecha": "2023-05-24 01:00",
                "avg_temp_out": "26.30000"
            },
            {
                "nombre": "Coyame",
                "fecha": "2023-05-24 01:00",
                "avg_temp_out": "32.08333"
            },
            {
                "nombre": "Práxedis",
                "fecha": "2023-05-24 01:00",
                "avg_temp_out": "31.25833"
            },
            {
                "nombre": "Manuel Benavides",
                "fecha": "2023-05-24 01:00",
                "avg_temp_out": "32.35833"
            },
            {
                "nombre": "Satevó",
                "fecha": "2023-05-24 01:00",
                "avg_temp_out": "32.05833"
            },
            {
                "nombre": "Cuauhtémoc",
                "fecha": "2023-05-24 01:00",
                "avg_temp_out": "26.22500"
            },
            {
                "nombre": "Ricardo F Magón",
                "fecha": "2023-05-24 01:00",
                "avg_temp_out": "29.24167"
            },
            {
                "nombre": "Juárez Conejos Médanos",
                "fecha": "2023-05-24 01:00",
                "avg_temp_out": "30.65833"
            },
            {
                "nombre": "Parral",
                "fecha": "2023-05-24 01:00",
                "avg_temp_out": "27.36667"
            },
            {
                "nombre": "Temósachi",
                "fecha": "2023-05-24 01:00",
                "avg_temp_out": "25.63333"
            },
            {
                "nombre": "Ascensión",
                "fecha": "2023-05-24 01:00",
                "avg_temp_out": "30.05833"
            },
            {
                "nombre": "UABCS CGN",
                "fecha": "2023-05-24 01:00",
                "avg_temp_out": "17.59167"
            },
            {
                "nombre": "Jiménez",
                "fecha": "2023-05-24 01:00",
                "avg_temp_out": "28.99167"
            },
            {
                "nombre": "Creel",
                "fecha": "2023-05-24 01:00",
                "avg_temp_out": "19.96667"
            },
            {
                "nombre": "Aldama",
                "fecha": "2023-05-24 01:00",
                "avg_temp_out": "30.45833"
            },
            {
                "nombre": "Juárez",
                "fecha": "2023-05-24 01:00",
                "avg_temp_out": "32.18333"
            },
            {
                "nombre": "San Fco. de Borja",
                "fecha": "2023-05-24 01:00",
                "avg_temp_out": "28.58333"
            },
            {
                "nombre": "Temósachi",
                "fecha": "2023-05-24 02:00",
                "avg_temp_out": "23.66667"
            },
            {
                "nombre": "Parral",
                "fecha": "2023-05-24 02:00",
                "avg_temp_out": "25.86667"
            },
            {
                "nombre": "UABCS CGN",
                "fecha": "2023-05-24 02:00",
                "avg_temp_out": "16.62500"
            },
            {
                "nombre": "Ascensión",
                "fecha": "2023-05-24 02:00",
                "avg_temp_out": "27.26667"
            },
            {
                "nombre": "Creel",
                "fecha": "2023-05-24 02:00",
                "avg_temp_out": "18.24167"
            },
            {
                "nombre": "Jiménez",
                "fecha": "2023-05-24 02:00",
                "avg_temp_out": "25.32500"
            },
            {
                "nombre": "Aldama",
                "fecha": "2023-05-24 02:00",
                "avg_temp_out": "28.52500"
            },
            {
                "nombre": "San Fco. de Borja",
                "fecha": "2023-05-24 02:00",
                "avg_temp_out": "26.39167"
            },
            {
                "nombre": "Juárez",
                "fecha": "2023-05-24 02:00",
                "avg_temp_out": "31.29167"
            },
            {
                "nombre": "CHIH_JCAS",
                "fecha": "2023-05-24 02:00",
                "avg_temp_out": "28.89167"
            },
            {
                "nombre": "El Terrero",
                "fecha": "2023-05-24 02:00",
                "avg_temp_out": "23.57500"
            },
            {
                "nombre": "Ojinaga",
                "fecha": "2023-05-24 02:00",
                "avg_temp_out": "32.99167"
            },
            {
                "nombre": "CHIH_Potb",
                "fecha": "2023-05-24 02:00",
                "avg_temp_out": "28.15833"
            },
            {
                "nombre": "Guerrero",
                "fecha": "2023-05-24 02:00",
                "avg_temp_out": "22.70000"
            },
            {
                "nombre": "Camargo",
                "fecha": "2023-05-24 02:00",
                "avg_temp_out": "27.09167"
            },
            {
                "nombre": "Santa Isabel",
                "fecha": "2023-05-24 02:00",
                "avg_temp_out": "23.95000"
            },
            {
                "nombre": "Ahumada",
                "fecha": "2023-05-24 02:00",
                "avg_temp_out": "29.30833"
            },
            {
                "nombre": "Madera",
                "fecha": "2023-05-24 02:00",
                "avg_temp_out": "20.80833"
            },
            {
                "nombre": "Valle de Zaragoza",
                "fecha": "2023-05-24 02:00",
                "avg_temp_out": "26.95000"
            },
            {
                "nombre": "NCG",
                "fecha": "2023-05-24 02:00",
                "avg_temp_out": "27.47500"
            },
            {
                "nombre": "Témoris",
                "fecha": "2023-05-24 02:00",
                "avg_temp_out": "24.21667"
            },
            {
                "nombre": "Balleza",
                "fecha": "2023-05-24 02:00",
                "avg_temp_out": "27.76667"
            },
            {
                "nombre": "Coyame",
                "fecha": "2023-05-24 02:00",
                "avg_temp_out": "28.50000"
            },
            {
                "nombre": "Manuel Benavides",
                "fecha": "2023-05-24 02:00",
                "avg_temp_out": "29.21667"
            },
            {
                "nombre": "Práxedis",
                "fecha": "2023-05-24 02:00",
                "avg_temp_out": "28.50000"
            },
            {
                "nombre": "Satevó",
                "fecha": "2023-05-24 02:00",
                "avg_temp_out": "28.11667"
            },
            {
                "nombre": "Cuauhtémoc",
                "fecha": "2023-05-24 02:00",
                "avg_temp_out": "23.93333"
            },
            {
                "nombre": "Juárez Conejos Médanos",
                "fecha": "2023-05-24 02:00",
                "avg_temp_out": "27.51667"
            },
            {
                "nombre": "Ricardo F Magón",
                "fecha": "2023-05-24 02:00",
                "avg_temp_out": "25.63333"
            },
            {
                "nombre": "Balleza",
                "fecha": "2023-05-24 03:00",
                "avg_temp_out": "26.32500"
            },
            {
                "nombre": "Témoris",
                "fecha": "2023-05-24 03:00",
                "avg_temp_out": "22.37500"
            },
            {
                "nombre": "Coyame",
                "fecha": "2023-05-24 03:00",
                "avg_temp_out": "25.81667"
            },
            {
                "nombre": "Práxedis",
                "fecha": "2023-05-24 03:00",
                "avg_temp_out": "25.64167"
            },
            {
                "nombre": "Manuel Benavides",
                "fecha": "2023-05-24 03:00",
                "avg_temp_out": "27.20000"
            },
            {
                "nombre": "Satevó",
                "fecha": "2023-05-24 03:00",
                "avg_temp_out": "25.80833"
            },
            {
                "nombre": "Cuauhtémoc",
                "fecha": "2023-05-24 03:00",
                "avg_temp_out": "22.09167"
            },
            {
                "nombre": "Ricardo F Magón",
                "fecha": "2023-05-24 03:00",
                "avg_temp_out": "24.65000"
            },
            {
                "nombre": "Juárez Conejos Médanos",
                "fecha": "2023-05-24 03:00",
                "avg_temp_out": "26.49167"
            },
            {
                "nombre": "Parral",
                "fecha": "2023-05-24 03:00",
                "avg_temp_out": "23.82500"
            },
            {
                "nombre": "Temósachi",
                "fecha": "2023-05-24 03:00",
                "avg_temp_out": "21.87500"
            },
            {
                "nombre": "Ascensión",
                "fecha": "2023-05-24 03:00",
                "avg_temp_out": "24.51667"
            },
            {
                "nombre": "UABCS CGN",
                "fecha": "2023-05-24 03:00",
                "avg_temp_out": "16.20833"
            },
            {
                "nombre": "Jiménez",
                "fecha": "2023-05-24 03:00",
                "avg_temp_out": "22.72500"
            },
            {
                "nombre": "Creel",
                "fecha": "2023-05-24 03:00",
                "avg_temp_out": "16.74167"
            },
            {
                "nombre": "Aldama",
                "fecha": "2023-05-24 03:00",
                "avg_temp_out": "27.43333"
            },
            {
                "nombre": "Juárez",
                "fecha": "2023-05-24 03:00",
                "avg_temp_out": "30.41667"
            },
            {
                "nombre": "San Fco. de Borja",
                "fecha": "2023-05-24 03:00",
                "avg_temp_out": "24.96667"
            },
            {
                "nombre": "CHIH_JCAS",
                "fecha": "2023-05-24 03:00",
                "avg_temp_out": "27.24167"
            },
            {
                "nombre": "El Terrero",
                "fecha": "2023-05-24 03:00",
                "avg_temp_out": "21.00833"
            },
            {
                "nombre": "CHIH_Potb",
                "fecha": "2023-05-24 03:00",
                "avg_temp_out": "26.80000"
            },
            {
                "nombre": "Ojinaga",
                "fecha": "2023-05-24 03:00",
                "avg_temp_out": "30.60000"
            },
            {
                "nombre": "Camargo",
                "fecha": "2023-05-24 03:00",
                "avg_temp_out": "23.80000"
            },
            {
                "nombre": "Guerrero",
                "fecha": "2023-05-24 03:00",
                "avg_temp_out": "21.40833"
            },
            {
                "nombre": "Ahumada",
                "fecha": "2023-05-24 03:00",
                "avg_temp_out": "27.46667"
            },
            {
                "nombre": "Santa Isabel",
                "fecha": "2023-05-24 03:00",
                "avg_temp_out": "25.35000"
            },
            {
                "nombre": "Valle de Zaragoza",
                "fecha": "2023-05-24 03:00",
                "avg_temp_out": "25.20833"
            },
            {
                "nombre": "Madera",
                "fecha": "2023-05-24 03:00",
                "avg_temp_out": "19.32500"
            },
            {
                "nombre": "NCG",
                "fecha": "2023-05-24 03:00",
                "avg_temp_out": "26.09167"
            },
            {
                "nombre": "CHIH_Potb",
                "fecha": "2023-05-24 04:00",
                "avg_temp_out": "24.94167"
            },
            {
                "nombre": "Ojinaga",
                "fecha": "2023-05-24 04:00",
                "avg_temp_out": "29.60000"
            },
            {
                "nombre": "Camargo",
                "fecha": "2023-05-24 04:00",
                "avg_temp_out": "22.65000"
            },
            {
                "nombre": "Guerrero",
                "fecha": "2023-05-24 04:00",
                "avg_temp_out": "20.14167"
            },
            {
                "nombre": "Ahumada",
                "fecha": "2023-05-24 04:00",
                "avg_temp_out": "25.60000"
            },
            {
                "nombre": "Santa Isabel",
                "fecha": "2023-05-24 04:00",
                "avg_temp_out": "23.35000"
            },
            {
                "nombre": "Valle de Zaragoza",
                "fecha": "2023-05-24 04:00",
                "avg_temp_out": "23.70833"
            },
            {
                "nombre": "Madera",
                "fecha": "2023-05-24 04:00",
                "avg_temp_out": "18.43333"
            },
            {
                "nombre": "NCG",
                "fecha": "2023-05-24 04:00",
                "avg_temp_out": "24.04167"
            },
            {
                "nombre": "Balleza",
                "fecha": "2023-05-24 04:00",
                "avg_temp_out": "24.70000"
            },
            {
                "nombre": "Témoris",
                "fecha": "2023-05-24 04:00",
                "avg_temp_out": "20.50833"
            },
            {
                "nombre": "Coyame",
                "fecha": "2023-05-24 04:00",
                "avg_temp_out": "23.86667"
            },
            {
                "nombre": "Práxedis",
                "fecha": "2023-05-24 04:00",
                "avg_temp_out": "23.51667"
            },
            {
                "nombre": "Manuel Benavides",
                "fecha": "2023-05-24 04:00",
                "avg_temp_out": "27.35833"
            },
            {
                "nombre": "Satevó",
                "fecha": "2023-05-24 04:00",
                "avg_temp_out": "25.10000"
            },
            {
                "nombre": "Cuauhtémoc",
                "fecha": "2023-05-24 04:00",
                "avg_temp_out": "20.66667"
            },
            {
                "nombre": "Ricardo F Magón",
                "fecha": "2023-05-24 04:00",
                "avg_temp_out": "24.87500"
            },
            {
                "nombre": "Juárez Conejos Médanos",
                "fecha": "2023-05-24 04:00",
                "avg_temp_out": "23.80833"
            },
            {
                "nombre": "Parral",
                "fecha": "2023-05-24 04:00",
                "avg_temp_out": "24.28333"
            },
            {
                "nombre": "Temósachi",
                "fecha": "2023-05-24 04:00",
                "avg_temp_out": "20.10833"
            },
            {
                "nombre": "Ascensión",
                "fecha": "2023-05-24 04:00",
                "avg_temp_out": "22.36667"
            },
            {
                "nombre": "UABCS CGN",
                "fecha": "2023-05-24 04:00",
                "avg_temp_out": "15.85000"
            },
            {
                "nombre": "Jiménez",
                "fecha": "2023-05-24 04:00",
                "avg_temp_out": "21.80000"
            },
            {
                "nombre": "Creel",
                "fecha": "2023-05-24 04:00",
                "avg_temp_out": "15.67500"
            },
            {
                "nombre": "Aldama",
                "fecha": "2023-05-24 04:00",
                "avg_temp_out": "26.52500"
            },
            {
                "nombre": "Juárez",
                "fecha": "2023-05-24 04:00",
                "avg_temp_out": "28.75000"
            },
            {
                "nombre": "San Fco. de Borja",
                "fecha": "2023-05-24 04:00",
                "avg_temp_out": "22.89167"
            },
            {
                "nombre": "CHIH_JCAS",
                "fecha": "2023-05-24 04:00",
                "avg_temp_out": "25.91667"
            },
            {
                "nombre": "El Terrero",
                "fecha": "2023-05-24 04:00",
                "avg_temp_out": "20.01667"
            },
            {
                "nombre": "Ascensión",
                "fecha": "2023-05-24 05:00",
                "avg_temp_out": "21.81667"
            },
            {
                "nombre": "UABCS CGN",
                "fecha": "2023-05-24 05:00",
                "avg_temp_out": "15.94167"
            },
            {
                "nombre": "Jiménez",
                "fecha": "2023-05-24 05:00",
                "avg_temp_out": "19.94167"
            },
            {
                "nombre": "Creel",
                "fecha": "2023-05-24 05:00",
                "avg_temp_out": "14.59167"
            },
            {
                "nombre": "Aldama",
                "fecha": "2023-05-24 05:00",
                "avg_temp_out": "25.84167"
            },
            {
                "nombre": "Juárez",
                "fecha": "2023-05-24 05:00",
                "avg_temp_out": "28.40833"
            },
            {
                "nombre": "San Fco. de Borja",
                "fecha": "2023-05-24 05:00",
                "avg_temp_out": "20.50833"
            },
            {
                "nombre": "CHIH_JCAS",
                "fecha": "2023-05-24 05:00",
                "avg_temp_out": "24.38333"
            },
            {
                "nombre": "El Terrero",
                "fecha": "2023-05-24 05:00",
                "avg_temp_out": "19.64167"
            },
            {
                "nombre": "CHIH_Potb",
                "fecha": "2023-05-24 05:00",
                "avg_temp_out": "23.65833"
            },
            {
                "nombre": "Ojinaga",
                "fecha": "2023-05-24 05:00",
                "avg_temp_out": "28.68333"
            },
            {
                "nombre": "Camargo",
                "fecha": "2023-05-24 05:00",
                "avg_temp_out": "22.22500"
            },
            {
                "nombre": "Guerrero",
                "fecha": "2023-05-24 05:00",
                "avg_temp_out": "17.99167"
            },
            {
                "nombre": "Ahumada",
                "fecha": "2023-05-24 05:00",
                "avg_temp_out": "24.95833"
            },
            {
                "nombre": "Santa Isabel",
                "fecha": "2023-05-24 05:00",
                "avg_temp_out": "20.03333"
            },
            {
                "nombre": "Valle de Zaragoza",
                "fecha": "2023-05-24 05:00",
                "avg_temp_out": "20.75833"
            },
            {
                "nombre": "Madera",
                "fecha": "2023-05-24 05:00",
                "avg_temp_out": "17.20000"
            },
            {
                "nombre": "NCG",
                "fecha": "2023-05-24 05:00",
                "avg_temp_out": "22.48333"
            },
            {
                "nombre": "Balleza",
                "fecha": "2023-05-24 05:00",
                "avg_temp_out": "23.95833"
            },
            {
                "nombre": "Témoris",
                "fecha": "2023-05-24 05:00",
                "avg_temp_out": "18.26667"
            },
            {
                "nombre": "Coyame",
                "fecha": "2023-05-24 05:00",
                "avg_temp_out": "22.68333"
            },
            {
                "nombre": "Práxedis",
                "fecha": "2023-05-24 05:00",
                "avg_temp_out": "21.62500"
            },
            {
                "nombre": "Manuel Benavides",
                "fecha": "2023-05-24 05:00",
                "avg_temp_out": "26.38333"
            },
            {
                "nombre": "Satevó",
                "fecha": "2023-05-24 05:00",
                "avg_temp_out": "23.34167"
            },
            {
                "nombre": "Cuauhtémoc",
                "fecha": "2023-05-24 05:00",
                "avg_temp_out": "19.32500"
            },
            {
                "nombre": "Ricardo F Magón",
                "fecha": "2023-05-24 05:00",
                "avg_temp_out": "21.82500"
            },
            {
                "nombre": "Juárez Conejos Médanos",
                "fecha": "2023-05-24 05:00",
                "avg_temp_out": "21.50000"
            },
            {
                "nombre": "Parral",
                "fecha": "2023-05-24 05:00",
                "avg_temp_out": "22.29167"
            },
            {
                "nombre": "Temósachi",
                "fecha": "2023-05-24 05:00",
                "avg_temp_out": "16.35833"
            },
            {
                "nombre": "Coyame",
                "fecha": "2023-05-24 06:00",
                "avg_temp_out": "21.50833"
            },
            {
                "nombre": "Práxedis",
                "fecha": "2023-05-24 06:00",
                "avg_temp_out": "19.60000"
            },
            {
                "nombre": "Manuel Benavides",
                "fecha": "2023-05-24 06:00",
                "avg_temp_out": "24.50000"
            },
            {
                "nombre": "Satevó",
                "fecha": "2023-05-24 06:00",
                "avg_temp_out": "21.63333"
            },
            {
                "nombre": "Cuauhtémoc",
                "fecha": "2023-05-24 06:00",
                "avg_temp_out": "18.42500"
            },
            {
                "nombre": "Ricardo F Magón",
                "fecha": "2023-05-24 06:00",
                "avg_temp_out": "19.29167"
            },
            {
                "nombre": "Juárez Conejos Médanos",
                "fecha": "2023-05-24 06:00",
                "avg_temp_out": "21.12500"
            },
            {
                "nombre": "Parral",
                "fecha": "2023-05-24 06:00",
                "avg_temp_out": "20.62500"
            },
            {
                "nombre": "Temósachi",
                "fecha": "2023-05-24 06:00",
                "avg_temp_out": "13.68333"
            },
            {
                "nombre": "Ascensión",
                "fecha": "2023-05-24 06:00",
                "avg_temp_out": "20.92500"
            },
            {
                "nombre": "UABCS CGN",
                "fecha": "2023-05-24 06:00",
                "avg_temp_out": "16.00000"
            },
            {
                "nombre": "Jiménez",
                "fecha": "2023-05-24 06:00",
                "avg_temp_out": "21.15833"
            },
            {
                "nombre": "Creel",
                "fecha": "2023-05-24 06:00",
                "avg_temp_out": "11.85833"
            },
            {
                "nombre": "Aldama",
                "fecha": "2023-05-24 06:00",
                "avg_temp_out": "25.07500"
            },
            {
                "nombre": "Juárez",
                "fecha": "2023-05-24 06:00",
                "avg_temp_out": "28.20000"
            },
            {
                "nombre": "San Fco. de Borja",
                "fecha": "2023-05-24 06:00",
                "avg_temp_out": "20.40833"
            },
            {
                "nombre": "CHIH_JCAS",
                "fecha": "2023-05-24 06:00",
                "avg_temp_out": "24.35833"
            },
            {
                "nombre": "El Terrero",
                "fecha": "2023-05-24 06:00",
                "avg_temp_out": "18.62500"
            },
            {
                "nombre": "CHIH_Potb",
                "fecha": "2023-05-24 06:00",
                "avg_temp_out": "25.30000"
            },
            {
                "nombre": "Ojinaga",
                "fecha": "2023-05-24 06:00",
                "avg_temp_out": "27.38333"
            },
            {
                "nombre": "Camargo",
                "fecha": "2023-05-24 06:00",
                "avg_temp_out": "24.33333"
            },
            {
                "nombre": "Guerrero",
                "fecha": "2023-05-24 06:00",
                "avg_temp_out": "16.18333"
            },
            {
                "nombre": "Ahumada",
                "fecha": "2023-05-24 06:00",
                "avg_temp_out": "22.98333"
            },
            {
                "nombre": "Santa Isabel",
                "fecha": "2023-05-24 06:00",
                "avg_temp_out": "20.55000"
            },
            {
                "nombre": "Valle de Zaragoza",
                "fecha": "2023-05-24 06:00",
                "avg_temp_out": "19.27500"
            },
            {
                "nombre": "Madera",
                "fecha": "2023-05-24 06:00",
                "avg_temp_out": "14.53333"
            },
            {
                "nombre": "NCG",
                "fecha": "2023-05-24 06:00",
                "avg_temp_out": "20.87500"
            },
            {
                "nombre": "Balleza",
                "fecha": "2023-05-24 06:00",
                "avg_temp_out": "21.88333"
            },
            {
                "nombre": "Témoris",
                "fecha": "2023-05-24 06:00",
                "avg_temp_out": "16.73333"
            },
            {
                "nombre": "Camargo",
                "fecha": "2023-05-24 07:00",
                "avg_temp_out": "25.64167"
            },
            {
                "nombre": "Guerrero",
                "fecha": "2023-05-24 07:00",
                "avg_temp_out": "13.89167"
            },
            {
                "nombre": "Ahumada",
                "fecha": "2023-05-24 07:00",
                "avg_temp_out": "21.05000"
            },
            {
                "nombre": "Santa Isabel",
                "fecha": "2023-05-24 07:00",
                "avg_temp_out": "20.37500"
            },
            {
                "nombre": "Valle de Zaragoza",
                "fecha": "2023-05-24 07:00",
                "avg_temp_out": "18.06667"
            },
            {
                "nombre": "Madera",
                "fecha": "2023-05-24 07:00",
                "avg_temp_out": "12.10000"
            },
            {
                "nombre": "NCG",
                "fecha": "2023-05-24 07:00",
                "avg_temp_out": "20.55833"
            },
            {
                "nombre": "Balleza",
                "fecha": "2023-05-24 07:00",
                "avg_temp_out": "20.48333"
            },
            {
                "nombre": "Témoris",
                "fecha": "2023-05-24 07:00",
                "avg_temp_out": "15.42500"
            },
            {
                "nombre": "Coyame",
                "fecha": "2023-05-24 07:00",
                "avg_temp_out": "21.96667"
            },
            {
                "nombre": "Práxedis",
                "fecha": "2023-05-24 07:00",
                "avg_temp_out": "19.76667"
            },
            {
                "nombre": "Manuel Benavides",
                "fecha": "2023-05-24 07:00",
                "avg_temp_out": "22.79167"
            },
            {
                "nombre": "Satevó",
                "fecha": "2023-05-24 07:00",
                "avg_temp_out": "19.80833"
            },
            {
                "nombre": "Cuauhtémoc",
                "fecha": "2023-05-24 07:00",
                "avg_temp_out": "17.98333"
            },
            {
                "nombre": "Ricardo F Magón",
                "fecha": "2023-05-24 07:00",
                "avg_temp_out": "17.18333"
            },
            {
                "nombre": "Juárez Conejos Médanos",
                "fecha": "2023-05-24 07:00",
                "avg_temp_out": "19.45000"
            },
            {
                "nombre": "Parral",
                "fecha": "2023-05-24 07:00",
                "avg_temp_out": "20.39167"
            },
            {
                "nombre": "Temósachi",
                "fecha": "2023-05-24 07:00",
                "avg_temp_out": "11.86667"
            },
            {
                "nombre": "Ascensión",
                "fecha": "2023-05-24 07:00",
                "avg_temp_out": "18.66667"
            },
            {
                "nombre": "UABCS CGN",
                "fecha": "2023-05-24 07:00",
                "avg_temp_out": "15.97500"
            },
            {
                "nombre": "Jiménez",
                "fecha": "2023-05-24 07:00",
                "avg_temp_out": "22.66667"
            },
            {
                "nombre": "Creel",
                "fecha": "2023-05-24 07:00",
                "avg_temp_out": "9.05000"
            },
            {
                "nombre": "Aldama",
                "fecha": "2023-05-24 07:00",
                "avg_temp_out": "25.65000"
            },
            {
                "nombre": "Juárez",
                "fecha": "2023-05-24 07:00",
                "avg_temp_out": "26.03333"
            },
            {
                "nombre": "San Fco. de Borja",
                "fecha": "2023-05-24 07:00",
                "avg_temp_out": "18.05833"
            },
            {
                "nombre": "CHIH_JCAS",
                "fecha": "2023-05-24 07:00",
                "avg_temp_out": "24.20833"
            },
            {
                "nombre": "El Terrero",
                "fecha": "2023-05-24 07:00",
                "avg_temp_out": "16.77500"
            },
            {
                "nombre": "CHIH_Potb",
                "fecha": "2023-05-24 07:00",
                "avg_temp_out": "24.85000"
            },
            {
                "nombre": "Ojinaga",
                "fecha": "2023-05-24 07:00",
                "avg_temp_out": "26.42500"
            },
            {
                "nombre": "Jiménez",
                "fecha": "2023-05-24 08:00",
                "avg_temp_out": "21.21667"
            },
            {
                "nombre": "Creel",
                "fecha": "2023-05-24 08:00",
                "avg_temp_out": "8.02857"
            },
            {
                "nombre": "Aldama",
                "fecha": "2023-05-24 08:00",
                "avg_temp_out": "24.85714"
            },
            {
                "nombre": "Juárez",
                "fecha": "2023-05-24 08:00",
                "avg_temp_out": "26.25714"
            },
            {
                "nombre": "San Fco. de Borja",
                "fecha": "2023-05-24 08:00",
                "avg_temp_out": "16.03333"
            },
            {
                "nombre": "CHIH_JCAS",
                "fecha": "2023-05-24 08:00",
                "avg_temp_out": "23.41429"
            },
            {
                "nombre": "El Terrero",
                "fecha": "2023-05-24 08:00",
                "avg_temp_out": "15.32857"
            },
            {
                "nombre": "CHIH_Potb",
                "fecha": "2023-05-24 08:00",
                "avg_temp_out": "23.81667"
            },
            {
                "nombre": "Ojinaga",
                "fecha": "2023-05-24 08:00",
                "avg_temp_out": "25.73333"
            },
            {
                "nombre": "Camargo",
                "fecha": "2023-05-24 08:00",
                "avg_temp_out": "25.33333"
            },
            {
                "nombre": "Guerrero",
                "fecha": "2023-05-24 08:00",
                "avg_temp_out": "12.50000"
            },
            {
                "nombre": "Ahumada",
                "fecha": "2023-05-24 08:00",
                "avg_temp_out": "21.12000"
            },
            {
                "nombre": "Santa Isabel",
                "fecha": "2023-05-24 08:00",
                "avg_temp_out": "18.88000"
            },
            {
                "nombre": "Valle de Zaragoza",
                "fecha": "2023-05-24 08:00",
                "avg_temp_out": "18.23333"
            },
            {
                "nombre": "Madera",
                "fecha": "2023-05-24 08:00",
                "avg_temp_out": "10.98333"
            },
            {
                "nombre": "NCG",
                "fecha": "2023-05-24 08:00",
                "avg_temp_out": "19.68333"
            },
            {
                "nombre": "Balleza",
                "fecha": "2023-05-24 08:00",
                "avg_temp_out": "20.54286"
            },
            {
                "nombre": "Témoris",
                "fecha": "2023-05-24 08:00",
                "avg_temp_out": "14.71667"
            },
            {
                "nombre": "Coyame",
                "fecha": "2023-05-24 08:00",
                "avg_temp_out": "22.15000"
            },
            {
                "nombre": "Práxedis",
                "fecha": "2023-05-24 08:00",
                "avg_temp_out": "19.13333"
            },
            {
                "nombre": "Manuel Benavides",
                "fecha": "2023-05-24 08:00",
                "avg_temp_out": "21.65000"
            },
            {
                "nombre": "Satevó",
                "fecha": "2023-05-24 08:00",
                "avg_temp_out": "18.67143"
            },
            {
                "nombre": "Cuauhtémoc",
                "fecha": "2023-05-24 08:00",
                "avg_temp_out": "16.95000"
            },
            {
                "nombre": "Ricardo F Magón",
                "fecha": "2023-05-24 08:00",
                "avg_temp_out": "16.15000"
            },
            {
                "nombre": "Juárez Conejos Médanos",
                "fecha": "2023-05-24 08:00",
                "avg_temp_out": "19.26667"
            },
            {
                "nombre": "Parral",
                "fecha": "2023-05-24 08:00",
                "avg_temp_out": "21.20000"
            },
            {
                "nombre": "Temósachi",
                "fecha": "2023-05-24 08:00",
                "avg_temp_out": "10.51429"
            },
            {
                "nombre": "Ascensión",
                "fecha": "2023-05-24 08:00",
                "avg_temp_out": "17.46667"
            },
            {
                "nombre": "UABCS CGN",
                "fecha": "2023-05-24 08:00",
                "avg_temp_out": "16.03333"
            }
        ],
        "formats": [
            {
                "format": "",
                "alias": "Estacion",
                "aggregate": "",
                "dataColumnName": "nombre"
            },
            {
                "format": "",
                "alias": "Fecha",
                "aggregate": "",
                "dataColumnName": "fecha"
            },
            {
                "format": "°C",
                "alias": "Temperatura Exterior",
                "aggregate": "avg",
                "dataColumnName": "avg_temp_out"
            }
        ]
    }
}

const chart_multiline = {
    "nlq2sql": {
        "result": "OK",
        "query": "select t1.fecha, t1.temperatura_exterior, t1.temperatura_maxima, t1.temperatura_minima from data as t1 join stations as t2 on t1.stations_id = t2.id where t2.estacion = 'guerrero' order by t1.fecha desc limit 10;",
        "type": "chart_multiline",
        "structureStr": "data (id, fecha, temperatura_exterior, stations_id), stations (id, estacion)"
    },
    "queryExecution": {
        "result": "OK",
        "queryMapped": "select t1.fecha, t1.temp_out, t1.hi_temp, t1.low_temp from data_fixes as t1 join estacion as t2 on t1.estacion_id = t2.id where t2.nombre = 'guerrero' order by t1.fecha desc limit 10;",
        "data": [
            {
                "fecha": "2023-05-24T09:10:00.000Z",
                "temp_out": "10.7",
                "hi_temp": "10.9",
                "low_temp": "10.7"
            },
            {
                "fecha": "2023-05-24T09:05:00.000Z",
                "temp_out": "10.9",
                "hi_temp": "11.2",
                "low_temp": "10.9"
            },
            {
                "fecha": "2023-05-24T09:00:00.000Z",
                "temp_out": "11.2",
                "hi_temp": "11.3",
                "low_temp": "11.2"
            },
            {
                "fecha": "2023-05-24T08:55:00.000Z",
                "temp_out": "11.3",
                "hi_temp": "11.5",
                "low_temp": "11.3"
            },
            {
                "fecha": "2023-05-24T08:50:00.000Z",
                "temp_out": "11.6",
                "hi_temp": "11.7",
                "low_temp": "11.5"
            },
            {
                "fecha": "2023-05-24T08:45:00.000Z",
                "temp_out": "11.7",
                "hi_temp": "11.8",
                "low_temp": "11.7"
            },
            {
                "fecha": "2023-05-24T08:40:00.000Z",
                "temp_out": "11.8",
                "hi_temp": "12.0",
                "low_temp": "11.8"
            },
            {
                "fecha": "2023-05-24T08:35:00.000Z",
                "temp_out": "12.0",
                "hi_temp": "12.2",
                "low_temp": "11.9"
            },
            {
                "fecha": "2023-05-24T08:30:00.000Z",
                "temp_out": "12.2",
                "hi_temp": "12.3",
                "low_temp": "12.2"
            },
            {
                "fecha": "2023-05-24T08:25:00.000Z",
                "temp_out": "12.3",
                "hi_temp": "12.4",
                "low_temp": "12.3"
            }
        ],
        "formats": [
            {
                "format": "",
                "alias": "Fecha",
                "aggregate": "",
                "dataColumnName": "fecha"
            },
            {
                "format": "°C",
                "alias": "Temperatura Exterior",
                "aggregate": "",
                "dataColumnName": "temp_out"
            },
            {
                "format": "°C",
                "alias": "Temperatura Máxima",
                "aggregate": "",
                "dataColumnName": "hi_temp"
            },
            {
                "format": "°C",
                "alias": "Temperatura Mínima",
                "aggregate": "",
                "dataColumnName": "low_temp"
            }
        ]
    }
}

export { chart_multiserieline, chart_multiline };