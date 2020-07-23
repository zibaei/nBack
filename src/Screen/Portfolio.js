import React,{useState, useEffect,useFocusEffect,useCallback,} from 'react';
import {Text,View,StyleSheet,Button,TouchableOpacity,Alert,Modal,BackHandler,Dimensions} from 'react-native';
var Sound = require('react-native-sound');
import {Picker} from '@react-native-community/picker';


        const sound1 = new Sound ("x.mp3", Sound.MAIN_BUNDLE ,(error) =>{
            if(error){
                console.log("faild in load sound1",error);
                return                
            }
        });
        const sound2 = new Sound ("m.mp3", Sound.MAIN_BUNDLE ,(error) =>{
            if(error){
                console.log("faild in load sound1",error);
                return                
            }
        });
        const sound3 = new Sound ("o.mp3", Sound.MAIN_BUNDLE ,(error) =>{
            if(error){
                console.log("faild in load sound1",error);
                return                
            }
        });
        const sound4 = new Sound ("z.mp3", Sound.MAIN_BUNDLE ,(error) =>{
            if(error){
                console.log("faild in load sound1",error);
                return                
            }
        });
        const sound5 = new Sound ("s.mp3", Sound.MAIN_BUNDLE ,(error) =>{
            if(error){
                console.log("faild in load sound1",error);
                return                
            }
        });
        const sound6 = new Sound ("t.mp3", Sound.MAIN_BUNDLE ,(error) =>{
            if(error){
                console.log("faild in load sound1",error);
                return                
            }
        });
        const sound7 = new Sound ("u.mp3", Sound.MAIN_BUNDLE ,(error) =>{
            if(error){
                console.log("faild in load sound1",error);
                return                
            }
        });
        const sound8 = new Sound ("v.mp3", Sound.MAIN_BUNDLE ,(error) =>{
            if(error){
                console.log("faild in load sound1",error);
                return                
            }
        });
        const sound9 = new Sound ("w.mp3", Sound.MAIN_BUNDLE ,(error) =>{
            if(error){
                console.log("faild in load sound1",error);
                return                
            }
        }); 

const Portfolio=({navigation})=>{

    const [boxState,setBoxState] = useState({
        box1 : 'red',
        box2 : 'red',
        box3 : 'red',
        box4 : 'red',
        box5 : 'red',
        box6 : 'red',
        box7 : 'red',
        box8 : 'red',
        box9 : 'red',
    })

    const [randomListEye,setRandomListEye] = useState([0,0,0,0,0,0,0,0,0])
    const [randomListEar,setRandomListEar] = useState([0,0,0,0,0,0,0,0,0])
    const [randomNumberEye,setRandomNumberEye] = useState()
    const [randomNumberEar,setRandomNumberEar] = useState()
    const [flagEye,setFlagEye] = useState()
    const [flagEar,setFlagEar] = useState()
    const [correct,setCorrect] = useState(0)
    const [incorrect,setIncorrect]= useState(0)
    const [displayStart,setDisplayStart] = useState('flex')
    const [displayForAll,setDisplayForAll] = useState('none')
    const [displayResult,setDisplayResult] = useState('none')
    const [selectBox,setSelectBox] = useState(2)
    const [sumSelectBox,setSumSelectBox] = useState(21)
    const [counter, setCounter] = useState(0)
    const [flagForFinish,setFlagForFinish] = useState()
    const [flagForRandom,setFlagForRandom] = useState()

    let count=0;
    var KeepGoing
    var timer
    var tt
    var aa 

    useEffect(
        useCallback(()=>{
              onBackPress=()=>{
            if(true){
                ex()
                return false;
            }
          };
    
          BackHandler.addEventListener('hardwareBackPress', onBackPress);
    
          return () =>{
              BackHandler.removeEventListener('hardwareBackPress', onBackPress);
          }
        }, [])
    );

    ex =()=>{
        setFlagForFinish(1)
        console.log('End');
        setDisplayForAll('none')
        setDisplayStart('flex')
        KeepGoing = false
        clearTimeout(timer)
        clearTimeout(tt)
        aa = 'a'
        return 
    }

    callRandomRepeat=()=>{
        setDisplayForAll('flex')
        setDisplayStart('none')
        tt = setTimeout(RandomRepeat,10)
        KeepGoing =true
        console.log("Portfolio Started!");
        console.log("Select Box:",selectBox,"sumSelectBox:",sumSelectBox);
        
    }


    RandomRepeat =()=>{
        if(flagForFinish == 1 || aa == 'a'){
            clearTimeout(timer)
            clearTimeout(tt)
            KeepGoing = false
            console.log("flag in begin");
            return;
        }else{
        setFlagEye(true)    
        setFlagEar(true)   
        const R = Math.floor(Math.random() * 9) +1
        const randomForSounds = Math.floor(Math.random() * 9) +1 
        setRandomNumberEye(R)
        setRandomNumberEar(randomForSounds)
        setRandomListEye(randomListEye => [...randomListEye, R])
        setRandomListEar(randomListEar=>[...randomListEar , randomForSounds])
        

        if(aa == 'a' || flagForFinish == 1){
            console.log("flag befor Change Color")
            return
        }else{            
        switch(R){
            case 1:
                setBoxState({
                    box1:'white',
                    box2:'red',
                    box3:'red',
                    box4:'red',
                    box5:'red',
                    box6:'red',
                    box7:'red',
                    box8:'red',
                    box9:'red',
                })
                break;
            case 2:
                setBoxState({
                    box1:'red',
                    box2:'white',
                    box3:'red',
                    box4:'red',
                    box5:'red',
                    box6:'red',
                    box7:'red',
                    box8:'red',
                    box9:'red',
                })
                break;
            case 3:
                setBoxState({
                    box1:'red',
                    box2:'red',
                    box3:'white',
                    box4:'red',
                    box5:'red',
                    box6:'red',
                    box7:'red',
                    box8:'red',
                    box9:'red',
                })
                break;
            case 4:
                setBoxState({
                    box1:'red',
                    box2:'red',
                    box3:'red',
                    box4:'white',
                    box5:'red',
                    box6:'red',
                    box7:'red',
                    box8:'red',
                    box9:'red',
                })
                break; 
            case 5:
                setBoxState({
                    box1:'red',
                    box2:'red',
                    box3:'red',
                    box4:'red',
                    box5:'white',
                    box6:'red',
                    box7:'red',
                    box8:'red',
                    box9:'red',
                })
                break; 
            case 6:
                setBoxState({
                    box1:'red',
                    box2:'red',
                    box3:'red',
                    box4:'red',
                    box5:'red',
                    box6:'white',
                    box7:'red',
                    box8:'red',
                    box9:'red',
                })
                break;  
            case 7:
                setBoxState({
                    box1:'red',
                    box2:'red',
                    box3:'red',
                    box4:'red',
                    box5:'red',
                    box6:'red',
                    box7:'white',
                    box8:'red',
                    box9:'red',
                })
                break;   
            case 8:
                setBoxState({
                    box1:'red',
                    box2:'red',
                    box3:'red',
                    box4:'red',
                    box5:'red',
                    box6:'red',
                    box7:'red',
                    box8:'white',
                    box9:'red',
                })
                break;
            case 9:
                setBoxState({
                    box1:'red',
                    box2:'red',
                    box3:'red',
                    box4:'red',
                    box5:'red',
                    box6:'red',
                    box7:'red',
                    box8:'red',
                    box9:'white',
                })
                break;   
        } 
    }

        if(aa == 'a' || flagForFinish == 1){
            console.log("flag befor Sound");
            return
        }
        
        switch(randomForSounds){
            case 1 :
                sound1.stop(()=>{
                    sound1.play((ss) =>{
                        if(!ss)
                            console.log("sss");        
                    });
                })
                break;
            case 2 :
                sound2.stop(()=>{
                    sound2.play((ss) =>{
                        if(!ss)
                            console.log("sss");        
                    });
                })
                break;
            case 3 :
                sound3.stop(()=>{
                    sound3.play((ss) =>{
                        if(!ss)
                            console.log("sss");        
                    });
                })
                break;
            case 4 :
                sound4.stop(()=>{
                    sound4.play((ss) =>{
                        if(!ss)
                            console.log("sss");        
                    });
                })
                break;
            case 5 :
                sound5.stop(()=>{
                    sound5.play((ss) =>{
                        if(!ss)
                            console.log("sss");        
                    });
                })
                break;
            case 6 :
                sound6.stop(()=>{
                    sound6.play((ss) =>{
                        if(!ss)
                            console.log("sss");        
                    });
                })
                break;
            case 7 :
                sound7.stop(()=>{
                    sound7.play((ss) =>{
                        if(!ss)
                            console.log("sss");        
                    });
                })
                break;
            case 8 :
                sound8.stop(()=>{
                    sound8.play((ss) =>{
                        if(!ss)
                            console.log("sss");        
                    });
                })
                break;
            case 9 :
                sound9.stop(()=>{
                    sound9.play((ss) =>{
                        if(!ss)
                            console.log("sss");        
                    });
                })
                break;
                                
        }


        if(flagForFinish == 1 || aa=='a'){
            clearTimeout(timer)
            clearTimeout(tt)
            KeepGoing = false
            console.log('flag')
            return
        }else{
            KeepGoing = true
            // console.log('b1');   
        }
        
        if(randomListEye.length - 10 >= sumSelectBox){
            console.log("Finished");
            KeepGoing = false;
            setFlagForFinish(1)
            aa = 'a'
            Alert.alert("پایان","بسیار عالی",[
                {
                    text:'بازگشت',
                    onPress:()=> {
                        setDisplayForAll('none')
                        setDisplayStart('none')
                        setDisplayResult('flex')   
                                             
                    }
                }
            ])           
        }

        console.log(R,randomForSounds);
        if(flagForFinish == 1 || aa=='a'){
            clearTimeout(timer)
            clearTimeout(tt)
            KeepGoing = false
            console.log('flag befor timeout')
            return
        }else if(KeepGoing){
            timer = setTimeout(RandomRepeat, 3000);
        }
        checkForAll()

    }
}



 checkForAll=()=>{
     
    let ok=0,ok2=0
    let temp = randomListEye,temp2 = randomListEar;
    temp = temp.slice( temp.length - selectBox , temp.length -1)
    temp2 = temp2.slice(temp2.length - selectBox , temp2.length -1)

    temp.map(value=>{
        if (value == randomNumberEye){
            ok++;
            console.log("eye");
            
        }
    })
    temp2.map(value=>{
        if (value == randomNumberEar){
            ok2++;
            console.log("ear");
        }
    })


    if (ok>0 || ok2 > 0)
        setCounter(counter+1)
    if (ok2>0 && ok > 0)
        setCounter(counter+2)

    console.log(randomNumberEye,temp,randomNumberEar,temp2,counter);
    console.log("###################################");
        
}



 CheckForEye=()=>{ 
    let ok = 0
    if(!flagEye)
        return;
    else{
        let temp = randomListEye

        temp = temp.slice(temp.length - selectBox ,temp.length-1)
    
        console.log("RandomNumberEye",randomNumberEye,"RandomListEye",randomListEye,"Temp",temp);
        temp.map(value => {
            if(value == randomNumberEye){
                ok++   
            }
        })
        setFlagEye(false)
        
    }
    if(ok>0){
        console.log("OK");
        setCorrect(correct+1)        
    }else if(ok==0){
        setIncorrect(incorrect+1)
    }


}


checkForEar=()=>{
    let ok =0
    if(!flagEar)
        return
    else{
        let temp = randomListEar
        temp = temp.slice(temp.length - selectBox,temp.length-1)
        console.log("RandomNumberEar",randomNumberEar,"RandomListEar",randomListEar,"Temp",temp)
        temp.map(value => {
            if(value == randomNumberEar){
                ok++
            }
        })
        setFlagEar(false)
    }
    if (ok>0){        
        console.log("OK");
        setCorrect(correct+1)        
    }else if(ok==0){
        setIncorrect(incorrect+1)
    }
}

    return(
        <View>
            <View style={{display:displayForAll}}>
                <View style={styles.counter1}>
                    <Text style={{fontSize:16,marginRight:'10%'}}> {randomListEye.length - 9} </Text>
                    <Text>شمارنده</Text>
                </View>
                <View style={{flexDirection:'row',alignSelf:'center'}}>
                    <View style={styles.CheckBox1}>
                        <Text style={{fontSize:16}}> {incorrect} </Text>
                        <Text style={styles.CheckBox_text}>غلط</Text>
                    </View>
                    <View style={styles.CheckBox2}>
                        <Text style={{fontSize:16}}> {correct} </Text>
                        <Text style={styles.CheckBox_text}>صحیح</Text>
                    </View>
                </View>

                <View style={{flexDirection:'row',marginTop:'15%'}}>   
                    <View style={[styles.Box1,{backgroundColor:[boxState.box1],borderRadius:30}]}></View>
                    <View style={[styles.Box1,{backgroundColor:[boxState.box2],borderRadius:30}]}></View>
                    <View style={[styles.Box1,{backgroundColor:[boxState.box3],borderRadius:30}]}></View>
                </View>
                
                <View style={{flexDirection:'row',marginTop:'7%'}}>
                    <View style={[styles.Box1,{backgroundColor:[boxState.box4],borderRadius:30}]}></View>
                    <View style={[styles.Box1,{backgroundColor:[boxState.box5],borderRadius:30}]}></View>
                    <View style={[styles.Box1,{backgroundColor:[boxState.box6],borderRadius:30}]}></View>
                </View>

                <View style={{flexDirection:'row',marginTop:'7%'}}>
                    <View style={[styles.Box1,{backgroundColor:[boxState.box7],borderRadius:30}]}></View>
                    <View style={[styles.Box1,{backgroundColor:[boxState.box8],borderRadius:30}]}></View>
                    <View style={[styles.Box1,{backgroundColor:[boxState.box9],borderRadius:30}]}></View>
                </View>



                <View style={{flexDirection:'row',marginTop:'10%'}}>
                    <TouchableOpacity
                        style={styles.Ear}
                        onPress={()=> checkForEar()}
                    >   
                        <Text style={styles.Text_Button}>گوش</Text>

                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.eye}
                        onPress={()=> CheckForEye()}
                    >   
                        <Text style={styles.Text_Button}>چشم</Text>

                    </TouchableOpacity>
                </View>
            </View>


                <View style={{display:displayStart}}>
                        <TouchableOpacity
                            style={styles.Start_Button}
                            onPress={()=> callRandomRepeat()}
                        >
                            <Text style={styles.Text_Button}>Start</Text>
                        </TouchableOpacity> 
                        <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                            <Picker
                                selectedValue={selectBox}
                                style={styles.select}
                                onValueChange={(itemValue) =>{
                                    setSelectBox(itemValue)
                                }}
                                mode="dropdown"    
                            >
                                <Picker.Item label="Level 1" value="2" />
                                <Picker.Item label="Level 2" value="3" />
                                <Picker.Item label="Level 3" value="4" />
                                <Picker.Item label="Level 4" value="5" />
                                <Picker.Item label="Level 5" value="6" />
                                <Picker.Item label="Level 6" value="7" />
                                <Picker.Item label="Level 7" value="8" />
                                <Picker.Item label="Level 8" value="9" />
                                <Picker.Item label="Level 9" value="10" />
                            </Picker>
                            <View style={styles.select1}>
                                <Text style={{fontSize:17}}> سطح</Text>
                            </View>
                        </View>
                        <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                            <Picker
                                    selectedValue={sumSelectBox}
                                    style={styles.select}
                                    onValueChange={(itemValue) =>{
                                        setSumSelectBox(itemValue)
                                    }}
                                    mode="dropdown"    
                                >
                                    <Picker.Item label="21" value="21" />
                                    <Picker.Item label="22" value="22" />
                                    <Picker.Item label="23" value="23" />
                                    <Picker.Item label="24" value="24" />
                                    <Picker.Item label="25" value="25" />
                                    <Picker.Item label="26" value="26" />
                                    <Picker.Item label="27" value="27" />
                                    <Picker.Item label="28" value="28" />
                                    <Picker.Item label="29" value="29" />

                            </Picker>
                            <View style={styles.select1}>
                                <Text style={{fontSize:17}}> تعداد تکرار</Text>
                            </View>
                        </View>
                            

                </View>



                    <View style={{display:displayResult,marginTop:'10%',height:'90%'}}> 
                        <View style={styles.box_Chart}>
                                    <Text style={{marginLeft:'8%'}}> {correct}  صحیح</Text>
                                    <View style={[styles.box2_Chart,{height:correct*4}]}></View>
                                    <Text style={{marginLeft:'5%'}}> {incorrect}  غلط</Text>
                                    <View style={[styles.box3_Chart,{height:incorrect*4}]}></View>
                        </View>
                        <View style={{width:'100%', height:50,alignItems:'center',justifyContent:'center'}}>
                            <Text style={{fontSize:18}}>{counter-correct}  مورد صحیح رو جا انداختی </Text>
                        </View>
                        <View style={{width:'100%', height:50,alignItems:'center',justifyContent:'center'}}>
                                    <Text style={{fontSize:18}}> {((100*(correct/counter) - (incorrect/(randomListEar.length-9))*10)).toFixed(2) } %</Text>
                        </View>


                            <TouchableOpacity 
                                style={styles.resultExit}
                                onPress={()=>navigation.navigate('mainPage')}
                            > 
                                <Text style={{fontSize:19}}>بازگشت</Text>
                            </TouchableOpacity>
                        
                    </View>
        </View>
    );

}

const styles = StyleSheet.create({
    Box1:{
        width:80,
        height:80,
        borderRadius:20,
        backgroundColor:'red',
        marginLeft:'8.3%',   
    },
    counter1:{
        width:'40%',
        height:45,
        borderColor:'#33bbff',
        borderWidth:2,
        borderRadius:30,
        justifyContent:'flex-end',
        alignItems:'center',
        marginLeft:'30%',
        marginTop:'5%',
        paddingRight:'3%',flexDirection:'row'
    },
    eye:{
        width:'40%',
        height:50,
        // backgroundColor:'black',
        marginLeft:'10%',
        marginTop:10,
        borderRadius:30,
        borderColor:'#1d806a',
        borderWidth:2,
        alignItems:'center',
        justifyContent:'center',
    },    
    Ear:{
        width:'40%',
        height:50,
        // backgroundColor:'black',
        marginLeft:'5%',
        marginTop:10,
        borderRadius:30,
        borderColor:'#1d806a',
        borderWidth:2,
        alignItems:'center',
        justifyContent:'center',
    },    
    Start_Button:{
        width:'40%',
        height:50,
        // backgroundColor:'black',
        marginLeft:'30%',
        marginTop:'20%',
        borderRadius:30,
        borderColor:'#1d806a',
        borderWidth:2,
        alignItems:'center',
        justifyContent:'center',
    },
    Text_Button:{
        fontSize:20,
        letterSpacing:2
    },
    CheckBox1:{
        flexDirection:'row',
        width:'40%',
        height:45,
        marginTop:'5%',
        marginRight:'5%',
        borderRadius:25,
        borderWidth:2,
        justifyContent:'flex-end',
        alignItems:'center',
        borderColor:'red'
    },
    CheckBox2:{
        flexDirection:'row',
        width:'40%',
        height:45,
        // backgroundColor:'white',
        marginTop:'5%',
        marginLeft:'5%',
        borderRadius:25,
        borderWidth:2,
        justifyContent:'flex-end',
        alignItems:'center',
        borderColor:'green'
    },
    CheckBox_text:{
        marginRight:'10%',
        marginLeft:'20%',
        // fontSize:16
    },
    select:{
        height: 50, 
        width: '50%',
        marginTop:50,
        // backgroundColor:'blue',
        // borderRadius:20
    },
    select1:{
        justifyContent:'center',
        alignItems:'center',
        marginTop:'12%',
        borderColor:'black',
        borderWidth:2,
        width:'30%',
        height:40,
        borderTopLeftRadius:30,
        borderBottomLeftRadius:30,
        borderTopRightRadius:10,
        borderBottomRightRadius:10,
        borderColor:'#1d806a'

    },
    box_Chart:{
        width:'80%',
        height:'30%',
        // backgroundColor:'black',
        margin:'10%',
        borderLeftWidth:2,
        borderBottomWidth:2,
        borderColor:'black',
        borderBottomLeftRadius:6,
        justifyContent:'flex-start',
        flexDirection:'row',
        alignItems:'flex-end'

    },
    box2_Chart:{
        width:40,
        // height:40,
        backgroundColor:'green',
        marginLeft:'3%',
        borderTopLeftRadius:5,
        borderTopRightRadius:5,
    },
    box3_Chart:{
        width:40,
        // height:50,
        backgroundColor:'red',
        marginLeft:'3%',
        borderTopLeftRadius:5,
        borderTopRightRadius:5,
    },
    resultExit:{
        width:'60%',
        height:'10%',
        marginLeft:'20%',
        backgroundColor:'#3db5b4',
        borderRadius:50,
        justifyContent:'center',
        alignItems:'center',

    }
});

export default Portfolio;

