// import React, { useEffect, useState } from 'react';
// import { View, Text, FlatList } from 'react-native';
// import { useFonts, Montserrat_700Bold, Montserrat_400Regular } from "@expo-google-fonts/montserrat";
// import { ActivityIndicator, IconButton } from "react-native-paper";
// import style from './style1'; 

// const DATA = [
//   {
//     id: '1',
//     ml: '250 ML',
//     hora: '19:35',
//     nomeIcone: 'pencil-outline',
//     nomeIcone2: 'trash-can-outline',
//   },
//   {
//     id: '2',
//     ml: '350 ML',
//     hora: '21:35',
//     nomeIcone: 'pencil-outline',
//     nomeIcone2: 'trash-can-outline',
//   },
//   {
//     id: '3',
//     ml: '500 ML',
//     hora: '07:38',
//     nomeIcone: 'pencil-outline',
//     nomeIcone2: 'trash-can-outline',
//   },
//   {
//     id: '4',
//     ml: '100 ML',
//     hora: '8:35',
//     nomeIcone: 'pencil-outline',
//     nomeIcone2: 'trash-can-outline',
//   },
//   {
//     id: '5',
//     ml: '425 ML',
//     hora: '11:35',
//     nomeIcone: 'pencil-outline',
//     nomeIcone2: 'trash-can-outline',
//   },
//   {
//     id: '6',
//     ml: '265 ML',
//     hora: '12:30',
//     nomeIcone: 'pencil-outline',
//     nomeIcone2: 'trash-can-outline',
//   },
//   {
//     id: '7',
//     ml: '220 ML',
//     hora: '13:30',
//     nomeIcone: 'pencil-outline',
//     nomeIcone2: 'trash-can-outline',
//   },
//   {
//     id: '8',
//     ml: '320 ML',
//     hora: '15:10',
//     nomeIcone: 'pencil-outline',
//     nomeIcone2: 'trash-can-outline',
//   },
//   {
//     id: '9',
//     ml: '110 ML',
//     hora: '17:10',
//     nomeIcone: 'pencil-outline',
//     nomeIcone2: 'trash-can-outline',
//   },
//   {
//     id: '10',
//     ml: '150 ML',
//     hora: '19:45',
//     nomeIcone: 'pencil-outline',
//     nomeIcone2: 'trash-can-outline',
//   },
//   {
//     id: '11',
//     ml: '75 ML',
//     hora: '20:10',
//     nomeIcone: 'pencil-outline',
//     nomeIcone2: 'trash-can-outline',
//   },
//   {
//     id: '12',
//     ml: '55 ML',
//     hora: '20:30',
//     nomeIcone: 'pencil-outline',
//     nomeIcone2: 'trash-can-outline',
//   },
//   {
//     id: '13',
//     ml: '130 ML',
//     hora: '21:45',
//     nomeIcone: 'pencil-outline',
//     nomeIcone2: 'trash-can-outline',
//   },
//   {
//     id: '14',
//     ml: '50 ML',
//     hora: '22:10',
//     nomeIcone: 'pencil-outline',
//     nomeIcone2: 'trash-can-outline',
//   },
//   {
//     id: '15',
//     ml: '150 ML',
//     hora: '19:45',
//     nomeIcone: 'pencil-outline',
//     nomeIcone2: 'trash-can-outline',
//   },
// ];

// const Item = ({ ml, hora, nomeIcone, nomeIcone2 }) => (
//   <View style={style.listahistorico}>
//     <View style={style.textContainer}>
//       <Text style={style.ml}>{ml}</Text>
//       <Text style={style.hora}>{hora}</Text>
//     </View>
//     <View style={style.iconContainer}>
//       <IconButton icon={nomeIcone} size={30} iconColor="#fff" />
//       <IconButton icon={nomeIcone2} size={30} iconColor="#fff" />
//     </View>
//   </View>
// );

// const Historico = () => {
//   const [isLoading, setLoading] = useState(true);
//   const [cats, setCats] = useState([]);

//   const getCats = async () => {
//     try {
//       const response = await fetch('https://nest-web-vypb.onrender.com/cats');
//       const json = await response.json();
//       setCats(json);
//     } catch (error) {
//       console.error(error);
//     } finally {
//       setLoading(false);-+
//     }
//   };

//   useEffect(() => {
//     getCats();
//   }, []);

//   return (
//     <View style={style.container}>
//       <Text style={style.textoregistro}>Registros</Text>
//       <View style={style.containermeio}>
//              {isLoading ? (
//         <ActivityIndicator />
//       ) : (
//         <FlatList
//           data={cats}
//           keyExtractor={({id}) => id}
//           renderItem={({item}) => (
//             <Text>
//               {item.nome}, {item.raca}, {item.corolhos}
//             </Text>
//           )}
//         />)}
//       </View>
//     </View>
//   );
// };





// export default Historico;
