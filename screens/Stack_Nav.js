import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';

//Screens
import Konfirmasi from './Konfirmasi';
import Menu_Awal from './Menu_Awal';
import Daftar_Pesanan from './Daftar_Pesanan';

const konfirmasiName = 'Konfirmasi';
const berandaName ='Menu_Awal';
const detailName = 'Daftar_Pesanan'

const Stack = createNativeStackNavigator();

export default function Stack_nav(){
    return(
        <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen name={berandaName} component={Menu_Awal}/>
            <Stack.Screen name={konfirmasiName} component={Konfirmasi} />
            <Stack.Screen name ={detailName} component={Daftar_Pesanan}/>
        </Stack.Navigator>
    );
}