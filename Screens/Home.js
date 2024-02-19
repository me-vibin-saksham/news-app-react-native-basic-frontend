import { View, Text, SafeAreaView,Image, TextInput, ScrollView } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import Feather from 'react-native-vector-icons/Feather'
import AntDesign from 'react-native-vector-icons/AntDesign'
import CatagoryScroll from '../components/CatagoryScroll'
import HotNews_Section from '../components/HotNews_Section'
import TagsSection from '../components/TagsSection'
import Featured_Section from '../components/Featured_Section'
import { Divider } from "react-native-elements";
import Bottom from '../components/Bottom'

const Home = () => {
    const navigation =useNavigation();

    useLayoutEffect(()=>{
        navigation.setOptions({
            headerShown:false,
        })
    },[])


  return (
    <>
    <View style={{
        backgroundColor:"#1C1C27",
    }}>

        {/* image text-input & notification-option */}
        <View style={{
            marginTop:55,
            marginBottom:20,
        }}>
            <View style={{
                flexDirection:"row",
                justifyContent:"space-between",
                alignItems:"center",
                marginLeft:10,
                marginRight:10
            }}>
                <Image style={{
                    width:40,
                    height:40,
                    borderRadius:25,
                }}
                source={{uri:"https://images.pexels.com/photos/3792581/pexels-photo-3792581.jpeg?cs=srgb&dl=pexels-matheus-bertelli-3792581.jpg&fm=jpg"}}/>
                
                {/* search-box */}
                <View style={{
                    flexDirection:'row',
                    backgroundColor:'#2E2E38',
                    height:37,
                    flex:1,
                    borderRadius:25,
                    marginLeft:10,marginRight:10

                }}>
                    <Feather style={{margin:8}} name='search' size={22} color='#E0E0E2' />
                    <TextInput style={{color:'#E0E0E2'}} placeholder='search' placeholderTextColor='grey'/>
                    
                </View>

                {/* notification */}
                <AntDesign name='notification' size={30} color='#E0E0E2'/>
            </View>
        </View>

        {/* Category Scroll */}
        <CatagoryScroll />

        {/* Scroll-Section */}
        <ScrollView>
        <HotNews_Section/>
        <TagsSection/>
        <Featured_Section />
        <View style={{marginBottom:170}}></View>
        </ScrollView>
        
    

        

        

    </View>
    <View style={{marginBottom:170}}>
    <Divider style={{ marginVertical: 10, backgroundColor: 'white' }}/>
    <Bottom/>
    </View>
    </>
  )
}

export default Home
