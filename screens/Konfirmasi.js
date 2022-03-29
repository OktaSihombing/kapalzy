import { Text, View, SafeAreaView, TextInput, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from '../style/global';
import { Fontisto, Feather} from '@expo/vector-icons';

export default function Konfirmasi({navigation}){
    console.log('aplikasi berjalan')
    return(
        <SafeAreaView style ={styles.container}>
            <View style={styles.cont2}>
                <Text style={styles.title}>Kapalzy</Text>
                <Text style={[styles.subt_dp,{marginBottom:20}]}>Kuota Tersedia</Text>
                <Text style={styles.subt_dp}>Rincian Tiket</Text>
                
                <View style={styles.cont4}>
                    <View style={[styles.input]}>
                        <Text style={styles.subt_ps}>Bakauheni </Text>
                        <Fontisto name="arrow-right-l" size={24} color="black" />
                        <Text style={styles.subt_ps}>Merak </Text>
                    </View>

                    <View style={[styles.content_pes]}>
                    
                        <Text>Jadwal Masuk Pelabuhan</Text>
                        <Text>Sabtu, 26 Maret 2022</Text>
                        <Text>15:15 WIB</Text>
                        <Text>Layanan</Text>
                        <Text>Reguler</Text>
                        <View style={styles.Line}></View>
                        <Text>Dewasa</Text>
                    </View>
                    
                </View>
                
                <View style={styles.total}>
                    <Text style={[styles.subt_dp,{fontSize:19}]}>Total</Text>
                    <Text style={[styles.subt_dp,{fontSize:19}]}>xxxx</Text>
                </View>
                
                <View style={[styles.total,{marginTop:30,}]}>
                    <TouchableOpacity   style={styles.button2}
                                        onPress={()=>navigation.navigate("Beranda")}>
                        <Text style={styles.txtbutt2}>
                            Kembali
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity   style={styles.button3}
                                        onPress={()=>navigation.navigate("Detail_pesanan")}>
                        <Text style={styles.txtbutt3}>
                            Lanjutkan
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>   
            
             
        </SafeAreaView>
        
    );
}