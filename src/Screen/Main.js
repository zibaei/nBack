import React,{UseState} from 'react';
import {Text,View,StyleSheet,Button,TouchableOpacity,BackHandler} from 'react-native';


const Main=({navigation})=>{
    return(
        <View>
            <View style={styles.container}>
                <TouchableOpacity 
                    style={styles.box1}
                    onPress={()=> navigation.navigate('Port')}
                >
                    <Text style={styles.box1_Text}>ورود</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    style={styles.box1}
                    onPress={()=> BackHandler.exitApp()}    
                >
                    <Text style={styles.box1_Text}>خروج</Text>
                </TouchableOpacity>
            {/* </View>
            <View> */}
                <View style={styles.about}>
                    <Text style={{color:'#666666'}}>امیرحسین زیبایی</Text>
                    <Text style={{color:'#999999',fontSize:11}}> Email : zibaei.amirhossein@yahoo.com</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        width:'100%',
        height:'100%',
        // position:'relative'
    },
    box1:{
        width:"80%",
        height:'13%',
        backgroundColor:'#3db5b4',
        marginLeft:'10%',
        marginTop:'10%',
        borderRadius:30,
        justifyContent:'center',
        alignItems:'center',

    },
    box1_Text:{
        fontSize:20,
        letterSpacing:2
    },
    about:{
        width:'60%',
        marginLeft:'20%',
        justifyContent:'center',
        alignItems:'center',
        marginTop:'90%',
    }
});

export default Main;