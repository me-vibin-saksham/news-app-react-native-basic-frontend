import { View, Text } from 'react-native'
import React from 'react'
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6'

const tags=["#Iphone","#Stocks","#Macbook","#Bullying","#weed"]

const TagsSection = () => {
  return (
    <View style={{
        marginHorizontal:10,
        borderColor:"#2E2E38",
        borderTopWidth:3,
        borderRadius:5,
        borderBottomWidth:3,
        marginBottom:30,
        flexWrap: 'wrap',
    }}>
      <View style={{
        marginVertical:15
      }}>
        <Text style={{color:"white",fontSize:27,fontWeight:"bold",marginBottom:"15"}}>Topics</Text>

        <View style={{flexDirection:"row", flexWrap: 'wrap',marginTop:5}}>
        {tags.map((tag,index)=>(
            <View key={index} style={{
                borderWidth:2,
                borderColor:"#2E2E38",
                borderRadius:30,
                height:50,
                marginTop:9,
                marginRight:10, 
            }}>
                
            <Text style={{color:"white",fontSize:17,padding:10,fontWeight:"bold"}}>{tag}</Text>
               

            </View>
            ))}
            <View style={{marginTop:20,flexDirection:"row",marginLeft:10}}>
            <Text style={{fontSize:17,fontWeight:"bold",color:"white"}}>More Tags </Text>
            <FontAwesome6 name='golf-ball-tee' size={22} color='white'/>
            </View>
        </View>
      </View>
    </View>
  )
}

export default TagsSection
