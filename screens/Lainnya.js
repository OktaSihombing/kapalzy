import React, {useState, Component} from 'react';
import { Text, View, Button, TextInput, SafeAreaView, TouchableOpacity,ScrollView, Modal, Image} from 'react-native';
import styles from '../style/Lainnya_Style.js';
import { FontAwesome5 } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Foundation } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

export default function Lainnya({navigation}){
    const [modal,setModal]= useState(false);
    const [modal2,setModal2] = useState(false);

    return(
        <View style={[{marginTop:20}]}>
            <View style={[{ marginTop:20, padding:10, alignContent:'center', justifyContent:'center'}]}>
                <Text style={[{fontWeight:'bold',fontSize:30, textAlign:'center', }]}>
                    Menu
                </Text>
                <View style={[{flexDirection:'row', alignContent:'center', justifyContent:'center',marginTop:25}]}>
                    <View style={[{width:180, alignContent:'center', justifyContent:'center', margin:3}]}>
                        <TouchableOpacity style={[{padding:30, borderColor:'black', elevation:1, borderRadius:5}]} onPress={()=>navigation.navigate('Beranda')}>
                            <Image
                                source={require('../assets/search-icon-png-9986.png' )}
                                style={{ width:50, height:50, alignSelf:'center', marginBottom:10 }}
                            />
                            <Text style={[{textAlign:'center', fontWeight:'bold'}]}>
                                Cek Pemesanan
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={[{width:180, alignContent:'center', justifyContent:'center', margin:3}]}>
                        <TouchableOpacity style={[{padding:30, borderColor:'black', elevation:1, borderRadius:5}]} onPress={()=> setModal(!modal)}>
                            <Image
                                source={require('../assets/profile-icon-png-898.png' )}
                                style={{ width:50, height:50, alignSelf:'center', marginBottom:10 }}
                            />
                            <Text style={[{textAlign:'center', fontWeight:'bold'}]}>
                                Detail Profile
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
                
                <View style={[{flexDirection:'row', alignContent:'center', justifyContent:'center',marginTop:25}]}>
                    <View style={[{width:180, alignContent:'center', justifyContent:'center', margin:3}]}>
                        <TouchableOpacity style={[{padding:30, borderColor:'black', elevation:1, borderRadius:5}]} onPress={()=> setModal2(!modal2)}>
                            <Image
                                source={require('../assets/telephone-icon-3623.png' )}
                                style={{ width:50, height:50, alignSelf:'center', marginBottom:10 }}
                            />
                            <Text style={[{textAlign:'center', fontWeight:'bold'}]}>
                                Hubungi Kami
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={[{width:180, alignContent:'center', justifyContent:'center', margin:3}]}>
                        <TouchableOpacity style={[{padding:30, borderColor:'black', elevation:1, borderRadius:5}]}  onPress={()=>navigation.navigate('Daftar Pesanan')}>
                            <Image
                                source={require('../assets/history-icon-png-4665.png' )}
                                style={{ width:50, height:50, alignSelf:'center', marginBottom:10 }}
                            />
                            <Text style={[{textAlign:'center', fontWeight:'bold'}]}>
                                Riwayat Pesanan
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modal}
                onRequestClose={() => {
                Alert.alert("Modal has been closed.");
                setModal(!modal);
                }}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <View style={styles.modalHeader}>
                            <Text style={[{color:'#FFF', textAlign:'center', fontSize:20, marginLeft:100, marginRight:100, fontWeight:'bold'}]}>
                                Fitur Dalam Pengembangan
                            </Text>
                        </View>
                        <View style={[{padding:20,flexDirection:'row', alignContent:'center', justifyContent:'center'}]}>
                            <TouchableOpacity style={[{marginBottom:15, backgroundColor:'#EE9E54', borderRadius:5, elevation:5, padding:12, margin:10,}]} onPress={() => {setModal(!modal)}}>
                                <Text style={[{ fontSize:15 }]}>
                                    Kembali
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modal2}
                onRequestClose={() => {
                Alert.alert("Modal has been closed.");
                setModal2(!modal2);
                }}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <View style={styles.modalHeader}>
                            <Text style={[{color:'#FFF', textAlign:'center', fontSize:20, marginLeft:100, marginRight:100, fontWeight:'bold'}]}>
                                Okta Roma Uli S - 119140083
                            </Text>
                        </View>
                        <View style={[{padding:20,flexDirection:'row', alignContent:'center', justifyContent:'center'}]}>
                            <TouchableOpacity style={[{marginBottom:15, backgroundColor:'#EE9E54', borderRadius:5, elevation:5, padding:12, margin:10,}]} onPress={() => {setModal2(!modal2)}}>
                                <Text style={[{ fontSize:15 }]}>
                                    OK
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    );
}